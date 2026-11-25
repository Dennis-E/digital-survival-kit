---
description: "Aufgaben für Witze, GIFs und aufgeräumten Einstieg"
---

# Tasks: Witze, GIFs und aufgeräumter Einstieg

**Input**: `specs/003-jokes-gifs-polish/spec.md`, `plan.md`, `research.md`, `data-model.md`, `contracts/ui.md` und `quickstart.md`.

**Organisation**: Die Aufgaben sind nach Benutzererzählungen gruppiert. `[P]` kennzeichnet nur nach abgeschlossenen Voraussetzungen unabhängig bearbeitbare Aufgaben in unterschiedlichen Dateien. Tests entsprechen den in der Spezifikation verlangten Prüfszenarien.

## Phase 1: Setup

**Ziel**: Vorhandene Testumgebung wiederverwenden, ohne Backend oder neue Laufzeitabhängigkeiten.

- [x] T001 In `package.json` und `package-lock.json` die vorhandenen Testskripte prüfen und die Entwicklungsumgebung mit `npm ci` sowie `npx playwright install chromium` vorbereiten; keinen Build-Schritt für die Anwendung einführen.
- [x] T002 [P] In `playwright.config.js` prüfen, dass Desktop und mobiles Chromium weiterhin die lokale `index.html` über `file://` testen; bestehende Konfiguration nur bei Bedarf ändern.

## Phase 2: Grundlagen

**Ziel**: Bestehende Auswahl und Spielinhalte als gemeinsame Grundlage absichern.

- [x] T003 In `tests/unit/selection.test.js` die bestehende Auswahlvalidierung und Runden ohne unmittelbare Wiederholung für `category`: „`all`, `laugh`, `gif` oder `play`“ sowie leere und einzelne Einträge absichern.
- [x] T004 In `tests/e2e/external-links.spec.js` die bestehenden Spiele `phone` und `craft`, ihre Zieladressen, Kennzeichnung und freiwillige Öffnung im neuen Tab als unveränderte Vertragsprüfung festhalten; den offenen Prüfpunkt zum Ton der Fremdseite nicht als erledigt ausgeben.

## Phase 3: User Story 1 - Echte Witze lesen (P1)

**Ziel**: Mindestens sechs kurze englische Witze oder Wortspiele mit erkennbarer Pointe verfügbar machen.

**Unabhängiger Test**: „Make me laugh“ sechsmal auswählen und sechs unterschiedliche, freundliche Witze mit Pointe sehen; der nächste Abruf wiederholt den letzten nicht unmittelbar.

- [x] T005 [P] [US1] In `tests/unit/content-inventory.test.js` mindestens sechs aktive, unterschiedliche `laugh`-Einträge mit gültigen Kennungen und nicht leeren Texten prüfen; die Prüfung auf Bestandsdaten an das neue Ziel anpassen, ohne Daten unbemerkt zu löschen.
- [x] T006 [P] [US1] In `tests/e2e/categories.spec.js` sechs unterschiedliche Witzabrufe und die Vermeidung unmittelbarer Wiederholungen prüfen; die vier Auswahlaktionen bleiben erhalten.
- [x] T007 [US1] In `surprises.js` mindestens sechs eigene oder für diese Nutzung freigegebene kurze englische Witze mit erkennbarer Pointe eintragen; ein aktiver Witz hat „stabiler eindeutiger `id`“, `category: laugh`, `kind: text`, „nicht leerem Titel“ und „englischem Text mit erkennbarer Pointe“; bisherige ungeeignete Texte nicht als Witz ausgeben.
- [x] T008 [US1] In `INHALTE.md` jeden neuen Witz mit Kennung, vollständigem Text und Herkunft beziehungsweise eigener Erstellung zur Rückmeldung auflisten; bestehende Feedbackinhalte und Einträge erhalten.
- [x] T009 [US1] In `selection.js` den bestehenden Kategorien-Durchlauf nur soweit nötig anpassen, dass wiederholte Witzabrufe vor einer Wiederholung den Pool durchlaufen und bei mindestens zwei verfügbaren Einträgen nicht unmittelbar denselben Witz zeigen.

