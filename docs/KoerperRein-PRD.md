# KörperRein Website - Product Requirements Document

**Version:** 1.0
**Date:** 2025-11-19
**Owner:** Sandra Marin, Tamara Benz
**Status:** Draft

---

## Overview

Entwicklung einer professionellen, statischen Website für KörperRein - einen Schweizer Body Detox Service, der Ganzkörper-Entgiftung mittels Elektrolyse-Fussbad anbietet. Die Website ersetzt die bestehende Wix-Seite und soll potenzielle Kunden informieren, Vertrauen aufbauen und Buchungsanfragen generieren.

---

## Problem Statement

**Aktuelles Problem:**
Die bestehende Wix-Website funktioniert grundsätzlich, hat aber potenzielle Einschränkungen:
- Monatliche Kosten für Wix-Abonnement
- Begrenzte Kontrolle über Design und Performance
- Abhängigkeit von Wix-Platform
- Möglicherweise langsamere Ladezeiten
- Eingeschränkte Anpassungsmöglichkeiten

**Lösung:**
Eine maßgeschneiderte, statische HTML/CSS/JS Website, die:
- Vollständige Design- und Codekontrolle bietet
- Schneller lädt (optimierte statische Seiten)
- Günstiger zu hosten ist (statisches Hosting)
- Leicht wartbar und erweiterbar ist
- Professionelles, vertrauenswürdiges Image vermittelt

---

## Goals & Success Criteria

### Primary Goals
1. **Vertrauensaufbau:** Professionelle, seriöse Präsentation des Body Detox Services
2. **Information:** Klare Erklärung der Behandlung, Vorteile und Wirkungsweise
3. **Lead-Generierung:** Buchungsanfragen über Kontaktformular generieren
4. **Reichweite:** Suchmaschinenoptimierung für lokale Schweizer Suchen

### Success Metrics
- **Performance:** Ladezeit < 2 Sekunden (Desktop & Mobile)
- **Accessibility:** WCAG 2.1 AA konform
- **SEO:** Google PageSpeed Score > 90
- **Mobile:** 100% responsive auf allen Geräten
- **Conversions:** Klare CTAs (Call-to-Actions) für Buchungsanfragen

### Definition of Success
- Website ist live und funktional
- Alle Inhalte von Wix-Seite wurden übertragen
- Design ist professionell und vertrauenswürdig
- Performance-Ziele wurden erreicht
- Kontaktformular funktioniert zuverlässig

---

## Target Users

### Primary User Personas

**Persona 1: Gesundheitsbewusste Frau (35-55 Jahre)**
- Interesse an natürlichen Heilmethoden und Wellness
- Sucht nach Entgiftungs- und Entschlackungslösungen
- Beschwerden: Cellulite, Müdigkeit, Stoffwechselprobleme
- Nutzungsverhalten: Mobile-first, recherchiert online vor Buchung
- Erwartung: Professionelle Website, klare Informationen, einfache Kontaktaufnahme

**Persona 2: Sportler/Aktive Person (25-45 Jahre)**
- Interessiert an Regeneration und Performance-Optimierung
- Sucht nach Möglichkeiten zur Muskelregeneration
- Technikaffin, erwartet schnelle Website
- Erwartung: Wissenschaftliche Erklärungen, konkrete Vorteile

**Persona 3: Person mit Gesundheitsbeschwerden (40-65 Jahre)**
- Chronische Beschwerden (Verdauung, Immunsystem)
- Sucht alternative/ergänzende Behandlungsmethoden
- Benötigt ausführliche Information und Vertrauensaufbau
- Erwartung: Seriöse Darstellung, Kompetenz, klare Kontaktmöglichkeiten

---

## User Stories

**Als gesundheitsbewusster Website-Besucher** möchte ich:
- Schnell verstehen, was Body Detox ist und wie es funktioniert
- Die Vorteile der Behandlung klar erklärt bekommen
- Vorher/Nachher-Bilder sehen, um die Wirkung zu verstehen
- Einfach einen Termin anfragen können
- Informationen über die Betreiberinnen (Tamara & Sandra) finden
- Auf dem Smartphone genauso gut browsen wie am Desktop

**Als Interessent** möchte ich:
- Herunterladbare Informationsmaterialien (Flyer) erhalten
- Blog-Artikel lesen, um mehr zu lernen
- Kontaktinformationen leicht finden
- Social Media Profile besuchen können

**Als Suchmaschinennutzer** möchte ich:
- Bei Google "Body Detox Schweiz" die Website finden
- Schnelle Ladezeiten erleben
- Eine mobile-optimierte Seite sehen

---

## Core Features & Requirements

### Must-Have Features (Phase 1 - MVP)

