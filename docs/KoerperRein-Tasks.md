# KörperRein Website - Development Task List

**Generated from:** KoerperRein-PRD.md
**Date:** 2025-11-19
**Status:** Ready for Implementation

---

## Project Overview

Building a professional, static website for KörperRein - a Swiss body detoxification service. The website will replace the existing Wix site with a custom HTML/CSS/JavaScript solution, featuring information about Body Detox treatments, booking functionality via contact form, blog, and downloadable resources.

---

## Relevant Files & Directories

### Root Level
- `/index.html` - Homepage
- `/body-detox.html` - Treatment details page
- `/ueber-uns.html` - About page
- `/blog.html` - Blog listing
- `/kontakt.html` - Contact page with form
- `/faq.html` - FAQ page
- `/agb.html` - AGB & Privacy policy

### CSS Files
- `/css/reset.css` - CSS reset/normalize
- `/css/variables.css` - CSS custom properties (colors, spacing, fonts)
- `/css/global.css` - Global styles, typography, base elements
- `/css/components.css` - Reusable components (buttons, cards, navigation, footer)

### JavaScript Files
- `/js/main.js` - Main JavaScript initialization
- `/js/navigation.js` - Mobile menu, smooth scrolling
- `/js/form-validation.js` - Contact form validation

### Assets
- `/assets/images/` - All images (hero, treatment photos, blog images)
- `/assets/downloads/` - PDF flyers
- `/assets/icons/` - SVG icons (social media, UI icons)

### Documentation
- `/docs/KoerperRein-PRD.md` - Product requirements
- `/docs/KoerperRein-Tasks.md` - This task list
- `/README.md` - Project documentation

---

## Task List

### 1. Project Setup & Configuration

- [x] **1.1 Create project directory structure**
  - [x] Create `/css/` directory
  - [x] Create `/js/` directory
  - [x] Create `/assets/images/` directory
  - [x] Create `/assets/downloads/` directory
  - [x] Create `/assets/icons/` directory
  - [x] Verify `/docs/` directory exists
  - **Acceptance Criteria:**
    - [x] All directories exist and are organized as per PRD
    - [x] Structure matches the file organization in CLAUDE.md

- [x] **1.2 Create README.md with project documentation**
  - [x] Add project title and description
  - [x] Document tech stack
  - [x] Add setup instructions (how to run locally)
  - [x] Document deployment process
  - [x] Add contact information
  - **Acceptance Criteria:**
    - [x] README is comprehensive and clear
    - [x] Instructions work for someone new to the project
    - [x] Includes section on how to update content

- [x] **1.3 Create .gitignore file**
  - [x] Ignore OS files (.DS_Store, Thumbs.db)
  - [x] Ignore editor files (.vscode, .idea)
  - [x] Ignore node_modules (if using any build tools later)
  - [x] Ignore .env files
  - **Acceptance Criteria:**
    - [x] Common unwanted files are excluded from git
    - [x] File follows best practices for web projects

- [x] **1.4 Set up development server configuration**
  - [x] Document how to use Python SimpleHTTPServer
  - [x] Document how to use Live Server (VS Code extension)
  - [x] Create optional `serve.sh` script for quick start
  - **Acceptance Criteria:**
    - [x] Developer can run site locally with one command
    - [x] Instructions are in README.md

---

### 2. CSS Foundation & Design System

- [x] **2.1 Create CSS reset (reset.css)**
  - [x] Reset margins, padding, box-sizing
  - [x] Normalize default styles across browsers
  - [x] Set default font smoothing
  - **Acceptance Criteria:**
    - [x] Cross-browser consistency
    - [x] Box-sizing: border-box applied globally
    - [x] No default margins/padding on elements

- [x] **2.2 Create CSS variables system (variables.css)**
  - [x] Define color palette (Primary, Secondary, Accent, Text, Backgrounds)
  - [x] Define spacing scale (xs, sm, md, lg, xl, 2xl, 3xl)
  - [x] Define typography scale (font-sizes, line-heights, font-weights)
  - [x] Define font families (headings, body)
  - [x] Define breakpoints (mobile, tablet, desktop)
  - [x] Define border-radius values
  - [x] Define shadow values
  - **Colors to define:**
    - [x] `--color-primary: #2A9D8F` (Teal)
    - [x] `--color-secondary: #E76F51` (Coral)
    - [x] `--color-accent: #F4A261` (Golden Orange)
    - [x] `--color-success: #52B788` (Green)
    - [x] `--color-bg: #FDFCFB` (Off-white)
    - [x] `--color-bg-light: #E8F4F2` (Light teal)
    - [x] `--color-text-dark: #264653` (Dark blue-grey)
    - [x] `--color-text-light: #6B7280` (Medium grey)
    - [x] `--color-white: #FFFFFF`
  - **Acceptance Criteria:**
    - [x] All design system values from CLAUDE.md are defined
    - [x] Variables are well-organized and commented
    - [x] Naming is consistent and semantic

- [x] **2.3 Create global styles (global.css)**
  - [x] Import Google Fonts (Montserrat for headings, Open Sans for body)
  - [x] Set base typography styles (body, headings h1-h6)
  - [x] Style base elements (p, a, ul, ol, li)
  - [x] Create utility classes (container, section-padding, text-center, etc.)
  - [x] Set smooth scrolling behavior
  - **Acceptance Criteria:**
    - [x] Typography follows CLAUDE.md guidelines
    - [x] H1: 2.5-3rem, H2: 2rem, H3: 1.5rem, Body: 1.125rem
    - [x] Line-height: 1.6-1.8 for body text
    - [x] All heading tags styled consistently
    - [x] Links have hover states

- [x] **2.4 Create component styles (components.css)**
  - [x] Button styles (primary, secondary, outline variants)
  - [x] Card component styles
  - [x] Navigation styles (desktop & mobile)
  - [x] Footer styles
  - [x] Form input styles (text, textarea, checkbox, submit)
  - [x] Hero section styles
  - [x] Section container styles
  - **Acceptance Criteria:**
    - [x] All reusable components are styled
    - [x] Components are responsive
    - [x] Hover/focus states are defined
    - [x] Accessibility considerations (focus rings, contrast)

