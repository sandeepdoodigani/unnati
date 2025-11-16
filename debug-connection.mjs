async function debugConnection() {
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  console.log('Hostname:', hostname);
  console.log('Has token:', !!xReplitToken);

  if (!xReplitToken) {
    console.error('No authentication token found');
    return;
  }

  const response = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=github',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  );

  console.log('Response status:', response.status);
  const data = await response.json();
  console.log('Full response:', JSON.stringify(data, null, 2));
}

debugConnection();
