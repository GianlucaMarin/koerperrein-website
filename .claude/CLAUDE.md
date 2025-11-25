# Claude Code Configuration - Visual Development Workflow

This file provides persistent context and instructions for Claude Code sessions with integrated visual design validation.

## Project Context

### Project Type
Health & Wellness Business Website - KörperRein Body Detox Service

### Tech Stack
- Frontend: HTML5, CSS3, Vanilla JavaScript
- Backend: Static site (no backend required initially)
- Database: None (static website)
- Styling: Custom CSS with CSS Grid and Flexbox
- Dev Server: Live Server (port 5500) or Python SimpleHTTPServer (port 8000)

### Project Goals
Create a professional, trustworthy website for KörperRein - a Swiss body detoxification service offering electrolysis foot bath treatments. The site should:
- Clearly explain the Body Detox treatment process and benefits
- Build trust through professional design and clear information
- Provide easy booking functionality
- Educate visitors about detoxification and health benefits
- Showcase downloadable resources (flyers for Cellulite, Sport, Entsäuern)
- Feature a blog for ongoing content marketing
- Present contact information for Tamara and Sandra clearly

### Design References
- Current Wix Website: https://editor.wix.com/html/editor/web/renderer/edit/c14e05e7-62b5-4eeb-8466-3ee2d245a950?metaSiteId=6ce2e13b-a9b3-4460-8428-9a90d640912c
- Domain: www.koerperrein.ch
- Design inspiration: Clean, wellness-focused, nature-inspired (waterfall imagery), Swiss professionalism

---

## Visual Development Workflow (Playwright Integration)

### Core Principle: Claude Has Eyes 👁️

With Playwright MCP installed, you can SEE your own designs. This unlocks:
- Pixel-perfect refinement through iterative visual feedback
- Automatic error detection in browser console
- Responsive behavior validation across devices
- Comparison against design specifications

### The Orchestration Framework

Every design task needs three elements:

1. **Context** - Design specs, style guides, user requirements
2. **Tools** - Playwright for screenshots and browser automation
3. **Validation** - Clear acceptance criteria and visual references

### Automatic Visual Validation

**IMPORTANT:** After completing ANY frontend changes, automatically:

1. **Start/Check Dev Server**
   - Verify server is running (typically localhost:3000, :5173, :8080)
   - If not running, start it based on package.json scripts

2. **Navigate to Affected Pages**
   - Use Playwright to open pages modified by the changes
   - Wait for page to fully load (check for loading states)

3. **Take Screenshots**
   - Desktop viewport: 1440x900 (primary view)
   - Capture full page, not just above fold

4. **Check Browser Console**
   - Look for JavaScript errors (red messages)
   - Note warnings (yellow messages)
   - Verify no failed network requests

5. **Compare Against Acceptance Criteria**
   - Review prompt for design specs or mockups
   - Check if implementation matches requirements
   - Verify user flows work as expected

6. **Report Findings**
   - List any console errors found
   - Note visual discrepancies from specs
   - Suggest fixes for issues

### When to Do Comprehensive Design Review

Trigger the Design Reviewer agent (@agent design-reviewer) for:

- **Before Creating PRs**: Full review before code review
- **Significant UI/UX Refactors**: Major design changes
- **New Feature Completion**: After implementing new user-facing features
- **Responsive Layout Changes**: Updates to breakpoints or mobile styles
- **Accessibility Updates**: Changes affecting a11y

### Multi-Viewport Testing

For responsive design work, test at these breakpoints:

```
Desktop: 1440x900 (primary development viewport)
Tablet:  768x1024 (iPad size)
Mobile:  375x667 (iPhone SE size)
```

For each viewport:
- Take screenshot
- Verify layout adapts properly
- Check for content overflow
- Ensure interactive elements are accessible
- Verify touch targets are 44x44px minimum on mobile

---

## Design Principles

### Core Aesthetic Values

- **Trust & Professionalism**: Health services require credibility - clean design, professional imagery, clear information
- **Wellness & Nature**: Incorporate natural elements (water, organic shapes) to reflect body cleansing theme
- **Clarity**: Explain complex detoxification process in simple, accessible language
- **Swiss Quality**: Reflect Swiss standards of precision, cleanliness, and professionalism
- **Calming Aesthetic**: Use soothing colors and generous white space for a spa-like feeling
- **Mobile-First**: Many wellness customers browse on mobile devices