---

### 3. Shared Components (Header & Footer)

- [x] **3.1 Create global navigation header (used on all pages)**
  - [x] Logo/Brand: "KÖRPERREIN" (top left)
  - [x] Desktop navigation menu (START, BODY DETOX, ÜBER UNS, BLOG, KONTAKT)
  - [x] CTA button: "Buchungsanfrage" (prominent, right-aligned)
  - [x] Mobile: Hamburger menu icon
  - [x] Sticky header functionality
  - **Acceptance Criteria:**
    - [x] Navigation is identical on all pages
    - [x] Desktop: Horizontal menu with hover effects
    - [x] Mobile: Hamburger menu (initially hidden)
    - [x] Active page is highlighted
    - [x] Sticky header works smoothly
    - [x] All links are functional

- [x] **3.2 Create mobile navigation menu**
  - [x] Hamburger icon (☰) in top right on mobile
  - [x] Slide-in/fade-in menu overlay
  - [x] Close button (×) inside menu
  - [x] Full-screen or partial overlay design
  - [x] Links stack vertically
  - **Acceptance Criteria:**
    - [x] Menu opens/closes smoothly
    - [x] All navigation links are accessible
    - [x] Menu closes when link is clicked
    - [x] Menu closes when clicking outside (optional)
    - [x] Animations are smooth (CSS transitions)

- [x] **3.3 Create global footer (used on all pages)**
  - [x] 3-column layout (desktop): HILFE, FRAIS/ÜBER UNS, KONTAKT
  - [x] Column 1: AGB, Datenschutz links
  - [x] Column 2: Unsere Geschichte, Kontakt, FAQ links
  - [x] Column 3: Email addresses (tamara.benz@, sandra.marin@)
  - [x] Social media icons (Facebook, Instagram, Pinterest) - below columns
  - [x] Copyright text: "© 2026 Copyright Körperrein.ch"
  - **Acceptance Criteria:**
    - [x] Footer is identical on all pages
    - [x] 3 columns on desktop, stacks to 1 column on mobile
    - [x] All links are functional
    - [x] Social icons open in new tab
    - [x] Responsive layout works on all viewports

- [x] **3.4 Create social media SVG icons**
  - [x] Facebook icon SVG
  - [x] Instagram icon SVG
  - [x] Pinterest icon SVG
  - [x] Icons are clean and minimal
  - [x] Icons have hover states (color change or scale)
  - **Acceptance Criteria:**
    - [x] SVG icons are optimized (small file size)
    - [x] Icons are accessible (aria-labels)
    - [x] Hover states work smoothly
    - [x] Icons are saved in `/assets/icons/`

---

### 4. Homepage (index.html)

- [x] **4.1 Create HTML structure for homepage**
  - [x] DOCTYPE, html, head (meta tags, title, CSS links)
  - [x] Include navigation header
  - [x] Main content area with semantic sections
  - [x] Include footer
  - **Acceptance Criteria:**
    - [x] Valid HTML5 structure
    - [x] Semantic tags (nav, main, section, article, footer)
    - [x] Proper meta tags (charset, viewport, description)
    - [x] Title: "KörperRein - Ganzkörper-Entgiftung in 30 Minuten | Body Detox Schweiz"

- [x] **4.2 Create hero section**
  - [x] Background: Waterfall image (placeholder or actual)
  - [x] Tagline: "GANZKÖRPER-ENTGIFTUNG" (small, above headline)
  - [x] H1 Headline: "Ganzkörper-Entgiftung in 30 Minuten – angenehm und effektiv"
  - [x] CTA Button: "Jetzt buchen" (links to kontakt.html)
  - [x] Responsive: Full-width on all devices
  - **Acceptance Criteria:**
    - [x] Hero is visually striking (large, centered)
    - [x] Text is readable over image (overlay or text shadow)
    - [x] CTA button is prominent and clickable
    - [x] Responsive on mobile (text scales appropriately)
    - [x] Image is optimized (< 200KB if possible)

- [x] **4.3 Create "Body Detox - Fussbad" section**
  - [x] Section heading: "BODY DETOX"
  - [x] Subheading: "FUSSBAD"
  - [x] Description text (from Wix site content)
  - [x] Image: Vorher/Nachher Fussbad image
  - [x] Layout: Text on left, image on right (or stacked on mobile)
  - **Acceptance Criteria:**
    - [x] Text is clear and readable
    - [x] Image shows before/after comparison
    - [x] Responsive layout (stacks on mobile)
    - [x] Section has adequate padding/spacing

- [x] **4.4 Create "Wie wirkt Body Detox" section**
  - [x] Section heading: "WIE WIRKT BODY DETOX"
  - [x] Detailed explanation text (from Wix site)
  - [x] Icons or bullet points for key benefits (optional)
  - **Acceptance Criteria:**
    - [x] Text is comprehensive and easy to read
    - [x] Section is visually distinct from previous section
    - [x] Adequate line-height for readability

- [x] **4.5 Create "Flyer Downloads" section**
  - [x] Section heading: "FLYER DOWNLOAD"
  - [x] 3 Flyer cards (Cellulite, Sport, Entsäuern)
  - [x] Each card: Preview image, title, download link
  - [x] Grid layout: 3 columns on desktop, 1 column on mobile
  - [x] Download links: "Download: [Flyer Name]"
  - **Acceptance Criteria:**
    - [x] 3 flyer preview images displayed
    - [x] Download links work (link to PDFs in /assets/downloads/)
    - [x] Grid is responsive (3 → 2 → 1 columns)
    - [x] Cards have hover effects

