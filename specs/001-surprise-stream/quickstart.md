# Quickstart und Validierung

Die Anwendung ist statisch und enthält unverfängliche Beispielinhalte. Die Passwortabfrage ist keine Zugriffskontrolle.

## Voraussetzungen und Einrichtung

- Für die Anwendung genügt ein aktueller Browser; `index.html` direkt öffnen. Kein Server, Konto oder Datenbankdienst ist erforderlich.
- Für automatisierte Tests Node.js 24 LTS und npm installieren und `npm ci` sowie `npx playwright install chromium` ausführen.
- `npm test` für Auswahlregeln und `npm run test:e2e` für Playwright ausführen.

## Funktionstest

1. `index.html` öffnen: Bei leerem oder falschem Passwort bleibt die normale Kit-Ansicht verdeckt; `survival` öffnet die Begrüßung. Namen eingeben und prüfen, dass sofort eine Überraschung erscheint. Erneut öffnen und die Begrüßung überspringen; neutrale Anrede prüfen.
2. Bei sechs Testinhalten ohne Filter sechs Abrufe einschließlich der ersten Anzeige prüfen: Jeder Inhalt erscheint einmal. Danach darf bei mindestens zwei verfügbaren Inhalten nicht unmittelbar derselbe Inhalt erneut erscheinen.
3. Eine Art wählen, weitere Inhalte abrufen, „Something different“ auslösen und prüfen, dass eine andere Art erscheint und der Filter auf alle Arten zurückgesetzt wurde. Einen gesehenen Inhalt über den Verlauf erneut öffnen.
4. Seite neu laden und die Ansicht über den vorgesehenen Befehl sperren: In beiden Fällen erscheint die Passwortabfrage erneut. Desktop und schmales Mobilgerät mit Tastatur testen; Screenreader-Beschriftungen, Fehlermeldungen und reduzierte Bewegung prüfen. Siehe [UI-Vertrag](contracts/ui.md) und [Datenmodell](data-model.md).

## Veröffentlichung und Datenschutz

1. Dieselben Abläufe nach einer GitHub-Pages-Veröffentlichung prüfen. Zusätzlich mit Testinhalten kontrollieren, dass Quelltext und direkte Dateiadressen öffentlich einsehbar sind: Das ist die erwartete Einschränkung, keine bestandene Sicherheitsprüfung.
2. Keine wirklich vertraulichen Inhalte veröffentlichen. Persönliche Inhalte nur mit Einverständnis aller Beteiligten und im Wissen veröffentlichen, dass die Passwortabfrage keinen Schutz vor direktem Zugriff bietet.

## Prüfstand

- Unit-Tests und Playwright-Tests für Desktop und mobiles Chromium wurden lokal ausgeführt. Die direkte Dateiansicht wurde auf schmalem und breitem Bildschirm geprüft.
- Eine manuelle Screenreader-Prüfung sowie die Prüfung einer veröffentlichten GitHub-Pages-Seite stehen aus.
- Die Prüfung mit fünf Personen steht aus: Zeiten bis zur ersten Überraschung und das Wiederfinden im Verlauf beobachten; automatisierte Tests ersetzen diese Prüfung nicht.