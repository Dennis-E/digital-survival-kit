# Implementation Plan: Spielerische Überraschungen

**Branch**: `main` | **Date**: 2026-11-24 | **Spec**: [spec.md](spec.md)

**Input**: Feature-Spezifikation `specs/002-playful-surprises/spec.md`; Spec Kit meldet `002-playful-surprises` als Feature-Kennung, nicht als tatsächlichen Git-Branch.

## Summary

Das bestehende statische Kit erhält einen humorvollen Einstieg ohne Straßenmotiv, klar getrennte Inhaltsanzeige und vier Aktionen: drei Inhaltsarten sowie einen größeren „I'm feeling lucky“-Button. Texte, ein eigenes GIF mit Standbild und ein kuratierter externer Link ergänzen den Strom. Passwortabfrage, optionaler Name, Verlauf und direkter Dateibetrieb bleiben erhalten. Die bereits erstellte Inhaltsübersicht dient der Auswahl und enthält keine automatische Medienfreigabe.

## Technical Context

**Language/Version**: HTML, CSS und klassisches JavaScript; Node.js 24 LTS ausschließlich für Entwicklungstests.

**Primary Dependencies**: Keine neuen Laufzeitabhängigkeiten; vorhandener Node-Test-Runner und Playwright für Unit- und Browserprüfungen. Kein Build-Schritt.

**Storage**: Statische Inhaltsdaten und selbst erstellte beziehungsweise freigegebene Medien mit relativen Pfaden; Name, Auswahlzustand und Verlauf nur im Arbeitsspeicher der Seite. Die lokale Passwortabfrage schützt veröffentlichte Dateien nicht.

**Testing**: Bestehende Unit-Tests für `SurpriseDeck` erweitern und veraltete Dropdown-/Button-Tests auf das neue Interaktionsmodell umstellen; Playwright mit Desktop und mobilem Chromium über `file://`, reduzierter Bewegung, Tastatur, fehlenden Medien und blockierten externen Requests. Ergänzend manuelle Screenreader- und Fünf-Personen-Tests.

**Target Platform**: Direkte Dateiöffnung unter Windows sowie optional GitHub Pages; aktuelle Desktop- und Mobilbrowser.

**Project Type**: Statische Webanwendung ohne Datenbank, Backend oder Frontend-Framework.

**Performance Goals**: Bei fünf Testpersonen erkennen mindestens vier Inhalt und Aktionen und können eine Kategorie erneut auswählen; keine künstlichen Wartezeiten beim Wechsel lokaler Inhalte.

**Constraints**: Drei Kategorien und ein größerer übergreifender Button, keine doppelte Kategorieauswahl; keine Straße, kein automatisch startender Ton, keine unkontrollierbare Bewegung; Texte und Navigation ohne Netzwerk; nur für Veröffentlichung freigegebene Medien und Links. Keine vertraulichen öffentlichen Inhalte.

**Scale/Scope**: Ein Kit für PERSON; keine Mehrmandanten-Erstellung, kein echter Zugriffsschutz und keine Integration fremder Medien ohne geprüfte Rechte.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

**Vor Phase 0**: Die Constitution ist eine unbefüllte Vorlage ohne ratifizierte Gates; keine Regeln werden erfunden. Kein festgestellter Verstoß.

**Nach Phase 1**: Kein festgestellter Verstoß. Spezifikation und Design halten die Grenzen der Passwortabfrage, Barrierefreiheit und Rechteprüfung fest; echte Vertraulichkeit bleibt ausdrücklich außerhalb dieses Features.

## Project Structure

### Documentation (this feature)

```text
specs/002-playful-surprises/
├── spec.md
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
└── contracts/ui.md
```

### Source Code (repository root)

```text
index.html             # Einstieg, Überraschung und vier Auswahlaktionen
style.css              # verspielte Bildwelt und responsive Darstellung
script.js              # Ansichtswechsel, Medien- und Interaktionszustand
selection.js           # Auswahlrunden, Kategorien und Verlauf
surprises.js           # strukturierte, freigegebene Inhalte
assets/                # geplant: eigene lokale Bild- und GIF-Dateien samt Standbildern
INHALTE.md             # bestehende Übersicht und Feedbackgrundlage
tests/unit/            # Auswahl und Datenvalidierung
tests/e2e/             # Browserabläufe, Medien, Fehler und Barrierefreiheit
```

**Structure Decision**: Vorhandene Dateien und Tests gezielt weiterentwickeln. Neue Medien als lokale Assets mit dokumentierter Herkunft und Rechten ablegen; keine dynamischen Datenimporte, die `file://` ausschließen. `INHALTE.md` bleibt der vollständige Bestand und Ideenpool, nicht die alleinige Freigabeliste für veröffentlichte Medien.

## Delivery Design

1. Ausgangsbestand und Testfälle erhalten, Kennungen der acht Texte in `INHALTE.md` unverändert führen und Freigabezustand klar vom Ideenpool trennen. Die vier ruhigen Texte bleiben im Datenbestand und der Übersicht erhalten, werden aber bis zur Entscheidung nicht als „Make me laugh“ ausgegeben.
2. `selection.js` so anpassen, dass ein erneuter Klick auf dieselbe Kategorie den laufenden Durchlauf fortsetzt; Kategorienwechsel und Wechsel zu „I'm feeling lucky“ setzen den passenden Pool zurück. Bei mindestens zwei passenden Einträgen nie direkt denselben Inhalt erneut zeigen; Verlauf bleibt unabhängig von der Auswahl.
3. Ein eigenes humorvolles Bitmap-Motiv und mindestens ein eigenes lokales GIF mit passendem Standbild erstellen oder ein eindeutig freigegebenes Asset verwenden; Herkunft, Rechte und Namensnennung dokumentieren. GIFs zunächst als Standbild anzeigen; Start und Stopp erfolgen auf Wunsch, bei reduzierter Bewegung standardmäßig keine Animation.
4. Drei klare Kategorie-Buttons und einen größeren Zufallsbutton, lustige englische Einstiegstexte sowie eindeutig als Inhalt erkennbare Überraschungen umsetzen. Einen konkret geprüften externen Link nur nach Klick und mit Hinweis öffnen; lokale Texte bleiben offline nutzbar.
5. Passwort-/Namensdialog, Sperren, Verlauf, Auswahlrunden, Medienfehler und Offline-/Bewegungszustände durch Unit- und Browsertests prüfen. Fünf-Personen-Test, Screenreader-Prüfung und Kontrolle einer späteren Pages-Veröffentlichung als externe Abnahme dokumentieren, solange sie nicht durchgeführt wurden.

## Complexity Tracking

Keine Verletzung einer ratifizierten Constitution festgestellt; keine zusätzliche Infrastruktur erforderlich.