- [x] **4.6 Create "Blog Preview" section**
  - [x] Section heading: "DER KÖRPERREIN BLOG"
  - [x] Display latest 2 blog posts as cards
  - [x] Each card: Title, excerpt, "Weiterlesen" link
  - [x] "Mehr lesen" button at bottom (links to blog.html)
  - **Acceptance Criteria:**
    - [x] 2 blog post cards displayed
    - [x] Cards link to individual blog posts
    - [x] "Mehr lesen" button links to blog.html
    - [x] Responsive layout (2 columns → 1 column on mobile)

- [x] **4.7 Implement smooth scrolling for internal links**
  - [x] Add smooth scroll behavior to CSS or JS
  - [x] Ensure anchor links scroll smoothly (if any)
  - **Acceptance Criteria:**
    - [x] Scrolling is smooth (not jumpy)
    - [x] Works across browsers

- [x] **4.8 Optimize homepage for performance**
  - [x] Compress hero image (WebP format if possible)
  - [x] Add lazy loading to below-fold images
  - [x] Minify CSS (optional for initial version)
  - **Acceptance Criteria:**
    - [x] Page loads in < 2 seconds
    - [x] Images are optimized
    - [x] Lighthouse score > 90

---

### 5. Body Detox Page (body-detox.html)

- [x] **5.1 Create HTML structure for Body Detox page**
  - [x] Include navigation header
  - [x] Main content area
  - [x] Include footer
  - **Acceptance Criteria:**
    - [x] Valid HTML5 structure
    - [x] Navigation shows "BODY DETOX" as active
    - [x] Title: "Body Detox - Behandlung | KörperRein"

- [x] **5.2 Create hero/header section**
  - [x] Page title: "BODY DETOX"
  - [x] Subtitle or intro text
  - [x] Background image or color
  - **Acceptance Criteria:**
    - [x] Hero is visually appealing
    - [x] Clearly indicates page topic

- [x] **5.3 Create detailed treatment description section**
  - [x] Heading: "Was ist Body Detox?"
  - [x] Comprehensive explanation of electrolysis foot bath
  - [x] How it works, scientific background
  - **Acceptance Criteria:**
    - [x] Text is informative and easy to understand
    - [x] Avoids overly technical jargon
    - [x] Well-formatted with paragraphs

- [x] **5.4 Create benefits/advantages section**
  - [x] Heading: "Vorteile der Behandlung"
  - [x] List of benefits with icons (optional):
    - [x] Entgiftung
    - [x] Stärkung des Immunsystems
    - [x] Energieregeneration
    - [x] Verbesserung der Verdauung
    - [x] Hautverbesserung
  - **Acceptance Criteria:**
    - [x] At least 5 benefits listed
    - [x] Each benefit has icon or bullet point
    - [x] Benefits are clear and compelling

- [x] **5.5 Create treatment process section**
  - [x] Heading: "Behandlungsablauf"
  - [x] Step-by-step explanation (numbered or with icons)
  - [x] Timeline: 30 minutes
  - **Acceptance Criteria:**
    - [x] Clear step-by-step breakdown
    - [x] User understands what to expect
    - [x] Visually engaging (numbers, icons, or timeline)

- [x] **5.6 Create FAQ excerpt section**
  - [x] Heading: "Häufige Fragen"
  - [x] 3-5 most common questions with answers
  - [x] Link to full FAQ page
  - **Acceptance Criteria:**
    - [x] Questions are relevant to treatment
    - [x] Answers are concise
    - [x] Link to faq.html works

- [x] **5.7 Add CTA at bottom**
  - [x] Button: "Jetzt Termin anfragen"
  - [x] Links to kontakt.html
  - **Acceptance Criteria:**
    - [x] CTA is prominent and visible
    - [x] Button has hover effect
    - [x] Links to contact page

---

### 6. About Page (ueber-uns.html)

- [x] **6.1 Create HTML structure for About page**
  - [x] Include navigation header
  - [x] Main content area
  - [x] Include footer
  - **Acceptance Criteria:**
    - [x] Valid HTML5 structure
    - [x] Navigation shows "ÜBER UNS" as active
    - [x] Title: "Über Uns - Tamara & Sandra | KörperRein"

- [x] **6.2 Create intro/mission statement section**
  - [x] Heading: "Über Uns" or "Unsere Geschichte"
  - [x] Story of why KörperRein was founded
  - [x] Mission statement
  - **Acceptance Criteria:**
    - [x] Authentic and personal tone
    - [x] Explains the "why" behind the business

- [x] **6.3 Create team section**
  - [x] Heading: "Unser Team"
  - [x] 2 Team member cards (Tamara Benz, Sandra Marin)
  - [x] Each card: Photo (placeholder initially), name, short bio, email
  - **Acceptance Criteria:**
    - [x] 2 team members displayed
    - [x] Photos are professional (or placeholders)
    - [x] Bios are personal but professional
    - [x] Email links work (mailto:)

- [x] **6.4 Add qualifications/certifications section (if applicable)**
  - [x] Heading: "Qualifikationen"
  - [x] List of certifications or training
  - **Acceptance Criteria:**
    - [x] Information is accurate
    - [x] Builds trust and credibility
    - [x] (Skip if no certifications to list)

- [x] **6.5 Add CTA at bottom**
  - [x] Button: "Kontaktieren Sie uns"
  - [x] Links to kontakt.html
  - **Acceptance Criteria:**
    - [x] CTA encourages user to reach out
    - [x] Button links correctly

---

### 7. Blog Page (blog.html)

- [x] **7.1 Create HTML structure for Blog listing page**
  - [x] Include navigation header
  - [x] Main content area
  - [x] Include footer
  - **Acceptance Criteria:**
    - [x] Valid HTML5 structure
    - [x] Navigation shows "BLOG" as active
    - [x] Title: "Blog - Gesundheit & Detox Tipps | KörperRein"

- [x] **7.2 Create blog header section**
  - [x] Page heading: "DER KÖRPERREIN BLOG"
  - [x] Optional intro text or tagline
  - **Acceptance Criteria:**
    - [x] Clear page heading
    - [x] Sets expectation for blog content

