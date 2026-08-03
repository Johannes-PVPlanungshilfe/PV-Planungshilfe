# PV Planungshilfe

Website von **PV Planungshilfe – Inhaber Johannes Ludwig**.

## Kontaktdaten

- Telefon: 05602 919221
- E-Mail: info@pvplanungshilfe.de
- Anschrift: Hopfengarten 17, 37235 Hessisch Lichtenau
- Domain: https://pvplanungshilfe.de

## Veröffentlichung über GitHub und Netlify

1. ZIP-Datei entpacken.
2. Im GitHub-Repository `Johannes-PVPlanungshilfe/PV-Planungshilfe` auf **Add file → Upload files** klicken.
3. Alle Dateien und Ordner aus diesem Projekt hochladen. Wichtig: `index.html` muss direkt im Hauptverzeichnis liegen.
4. Unten eine Commit-Nachricht eingeben, z. B. `Website Version 1.0`, und **Commit changes** auswählen.
5. In Netlify **Add new site → Import an existing project → GitHub** wählen.
6. Das Repository `PV-Planungshilfe` auswählen.
7. Build command leer lassen; Publish directory ebenfalls leer lassen oder `.` verwenden.
8. Deploy starten und anschließend `pvplanungshilfe.de` als bestehende Domain zuordnen.

## Kontaktformular

Das Formular nutzt Formspree mit dem Endpunkt `https://formspree.io/f/meeybeer`. Änderungen am Formspree-Konto werden nicht über dieses Repository verwaltet.

## Dateien

- `index.html`: Startseite
- `styles.css`: Design
- `script.js`: Navigation und Formularstatus
- `impressum.html`: Anbieterkennzeichnung
- `datenschutz.html`: Datenschutzhinweise
- `danke.html`: Bestätigung nach Kontaktanfrage
- `sitemap.xml` und `robots.txt`: SEO
- `netlify.toml`: Netlify-Header und Weiterleitungen
- `assets/`: Logo, Bilder und Favicons

## Spätere Änderungen

Änderungen können direkt in GitHub vorgenommen werden. Nach jedem Commit veröffentlicht Netlify die neue Version automatisch.