#### 1. Homepage (index.html)
**Description:**
Hauptseite mit Hero-Bereich, Übersicht der Services, Vorteile und CTAs.

**Components:**
- Hero Section mit Wasserfall-Bild
  - Headline: "Ganzkörper-Entgiftung in 30 Minuten – angenehm und effektiv"
  - Tagline: "GANZKÖRPER-ENTGIFTUNG"
  - CTA Button: "Jetzt buchen"
- Body Detox Erklärungs-Sektion
  - Überschrift: "BODY DETOX - FUSSBAD"
  - Beschreibungstext (aus Wix-Seite)
  - Vorher/Nachher Bild (Fussbad)
- "Wie wirkt Body Detox" Sektion
  - Detaillierte Erklärung der Elektrolyse-Methode
  - Wissenschaftliche Hintergründe
- Flyer Download Bereich
  - 3 Flyer: Cellulite, Sport, Entsäuern
  - Vorschaubilder + Download-Links
- Blog Preview
  - Neueste 2 Blog-Posts als Karten
  - Link zu Blog-Übersicht
- Footer
  - Kontaktinformationen (beide Emails)
  - Navigation Links (AGB, Datenschutz, FAQ)
  - Social Media Icons (Facebook, Instagram, Pinterest)
  - Copyright-Hinweis

**Acceptance Criteria:**
- [ ] Hero lädt in < 1.5s (optimiertes Bild)
- [ ] Alle CTAs sind deutlich sichtbar und klickbar
- [ ] Mobile-Version zeigt alle Inhalte korrekt
- [ ] Smooth Scrolling zu Sektionen funktioniert
- [ ] Alle Links funktionieren (keine 404-Fehler)

**User Value:**
Schneller Überblick über das Angebot, sofortige Buchungsmöglichkeit, Vertrauensaufbau durch professionelles Design.

---

#### 2. Body Detox Detail-Seite (body-detox.html)
**Description:**
Ausführliche Informationsseite über die Body Detox Behandlung.

**Components:**
- Hero mit Behandlungs-Bild
- Detaillierte Behandlungsbeschreibung
- "Wie funktioniert die Elektrolyse"
- Vorteile-Liste (Icons + Text):
  - Entgiftung
  - Stärkung des Immunsystems
  - Energieregeneration
  - Verbesserung der Verdauung
  - Hautverbesserung
- Behandlungsablauf (Step-by-Step)
- Häufige Fragen (FAQ-Auszug)
- CTA: "Jetzt Termin anfragen"

**Acceptance Criteria:**
- [ ] Klare, wissenschaftliche Erklärung der Methode
- [ ] Vorteile sind visuell ansprechend dargestellt
- [ ] FAQ beantwortet typische Fragen
- [ ] CTA prominent platziert

**User Value:**
Umfassende Information für Entscheidungsfindung, Vertrauensaufbau durch Transparenz.

---

#### 3. Über Uns Seite (ueber-uns.html)
**Description:**
Vorstellung von Tamara und Sandra, Geschichte des Unternehmens.

**Components:**
- Header: "Über Uns"
- Story-Sektion: Warum wurde KörperRein gegründet?
- Team-Vorstellung:
  - Tamara Benz (Foto, Kurzbiografie, Kontakt)
  - Sandra Marin (Foto, Kurzbiografie, Kontakt)
- Qualifikationen/Zertifikate (falls vorhanden)
- Mission Statement
- CTA: "Kontaktieren Sie uns"

**Acceptance Criteria:**
- [ ] Professionelle, aber persönliche Darstellung
- [ ] Fotos sind hochwertig und professionell
- [ ] Text ist authentisch und vertrauenswürdig
- [ ] Kontaktinformationen sind klar sichtbar

**User Value:**
Vertrauensaufbau durch persönliche Vorstellung, Kompetenznachweis.

---

#### 4. Blog Übersichtsseite (blog.html)
**Description:**
Auflistung aller Blog-Artikel.

**Components:**
- Header: "Der KörperRein Blog"
- Blog-Post-Grid (Karten-Layout)
  - Jeder Post: Bild, Titel, Excerpt, Datum, "Weiterlesen" Link
- Kategorien/Filter (optional, später)
- Pagination (falls > 6 Posts)

**Initial Posts (basierend auf Wix):**
1. "Zweiter Blog" - Placeholder-Text
2. "Sandra Detoxing You" - Placeholder-Text

**Acceptance Criteria:**
- [ ] Grid-Layout mit 2-3 Spalten (Desktop)
- [ ] Responsive: 1 Spalte auf Mobile
- [ ] Alle Posts sind verlinkbar
- [ ] Design ist konsistent mit Rest der Site

**User Value:**
Content-Marketing, SEO-Optimierung, Kundenbindung durch regelmäßige Inhalte.

---