- [x] **7.3 Create blog post grid/listing**
  - [x] Grid layout: 2-3 columns on desktop, 1 on mobile
  - [x] Each post card: Featured image, title, excerpt, date, "Weiterlesen" link
  - [x] Initially: 2 posts ("Zweiter Blog", "Sandra Detoxing You")
  - [x] Enhanced with: Author avatar, read time, views, likes, comments
  - [x] Dynamic loading from JSON (data/blog-posts.json)
  - **Acceptance Criteria:**
    - [x] 2 blog posts displayed as cards
    - [x] Grid is responsive
    - [x] Cards link to individual post pages
    - [x] Date format is consistent (e.g., "15. November 2025")

- [x] **7.4 Create individual blog post template**
  - [x] Create structure that can be reused for all posts
  - [x] Post page includes: Title, date, author, featured image, content, back link
  - [x] Added comment section with form and comment display
  - **Acceptance Criteria:**
    - [x] Template is reusable for future posts
    - [x] Includes all necessary elements
    - [x] "Zurück zum Blog" link works

- [x] **7.5 Create first blog post page (zweiter-blog.html)**
  - [x] Title: "Zweiter Blog"
  - [x] Real content about Body Detox benefits
  - [x] Author: Sandra Marin
  - [x] Date: 2025-11-15
  - [x] Comment section included
  - **Acceptance Criteria:**
    - [x] Post uses template structure
    - [x] Content is readable and formatted
    - [x] Back link to blog.html works

- [x] **7.6 Create second blog post page (sandra-detoxing-you.html)**
  - [x] Title: "Sandra Detoxing You"
  - [x] Real content about personal detox journey
  - [x] Author: Sandra Marin
  - [x] Date: 2025-11-10
  - [x] Comment section included
  - **Acceptance Criteria:**
    - [x] Post uses template structure
    - [x] Content is readable and formatted
    - [x] Back link to blog.html works

- [x] **7.7 Create blog data structure (BONUS)**
  - [x] Created data/blog-posts.json for centralized blog management
  - [x] Created js/blog.js for dynamic loading
  - [x] Created js/comments.js for comment functionality
  - [x] Implemented localStorage for views, likes, comments
  - [x] Added like button with heart icon
  - [x] Added comment system with guest names and delete functionality

---

### 8. Contact Page (kontakt.html)

- [x] **8.1 Create HTML structure for Contact page**
  - [x] Include navigation header
  - [x] Main content area
  - [x] Include footer
  - **Acceptance Criteria:**
    - [x] Valid HTML5 structure
    - [x] Navigation shows "KONTAKT" as active
    - [x] Title: "Kontakt - Jetzt Termin vereinbaren | KörperRein"

- [x] **8.2 Create contact page header**
  - [x] Page heading: "Kontakt"
  - [x] Intro text with booking section
  - **Acceptance Criteria:**
    - [x] Clear, welcoming heading
    - [x] Encourages user to reach out

- [x] **8.3 Create contact form structure**
  - [x] Form fields:
    - [x] Name (text input, required)
    - [x] Email (email input, required)
    - [x] Telefon (tel input, optional)
    - [x] Nachricht (textarea, required)
    - [x] Datenschutz checkbox (required, with link to agb.html)
  - [x] Submit button: "Nachricht senden"
  - **Acceptance Criteria:**
    - [x] All fields are properly labeled
    - [x] Required fields are marked with *
    - [x] Form has proper HTML5 validation attributes
    - [x] Datenschutz checkbox links to privacy policy

- [x] **8.4 Style contact form**
  - [x] Consistent input styling
  - [x] Proper spacing and alignment
  - [x] Mobile-friendly (large touch targets)
  - [x] Focus states visible
  - **Acceptance Criteria:**
    - [x] Form is visually appealing
    - [x] Inputs are easy to interact with on mobile
    - [x] Focus states are clear
    - [x] Submit button is prominent

- [x] **8.5 Create contact information sidebar/section**
  - [x] Contact details (right side or below form on mobile):
    - [x] Tamara Benz: +41 79 267 64 81, tamara.benz@koerperrein.com
    - [x] Sandra Marin: +41 79 236 70 40, sandra.marin@koerperrein.com
    - [x] Treatment locations for each
  - [x] Social media links
  - **Acceptance Criteria:**
    - [x] Contact info is easy to find
    - [x] Email links work (mailto:)
    - [x] Phone links work (tel:)
    - [x] Responsive layout

- [x] **8.6 Implement client-side form validation (JavaScript)**
  - [x] Validate required fields
  - [x] Validate email format
  - [x] Show error messages inline
  - [x] Prevent submit if validation fails
  - **Acceptance Criteria:**
    - [x] Form validates before submission
    - [x] Error messages are clear and helpful
    - [x] User can correct errors easily

- [x] **8.7 Implement form submission**
  - [x] Integrate with Netlify Forms
  - [x] Add honeypot field for spam protection
  - [x] Handle success state (show success message)
  - [x] Handle error state (show error message)
  - **Acceptance Criteria:**
    - [x] Form ready for Netlify deployment
    - [x] Success message displays after submission
    - [x] Error handling works
    - [x] Spam protection in place

- [x] **8.8 Add Google Maps embed (optional)**
  - [x] Skipped - no single physical location
  - **Acceptance Criteria:**
    - [x] Treatment locations listed in contact cards instead

---

### 9. FAQ Page (faq.html)

- [x] **9.1 Create HTML structure for FAQ page**
  - [x] Include navigation header
  - [x] Main content area
  - [x] Include footer
  - **Acceptance Criteria:**
    - [x] Valid HTML5 structure
    - [x] Title: "FAQ - Häufig gestellte Fragen | KörperRein"

- [x] **9.2 Create FAQ header section**
  - [x] Page heading: "Häufig gestellte Fragen"
  - [x] Optional intro text
  - **Acceptance Criteria:**
    - [x] Clear heading
    - [x] Sets expectation for content