### Inspiration References
- Wellness spas with nature themes (calming, professional)
- Swiss health websites (clean, trustworthy, precise)
- Current Wix site maintains: waterfall imagery, clean navigation, clear CTAs

### Typography Guidelines
- Heading scale:
  - H1: 2.5rem - 3rem (40-48px) - Hero headlines
  - H2: 2rem (32px) - Section headers
  - H3: 1.5rem (24px) - Subsections
  - Body: 1.125rem (18px) - Easy reading for health content
- Line height: 1.6-1.8 for body text (readability)
- Font weights: 300 light, 400 regular, 600 semibold, 700 bold
- Font families:
  - Headings: Modern sans-serif (e.g., Montserrat, Poppins)
  - Body: Readable sans-serif (e.g., Open Sans, Lato)

### Color Palette
```css
/* Nature & Wellness Theme */
Primary:     #2A9D8F  /* Teal - water, cleansing, calm */
Secondary:   #E76F51  /* Warm coral - energy, vitality */
Accent:      #F4A261  /* Golden orange - wellness, warmth */
Success:     #52B788  /* Fresh green - health, renewal */
Background:  #FDFCFB  /* Off-white - clean, spa-like */
Light-bg:    #E8F4F2  /* Light teal bg - sections */
Text-dark:   #264653  /* Dark blue-grey - professional */
Text-light:  #6B7280  /* Medium grey - secondary text */
White:       #FFFFFF  /* Pure white - headers, cards */
```

### Spacing System
Use consistent spacing scale:
```
xs:  0.25rem (4px)   - tight spacing
sm:  0.5rem (8px)    - button padding
md:  1rem (16px)     - standard gap
lg:  2rem (32px)     - section padding
xl:  3rem (48px)     - large section spacing
2xl: 4rem (64px)     - hero sections
3xl: 6rem (96px)     - major page sections
```

---

## Development Guidelines