#### 5. Kontakt Seite (kontakt.html)
**Description:**
Kontaktformular und Kontaktinformationen.

**Components:**
- Header: "Kontakt"
- Kontaktformular:
  - Name (Pflichtfeld)
  - Email (Pflichtfeld, Validierung)
  - Telefon (optional)
  - Nachricht (Pflichtfeld, Textarea)
  - Submit-Button: "Nachricht senden"
  - Datenschutz-Checkbox mit Link zu Datenschutzerklärung
- Kontaktinformationen (rechts oder unten):
  - Email: tamara.benz@koerperrein.com
  - Email: sandra.marin@koerperrein.com
  - Telefon (falls vorhanden)
  - Adresse (falls vorhanden)
- Social Media Links
- Optional: Google Maps Einbettung (falls Standort vorhanden)

**Acceptance Criteria:**
- [ ] Formular validiert Eingaben (Email-Format, Pflichtfelder)
- [ ] Formular sendet Emails an beide Adressen
- [ ] Success-Message nach Absenden
- [ ] Error-Handling bei Fehlern
- [ ] Spam-Schutz (Honeypot oder reCAPTCHA)
- [ ] Mobile-optimiert (große Touch-Targets)

**User Value:**
Einfache, direkte Kontaktaufnahme, niedrige Hürde für Buchungsanfragen.

---

#### 6. FAQ Seite (faq.html)
**Description:**
Häufig gestellte Fragen und Antworten.

**Components:**
- Header: "Häufig gestellte Fragen"
- Accordion/Collapsible FAQ-Items:
  - "Wie funktioniert Body Detox?"
  - "Wie lange dauert eine Behandlung?"
  - "Was kostet eine Behandlung?"
  - "Gibt es Nebenwirkungen?"
  - "Wie oft sollte ich die Behandlung machen?"
  - "Ist Body Detox für jeden geeignet?"
  - "Was muss ich vor/nach der Behandlung beachten?"
  - etc.
- CTA: "Weitere Fragen? Kontaktieren Sie uns"

**Acceptance Criteria:**
- [ ] Mindestens 8-10 FAQs
- [ ] Accordion-Funktion (auf/zuklappen)
- [ ] Klare, verständliche Antworten
- [ ] Mobile-optimiert

**User Value:**
Reduzierung von Rückfragen, Vertrauensaufbau durch Transparenz, SEO-Optimierung.

---

#### 7. AGB & Datenschutz Seite (agb.html)
**Description:**
Rechtliche Informationen (AGB, Datenschutzerklärung, Impressum).

**Components:**
- Header: "AGB & Datenschutz"
- Tab/Abschnitt-Navigation:
  - AGB (Allgemeine Geschäftsbedingungen)
  - Datenschutzerklärung (DSGVO-konform)
  - Impressum (Pflicht in Schweiz/EU)
- Rechtliche Texte (müssen von Anwalt/Generator erstellt werden)

**Acceptance Criteria:**
- [ ] DSGVO/Schweizer Datenschutzgesetz konform
- [ ] Impressumspflicht erfüllt
- [ ] Klare Struktur und Lesbarkeit
- [ ] Links im Footer zu dieser Seite

**User Value:**
Rechtliche Absicherung, Vertrauensaufbau, Compliance.

---

#### 8. Navigation & Header
**Description:**
Globale Navigation, auf allen Seiten konsistent.

**Components:**
- Logo: "KÖRPERREIN" (oben links)
- Hauptnavigation (Desktop):
  - START
  - BODY DETOX
  - ÜBER UNS
  - BLOG
  - KONTAKT
- CTA-Button: "Buchungsanfrage" (rechts, prominent)
- Mobile: Hamburger-Menü (responsiv)
- Sticky Header (bleibt beim Scrollen sichtbar)

**Acceptance Criteria:**
- [ ] Navigation ist auf allen Seiten identisch
- [ ] Active-State zeigt aktuelle Seite
- [ ] Mobile-Menü funktioniert smooth (Slide-in/Fade-in)
- [ ] Sticky Header ohne Performance-Probleme
- [ ] Accessibility: Keyboard-Navigation funktioniert

**User Value:**
Intuitive Navigation, einfache Orientierung, schneller Zugriff auf Buchung.

---

#### 9. Footer
**Description:**
Globaler Footer, auf allen Seiten konsistent.

**Components:**
- 3-Spalten-Layout (Desktop):
  - **Spalte 1: HILFE**
    - AGB
    - DATENSCHUTZ
  - **Spalte 2: FRAIS** (oder "ÜBER UNS")
    - Unsere Geschichte
    - Kontakt
    - FAQ
  - **Spalte 3: KONTAKT**
    - tamara.benz@koerperrein.com
    - sandra.marin@koerperrein.com