- [x] **9.3 Create FAQ accordion structure**
  - [x] List of 8-10 frequently asked questions (10 FAQs created)
  - [x] Each FAQ: Question (button), Answer (collapsible content)
  - [x] Questions:
    - [x] "Wie funktioniert Body Detox?"
    - [x] "Wie lange dauert eine Behandlung?"
    - [x] "Was kostet eine Behandlung?"
    - [x] "Gibt es Nebenwirkungen?"
    - [x] "Wie oft sollte ich die Behandlung machen?"
    - [x] "Ist Body Detox für jeden geeignet?"
    - [x] "Was muss ich vor/nach der Behandlung beachten?"
    - [x] "Wo findet die Behandlung statt?"
    - [x] "Wann sehe ich erste Ergebnisse?"
    - [x] "Kann ich Body Detox mit anderen Therapien kombinieren?"
  - **Acceptance Criteria:**
    - [x] At least 8 FAQs defined (10 created)
    - [x] Questions are relevant and common
    - [x] Answers are clear and helpful

- [x] **9.4 Style FAQ accordion**
  - [x] Questions styled as clickable headers
  - [x] Answers hidden by default
  - [x] Open/close icons (elegant plus/minus with CSS pseudo-elements)
  - [x] Added search bar with icon
  - **Acceptance Criteria:**
    - [x] Accordion is visually clear
    - [x] Hover states work
    - [x] Open/close state is obvious

- [x] **9.5 Implement FAQ accordion JavaScript**
  - [x] Click on question toggles answer
  - [x] Only one answer open at a time
  - [x] Smooth expand/collapse animation
  - [x] Search functionality with live filtering
  - [x] Auto-scroll to first match
  - **Acceptance Criteria:**
    - [x] Clicking question shows/hides answer
    - [x] Animation is smooth
    - [x] Keyboard accessible (Enter/Space to toggle)

- [x] **9.6 Add CTA at bottom**
  - [x] Text: "Weitere Fragen? Wir helfen Ihnen gerne weiter"
  - [x] Buttons link to kontakt.html and body-detox.html
  - **Acceptance Criteria:**
    - [x] CTA is visible and clear
    - [x] Links to contact page

---

### 10. AGB & Privacy Page (agb.html)

- [x] **10.1 Create HTML structure for AGB page**
  - [x] Include navigation header
  - [x] Main content area
  - [x] Include footer
  - **Acceptance Criteria:**
    - [x] Valid HTML5 structure
    - [x] Title: "AGB & Datenschutz | KörperRein"

- [x] **10.2 Create page header**
  - [x] Page heading: "AGB & Datenschutz"
  - **Acceptance Criteria:**
    - [x] Clear heading

- [x] **10.3 Create tab/section navigation**
  - [x] Tabs or anchor links for:
    - [x] Impressum
    - [x] AGB (Allgemeine Geschäftsbedingungen)
    - [x] Datenschutzerklärung
  - [x] JavaScript for tab switching (js/legal-tabs.js)
  - **Acceptance Criteria:**
    - [x] User can navigate between sections
    - [x] Tabs/anchors are clickable

- [x] **10.4 Add Impressum section**
  - [x] Company/person name (Tamara Benz & Sandra Marin)
  - [x] Address (Standorte)
  - [x] Contact information
  - [x] Haftungsausschluss
  - [x] Urheberrecht
  - **Acceptance Criteria:**
    - [x] Complies with Swiss/EU law (Impressumspflicht)
    - [x] Information is accurate

- [x] **10.5 Add AGB section**
  - [x] Allgemeine Geschäftsbedingungen text
  - [x] 10 sections covering all important aspects
  - **Acceptance Criteria:**
    - [x] AGB are clear and legally sound
    - [x] Cover important aspects (cancellation, payment, liability)

- [x] **10.6 Add Datenschutzerklärung section**
  - [x] DSGVO/Swiss data protection law compliant
  - [x] Explain what data is collected (form submissions, termindaten, server logs)
  - [x] Explain how data is used and stored
  - [x] User rights (access, deletion, correction, etc.)
  - [x] EDÖB contact information
  - **Acceptance Criteria:**
    - [x] Privacy policy is DSGVO-compliant
    - [x] Clear and understandable language
    - [x] Covers all data collection points

---

### 11. JavaScript Functionality

- [ ] **11.1 Create main.js - Initialize all scripts**
  - [ ] Import/initialize navigation script
  - [ ] Import/initialize form validation
  - [ ] Initialize any other interactive elements
  - **Acceptance Criteria:**
    - [ ] All JavaScript modules load correctly
    - [ ] No console errors

- [ ] **11.2 Create navigation.js - Mobile menu functionality**
  - [ ] Toggle mobile menu on hamburger click
  - [ ] Close menu on close button click
  - [ ] Close menu when clicking outside (optional)
  - [ ] Close menu when clicking a link
  - [ ] Smooth scroll to anchor links (if any)
  - **Acceptance Criteria:**
    - [ ] Mobile menu opens/closes smoothly
    - [ ] Works on touch devices
    - [ ] No JavaScript errors
    - [ ] Accessible (keyboard navigation)

- [ ] **11.3 Create form-validation.js - Contact form validation**
  - [ ] Validate name field (not empty, min 2 chars)
  - [ ] Validate email field (valid format)
  - [ ] Validate message field (not empty, min 10 chars)
  - [ ] Validate datenschutz checkbox (must be checked)
  - [ ] Show inline error messages
  - [ ] Prevent form submission if invalid
  - **Acceptance Criteria:**
    - [ ] Validation works in real-time (on blur or submit)
    - [ ] Error messages are clear
    - [ ] Form cannot be submitted with invalid data

- [ ] **11.4 Implement FAQ accordion script (if not already done)**
  - [ ] Toggle FAQ answer on question click
  - [ ] Add/remove active class
  - **Acceptance Criteria:**
    - [ ] Accordion works smoothly
    - [ ] Only one answer open at a time (optional)
    - [ ] Keyboard accessible

