# Unnati Foundation India - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from leading non-profit organizations (Charity: Water, Khan Academy, UNICEF) that balance professionalism with warmth and accessibility. This foundation requires trust-building through clean design, impactful storytelling, and clear calls-to-action.

## Core Design Principles
1. **Trust & Credibility**: Professional, clean layouts that establish organizational legitimacy
2. **Impact-Driven**: Visual emphasis on statistics and real-world outcomes
3. **Accessible & Warm**: Approachable design that invites community participation
4. **Action-Oriented**: Clear pathways for volunteering, donating, and partnering

## Typography System

**Primary Font**: Inter or Poppins (via Google Fonts CDN)
- Headings: 600-700 weight
- Body: 400-500 weight

**Type Scale**:
- Hero Headline: 3xl to 6xl (responsive)
- Section Headers: 2xl to 4xl
- Subsection Titles: xl to 2xl
- Body Text: base to lg
- Caption/Meta: sm

**Line Heights**: 
- Headings: tight to snug (1.2-1.3)
- Body: relaxed (1.6-1.75)

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Component padding: p-6 to p-8
- Section spacing: py-16 to py-24
- Content gaps: gap-8 to gap-12

**Container Strategy**:
- Full-width sections with inner max-w-7xl
- Content-focused areas: max-w-6xl
- Text content: max-w-4xl for readability

**Grid System**: 
- Desktop: 3-4 column grids for program cards, impact stats
- Tablet: 2 column
- Mobile: Single column stack

## Component Library

**Navigation**:
- Sticky header with foundation logo (left), navigation links (center/right)
- Mobile: Hamburger menu with slide-in drawer
- Donate button prominently styled as primary CTA in header

**Hero Section**:
- Large hero image showing community impact (children learning, women in skill programs, or community gathering)
- Overlay with semi-transparent gradient (navy to transparent)
- Centered headline with mission statement
- Primary CTA: "Get Involved" and secondary "Learn More" buttons with backdrop blur

**Impact Statistics Dashboard**:
- 3-column grid (desktop) showcasing key metrics
- Large numbers with animated count-up effect
- Icons from Heroicons representing each metric category
- Subtle card elevation with hover lift effect

**Program Cards**:
- Grid layout (3 columns desktop, 2 tablet, 1 mobile)
- Icon at top (Heroicons - academic cap, light bulb, briefcase, etc.)
- Clear title and 2-3 line description
- "Learn More" link with arrow

**Trustee/Team Cards**:
- 2-column layout
- Circular photo placeholders
- Name, role, brief bio
- Professional yet approachable presentation

**Call-to-Action Sections**:
- Full-width colored background sections (alternating teal/navy subtle gradients)
- Centered content with compelling headline
- Multiple action buttons (Volunteer, Donate, Partner)
- Supporting text explaining impact

**Contact Form**:
- 2-column layout (form on left, contact info/map on right)
- Input fields: Name, Email, Phone, Subject, Message
- Floating labels or clear placeholder text
- Submit button as primary CTA

**Footer**:
- 4-column layout: About, Quick Links, Programs, Contact
- Social media icons
- Newsletter signup field
- Copyright and tagline at bottom
- Trust badges/certification logos if applicable

## Images

**Hero Image**: 
- Large, inspiring photograph showing foundation's impact - diverse group of students in classroom, women in skill development program, or community gathering
- Dimensions: 1920x1080 minimum
- Position: Full-width background with gradient overlay
- Treatment: Slight blur or darkening to ensure text readability

**Section Images**:
- Program showcase: 3-4 authentic photos of foundation activities (classrooms, workshops, community events)
- Trustee photos: Professional headshots in circular frames
- About section: Photo of foundation team or beneficiaries

**Image Treatment**:
- Rounded corners (rounded-lg to rounded-xl) for content images
- Subtle shadow effects for card-based images
- Maintain 16:9 or 4:3 aspect ratios

## Animations

**Minimal & Purposeful**:
- Subtle fade-in on scroll for section reveals
- Number count-up animation for impact statistics (on viewport entry)
- Gentle hover lift on cards (translate-y)
- Smooth page transitions
- No complex parallax or scroll-jacking effects

## Accessibility

**Form Inputs**:
- Clear labels above or floating labels
- Visible focus states with colored outline
- Error states with red accent and descriptive text
- Sufficient touch target sizes (44x44px minimum)

**General**:
- Proper heading hierarchy (h1 → h6)
- Alt text for all images
- ARIA labels for icon-only buttons
- Keyboard navigation support
- Sufficient color contrast ratios

## Page-Specific Layouts

**Homepage**:
- Hero with mission statement and image
- Impact statistics section (3-column grid)
- Key focus areas (icon cards, 4x2 grid)
- Featured programs (3 highlighted programs)
- Get Involved CTA section
- Latest updates/news (if applicable)

**About Us**:
- Vision/Mission section with visual hierarchy
- Values presented as icon cards (2x3 grid)
- Trustee profiles (2-column cards)
- Foundation address with embedded map

**Programs**:
- Individual program cards for all 7 focus areas
- Each card: Icon, title, description, impact metrics
- Expandable sections or dedicated subpages for detail

**Get Involved**:
- Three distinct pathways: Volunteer, Donate, Partner
- Each pathway gets dedicated card with icon, description, and CTA
- Clear benefits and process outlined

**Contact**:
- Split layout: Form (60%) + Info/Map (40%)
- Foundation details, hours, alternate contact methods
- Embedded Google Map for Hyderabad location

This design creates a professional, trustworthy non-profit website that emphasizes impact, invites participation, and clearly communicates the foundation's mission and values.