- Social Media Icons (Facebook, Instagram, Pinterest)
- Copyright: "© 2026 Copyright Körperrein.ch"

**Acceptance Criteria:**
- [ ] Alle Links funktionieren
- [ ] Responsive: Stapelt sich auf Mobile (1 Spalte)
- [ ] Social Icons sind klickbar und öffnen in neuem Tab
- [ ] Footer ist auf allen Seiten identisch

**User Value:**
Schneller Zugriff auf wichtige Links, Kontaktinformationen immer verfügbar.

---

### Nice-to-Have Features (Phase 2 - Future Enhancements)

#### 1. Online-Buchungskalender
- Integration mit Calendly, SimplyBook.me oder eigenem System
- Direkte Terminbuchung ohne Email
- Automatische Bestätigung

#### 2. Testimonials/Bewertungen
- Kundenbewertungen auf Homepage
- Vor/Nachher-Geschichten
- Vertrauensaufbau durch Social Proof

#### 3. Newsletter-Anmeldung
- Email-Sammlung für Marketing
- Integration mit Mailchimp/Sendinblue
- Popup oder Footer-Formular

#### 4. Preisliste
- Transparente Preisdarstellung
- Pakete/Abonnements
- Sonderangebote

#### 5. Mehrsprachigkeit
- Deutsch (Standard)
- Französisch
- Italienisch
- Englisch

#### 6. Blog-Kommentare
- Diskussionsmöglichkeit unter Posts
- Community-Building

#### 7. Galerie/Portfolio
- Mehr Vorher/Nachher-Bilder
- Behandlungsraum-Fotos
- Vertrauensaufbau

---

### Out of Scope

- **E-Commerce:** Kein Online-Shop für Produkte
- **Mitgliederbereich:** Kein Login/Account-System
- **Zahlungsfunktion:** Keine Online-Zahlungen
- **Live-Chat:** Kein Echtzeit-Support
- **Backend/CMS:** Keine dynamische Content-Verwaltung (vorerst statisch)
- **Mobile App:** Nur responsive Website, keine native App

---

## Technical Requirements

### Architecture

**Static Site Architecture:**
```
┌─────────────────────────────────────────┐
│         Client Browser                   │
│  ┌──────────────────────────────────┐   │
│  │  HTML Pages (index, blog, etc.)  │   │
│  │  CSS (variables, global, comps)  │   │
│  │  JavaScript (navigation, forms)  │   │
│  │  Assets (images, PDFs, icons)    │   │
│  └──────────────────────────────────┘   │
└─────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────┐
│      Static File Hosting                │
│  (Netlify, Vercel, GitHub Pages, etc.)  │
└─────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────┐
│      Form Handling Service              │
│  (Formspree, Netlify Forms, EmailJS)    │
│  → Sends emails to both contacts        │
└─────────────────────────────────────────┘
```

**Key Components:**
1. **Frontend (HTML/CSS/JS):** Alle Seiten als statische HTML-Dateien
2. **Hosting:** Statisches Hosting (günstig, schnell, sicher)
3. **Form Backend:** Formular-Service für Email-Versand
4. **CDN:** Content Delivery Network für schnelle globale Auslieferung

---

### Tech Stack

**Frontend:**
- **HTML5:** Semantisches Markup (nav, main, article, section, etc.)
- **CSS3:**
  - CSS Custom Properties (Variablen für Farben, Spacing)
  - Flexbox & CSS Grid für Layouts
  - CSS Animations für Interaktionen
  - Media Queries für Responsive Design
- **Vanilla JavaScript:**
  - ES6+ Syntax
  - Mobile Navigation Toggle
  - Smooth Scrolling
  - Form Validation
  - Accordion (FAQ)

**Hosting Options:**
1. **Netlify** (Empfohlen)
   - Kostenloses Hosting für statische Sites
   - Integrierte Form-Funktion
   - Automatische SSL-Zertifikate
   - CDN inklusive
2. **Vercel** (Alternative)
3. **GitHub Pages** (Alternative)
4. **Cloudflare Pages** (Alternative)

**Form Handling:**
- **Netlify Forms** (wenn auf Netlify gehostet)
- **Formspree** (Alternative)
- **EmailJS** (Alternative, Client-side)

**Fonts:**
- **Google Fonts:**
  - Montserrat (Headings)
  - Open Sans (Body Text)

**Icons:**
- **SVG Icons** (selbst-gehostet)
- Oder: Font Awesome (optional)

**Analytics (Optional):**
- Google Analytics 4
- Oder: Plausible Analytics (DSGVO-freundlicher)

---

### Integration Points

**External Services:**
1. **Email Service:**
   - Formular sendet an: tamara.benz@koerperrein.com, sandra.marin@koerperrein.com
   - Service: Netlify Forms oder Formspree