## Phase 4: User Story 3 - Direkt und mit weniger Ablenkung starten (P1)

**Ziel**: Nach der Passwortabfrage sofort das Namensfeld fokussieren und die zwei unerwünschten Bedienwege entfernen.

**Unabhängiger Test**: Passwort per Tastatur bestätigen und ohne weitere Navigation den Namen eingeben; Skip und Reload testen; „Seen so far“ und „Lock kit“ sind weder sichtbar noch per Tastatur erreichbar.

- [x] T010 [P] [US3] In `tests/e2e/accessibility.spec.js` und `tests/e2e/password-gate.spec.js` direkten Fokus auf „Your name“, sofortiges Tippen, Skip und Passwortabfrage nach Reload testen; Erwartungen an Verlauf und Sperr-Button entfernen.
- [x] T011 [P] [US3] In `tests/e2e/history.spec.js` die bisherigen Verlaufstests durch einen Regressionstest ersetzen, der die Abwesenheit von „Seen so far“ und „Lock kit“ in sichtbarer Oberfläche und Tastaturpfad prüft.
- [x] T012 [US3] In `index.html` die Bedienwege „Seen so far“ und „Lock kit“ samt zugehöriger sichtbarer Ansichten entfernen; drei Kategorien, „I'm feeling lucky“, Passwort- und Namensformular sowie Skip erhalten.
- [x] T013 [US3] In `script.js` nach erfolgreichem Passwort das sichtbare Namensfeld unmittelbar fokussieren; `unlocked` bleibt „Nur für die aktuelle Seiteninstanz; Reload zeigt die Passwortabfrage erneut“ und `name` bleibt „Optional, getrimmt und höchstens 40 Zeichen; leer ergibt `friend`“.
- [x] T014 [US3] In `script.js` verwaiste Listener und UI-Zugriffe auf Verlauf und Sperren entfernen; interne Auswahlzustände für Wiederholungsvermeidung erhalten und keine nicht mehr vorhandenen Elemente dereferenzieren.
- [x] T015 [US3] In `style.css` ausschließlich nicht mehr benötigte Verlauf-/Sperr-Styles entfernen und sichtbaren Tastaturfokus sowie responsive Darstellung der verbleibenden Aktionen erhalten.

## Phase 5: User Story 2 - Abwechslungsreiche lustige GIFs entdecken (P1)

**Ziel**: Mindestens vier unterschiedliche, rechtmäßig verwendbare tatsächliche Animationen zu den gewünschten Themen anbieten.

**Unabhängiger Test**: Mehrfach die GIF-Kategorie wählen, vier unterschiedliche echte Animationen mit Themenabdeckung prüfen und für jedes Medium Quelle, Rechte, Standbild, Textalternative und Bewegungssteuerung abgleichen.

