# EmailJS Kontaktformular - Debug & Test Anleitung

## Was wurde geändert?

### 1. EmailJS Script-Reihenfolge (kontakt.html)
**Problem:** EmailJS wurde mit `defer` geladen, was bedeutete, dass es möglicherweise NACH dem contact-form.js lief.

**Lösung:**
- EmailJS wird jetzt OHNE `defer` geladen (blockierendes Script)
- Initialisierung erfolgt sofort nach dem Laden
- Console-Log "EmailJS initialized" zur Bestätigung

```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
<script>
  (function(){
    emailjs.init("cfYT-8aK2jhcc39C3");
    console.log('EmailJS initialized');
  })();
</script>
```

### 2. Form Element Bereinigung (kontakt.html)
**Problem:** Netlify-Attribute könnten versuchen, das Formular per POST zu senden.

**Lösung:**
- Alle `name` Attribute entfernt (außer bei Input-Feldern)
- Kein `method="POST"` oder `data-netlify` Attribute
- Nur das minimal notwendige `id="contactForm"`

```html
<form class="contact-form" id="contactForm">
  <input type="hidden" id="recipientField" value="tamara">
  <!-- Keine Netlify-Attribute mehr -->
</form>
```

### 3. Event Listener Verbesserung (contact-form.js)
**Problem:** Event Listener konnte überschrieben werden oder zu spät registriert werden.

**Lösung:**
- `stopImmediatePropagation()` statt nur `stopPropagation()`
- Capture-Phase aktiviert (3. Parameter `true`)
- Debug-Logs hinzugefügt

```javascript
form.addEventListener('submit', function(e) {
  console.log('Form submit event triggered');
  e.preventDefault();
  e.stopImmediatePropagation();
  console.log('Default prevented, calling handleSubmit');
  handleSubmit();
  return false;
}, true); // Capture phase!
```

### 4. Umfassende Debug-Logs (contact-form.js)
Folgende Logs wurden hinzugefügt:
- ✅ "Form submit event triggered" - Event wurde empfangen
- ✅ "Default prevented, calling handleSubmit" - Verhindert normalen Submit
- ✅ "handleSubmit called" - Funktion wurde aufgerufen
- ✅ "Form validation failed/passed" - Validation Status
- ✅ "EmailJS is available" - EmailJS Library geladen
- ✅ "Sending email with params: {...}" - Email-Parameter
- ✅ "Email sent successfully" - Erfolg
- ❌ "Email sending error" - Fehler

### 5. EmailJS Verfügbarkeits-Check
```javascript
if (typeof emailjs === 'undefined') {
  console.error('EmailJS is not loaded!');
  alert('EmailJS ist nicht geladen. Bitte laden Sie die Seite neu.');
  return;
}
```

## So testen Sie:

### Schritt 1: Hard Refresh
1. Öffnen Sie Chrome DevTools (F12)
2. Rechtsklick auf den Refresh-Button
3. Wählen Sie "Cache leeren und hart neu laden"

ODER:
- Windows: Strg + Shift + R
- Mac: Cmd + Shift + R

### Schritt 2: Console öffnen
1. Öffnen Sie die Browser-Konsole (F12 → Console Tab)
2. Löschen Sie alte Meldungen (Console-Icon mit Durchstreichung)

### Schritt 3: Formular testen
1. Navigieren Sie zu http://localhost:8000/kontakt.html
2. Wählen Sie einen Empfänger (Tamara oder Sandra)
3. Füllen Sie das Formular aus:
   - Name: Test User
   - E-Mail: test@example.com
   - Telefon: (optional)
   - Nachricht: Dies ist eine Testnachricht für EmailJS
   - ✅ Datenschutz akzeptieren

4. Klicken Sie "Nachricht senden"

### Schritt 4: Console-Logs überprüfen

**Erwartete Logs (Erfolg):**
```
EmailJS initialized
Form submit event triggered
Default prevented, calling handleSubmit
handleSubmit called
Form validation passed
EmailJS is available
Sending email with params: {from_name: "Test User", ...}
Email sent successfully: {status: 200, text: "OK"}
```