2. **Social Media:**
   - Links zu Facebook, Instagram, Pinterest
   - Keine API-Integration notwendig
3. **Download-Hosting:**
   - PDF-Flyer werden im `/assets/downloads/` Ordner gehostet
   - Direkte Download-Links

**No Backend Required:**
- Alle Daten sind statisch im HTML
- Blog-Posts sind statische HTML-Seiten (oder später: Static Site Generator wie 11ty/Hugo)

---

### Technical Constraints

**Performance Requirements:**
- **Page Load Time:** < 2 Sekunden (First Contentful Paint)
- **Largest Contentful Paint (LCP):** < 2.5s
- **First Input Delay (FID):** < 100ms
- **Cumulative Layout Shift (CLS):** < 0.1
- **Google PageSpeed Score:** > 90 (Desktop & Mobile)

**Image Optimization:**
- Hero Images: WebP format, max 1920px width
- Lazy Loading für Below-Fold-Bilder
- Responsive Images (srcset für verschiedene Viewports)
- Komprimierung: < 200KB pro Bild

**Security Considerations:**
- **HTTPS:** Nur über verschlüsselte Verbindung
- **Form Spam Protection:** Honeypot-Feld oder reCAPTCHA
- **Content Security Policy (CSP):** HTTP-Header für XSS-Schutz
- **No User Data Storage:** Keine Datenbank, keine Cookies (außer Analytics)

**Scalability:**
- Statische Seite skaliert automatisch (CDN)
- Keine Backend-Last
- Unlimitierte Besucher ohne Performance-Einbußen

**Browser Compatibility:**
- Moderne Browser (Chrome, Firefox, Safari, Edge)
- Letzten 2 Versionen
- IE11 nicht unterstützt (< 1% Marktanteil)

---

## User Experience & Design

### Key User Flows

#### Flow 1: Erstbesuch → Buchungsanfrage
1. User landet auf Homepage (z.B. via Google Suche)
2. Sieht Hero mit klarem Value Proposition: "Ganzkörper-Entgiftung in 30 Minuten"
3. Scrollt nach unten, liest "Was ist Body Detox"
4. Sieht Vorher/Nachher-Bilder (erzeugt Interesse)
5. Liest "Wie wirkt Body Detox" (baut Vertrauen auf)
6. Klickt auf CTA-Button "Jetzt buchen"
7. Landet auf Kontaktseite
8. Füllt Formular aus (Name, Email, Nachricht)
9. Klickt "Nachricht senden"
10. Erhält Success-Message: "Vielen Dank! Wir melden uns innerhalb von 24h"

**Expected Behavior:**
- Klare visuelle Führung (CTAs auffällig)
- Keine Ablenkungen (kein Popup-Spam)
- Schnelle Ladezeit (kein Frustration)
- Mobile genauso einfach wie Desktop

---

#### Flow 2: Information → Entscheidung
1. User will mehr über Body Detox wissen
2. Klickt auf "BODY DETOX" in Navigation
3. Liest ausführliche Behandlungsbeschreibung
4. Sieht Vorteile-Liste (Icons + Text)
5. Liest Behandlungsablauf
6. Öffnet FAQ (beantwortet offene Fragen)
7. Lädt Flyer herunter (z.B. "Cellulite")
8. Entscheidet sich für Buchung
9. Klickt auf CTA "Jetzt Termin anfragen"
10. Füllt Kontaktformular aus

**Expected Behavior:**
- Informationen sind leicht verständlich (kein Fachchinesisch)
- Visuelle Elemente (Icons, Bilder) unterstützen Text
- Downloads sind direkt verfügbar
- CTAs sind an strategischen Punkten platziert

---

#### Flow 3: Wiederkehrender Besucher → Blog
1. User hat bereits über Service gelesen
2. Besucht Website erneut (via Bookmark oder Social Media)
3. Klickt auf "BLOG" in Navigation
4. Sieht neueste Artikel (z.B. "10 Tipps für Entgiftung im Alltag")
5. Klickt auf Artikel
6. Liest Blog-Post
7. Klickt auf Social Share Button (optional)
8. Kehrt zurück zu Blog-Übersicht
9. Sieht weiteren interessanten Artikel
10. Abonniert Newsletter (optional, Phase 2)

**Expected Behavior:**
- Blog ist aktuell und relevant
- Artikel sind leicht lesbar (gute Typografie)
- Navigation zurück zur Übersicht ist klar
- Kein Layout-Shift beim Laden

---

### UI/UX Considerations

**Design Principles:**
1. **Clarity First:** Klare Hierarchie, keine Ablenkungen
2. **Trust Signals:** Professionelle Bilder, Testimonials (später), Kontaktinfos prominent
3. **Mobile-First:** Design zuerst für kleine Screens, dann erweitern
4. **Accessibility:** Hohe Kontraste, große Touch-Targets, Keyboard-Navigation
5. **Speed:** Minimalistische Designs laden schnell