### Code Style & Best Practices
- Write semantic, accessible HTML
- Use modern CSS (Flexbox, Grid, CSS Variables)
- Prefer functional programming patterns
- Component-based architecture
- DRY (Don't Repeat Yourself) principles

### Accessibility Requirements (WCAG 2.1 AA)
- Semantic HTML elements (`<nav>`, `<main>`, `<article>`)
- Proper heading hierarchy (single h1, logical h2-h6)
- Alt text on all images
- Sufficient color contrast (4.5:1 for text, 3:1 for UI)
- Keyboard navigation support
- Focus indicators visible and clear
- ARIA labels only when semantic HTML insufficient

### Performance Standards
- First Contentful Paint: < 1.8s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.8s
- Cumulative Layout Shift: < 0.1
- Optimize images (WebP format, proper sizing)
- Lazy load below-fold content
- Minimize JavaScript bundle size

### Responsive Design Approach
- Mobile-first development
- Breakpoints at 640px, 768px, 1024px, 1280px
- Touch targets minimum 44x44px
- Avoid horizontal scroll at all viewport sizes
- Test on actual devices when possible

---

## File Organization

```
meine-webseite/
├── .claude/
│   ├── CLAUDE.md          # This file - project configuration
│   └── agents/
│       └── design-reviewer.md
├── index.html             # Homepage (START)
├── body-detox.html        # Body Detox page
├── ueber-uns.html         # Über Uns (About) page
├── blog.html              # Blog listing page
├── kontakt.html           # Contact page
├── faq.html               # FAQ page
├── agb.html               # AGB & Datenschutz page
├── css/
│   ├── reset.css          # CSS reset
│   ├── variables.css      # CSS custom properties (colors, spacing)
│   ├── global.css         # Global styles, typography
│   └── components.css     # Reusable component styles
├── js/
│   ├── main.js            # Main JavaScript
│   └── navigation.js      # Mobile menu, smooth scroll
├── assets/
│   ├── images/
│   │   ├── hero-waterfall.jpg
│   │   ├── fussbad-vorher-nachher.jpg
│   │   ├── flyer-1.jpg
│   │   ├── flyer-2.jpg
│   │   └── flyer-3.jpg
│   ├── downloads/
│   │   ├── flyer-cellulite.pdf
│   │   ├── flyer-sport.pdf
│   │   └── flyer-entsaeuern.pdf
│   └── icons/
│       ├── facebook.svg
│       ├── instagram.svg
│       └── pinterest.svg
└── README.md              # Project documentation
```

---

## Git Workflow

### Commit Message Format
```
type(scope): message

Examples:
feat(auth): add login form validation
fix(nav): resolve mobile menu z-index issue
style(button): adjust hover state colors
docs(readme): update installation instructions
```

### Branch Strategy
- `main` - Production-ready code
- `develop` - Integration branch
- `feature/[name]` - New features
- `fix/[name]` - Bug fixes
- `design/[name]` - UI/UX updates

---

## Testing Strategy

### Visual Testing
- Use Playwright for automated screenshots
- Compare against reference images
- Test across viewports
- Verify interactive states (hover, focus, active)

### Functional Testing
- Test user flows end-to-end
- Verify form validation
- Check error handling
- Test edge cases

### Accessibility Testing
- Run automated a11y checks
- Manual keyboard navigation testing
- Screen reader testing (VoiceOver, NVDA)

---

## Common Workflows

### Starting a New Feature

1. Create PRD using `@cursor-rules/create-prd.md`
2. Generate tasks using `@cursor-rules/generate-tasks.md`
3. Work through tasks sequentially
4. After each frontend task: automatic visual validation
5. Before PR: run `@agent design-reviewer`

### Fixing a Bug

1. Reproduce the bug (use Playwright to navigate)
2. Identify root cause
3. Implement fix
4. Verify fix with screenshots
5. Check no regressions (test related features)

### Design Iteration

1. Implement initial design
2. Take screenshots at all viewports
3. Compare against mockups/specs
4. Identify discrepancies
5. Iterate until pixel-perfect
6. Run comprehensive design review

---

## Agent Invocation

### Design Reviewer
```
@agent design-reviewer
Please review the changes in my last 3 commits
```

Use for:
- Pre-PR reviews
- After major UI changes
- Accessibility audits
- Responsive design validation

---

## Important Reminders

### For Claude Code:

- **Always use Playwright after frontend changes** - Don't skip visual validation
- **Check console first** - Many issues show up there before visual problems
- **Mobile matters** - Test mobile view, not just desktop
- **Accessibility is required** - Not optional, not nice-to-have
- **Ask for clarification** - Better to ask than assume
- **Iterate visually** - Use screenshot feedback to improve

### Design Philosophy

> "Pixel-perfect execution is craftsmanship. Details matter. Consistency builds trust. Accessibility is a requirement. Performance is a feature."

---

## Dependencies & Tools

### Required MCPs
- `playwright` - Browser automation and screenshots

### Recommended VS Code Extensions
- Prettier - Code formatting
- ESLint - Code linting
- Tailwind CSS IntelliSense (if using Tailwind)

---

## Notes & Learnings

### Project-Specific Information

**Website Content:**
- Tagline: "GANZKÖRPER-ENTGIFTUNG"
- Main Headline: "Ganzkörper-Entgiftung in 30 Minuten – angenehm und effektiv"
- Treatment: Body Detox Elektrolysebad (electrolysis foot bath)
- Duration: 30 minutes
- Focus: Detoxification, immune system support, energy regeneration

**Navigation Structure:**
1. START (Homepage)
2. BODY DETOX (Treatment details)
3. ÜBER UNS (About Us)
4. BLOG
5. KONTAKT (Contact)
6. Buchungsanfrage (Booking) - CTA button

**Contact Information:**
- Email 1: tamara.benz@koerperrein.com
- Email 2: sandra.marin@koerperrein.com
- Domain: www.koerperrein.ch

**Social Media:**
- Facebook: https://www.facebook.com/WixDeutsch
- Instagram: https://www.instagram.com/wix
- Pinterest: https://www.pinterest.com/wixcom/

**Key Content Sections:**
1. Hero with waterfall image + CTA
2. Body Detox explanation (Fussbad section)
3. "Wie wirkt Body Detox" (How it works)
4. Flyer downloads (Cellulite, Sport, Entsäuern)
5. Blog preview (latest 2 posts)
6. Footer with contact info

**Design Notes:**
- Waterfall imagery for hero section (represents cleansing, nature)
- Before/after images of foot bath water
- Clean, professional layout
- Emphasis on trust and health benefits

---

**Last Updated:** 2025-11-19
**Playwright MCP Status:** Installed ✅ (screenshots have issues, using page snapshots instead)
**Design Reviewer Agent:** Not Configured ❌
