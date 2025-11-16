import { Octokit } from '@octokit/rest';
import { execSync } from 'child_process';

async function getAccessToken() {
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found');
  }

  console.log('Fetching GitHub connection...');
  const response = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=github',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch connection: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  console.log('Connection data received');
  
  const connectionSettings = data.items?.[0];
  
  if (!connectionSettings) {
    throw new Error('GitHub connection not found');
  }

  const accessToken = connectionSettings?.settings?.access_token || 
                     connectionSettings?.settings?.oauth?.credentials?.access_token;

  if (!accessToken) {
    throw new Error('Access token not found in connection settings');
  }
  
  return accessToken;
}

async function pushToGitHub() {
  try {
    console.log('Getting GitHub access token...');
    const accessToken = await getAccessToken();
    
    console.log('Fetching GitHub user info...');
    const octokit = new Octokit({ auth: accessToken });
    const { data: user } = await octokit.users.getAuthenticated();
    console.log(`Authenticated as: ${user.login}`);
    
    console.log('\nConfiguring git...');
    execSync(`git config user.name "${user.name || user.login}"`, { stdio: 'inherit' });
    execSync(`git config user.email "${user.email || user.login + '@users.noreply.github.com'}"`, { stdio: 'inherit' });
    
    console.log('Configuring git remote with authentication...');
    const remoteUrl = 'https://github.com/sandeepdoodigani/unnati.git';
    const authenticatedUrl = `https://${user.login}:${accessToken}@github.com/sandeepdoodigani/unnati.git`;
    
    // Update the remote URL with authentication
    execSync(`git remote set-url origin "${authenticatedUrl}"`, { stdio: 'inherit' });
    
    console.log('\nAdding all changes...');
    execSync('git add -A', { stdio: 'inherit' });
    
    console.log('Creating commit...');
    try {
      execSync('git commit -m "Update Unnati Foundation website - updated logo and trustee information"', { stdio: 'inherit' });
      console.log('Commit created successfully');
    } catch (e) {
      console.log('No new changes to commit (everything already committed)');
    }
    
    console.log('\nPushing to GitHub...');
    execSync('git push origin main', { stdio: 'inherit' });
    
    // Remove the token from the remote URL for security
    console.log('Cleaning up credentials...');
    execSync(`git remote set-url origin "${remoteUrl}"`, { stdio: 'inherit' });
    
    console.log('\n✅ Successfully pushed to GitHub!');
    console.log(`🔗 Repository: ${remoteUrl}`);
    
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    if (error.stdout) console.error(error.stdout.toString());
    if (error.stderr) console.error(error.stderr.toString());
    process.exit(1);
  }
}

pushToGitHub();