**Responsive Design Requirements:**

**Mobile (< 768px):**
- Single-Column-Layout
- Hamburger-Menü
- Größere Buttons (min. 44x44px)
- Kleinere Hero-Images (optimiert für Mobile)
- Gestapelter Footer (1 Spalte)

**Tablet (768px - 1024px):**
- 2-Column-Layout für Content-Bereiche
- Hamburger-Menü oder horizontale Navigation
- Medium-sized Hero-Images

**Desktop (> 1024px):**
- 3-Column-Layout für Footer
- Vollständige horizontale Navigation
- Große Hero-Images
- Multi-Column-Blog-Grid

**Accessibility Requirements:**
- **WCAG 2.1 AA Compliance:**
  - Color Contrast: Text mindestens 4.5:1, UI-Elemente 3:1
  - Keyboard Navigation: Alle interaktiven Elemente mit Tab erreichbar
  - Focus Indicators: Sichtbare Focus-States (nicht `outline: none`)
  - Alt Text: Alle Bilder haben beschreibenden Alt-Text
  - Semantic HTML: Korrekte Nutzung von nav, main, article, etc.
  - Heading Hierarchy: Logische Struktur (h1 → h2 → h3)
  - Form Labels: Alle Input-Felder haben zugeordnete Labels
  - ARIA Labels: Nur wo semantisches HTML nicht ausreicht
  - Skip Links: "Skip to main content" Link (für Screen-Reader)

**Design References:**
- **Current Wix Site:** Als Basis für Content und Struktur
- **Inspiration:**
  - Moderne Wellness-Websites (z.B. Spa-Websites)
  - Schweizer Gesundheits-Websites (Clean, Professional)
  - Nature-inspired Designs (Wasser, Organische Formen)