- [ ] **11.5 Add smooth scroll behavior**
  - [ ] Implement smooth scrolling for anchor links
  - [ ] Works for "back to top" links (if added)
  - **Acceptance Criteria:**
    - [ ] Scrolling is smooth, not instant
    - [ ] Works across browsers

---

### 12. Responsive Design & Mobile Optimization

- [ ] **12.1 Test and fix homepage on mobile**
  - [ ] Test on viewport sizes: 375px, 390px, 414px
  - [ ] Ensure all sections stack properly
  - [ ] Check image sizes and scaling
  - [ ] Test touch targets (min 44x44px)
  - **Acceptance Criteria:**
    - [ ] Homepage looks good on small screens
    - [ ] No horizontal scroll
    - [ ] All buttons are tappable
    - [ ] Text is readable (not too small)

- [ ] **12.2 Test and fix all pages on tablet**
  - [ ] Test on viewport size: 768px
  - [ ] Ensure layouts adapt gracefully
  - **Acceptance Criteria:**
    - [ ] All pages look good on tablet
    - [ ] Layout makes good use of space
    - [ ] Navigation works well

- [ ] **12.3 Test and fix all pages on desktop**
  - [ ] Test on viewport sizes: 1024px, 1440px, 1920px
  - [ ] Ensure max-width containers prevent overly wide content
  - **Acceptance Criteria:**
    - [ ] Content is centered and readable
    - [ ] Not too wide (max-width applied)
    - [ ] Layouts use available space effectively

- [ ] **12.4 Fix any responsive issues**
  - [ ] Images scaling correctly
  - [ ] Text wrapping properly
  - [ ] Grids/flexbox layouts adapting
  - [ ] Navigation menu responsive
  - **Acceptance Criteria:**
    - [ ] All responsive issues resolved
    - [ ] Tested on Chrome, Firefox, Safari (mobile & desktop)

---

### 13. Performance Optimization

- [ ] **13.1 Optimize all images**
  - [ ] Compress hero images (use TinyPNG, Squoosh, or similar)
  - [ ] Convert to WebP format where possible (with fallbacks)
  - [ ] Create responsive image sizes (use srcset)
  - **Acceptance Criteria:**
    - [ ] All images < 200KB each
    - [ ] Hero images load quickly
    - [ ] WebP format used with fallback

- [ ] **13.2 Implement lazy loading for images**
  - [ ] Add `loading="lazy"` attribute to below-fold images
  - [ ] Ensure hero images load immediately (not lazy)
  - **Acceptance Criteria:**
    - [ ] Below-fold images lazy load
    - [ ] Page loads faster (reduces initial payload)

- [ ] **13.3 Minify CSS (optional for MVP)**
  - [ ] Use online tool or build process to minify CSS
  - [ ] Combine CSS files if multiple (or keep separate for maintainability)
  - **Acceptance Criteria:**
    - [ ] CSS file sizes are reduced
    - [ ] No functionality is broken

- [ ] **13.4 Run Lighthouse audit**
  - [ ] Test homepage with Lighthouse
  - [ ] Test other key pages (body-detox, kontakt)
  - [ ] Target scores: Performance > 90, Accessibility > 95, Best Practices > 90, SEO > 90
  - **Acceptance Criteria:**
    - [ ] Lighthouse scores meet targets
    - [ ] Any critical issues are fixed

- [ ] **13.5 Test page load times**
  - [ ] Use WebPageTest or similar tool
  - [ ] Target: < 2 seconds First Contentful Paint
  - **Acceptance Criteria:**
    - [ ] Pages load within target time
    - [ ] Core Web Vitals are good (LCP, FID, CLS)

---

### 14. SEO Optimization

- [ ] **14.1 Add proper meta tags to all pages**
  - [ ] Title tag (unique per page, includes keywords)
  - [ ] Meta description (unique per page, compelling)
  - [ ] Open Graph tags (og:title, og:description, og:image)
  - [ ] Twitter Card tags
  - **Acceptance Criteria:**
    - [ ] All pages have unique titles and descriptions
    - [ ] Titles are 50-60 characters
    - [ ] Descriptions are 150-160 characters
    - [ ] OG tags are present

- [ ] **14.2 Create sitemap.xml**
  - [ ] List all pages (index, body-detox, ueber-uns, blog, kontakt, faq, agb)
  - [ ] Include blog posts
  - **Acceptance Criteria:**
    - [ ] Sitemap is valid XML
    - [ ] All pages are included
    - [ ] File is saved at `/sitemap.xml`

- [ ] **14.3 Create robots.txt**
  - [ ] Allow all pages to be crawled
  - [ ] Reference sitemap location
  - **Acceptance Criteria:**
    - [ ] robots.txt exists at root
    - [ ] Sitemap reference is correct

- [ ] **14.4 Add structured data (Schema.org)**
  - [ ] Add LocalBusiness schema to homepage/footer
  - [ ] Include business name, address (if available), phone, email
  - **Acceptance Criteria:**
    - [ ] Structured data is valid (test with Google Rich Results Test)
    - [ ] Business information is accurate

- [ ] **14.5 Optimize heading hierarchy**
  - [ ] Ensure each page has one H1
  - [ ] H2-H6 follow logical order
  - [ ] No skipped heading levels
  - **Acceptance Criteria:**
    - [ ] Heading structure is logical and semantic
    - [ ] No accessibility warnings related to headings

---

### 15. Accessibility Audit & Fixes

- [ ] **15.1 Run automated accessibility tests**
  - [ ] Use Lighthouse accessibility audit
  - [ ] Use WAVE tool (wave.webaim.org)
  - [ ] Check for common issues (color contrast, missing alt text, form labels)
  - **Acceptance Criteria:**
    - [ ] No critical accessibility errors
    - [ ] Lighthouse accessibility score > 95