- [ ] T016 [P] [US2] In `tests/e2e/media.spec.js` unterschiedliche GIF-Einträge, Start/Stopp, reduzierte Bewegung und eine verständliche Alternative bei fehlender Datei prüfen; die Stempelanimation nicht als Ersatz für die vier gewünschten Motive zählen.
- [ ] T017 [P] [US2] In `tests/unit/content-inventory.test.js` die geforderten vier unterschiedlichen GIF-IDs, Themen `cat`, `the-office`, `mishap`, `language` und dokumentierten Freigabestatus prüfen; bei fehlender Freigabe den Test als ausstehendes Ziel behandeln, nicht fingieren.
- [x] T018 [US2] In `INHALTE.md` Kandidaten für „Katzen, The Office, harmlose menschliche Missgeschicke und englische Sprachpannen“ mit eindeutiger `id`, Titel, Beschreibung und einem oder mehreren Themen `cat`, `the-office`, `mishap`, `language` aufnehmen; Sprachpannen dürfen nicht auf Kosten von Nationalität oder Akzent gehen.
- [x] T019 [US2] In `assets/CREDITS.md` für jeden Kandidaten „Herkunft, Rechteinhaber, Quelle, spezifische Nutzungsfreigabe, gegebenenfalls Namensnennung, Einschränkungen“ und Status `ungeprüft`, `angefragt`, `freigegeben` oder `abgelehnt` dokumentieren; tatsächliche öffentliche Nutzung, lokale Kopie und Standbild einzeln abdecken.
- [ ] T020 [US2] Für das echte The-Office-GIF die konkrete öffentliche Nutzungsfreigabe einschließlich Bereitstellung und Standbild in `assets/CREDITS.md` nachweisen; falls eine Freigabe nur durch den Nutzer beziehungsweise Rechteinhaber beschafft werden kann, Aufgabe und vollständiges GIF-Ziel offen lassen, keine ungeprüfte Kopie veröffentlichen und keinen bloßen Link als Erfüllung ausgeben.
- [ ] T021 [US2] In `assets/` mindestens vier unterschiedliche tatsächliche Animationen samt geeigneten ruhigen Alternativen nur nach nachgewiesener Freigabe bereitstellen; eine echte The-Office-Szene darf nicht durch ein als Original ausgegebenes eigenes Büromotiv ersetzt werden.
- [ ] T022 [US2] In `surprises.js` nur freigegebene lokale GIF-Einträge aktivieren: `category: gif`, `kind: gif`, „relative Medien- und Standbildpfade“, „eine beschreibende Textalternative“ und „einen Verweis auf die dokumentierten Rechte“; bei fehlenden Rechten die vollständige Themenabdeckung offen ausweisen.
- [ ] T023 [US2] In `script.js` die bestehende GIF-Steuerung für mehrere Einträge erhalten: `motion` bleibt „GIF zunächst ruhig, nur auf Wunsch animiert; Stop oder Aktivierung reduzierter Bewegung stellt die ruhige Ansicht wieder her“; Medienfehler lassen andere Auswahlen erreichbar und Ton startet nicht automatisch.
- [x] T024 [US2] In `INHALTE.md` den tatsächlichen Aktivierungs- und Freigabestatus jedes ausgewählten GIFs sowie weiterhin ungeklärte Rechte und die Auswirkung auf das Vier-Motive-Ziel festhalten; keine Zustimmung aus ausbleibendem Feedback ableiten.

## Phase 6: User Story 4 - Eine klare Kopf- und Fußzeile sehen (P2)

**Ziel**: Die Widmung im Kopf und die humorvolle Herstellerzeile einmalig im unteren Fußbereich anzeigen.

**Unabhängiger Test**: Kopf und Fuß in Passwort-, Namens- und Überraschungsansicht auf Desktop und Mobilgeräten prüfen; alte und doppelte Texte fehlen.

- [x] T025 [P] [US4] In `tests/e2e/visual.spec.js` die gewünschten Kopf- und Fußtexte, ihre eindeutige Platzierung und das Fehlen von „A little something for you“ und „Est. for the hard days“ über alle drei Ansichten auf Desktop und Mobilgeräten prüfen.
- [x] T026 [US4] In `index.html` „Made for one very good human“ statt „A little something for you“ im Kopf anzeigen, „Made with care & questionable humour“ genau einmal an die bisherige Stelle der Widmung im unteren Fußbereich setzen und „Est. for the hard days“ sowie die alte Kopie entfernen.
- [x] T027 [US4] In `style.css` die Widmung auch auf schmalen Anzeigen sichtbar und lesbar halten; Kopf- und Fußtexte dürfen sich nicht überlagern und der bisherige Markenhinweis bleibt erhalten.

## Phase 7: Übergreifende Prüfung und Abschluss

**Ziel**: Regressionen, Rechte und tatsächlich durchgeführte Abnahmen nachvollziehbar prüfen.