**Color Psychology:**
- **Teal/Türkis (#2A9D8F):** Wasser, Reinigung, Ruhe, Vertrauen
- **Coral (#E76F51):** Energie, Wärme, Vitalität
- **White/Off-White:** Sauberkeit, Klarheit, Minimalismus

---

## Data Model

### Static Data Structure

Da die Website statisch ist, gibt es keine Datenbank. Content wird direkt in HTML oder als JSON-Dateien (für spätere SSG-Migration) gespeichert.

**Blog Post Structure (für zukünftige Migration zu SSG):**
```json
{
  "id": "zweiter-blog",
  "title": "Zweiter Blog",
  "slug": "zweiter-blog",
  "author": "Sandra Marin",
  "date": "2025-11-15",
  "excerpt": "sefergewgqwegqwegqwegqweg",
  "content": "...",
  "image": "/assets/images/blog/zweiter-blog.jpg",
  "category": "Gesundheit"
}
```

**FAQ Structure:**
```json
{
  "question": "Wie funktioniert Body Detox?",
  "answer": "Body Detox nutzt Elektrolyse, um..."
}
```

**No Database Required:**
- Alle Inhalte sind in HTML hardcoded
- Blog-Posts sind separate HTML-Dateien
- Kontaktformular speichert keine Daten (sendet nur Email)

---

## API Specifications

### Form Submission API

**Endpoint:** Netlify Forms (automatisch bei Deployment)

**Request:**
```http
POST /.netlify/functions/submission-created
Content-Type: application/x-www-form-urlencoded

form-name=contact
&name=Max+Mustermann
&email=max@example.com
&message=Ich+möchte+einen+Termin
&datenschutz=on
```

**Response (Success):**
```http
HTTP/1.1 200 OK
Content-Type: text/html

<p>Vielen Dank für Ihre Nachricht! Wir melden uns innerhalb von 24 Stunden.</p>
```

**Response (Error):**
```http
HTTP/1.1 400 Bad Request
Content-Type: text/html

<p>Fehler beim Senden. Bitte überprüfen Sie Ihre Eingaben.</p>
```

**Validation Rules:**
- `name`: Required, min 2 characters
- `email`: Required, valid email format
- `message`: Required, min 10 characters
- `datenschutz`: Required (checkbox)

**Spam Protection:**
- Honeypot-Feld (verstecktes Feld, sollte leer bleiben)
- Optional: Google reCAPTCHA v3 (unsichtbar)

---

## Security & Privacy

### Authentication/Authorization
- **None required:** Statische Website ohne Login

### Data Privacy
- **DSGVO/Schweizer Datenschutzgesetz Compliance:**
  - Datenschutzerklärung auf Website (agb.html)
  - Kontaktformular: Datenschutz-Checkbox vor Absenden
  - Keine Cookies ohne Consent (außer technisch notwendig)
  - Analytics nur mit Opt-in oder anonymisiert (Plausible)
  - Formular-Daten werden nicht gespeichert (nur Email-Versand)

### Security Measures
1. **HTTPS Only:** Alle Verbindungen verschlüsselt
2. **Content Security Policy (CSP):**
   ```http
   Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://www.google.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:;
   ```
3. **No Inline Secrets:** Keine API-Keys im Frontend-Code
4. **Form Spam Protection:** Honeypot + reCAPTCHA
5. **Regular Updates:** Dependencies aktuell halten (minimal bei statischer Site)

### Compliance Requirements
- **Impressumspflicht (Schweiz/EU):** agb.html enthält Impressum
- **Datenschutzerklärung:** DSGVO-konform
- **Cookie-Banner:** Nur falls Analytics mit Cookies verwendet wird
- **Barrierefreiheit:** WCAG 2.1 AA (gesetzlich in vielen Ländern gefordert)

---

## Testing Strategy

### Manual Testing

**Browser Testing:**
- Chrome (Desktop & Mobile)
- Firefox (Desktop & Mobile)
- Safari (macOS & iOS)
- Edge (Desktop)

**Device Testing:**
- Desktop: 1920x1080, 1440x900
- Tablet: iPad (768x1024)
- Mobile: iPhone SE (375x667), iPhone 14 Pro (390x844), Samsung Galaxy (360x740)

**Functional Testing Checklist:**
- [ ] Alle Links funktionieren (keine 404-Fehler)
- [ ] Navigation auf allen Seiten konsistent
- [ ] Mobile-Menü öffnet/schließt korrekt
- [ ] Kontaktformular validiert Eingaben
- [ ] Kontaktformular sendet Emails
- [ ] Downloads (PDFs) funktionieren
- [ ] Social Media Links öffnen in neuem Tab
- [ ] Bilder laden korrekt (keine broken images)
- [ ] Smooth Scrolling funktioniert
- [ ] FAQ Accordion öffnet/schließt

**Performance Testing:**
- Google PageSpeed Insights: Score > 90
- WebPageTest: Load Time < 2s
- Lighthouse Audit: Alle Kategorien > 90

**Accessibility Testing:**
- Lighthouse Accessibility Score > 95
- Keyboard Navigation: Tab durch alle Elemente
- Screen Reader Testing: VoiceOver (macOS), NVDA (Windows)
- Color Contrast Checker: WCAG AA konform
- WAVE Tool: Keine kritischen Fehler

### Automated Testing (Optional, Phase 2)

**Unit Tests:**
- JavaScript-Funktionen (Form Validation, etc.)
- Framework: Jest oder Vitest

**Integration Tests:**
- Formular-Submission
- Navigation-Flow
- Framework: Playwright oder Cypress

**Visual Regression Tests:**
- Screenshot-Vergleich vor/nach Änderungen
- Tool: Percy oder Chromatic

### User Acceptance Testing (UAT)

**Test Scenarios:**
1. **Als Erstbesucher:** Finde ich schnell Informationen über Body Detox?
2. **Als Interessent:** Kann ich einfach eine Buchungsanfrage stellen?
3. **Als Mobile-User:** Funktioniert alles auf meinem Smartphone?
4. **Als SEO-Tester:** Ist die Seite gut auffindbar?

**Acceptance Criteria:**
- Alle Must-Have Features funktionieren
- Performance-Ziele erreicht
- Accessibility-Standards erfüllt
- Design ist ansprechend und professionell
- Keine kritischen Bugs

---

## Timeline & Milestones

### Phase 1: MVP (Minimum Viable Product)

**Milestone 1: Setup & Foundation (Woche 1)**
- [ ] Projektstruktur erstellen (Ordner, Dateien)
- [ ] CSS-System aufsetzen (variables.css, reset.css, global.css)
- [ ] Design-System implementieren (Farben, Typografie, Spacing)
- [ ] Navigation & Footer komponenten bauen
- [ ] Development Server konfigurieren

**Milestone 2: Core Pages (Woche 2)**
- [ ] Homepage (index.html) komplett
  - Hero Section
  - Body Detox Erklärung
  - Wie wirkt Body Detox
  - Flyer Downloads
  - Blog Preview
- [ ] Body Detox Detail-Seite (body-detox.html)
- [ ] Kontakt-Seite mit funktionierendem Formular (kontakt.html)

**Milestone 3: Content Pages (Woche 3)**
- [ ] Über Uns Seite (ueber-uns.html)
- [ ] Blog Übersicht (blog.html)
- [ ] 2 Blog-Post-Seiten (Beispiel-Posts)
- [ ] FAQ-Seite (faq.html)
- [ ] AGB & Datenschutz (agb.html)

**Milestone 4: Polish & Testing (Woche 4)**
- [ ] Responsive Design für alle Seiten
- [ ] Performance-Optimierung (Bilder, Lazy Loading)
- [ ] Accessibility-Audit und Fixes
- [ ] Browser-Testing
- [ ] SEO-Optimierung (Meta-Tags, Structured Data)
- [ ] Formular-Testing (Email-Versand)

**Milestone 5: Deployment (Woche 5)**
- [ ] Hosting-Setup (Netlify/Vercel)
- [ ] Domain-Verbindung (www.koerperrein.ch)
- [ ] SSL-Zertifikat konfigurieren
- [ ] Analytics einrichten (optional)
- [ ] Final Testing auf Live-URL
- [ ] Go-Live!

---

### Phase 2: Enhancements (später)

**Future Milestones:**
- Online-Buchungskalender Integration
- Testimonials/Bewertungen Sektion
- Newsletter-Anmeldung
- Preisliste
- Erweiterte Blog-Funktionen (Kategorien, Suche)
- Mehrsprachigkeit (FR, IT, EN)

---

## Open Questions

### Content
- [ ] Sind alle Texte von Wix-Seite final, oder sollen sie überarbeitet werden?
- [ ] Gibt es professionelle Fotos von Tamara & Sandra für "Über Uns"?
- [ ] Sollen Preise auf der Website angezeigt werden?
- [ ] Gibt es eine physische Adresse/Standort (für Google Maps)?
- [ ] Gibt es Telefonnummern für Kontakt?

### Functionality
- [ ] Soll das Kontaktformular an beide Emails senden, oder nur eine?
- [ ] Brauchen wir Google reCAPTCHA oder reicht Honeypot-Spam-Schutz?
- [ ] Soll Google Analytics eingebunden werden?
- [ ] Sollen Social Media Feeds eingebettet werden (z.B. Instagram)?

### Hosting & Domain
- [ ] Wo ist die Domain www.koerperrein.ch registriert?
- [ ] Haben wir Zugriff auf DNS-Einstellungen?
- [ ] Welcher Hosting-Provider wird bevorzugt? (Netlify empfohlen)
- [ ] Gibt es ein Budget für Hosting? (Netlify Free-Tier reicht wahrscheinlich)

### Legal
- [ ] Wer erstellt die Datenschutzerklärung? (Generator oder Anwalt?)
- [ ] Impressum: Welche Firma/Person soll genannt werden?
- [ ] AGB: Gibt es bestehende AGB oder müssen diese erstellt werden?

### Design
- [ ] Gibt es das Original-Wasserfall-Bild in hoher Auflösung?
- [ ] Gibt es die Fussbad-Vorher/Nachher-Bilder in hoher Auflösung?
- [ ] Sollen neue Bilder erstellt/gekauft werden (Stock-Fotos)?
- [ ] Gibt es ein Logo (oder nur Text "KÖRPERREIN")?

---

## Appendix

### Related Documents
- `.claude/CLAUDE.md` - Projekt-Konfiguration, Design-System, Workflows
- `cursor-rules/create-prd.md` - PRD-Erstellungs-Guide
- `cursor-rules/generate-tasks.md` - Task-Generierungs-Guide (als nächstes)

### Design Mockups
- Aktuell: Wix-Website als Referenz
- Zukünftig: Figma/Sketch-Mockups (optional)

### Research Findings
**Competitor Analysis (Beispiel-Wellness-Sites):**
- Moderne Wellness-Sites nutzen große Hero-Bilder mit klaren CTAs
- Trust-Elemente: Testimonials, Zertifikate, "Über Uns" mit Fotos
- Mobile-First ist Standard (> 60% Traffic)
- Performance ist Ranking-Faktor (Google Core Web Vitals)

**User Research:**
- Zielgruppe erwartet professionelle, aber persönliche Website
- Vertrauen ist wichtigster Faktor bei Gesundheitsdienstleistungen
- Einfache Kontaktaufnahme ist entscheidend für Conversion

---

## Version History

| Version | Date       | Author        | Changes                          |
|---------|------------|---------------|----------------------------------|
| 1.0     | 2025-11-19 | Claude Code   | Initial PRD basierend auf Wix-Site |

---

## Next Steps

1. **Review dieses PRD:** Durchlesen und offene Fragen klären
2. **Approve:** PRD genehmigen oder Änderungen anfordern
3. **Task Generation:** `@cursor-rules/generate-tasks.md` nutzen, um detaillierte Implementierungs-Tasks zu erstellen
4. **Start Development:** Mit Milestone 1 beginnen

---

**PRD Status:** ✅ Ready for Review

Möchtest du nun mit der Task-Generierung fortfahren? Oder gibt es Punkte im PRD, die wir anpassen sollen?