- [ ] **15.2 Ensure all images have alt text**
  - [ ] Descriptive alt text for content images
  - [ ] Empty alt="" for decorative images
  - **Acceptance Criteria:**
    - [ ] All img tags have alt attribute
    - [ ] Alt text is meaningful

- [ ] **15.3 Test keyboard navigation**
  - [ ] Tab through all interactive elements
  - [ ] Ensure focus indicators are visible
  - [ ] Test mobile menu with keyboard (Enter/Esc)
  - [ ] Test FAQ accordion with keyboard
  - **Acceptance Criteria:**
    - [ ] All interactive elements are keyboard accessible
    - [ ] Focus order is logical
    - [ ] Focus indicators are visible (no outline: none without replacement)

- [ ] **15.4 Check color contrast**
  - [ ] Test text against backgrounds (use WebAIM Contrast Checker)
  - [ ] Ensure 4.5:1 ratio for normal text, 3:1 for large text/UI
  - **Acceptance Criteria:**
    - [ ] All text meets WCAG AA contrast requirements
    - [ ] No color-only information (use icons/text as well)

- [ ] **15.5 Add skip link**
  - [ ] Add "Skip to main content" link at top of page
  - [ ] Link jumps to main content area
  - [ ] Visible on keyboard focus
  - **Acceptance Criteria:**
    - [ ] Skip link is present on all pages
    - [ ] Works correctly (jumps to main)
    - [ ] Only visible on keyboard focus

- [ ] **15.6 Test with screen reader**
  - [ ] Test homepage with VoiceOver (macOS) or NVDA (Windows)
  - [ ] Ensure landmarks are announced correctly
  - [ ] Test navigation menu, forms, and interactive elements
  - **Acceptance Criteria:**
    - [ ] Screen reader can navigate the site
    - [ ] All content is accessible
    - [ ] Interactive elements are announced correctly

---

### 16. Cross-Browser Testing

- [ ] **16.1 Test on Chrome (Desktop & Mobile)**
  - [ ] Test all pages and functionality
  - [ ] Check for layout issues
  - **Acceptance Criteria:**
    - [ ] Site works perfectly on Chrome
    - [ ] No console errors

- [ ] **16.2 Test on Firefox (Desktop & Mobile)**
  - [ ] Test all pages and functionality
  - [ ] Check for CSS differences
  - **Acceptance Criteria:**
    - [ ] Site works perfectly on Firefox
    - [ ] No console errors

- [ ] **16.3 Test on Safari (macOS & iOS)**
  - [ ] Test all pages and functionality
  - [ ] Check for webkit-specific issues
  - **Acceptance Criteria:**
    - [ ] Site works perfectly on Safari
    - [ ] No console errors

- [ ] **16.4 Test on Edge (Desktop)**
  - [ ] Test all pages and functionality
  - **Acceptance Criteria:**
    - [ ] Site works perfectly on Edge
    - [ ] No console errors

- [ ] **16.5 Fix any browser-specific bugs**
  - [ ] Document and fix any issues found
  - **Acceptance Criteria:**
    - [ ] All critical bugs are fixed
    - [ ] Site is consistent across browsers

---

### 17. Content & Assets

- [ ] **17.1 Create placeholder images**
  - [ ] Hero waterfall image (or use real image)
  - [ ] Fussbad vorher/nachher image (or use real image)
  - [ ] Flyer preview images (or use real images)
  - [ ] Blog post featured images
  - [ ] Team photos (Tamara, Sandra) - placeholders initially
  - **Acceptance Criteria:**
    - [ ] All images are in place (real or placeholder)
    - [ ] Images are properly sized and optimized
    - [ ] Saved in `/assets/images/`

- [ ] **17.2 Add PDF flyers to downloads folder**
  - [ ] flyer-cellulite.pdf
  - [ ] flyer-sport.pdf
  - [ ] flyer-entsaeuern.pdf
  - [ ] (Use placeholders if real PDFs not available)
  - **Acceptance Criteria:**
    - [ ] PDFs are in `/assets/downloads/`
    - [ ] Download links work

- [ ] **17.3 Write/finalize content for all pages**
  - [ ] Homepage: Hero text, Body Detox explanation, "Wie wirkt" section
  - [ ] Body Detox page: Full treatment description, benefits, process
  - [ ] About page: Mission statement, team bios
  - [ ] FAQ: 8-10 questions and answers
  - [ ] AGB: Legal text (use generator or consult lawyer)
  - **Acceptance Criteria:**
    - [ ] All pages have complete, proofread content
    - [ ] Tone is professional and welcoming
    - [ ] German spelling and grammar are correct

---

### 18. Form Backend Integration

- [ ] **18.1 Set up Netlify Forms (if using Netlify)**
  - [ ] Add `netlify` attribute to form
  - [ ] Add hidden form-name field
  - [ ] Configure email notifications in Netlify dashboard
  - [ ] Test form submission
  - **Acceptance Criteria:**
    - [ ] Form submissions are received
    - [ ] Emails sent to tamara.benz@ and sandra.marin@
    - [ ] Success/error messages work

- [ ] **18.2 Alternative: Set up Formspree (if not using Netlify)**
  - [ ] Create Formspree account
  - [ ] Get form endpoint
  - [ ] Update form action to Formspree endpoint
  - [ ] Test form submission
  - **Acceptance Criteria:**
    - [ ] Form submissions work
    - [ ] Emails sent to both addresses
    - [ ] Success/error handling works

- [ ] **18.3 Add honeypot spam protection**
  - [ ] Add hidden honeypot field
  - [ ] Reject submission if honeypot is filled
  - **Acceptance Criteria:**
    - [ ] Honeypot field is invisible to users
    - [ ] Bots are caught by honeypot