- [x] T028 [P] In `tests/e2e/greeting-stream.spec.js` und `tests/e2e/external-links.spec.js` den vollständigen Ablauf mit direktem Namensfokus, Skip und unveränderten „Let's play“-Zielen `phone` und `craft` auf Desktop und Mobilgeräten prüfen.
- [x] T029 [P] In `tests/e2e/accessibility.spec.js` Tastaturbedienung der verbleibenden Aktionen, reduzierte Bewegung und fehlenden automatischen Ton prüfen; externe Anforderungen durch Screenreader nicht als automatisch bestanden ausgeben.
- [x] T030 In `tests/` `npm test` und `npm run test:e2e` ausführen, Regressionen beheben und Desktop-/Mobil-Screenshots auf lesbare Texte und überlappungsfreie Darstellung prüfen; ungeprüfte GIF-Rechte nicht als bestandene Tests darstellen.
- [x] T031 In `specs/003-jokes-gifs-polish/quickstart.md` tatsächliche Testergebnisse dokumentieren und manuelle Screenreader-, GitHub-Pages- und Fünf-Personen-Prüfung durchführen oder ausdrücklich als ausstehend kennzeichnen.
- [ ] T032 In `specs/003-jokes-gifs-polish/quickstart.md` vor Veröffentlichung bestätigen, dass vier freigegebene GIFs alle Themen abdecken; solange insbesondere die The-Office-Freigabe fehlt, diese Aufgabe und das vollständige GIF-Ziel offen lassen. Die einfache Passwortabfrage nicht als Schutz vertraulicher Inhalte ausgeben.

## Dependencies & Execution Order

- Phase 1 → Phase 2 → US1: Vorhandene Tests und Spielverträge bilden die gemeinsame Grundlage.
- US3 ist ebenfalls P1 und folgt hier vor US2, damit direkter Fokus und die Entfernung der Bedienelemente ohne eine externe Rechtefreigabe umsetzbar sind.
- US2 erfordert pro GIF überprüfte Nutzungsrechte. T020 blockiert T021/T022 für die echte The-Office-Szene und T032 für das vollständige Vier-Motive-Ziel; fehlende Freigaben bleiben offen und dürfen nicht als bestandene Abnahme markiert werden.
- US4 hängt fachlich nicht von GIF-Rechten ab und kann nach den gemeinsamen Grundlagen umgesetzt werden; Änderungen an `index.html` und `style.css` mit US3 abstimmen und nacheinander durchführen.
- Phase 7 folgt auf die jeweils tatsächlich umgesetzten Storys. Screenreader-, Pages- und Fünf-Personen-Prüfungen werden nur bei tatsächlicher Durchführung als bestanden dokumentiert.

## Parallel Examples

- **US1**: T005 und T006 bearbeiten unterschiedliche Testdateien; Inhalts- und Auswahländerungen folgen danach.
- **US3**: T010 und T011 bearbeiten unterschiedliche Testdateien; T012–T015 anschließend abgestimmt bearbeiten.
- **US2**: T016 und T017 bearbeiten unterschiedliche Testdateien; Rechteerfassung und Aktivierung folgen nachweisbar vor Veröffentlichung.
- **US4**: T025 kann nach den Grundlagen unabhängig vorbereitet werden; T026/T027 betreffen Dateien, die auch US3 ändert, und werden deshalb abgestimmt oder nacheinander umgesetzt.
- **Abschluss**: T028 und T029 betreffen getrennte Testdateien und können nach den jeweiligen Storys parallel vorbereitet werden.

## Implementation Strategy

1. **MVP**: Grundlagen, US1 und US3 liefern echte Witze, direkten Namensfokus und weniger Ablenkung ohne externe Rechteabhängigkeit.
2. **Weitere Inkremente**: US4 bereinigt die Texte; US2 ergänzt tatsächlich freigegebene GIFs. Die Spiele bleiben unverändert.
3. **Abnahme**: Nur tatsächlich nachgewiesene Rechte und durchgeführte Tests als bestanden dokumentieren. Solange eine echte The-Office-Szene nicht freigegeben ist, bleibt das vollständige GIF-Ziel offen.