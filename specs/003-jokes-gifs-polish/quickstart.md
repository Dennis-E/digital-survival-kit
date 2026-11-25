# Quickstart und Validierung

Witze, direkter Namensfokus, vereinfachte Bedienung und Kopf-/Fußtexte sind umgesetzt. Das GIF-Ziel ist nicht erfüllt: Aktiv ist weiterhin nur die eigene Stempelanimation; die vier gewünschten Motive einschließlich einer echten The-Office-Szene fehlen. Für einen CC-BY-SA-Katzenkandidaten schlug der Download mit HTTP 429 fehl; die Rechte für eine The-Office-Szene sind nicht nachgewiesen. Details stehen in `INHALTE.md` und `assets/CREDITS.md`.

## Voraussetzungen

1. Node.js 24 LTS und npm bereitstellen, im Repository `npm ci` und einmalig `npx playwright install chromium` ausführen.
2. Nach Umsetzung `npm test` für Auswahl- und Inhaltsprüfungen sowie `npm run test:e2e` für Desktop- und Mobilansicht ausführen. Die Tests öffnen `index.html` über `file://`.
3. Für eine manuelle Prüfung `index.html` direkt im Browser öffnen; kein Server oder Konto ist erforderlich.

## Funktionstest

1. Falsches Passwort eingeben und Fehler prüfen; mit `survival` öffnen. Ohne weiteren Tastendruck muss „Your name“ fokussiert sein. Namen eingeben, Continue und separat Skip prüfen; Reload muss wieder zur Passwortabfrage führen.
2. „Make me laugh“ sechsmal auswählen: sechs unterschiedliche kurze Witze oder Wortspiele mit erkennbarer Pointe. Bei weiteren Abrufen darf sich der zuletzt angezeigte Witz bei mindestens zwei verfügbaren Einträgen nicht unmittelbar wiederholen.
3. „Show me a GIF“ wiederholt auswählen: Für eine vollständige Freigabe müssen vier unterschiedliche tatsächliche Animationen die vier Themen abdecken. Ursprung, Rechte und Standbild für jeden Eintrag mit `INHALTE.md` und `assets/CREDITS.md` abgleichen; die vorhandene Stempelanimation zählt nicht als Ersatz.
4. Bei einem GIF Start und Stop, reduzierte Bewegung sowie einen simulierten Medienfehler prüfen. Weitere Inhalte müssen erreichbar bleiben; das Kit startet keinen Ton automatisch.
5. „Let's play“ mehrfach auswählen: Die bisherigen Ziele `phone` und `craft`, ihre Kennzeichnung und ihre freiwillige Öffnung in einem neuen Tab bleiben unverändert. Die bereits offene Prüfung des interaktiven Tons der Fremdseite bleibt separat sichtbar.
6. Passwort-, Namens- und Überraschungsansicht auf Desktop und Mobilgeräten prüfen: Kein „Seen so far“, „Lock kit“ oder „Est. for the hard days“; Widmung im Kopf und Herstellerzeile genau einmal unten. Per Tastatur prüfen, dass entfernte Bedienelemente nicht erreichbar sind.
7. Externe Requests im Browser-Test blockieren: Einstieg, Witze und Navigation bleiben nutzbar; bei nicht verfügbaren Medien erscheint eine verständliche Alternative. Eine manuelle Screenreader-Prüfung ergänzt die automatisierten Tests.

## Prüfstand

- Am 24. November 2026 bestanden `npm test` mit 14 Unit-Tests und `npm run test:e2e` mit 22 Browser-Tests; Desktop- und Mobil-Screenshots wurden auf Lesbarkeit und Überlagerungen geprüft. Die automatisierten Tests bestätigen nicht das noch offene Vier-GIF-Ziel.
- Manuelle Screenreader-Prüfung, veröffentlichte GitHub-Pages-Version und Fünf-Personen-Abnahme sind ausstehend. Der interaktive Ton von Design the Next iPhone hinter dem Einwilligungsdialog bleibt ungeprüft.

## Freigabe und Akzeptanz

- Vor öffentlicher Bereitstellung für jedes GIF die konkrete Nutzungsfreigabe, einschließlich etwaiger Standbilder, lokaler Speicherung und Namensnennung, anhand der dokumentierten Quelle prüfen. Solange echte The-Office-Szenen nicht freigegeben sind, ist das Vier-Motive-Ziel nicht erfüllt; kein fremdes GIF ungeprüft veröffentlichen.
- Mit fünf Personen prüfen, ob mindestens vier ohne Erklärung einen Witz und ein GIF aufrufen sowie nach Passworteingabe direkt einen Namen eingeben. Fehlende Testpersonen, Screenreader- oder GitHub-Pages-Prüfungen als ausstehend dokumentieren, keine Ergebnisse erfinden.
- Das öffentlich bereitgestellte Passwort schützt weder Quelltext noch persönliche Dateien. Nur Inhalte veröffentlichen, die mit Einverständnis aller Beteiligten öffentlich sein dürfen.