**Bei Fehler:**
```
Form submit event triggered
Default prevented, calling handleSubmit
handleSubmit called
Form validation passed
EmailJS is available
Sending email with params: {...}
Email sending error: [Error-Details]
```

**WICHTIG:** Wenn Sie "Failed to load resource: 501 POST" sehen:
- Das bedeutet, der Event Listener wurde NICHT registriert
- Machen Sie einen Hard Refresh
- Prüfen Sie, ob Scripts in der richtigen Reihenfolge laden

### Schritt 5: Network Tab überprüfen
1. Öffnen Sie DevTools → Network Tab
2. Senden Sie das Formular
3. Suchen Sie nach Requests zu "api.emailjs.com"
4. Es sollte **KEIN** Request zu ":8000/1" (501 POST) geben

**Erwartete Requests:**
- ✅ `https://api.emailjs.com/api/v1.0/email/send` (Status 200)
- ❌ `http://localhost:8000/1` (Status 501) - SOLLTE NICHT ERSCHEINEN!

## Fehlerbehebung

### Problem: "EmailJS is not loaded"
**Lösung:**
1. Prüfen Sie Network Tab - wurde `email.min.js` geladen?
2. Prüfen Sie Console - steht "EmailJS initialized"?
3. Hard Refresh durchführen

### Problem: Immer noch 501 POST Error
**Ursache:** Browser-Cache oder Event Listener nicht registriert
**Lösung:**
1. DevTools → Application → Clear storage → Clear site data
2. Browser komplett schließen und neu öffnen
3. Seite neu laden

### Problem: "Form validation failed"
**Ursache:** Felder nicht korrekt ausgefüllt
**Lösung:**
- Name: mindestens 2 Zeichen
- E-Mail: gültiges Format
- Nachricht: mindestens 10 Zeichen
- Datenschutz: muss angehakt sein

### Problem: EmailJS Error (z.B. "Invalid template")
**Ursache:** Template-Parameter stimmen nicht mit EmailJS-Template überein
**Lösung:**
1. Login zu EmailJS Dashboard
2. Prüfen Sie Template `template_tq6lvwg`
3. Variablen müssen übereinstimmen:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{telefon}}`
   - `{{message}}`
   - `{{recipient}}`
   - `{{to_email}}`

## EmailJS Template Konfiguration

### Erforderliche Template-Variablen:
```
Von: {{from_name}} <{{from_email}}>
Telefon: {{telefon}}
Empfänger: {{recipient}}

Nachricht:
{{message}}
```

### Service-Konfiguration:
- **Service ID:** service_0qovg6g (Sandra)
- **Template ID:** template_tq6lvwg
- **Public Key:** cfYT-8aK2jhcc39C3

## Erfolgs-Kriterien

✅ **Formular funktioniert, wenn:**
1. Console zeigt "Email sent successfully"
2. Grüne Success-Message erscheint
3. Formular wird zurückgesetzt
4. **KEIN** 501 POST Error in Console
5. Email erscheint im Posteingang von Sandra/Tamara

❌ **Formular funktioniert NICHT, wenn:**
1. 501 POST Error erscheint
2. "EmailJS is not loaded" Alert
3. Rote Error-Message ohne EmailJS-Fehler
4. Keine Logs in Console

## Nächste Schritte (wenn es funktioniert)

1. **Tamara's EmailJS konfigurieren:**
   - Neuen EmailJS Service für Tamara erstellen
   - Template erstellen
   - Service ID in Code eintragen

2. **Debug-Logs entfernen:**
   - Alle `console.log()` Statements entfernen
   - Alert entfernen (EmailJS-Check behalten)

3. **Production-Test:**
   - Mit echten E-Mail-Adressen testen
   - Prüfen ob Emails ankommen
   - Spam-Filter überprüfen

---

**Erstellt am:** 2025-11-30
**Status:** Bereit zum Testen
**Erwartete Testdauer:** 5-10 Minuten