- [ ] **18.4 Optional: Add reCAPTCHA v3**
  - [ ] Sign up for Google reCAPTCHA
  - [ ] Add reCAPTCHA script to contact page
  - [ ] Verify reCAPTCHA token on submission
  - **Acceptance Criteria:**
    - [ ] reCAPTCHA is invisible (v3)
    - [ ] Spam is blocked
    - [ ] (Optional - only if honeypot isn't sufficient)

---

### 19. Documentation

- [ ] **19.1 Write comprehensive README.md**
  - [ ] Project overview
  - [ ] Tech stack
  - [ ] How to run locally (setup instructions)
  - [ ] How to deploy
  - [ ] How to update content (for non-technical users)
  - [ ] Project structure explanation
  - [ ] Credits and contact
  - **Acceptance Criteria:**
    - [ ] README is complete and clear
    - [ ] Anyone can follow setup instructions
    - [ ] Deployment process is documented

- [ ] **19.2 Document how to add new blog posts**
  - [ ] Step-by-step guide for creating new blog post
  - [ ] Template/example to copy
  - [ ] Where to place images
  - [ ] How to update blog.html listing
  - **Acceptance Criteria:**
    - [ ] Non-developer can add blog post following guide
    - [ ] Instructions are clear and tested

- [ ] **19.3 Document how to update content**
  - [ ] How to change text on pages
  - [ ] How to update images
  - [ ] How to add new flyers
  - **Acceptance Criteria:**
    - [ ] Basic content updates are documented
    - [ ] Instructions are beginner-friendly

---

### 20. Deployment & Go-Live

- [ ] **20.1 Choose hosting provider**
  - [ ] Recommended: Netlify (free tier)
  - [ ] Alternative: Vercel, GitHub Pages, Cloudflare Pages
  - **Acceptance Criteria:**
    - [ ] Hosting provider decided
    - [ ] Account created

- [ ] **20.2 Set up Git repository**
  - [ ] Initialize git repo (if not already done)
  - [ ] Create GitHub/GitLab repository
  - [ ] Push code to remote
  - **Acceptance Criteria:**
    - [ ] Code is in version control
    - [ ] Remote repository exists

- [ ] **20.3 Deploy to staging/preview**
  - [ ] Connect repo to Netlify/Vercel
  - [ ] Deploy to preview URL
  - [ ] Test live site on preview URL
  - **Acceptance Criteria:**
    - [ ] Site is live on preview URL
    - [ ] All functionality works
    - [ ] Forms work

- [ ] **20.4 Configure custom domain**
  - [ ] Connect www.koerperrein.ch to hosting
  - [ ] Update DNS settings (CNAME or A record)
  - [ ] Wait for DNS propagation
  - **Acceptance Criteria:**
    - [ ] Domain points to hosted site
    - [ ] Both www and non-www work (with redirect)

- [ ] **20.5 Enable HTTPS/SSL**
  - [ ] Enable SSL certificate (automatic on Netlify)
  - [ ] Ensure all traffic redirects to HTTPS
  - **Acceptance Criteria:**
    - [ ] Site is accessible via HTTPS
    - [ ] HTTP redirects to HTTPS
    - [ ] No mixed content warnings

- [ ] **20.6 Set up Google Analytics (optional)**
  - [ ] Create Google Analytics 4 property
  - [ ] Add tracking code to all pages
  - [ ] Test that tracking works
  - **Acceptance Criteria:**
    - [ ] Analytics tracking works
    - [ ] Data is being collected
    - [ ] Privacy policy mentions analytics

- [ ] **20.7 Final testing on live domain**
  - [ ] Test all pages on live domain
  - [ ] Test forms
  - [ ] Test downloads
  - [ ] Test navigation
  - [ ] Test on mobile devices
  - **Acceptance Criteria:**
    - [ ] Everything works on live domain
    - [ ] No broken links
    - [ ] Forms send emails

- [ ] **20.8 Submit sitemap to Google Search Console**
  - [ ] Create Google Search Console account
  - [ ] Verify domain ownership
  - [ ] Submit sitemap.xml
  - **Acceptance Criteria:**
    - [ ] Domain verified
    - [ ] Sitemap submitted and indexed

- [ ] **20.9 Go-Live announcement**
  - [ ] Announce on social media (Facebook, Instagram, Pinterest)
  - [ ] Update any existing links to point to new site
  - [ ] Monitor for any issues in first 24-48 hours
  - **Acceptance Criteria:**
    - [ ] Site is live and public
    - [ ] Stakeholders are informed
    - [ ] Monitoring in place

---

## Post-Launch Tasks (Phase 2 - Future)

- [ ] **P2.1 Add online booking calendar integration**
  - [ ] Research and choose booking tool (Calendly, SimplyBook.me, etc.)
  - [ ] Integrate with website
  - [ ] Test booking flow

- [ ] **P2.2 Add testimonials/reviews section**
  - [ ] Collect customer testimonials
  - [ ] Create testimonials component
  - [ ] Add to homepage or dedicated page

- [ ] **P2.3 Add newsletter signup**
  - [ ] Choose email marketing tool (Mailchimp, Sendinblue)
  - [ ] Create signup form
  - [ ] Add to footer or as popup

- [ ] **P2.4 Add pricing page**
  - [ ] Create pricing table
  - [ ] List all treatment packages
  - [ ] Add to navigation

- [ ] **P2.5 Consider migrating to Static Site Generator**
  - [ ] Evaluate 11ty, Hugo, or Jekyll
  - [ ] Migrate blog to SSG for easier content management
  - [ ] Keep deployment process simple

---

## Task Progress Summary

**Total Tasks:** 127 main tasks + 300+ subtasks
**Completed:** 0
**In Progress:** 0
**Pending:** All

---

## Notes

- Tasks are ordered by dependency - complete in sequence
- Some tasks can be parallelized (e.g., different pages)
- Mark tasks as complete (change `[ ]` to `[x]`) as you finish them
- Update this file regularly to track progress
- If a task is too complex, break it down further
- Consult PRD for detailed requirements on each feature

---

**Ready to start?** Begin with Task 1.1 and work through sequentially. Ask for review/approval before moving to next major section (e.g., after completing all of Section 1, review before starting Section 2).

Good luck! 🚀
