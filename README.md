# KörperRein - Body Detox Website

Professionelle Website für KörperRein, ein Schweizer Body Detox Service, der Ganzkörper-Entgiftung mittels Elektrolyse-Fussbad anbietet.

---

## 📋 Projektübersicht

KörperRein ist eine statische Website, die Informationen über Body Detox-Behandlungen bereitstellt, Buchungsanfragen ermöglicht und Kunden über Gesundheit und Entgiftung informiert.

**Website:** [www.koerperrein.ch](https://www.koerperrein.ch)

**Kernfunktionen:**
- Informationen über Body Detox Elektrolysebad-Behandlung
- Kontaktformular für Buchungsanfragen
- Blog mit Gesundheits- und Detox-Tipps
- Herunterladbare Informationsmaterialien (PDFs)
- Responsive Design (Mobile, Tablet, Desktop)

---

## 🛠 Tech Stack

**Frontend:**
- HTML5 (semantisches Markup)
- CSS3 (Custom Properties, Flexbox, Grid)
- Vanilla JavaScript (ES6+)

**Styling:**
- Custom CSS mit Design System (siehe [.claude/CLAUDE.md](.claude/CLAUDE.md))
- Google Fonts (Montserrat, Open Sans)

**Entwicklung:**
- Live Server (VS Code Extension) oder Python SimpleHTTPServer
- Keine Build-Tools erforderlich (statische Website)

**Deployment:**
- Netlify (empfohlen) oder Vercel
- Automatisches SSL/HTTPS
- Integrierte Formular-Funktionalität

---

## 🚀 Lokale Entwicklung

### Voraussetzungen

- Moderner Webbrowser (Chrome, Firefox, Safari, Edge)
- Code Editor (empfohlen: VS Code)
- Optional: Python 3.x (für SimpleHTTPServer)

### Setup-Anleitung

1. **Repository klonen:**
   ```bash
   cd /path/to/your/workspace
   # Falls Git-Repo vorhanden:
   git clone <repository-url>
   cd meine-webseite
   ```

2. **Lokalen Development Server starten:**

   **Option A: VS Code Live Server (empfohlen)**
   - Installiere die [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
   - Öffne das Projekt in VS Code
   - Rechtsklick auf `index.html` → "Open with Live Server"
   - Website öffnet sich automatisch unter `http://localhost:5500`

   **Option B: Python SimpleHTTPServer**
   ```bash
   # Python 3:
   python3 -m http.server 8000

   # Dann im Browser öffnen:
   # http://localhost:8000
   ```

   **Option C: Serve.sh Script (optional)**
   ```bash
   chmod +x serve.sh
   ./serve.sh
   ```

3. **Website im Browser öffnen:**
   - Navigiere zu `http://localhost:5500` (Live Server) oder `http://localhost:8000` (Python)

---

## 📁 Projektstruktur

```
meine-webseite/
├── .claude/
│   ├── CLAUDE.md              # Design System & Projekt-Kontext
│   └── agents/
│       └── design-reviewer.md # Design-Review Agent
├── cursor-rules/
│   ├── create-prd.md          # PRD-Erstellungs-Workflow
│   └── generate-tasks.md      # Task-Generierungs-Workflow
├── docs/
│   ├── KoerperRein-PRD.md     # Product Requirements Document
│   └── KoerperRein-Tasks.md   # Detaillierte Task-Liste
├── css/
│   ├── reset.css              # CSS Reset/Normalize
│   ├── variables.css          # Design System Variablen
│   ├── global.css             # Globale Styles & Typografie
│   └── components.css         # Komponenten-Styles
├── js/
│   ├── main.js                # Haupt-JavaScript
│   └── navigation.js          # Mobile Navigation
├── assets/
│   ├── images/                # Bilder (Hero, Behandlung, Blog)
│   ├── downloads/             # PDF-Flyer
│   └── icons/                 # SVG Icons (Social Media)
├── index.html                 # Homepage
├── body-detox.html            # Body Detox Informationsseite
├── ueber-uns.html             # Über Uns
├── blog.html                  # Blog Übersicht
├── kontakt.html               # Kontaktseite mit Formular
├── faq.html                   # FAQ
├── agb.html                   # AGB & Datenschutz
└── README.md                  # Diese Datei
```

---

## 🎨 Design System

Das vollständige Design System ist in [.claude/CLAUDE.md](.claude/CLAUDE.md) dokumentiert.

**Farbpalette:**
- Primary (Teal): `#2A9D8F` - Wasser, Reinigung, Ruhe
- Secondary (Coral): `#E76F51` - Energie, Vitalität
- Accent (Golden Orange): `#F4A261` - Wellness, Wärme

**Typografie:**
- Headings: Montserrat (Modern, Clean)
- Body: Open Sans (Lesbar, Freundlich)

**Breakpoints:**
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

---

## 📝 Content-Updates

### Texte aktualisieren

1. Öffne die entsprechende HTML-Datei (z.B. `index.html`, `body-detox.html`)
2. Finde den Text, den du ändern möchtest
3. Bearbeite den Text direkt im HTML
4. Speichere die Datei
5. Lade die Seite im Browser neu (F5)

**Beispiel:**
```html
<!-- In index.html -->
<h1>Ganzkörper-Entgiftung in 30 Minuten</h1>
<!-- Ändern zu: -->
<h1>Ihr neuer Titel hier</h1>
```

### Bilder aktualisieren

1. Speichere das neue Bild in `/assets/images/`
2. Benenne es passend (z.B. `hero-waterfall.jpg`, `fussbad-vorher-nachher.jpg`)
3. Aktualisiere den `src`-Pfad im HTML:
   ```html
   <img src="assets/images/dein-bild.jpg" alt="Beschreibung">
   ```

**Optimierung:**
- Komprimiere Bilder vor dem Hochladen (z.B. mit [TinyPNG](https://tinypng.com/))
- Zielgröße: < 200KB pro Bild
- Format: WebP (mit JPG/PNG Fallback) oder optimiertes JPG

### Neue Blog-Posts hinzufügen

1. **Erstelle eine neue HTML-Datei:**
   ```bash
   # Kopiere ein bestehendes Post-Template
   cp zweiter-blog.html neuer-post.html
   ```

2. **Bearbeite den neuen Post:**
   - Titel ändern
   - Datum aktualisieren
   - Autor anpassen
   - Content einfügen

3. **Füge den Post zur Blog-Übersicht hinzu:**
   - Öffne `blog.html`
   - Füge eine neue Karte hinzu:
   ```html
   <article class="blog-card">
     <img src="assets/images/blog/neuer-post.jpg" alt="Titel">
     <h3>Neuer Post Titel</h3>
     <p class="date">20. November 2025</p>
     <p class="excerpt">Kurze Zusammenfassung...</p>
     <a href="neuer-post.html" class="read-more">Weiterlesen</a>
   </article>
   ```

4. **Bild hinzufügen:**
   - Speichere das Featured Image in `/assets/images/blog/`

### PDF-Flyer aktualisieren

1. Speichere die neue PDF in `/assets/downloads/`
2. Benenne sie passend (z.B. `flyer-cellulite.pdf`, `flyer-sport.pdf`, `flyer-entsaeuern.pdf`)
3. Download-Links aktualisieren sich automatisch, wenn Dateinamen gleich bleiben

---

## 🚢 Deployment

### Netlify Deployment (empfohlen)

1. **Netlify-Account erstellen:**
   - Gehe zu [netlify.com](https://www.netlify.com/)
   - Registriere dich (kostenlos)

2. **Git-Repository verbinden:**
   ```bash
   # Git initialisieren (falls noch nicht geschehen)
   git init
   git add .
   git commit -m "Initial commit"

   # GitHub/GitLab Repository erstellen und pushen
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

3. **Site auf Netlify deployen:**
   - In Netlify: "New site from Git" klicken
   - Repository auswählen
   - Build Settings:
     - Build command: (leer lassen)
     - Publish directory: `/` (root)
   - Deploy klicken

4. **Custom Domain konfigurieren:**
   - In Netlify: Domain settings → Add custom domain
   - `www.koerperrein.ch` hinzufügen
   - DNS-Einstellungen beim Domain-Provider anpassen:
     ```
     CNAME www -> <your-site>.netlify.app
     ```

5. **Formular konfigurieren:**
   - Netlify Forms aktiviert sich automatisch
   - In Netlify Dashboard: Forms → Notifications
   - Email-Benachrichtigungen an `tamara.benz@koerperrein.com` und `sandra.marin@koerperrein.com`

### Alternative: Vercel

1. Installiere Vercel CLI: `npm i -g vercel`
2. Deploye: `vercel`
3. Folge den Anweisungen

---

## ✅ Testing

### Manuelles Testing

**Browser-Kompatibilität:**
- Chrome (Desktop & Mobile)
- Firefox (Desktop & Mobile)
- Safari (macOS & iOS)
- Edge (Desktop)

**Responsive Design:**
- Mobile: 375px, 390px, 414px
- Tablet: 768px, 1024px
- Desktop: 1440px, 1920px

**Funktionalitäts-Checkliste:**
- [ ] Alle Links funktionieren (keine 404-Fehler)
- [ ] Navigation auf allen Seiten
- [ ] Mobile-Menü öffnet/schließt
- [ ] Kontaktformular validiert Eingaben
- [ ] Kontaktformular sendet Emails
- [ ] PDF-Downloads funktionieren
- [ ] Social Media Links öffnen in neuem Tab
- [ ] Bilder laden korrekt

### Performance-Tests

- **Google PageSpeed Insights:** [pagespeed.web.dev](https://pagespeed.web.dev/)
- **Lighthouse:** DevTools → Lighthouse → Generate Report
- **WebPageTest:** [webpagetest.org](https://www.webpagetest.org/)

**Zielwerte:**
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: > 90
- Ladezeit: < 2 Sekunden

---

## 🔧 Wartung

### Regelmäßige Updates

- **Inhalt:** Blog-Posts mindestens 1x pro Monat
- **Bilder:** Bei neuen Behandlungen/Angeboten
- **SEO:** Meta-Descriptions aktualisieren bei Content-Änderungen

### Backup

- Git-Repository dient als Backup
- Netlify speichert automatisch alle Deployments
- Empfehlung: Regelmäßige lokale Backups des `/assets/` Ordners

---

## 📞 Kontakt & Support

**Website-Betreiber:**
- Tamara Benz: [tamara.benz@koerperrein.com](mailto:tamara.benz@koerperrein.com)
- Sandra Marin: [sandra.marin@koerperrein.com](mailto:sandra.marin@koerperrein.com)

**Technische Fragen:**
- Siehe Dokumentation in `/docs/`
- [PRD](docs/KoerperRein-PRD.md) für Requirements
- [Tasks](docs/KoerperRein-Tasks.md) für Implementierungs-Details

---

## 📄 Lizenz & Credits

**Copyright:** © 2025 KörperRein.ch - Alle Rechte vorbehalten

**Design & Entwicklung:**
- Konzept: Basierend auf Wix-Website
- Design System: Dokumentiert in `.claude/CLAUDE.md`
- Entwickelt mit Claude Code

**Externe Ressourcen:**
- Google Fonts (Montserrat, Open Sans)
- Icons: Custom SVG

---

## 🗺 Roadmap

### Phase 1 (Aktuell)
- [x] Projektstruktur
- [ ] Design System (CSS)
- [ ] Homepage
- [ ] Alle Seiten (Body Detox, Über Uns, Blog, Kontakt, FAQ, AGB)
- [ ] Kontaktformular
- [ ] Deployment

### Phase 2 (Zukünftig)
- [ ] Online-Buchungskalender (Calendly-Integration)
- [ ] Kunden-Testimonials
- [ ] Newsletter-Anmeldung
- [ ] Preisliste
- [ ] Mehrsprachigkeit (FR, IT, EN)

---

## 📚 Weitere Dokumentation

- **Design System:** [.claude/CLAUDE.md](.claude/CLAUDE.md)
- **PRD:** [docs/KoerperRein-PRD.md](docs/KoerperRein-PRD.md)
- **Tasks:** [docs/KoerperRein-Tasks.md](docs/KoerperRein-Tasks.md)
- **Cursor Rules:** [cursor-rules/](cursor-rules/)

---

**Letzte Aktualisierung:** 2025-11-19
**Version:** 1.0.0
**Status:** In Entwicklung (Phase 1)
