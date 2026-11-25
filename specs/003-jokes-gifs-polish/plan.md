# Implementation Plan: Witze, GIFs und aufgeräumter Einstieg

**Branch**: `main` | **Date**: 2026-11-24 | **Spec**: [spec.md](spec.md)

**Input**: Feature-Spezifikation `specs/003-jokes-gifs-polish/spec.md`; Spec Kit meldet `003-jokes-gifs-polish` als Feature-Kennung, nicht als tatsächlichen Git-Branch.

## Summary

Das bestehende statische Kit erhält mindestens sechs kurze englische Witze oder Wortspiele, eine echte abwechslungsreiche GIF-Auswahl und einen direkten Fokus auf dem Namensfeld. Sichtbarer Verlauf und Sperr-Button entfallen; Kopf- und Fußzeile werden bereinigt. „Let's play“, Passwortabfrage nach Neuladen und die vier Auswahlaktionen bleiben erhalten. Die Freigabe echter The-Office-Szenen ist eine offene Voraussetzung für das vollständige GIF-Ziel, keine bereits geklärte Lizenz.

## Technical Context

**Language/Version**: Bestehendes HTML, CSS und klassisches JavaScript; Node.js 24 LTS für Tests.

**Primary Dependencies**: Keine neuen Laufzeitabhängigkeiten. Vorhandener Node-Test-Runner, Playwright und `gifenc` als Entwicklungswerkzeuge; externe GIF-Plattformen sind nicht für den Kernbetrieb vorausgesetzt.

**Storage**: Statische Inhaltsdaten, lokale eigene oder ausdrücklich für diese Nutzung freigegebene GIFs mit Standbildern. `INHALTE.md` und `assets/CREDITS.md` dokumentieren Kandidaten, Herkunft und Freigabe; kein Passwort- oder Namensschutz durch Veröffentlichung.

**Testing**: Bestehende Unit- und Playwright-Suites gezielt anpassen; Inhaltsanzahl und Auswahlrunden, Fokus nach Passwort, entfernte Bedienelemente, Kopf-/Fußtexte, reduzierte Bewegung, fehlende Medien, Offline-Fallback und unveränderte „Let's play“-Links für Desktop und mobiles Chromium prüfen.

**Target Platform**: Direkte Dateiöffnung unter Windows sowie optional GitHub Pages; aktuelle Desktop- und Mobilbrowser.

**Project Type**: Statische Webanwendung ohne Datenbank, Backend oder Build-Schritt.

**Performance Goals**: Sechs verschiedene Witze in sechs Abrufen; bei fünf Testpersonen finden mindestens vier Witz, GIF und direkten Namenseinstieg ohne Erklärung.

**Constraints**: Keine nicht freigegebenen Fremdmedien veröffentlichen; echte The-Office-Szene nicht durch einen als Original ausgegebenen Platzhalter ersetzen. Kein automatischer Ton, Bewegung kontrollierbar, Texte offline nutzbar; Passwortabfrage ist keine Vertraulichkeitskontrolle.

**Scale/Scope**: Ein Kit für PERSON; keine Änderung an den bestehenden Spiel-Links, kein Mehrmandantensystem und kein neuer Zugangsschutz.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

**Vor Phase 0**: Die Constitution ist eine unbefüllte Vorlage ohne ratifizierte Gates; keine zusätzlichen Regeln werden unterstellt. Kein festgestellter Verstoß.

**Nach Phase 1**: Kein festgestellter Verstoß. Die Anforderungen zu Datenschutz, Bedienbarkeit und Medienrechten folgen aus der Spezifikation. Die noch fehlende Rechtefreigabe für echte The-Office-Szenen ist eine explizite Liefer- und Veröffentlichungsabhängigkeit, keine als erledigt ausgegebene Annahme.

## Project Structure

### Documentation (this feature)

```text
specs/003-jokes-gifs-polish/
├── spec.md
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
└── contracts/ui.md
```

### Source Code (repository root)

```text
index.html             # Einstieg, Auswahl sowie Kopf- und Fußzeile
script.js              # Ansichtswechsel, Fokus und Mediensteuerung
selection.js           # Auswahlrunden und Datenvalidierung
surprises.js           # Witze, freigegebene GIFs und bestehende Spiele
style.css              # responsive Darstellung und Fokuszustände
assets/                # freigegebene lokale GIFs, Standbilder und CREDITS.md
INHALTE.md             # Übersicht der Inhalte, Kandidaten und Freigaben
tests/unit/            # Datenvalidierung und Auswahlregeln
tests/e2e/             # Desktop-/Mobilabläufe und Medienverhalten
```

**Structure Decision**: Die bestehende Struktur und ihre Tests bleiben erhalten. Nur die UI für Verlauf und Sperren wird entfernt; sofern interne Auswahldaten für Wiederholungsvermeidung nötig bleiben, sind sie kein sichtbarer Verlauf. Die beiden bestehenden Spiel-Einträge und deren Linkverhalten werden nicht verändert.

## Delivery Design

1. Mindestens sechs geeignete kurze Witze mit eigener oder geklärter Herkunft ergänzen. Bestehende Inhalte nicht unnötig löschen; aktive „Laugh“-Einträge müssen erkennbare Pointen enthalten und ohne direkte Wiederholung abrufbar sein.
2. Vier unterschiedliche tatsächliche GIFs auswählen: Katzen, eine echte Szene aus The Office, harmlose Missgeschicke und Sprachpannen. Für jedes GIF vor Aktivierung Rechteumfang, Herkunft, Nutzung und benötigte Namensnennung in `assets/CREDITS.md` sowie Status in `INHALTE.md` dokumentieren. Lokale Dateien nur verwenden, wenn Download und öffentliche Bereitstellung ausdrücklich abgedeckt sind.
3. Solange die erforderlichen Rechte, insbesondere für The Office, nicht nachgewiesen sind, Witze und UI unabhängig entwickeln; die GIF-Anforderung und eine Veröffentlichung, die diese als erfüllt ausgibt, bleiben blockiert. Ein bloßer externer Link oder ein eigenes Büromotiv zählt nicht als echte Szene im Kit.
4. `index.html`, `script.js` und bestehende Tests für den direkten Namensfokus, das Entfernen der Bedienelemente und die gewünschte Textplatzierung anpassen. Passwort nach Reload, Skip, Anrede und bestehendes „Let's play“ unverändert prüfen.
5. Unit- und Browserprüfungen für Auswahlrunden, GIF-Steuerung, Rechteinventar, Offline-Fehler, Fokus, Texte und Desktop/Mobil ausführen. Echte manuelle Screenreader-, Pages- und Fünf-Personen-Prüfungen nur als bestanden dokumentieren, wenn sie tatsächlich durchgeführt wurden.

## Complexity Tracking

Keine Verletzung einer ratifizierten Constitution festgestellt; keine zusätzliche Infrastruktur erforderlich.
