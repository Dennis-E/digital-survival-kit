---
description: "Aufgaben für spielerische Überraschungen"
---

# Tasks: Spielerische Überraschungen

**Input**: `specs/002-playful-surprises/spec.md`, `plan.md`, `research.md`, `data-model.md`, `contracts/ui.md` und `quickstart.md`.

**Organisation**: Aufgaben sind nach Benutzererzählungen gruppiert. `[P]` kennzeichnet nur nach abgeschlossenen Voraussetzungen unabhängig bearbeitbare Aufgaben in unterschiedlichen Dateien. Die Tests setzen die in der Spezifikation verlangten Prüfszenarien um.

## Phase 1: Setup

**Ziel**: Vorhandene Testumgebung wiederverwenden, ohne Backend oder neue Laufzeitabhängigkeiten.

- [X] T001 In `package.json` und `package-lock.json` die vorhandenen Testskripte und Playwright-Abhängigkeit prüfen und mit `npm ci` sowie `npx playwright install chromium` die bestehende Entwicklungsumgebung vorbereiten; keinen Build-Schritt für die Anwendung einführen.
- [X] T002 [P] In `playwright.config.js` prüfen, dass Desktop und mobiles Chromium weiterhin die lokale `index.html` über `file://` testen; bestehende Konfiguration nur bei Bedarf ändern.

## Phase 2: Grundlagen

**Ziel**: Gemeinsame Inhaltsvalidierung und unveränderten Ausgangsbestand vorbereiten.

- [X] T003 In `tests/unit/selection.test.js` Prüfungen für doppelte IDs, fehlende Pflichtfelder, ungültige Kategorien und Inhaltstypen sowie den Ausschluss inaktiver Inhalte ergänzen.
- [X] T004 In `surprises.js` die acht bestehenden Kennungen, Titel und Texte erhalten; vier ruhige Einträge ausdrücklich inaktiv markieren, ohne sie zu löschen oder als Witze auszugeben. Für aktive Einträge die Modellregeln „stabile, eindeutige `id`“, „verständlichen `title`“, „nicht leere `body`-Beschreibung“ und `category`: `laugh`, `gif` oder `play` sowie `kind`: `text`, `gif` oder `link` berücksichtigen.
- [X] T005 In `selection.js` die bestehende Validierung für `surprises.js` so erweitern, dass doppelte IDs, fehlende Pflichtfelder, ungültige Kategorien/Arten und inaktive Einträge übersprungen werden; weiterhin als klassisches Skript unter `file://` und für Node-Tests verwendbar bleiben.

## Phase 3: User Story 1 - Eine lustige Überraschung wählen (P1)

**Ziel**: Drei direkte Kategorien und einen größeren übergreifenden Zufallsbutton anbieten; Inhalt und Aktionen sind unterscheidbar.

**Unabhängiger Test**: Mit mindestens zwei Testinhalten pro verwendeter Kategorie dieselbe Kategorie zweimal und danach Lucky wählen; Auswahl, Wiederholungsverhalten und genau vier Auswahlaktionen prüfen.

- [X] T006 [P] [US1] In `tests/unit/category-selection.test.js` Tests für fortgesetzte Runden bei erneutem Kategorienklick, Poolwechsel, Lucky aus `all`, zehn Abrufe ohne direkte Wiederholung und null/einen passenden Inhalt ergänzen.
- [X] T007 [P] [US1] In `tests/e2e/categories.spec.js` die bisherigen Dropdown-Tests durch drei Kategorie-Buttons und einen größeren „I'm feeling lucky“-Button ersetzen; kein Dropdown und keine redundante Kategorieauswahl erwarten.
- [X] T008 [P] [US1] In `tests/e2e/history.spec.js` Wiederfinden nach einem Poolwechsel sowie die Rückkehr zur aktiven Auswahl und das Zurücksetzen beim Sperren prüfen.
- [X] T009 [US1] In `selection.js` `category` gemäß „`all` oder eine der drei Kategorien“ behandeln; bei erneutem Drücken derselben Kategorie `remainingIds` fortsetzen, beim Poolwechsel neu aufbauen und bei mindestens zwei passenden Einträgen direkte Wiederholung verhindern.
- [X] T010 [US1] In `selection.js` Lucky aus dem `all`-Pool und den Verlauf implementieren: `currentId` ist „Aktuelle Überraschung oder leer“, `remainingIds` sind „Noch nicht gezogene IDs des aktiven Pools“ und `seenIds` sind „Geordnete, eindeutige IDs bereits angezeigter Inhalte“; Verlauf beim Poolwechsel erhalten und beim Wiederöffnen dessen ID aus dem offenen Durchlauf entfernen.
- [X] T011 [US1] In `index.html` Dropdown, Another one und Something different durch genau drei klar benannte Kategorie-Buttons und einen größeren „I'm feeling lucky“-Button ersetzen; den Verlauf als separaten Rückblick beibehalten.
- [X] T012 [US1] In `script.js` die vier Buttons an `selection.js` anschließen, die erste Überraschung direkt zeigen, Inhalt als Text sicher darstellen, leere Kategorien verständlich behandeln und beim Anzeigenwechsel den Tastaturfokus nicht unerwartet verschieben.
- [X] T013 [US1] In `style.css` Inhalt sichtbar von den Aktionen abgrenzen und die vier Buttons responsiv, mit sichtbarem Fokus, stabilen Abmessungen und mindestens 44 × 44 CSS-Pixeln als Ziel gestalten.

## Phase 4: User Story 2 - Mit einem Schmunzeln begrüßt werden (P1)

**Ziel**: Straßenmotiv und ernste Texte durch eine liebevolle, überraschende visuelle und sprachliche Richtung ersetzen.

**Unabhängiger Test**: Passwortdialog mit falschem und richtigem Passwort sowie Namenseinstieg mit Eingabe und Skip durchlaufen; keine Straße erscheint und die erste Überraschung ist direkt erreichbar.

- [X] T014 [P] [US2] In `tests/e2e/greeting-stream.spec.js` und `tests/e2e/password-gate.spec.js` Passwortfehler, Namenseingabe, Skip, Sperren und Reload für den neuen Einstieg erhalten und veraltete Button-Erwartungen aktualisieren.
- [X] T015 [US2] Ein eigenes oder eindeutig zur Veröffentlichung freigegebenes humorvolles Bitmap-Motiv für die bisherige Bildfläche unter `assets/good-day-department.webp` erstellen oder beschaffen; Herkunft, Rechte und erforderliche Namensnennung in `assets/CREDITS.md` dokumentieren, keine ungeprüften Fremdbilder übernehmen.
- [X] T016 [US2] In `index.html` die Beschriftungen von Passwort- und Namensdialog auf kurze, humorvolle und verständliche englische Texte umstellen; das beschriftete Passwortfeld, den freiwilligen Namen und Skip erhalten.
- [X] T017 [US2] In `script.js` die falsche Passworteingabe freundlich und humorvoll erklären; `unlocked` gilt „Nur während der aktuellen Seiteninstanz; Neuladen und Sperren setzen zurück“ und `name` bleibt „Optional, getrimmt, höchstens 40 Zeichen; leer ergibt `friend`“.
- [X] T018 [US2] In `style.css` das Straßenbild durch `assets/good-day-department.webp` ersetzen und die verspielte Good-Day-Department-Gestaltung auf Mobilgeräten und Desktop umsetzen; ausreichend Kontrast, reduzierte Bewegung und direkte Dateiöffnung erhalten.

## Phase 5: User Story 3 - GIFs und Fundstücke entdecken (P2)

**Ziel**: Ein rechtlich unbedenkliches lokales GIF und mindestens einen bewusst auswählbaren externen Fund bereitstellen.

**Unabhängiger Test**: GIF-Kategorie wählen, Standbild sehen, Animation starten und stoppen; externen Link in einem neuen Tab öffnen und bei fehlendem Medium oder Netzwerk im Kit weiter navigieren.

- [X] T019 [P] [US3] In `tests/e2e/media.spec.js` Standbild vor Start, GIF-Start/Stopp, Textalternative, reduzierte Bewegung einschließlich Änderung während der Sitzung sowie einen simulierten Medienfehler prüfen.
- [X] T020 [P] [US3] In `tests/e2e/external-links.spec.js` den gekennzeichneten externen Link, Öffnung nur nach Klick im neuen Tab, Erhalt des Kit-Tabs und nutzbare lokale Inhalte bei blockierten externen Requests prüfen.
- [X] T021 [US3] Ein selbst erstelltes oder eindeutig freigegebenes lokales GIF `assets/surprise.gif` und passendes Standbild `assets/surprise-still.png` bereitstellen; in `assets/CREDITS.md` Ersteller, Herkunft, Nutzungsrechte, erforderliche Namensnennung und Veröffentlichungsfreigabe dokumentieren.
- [ ] T022 [US3] Das vorgeschlagene Ziel `https://neal.fun/design-the-next-iphone/` anhand von `INHALTE.md` erneut auf Inhalt, Werbung/Datenschutz, Ton und Eignung prüfen; eine dokumentierte Freigabe und Warnhinweise in `assets/CREDITS.md` festhalten oder bei Nichteignung einen anderen einzeln geprüften Fund wählen.
- [X] T023 [US3] In `surprises.js` mindestens einen freigegebenen `gif`-Eintrag mit „Relative Pfade für GIF und Standbild, beschreibender Alternativtext, Herkunft/Rechte“ und einen `link`-Eintrag mit „HTTPS-Ziel, sichtbarer Name des Angebots, Warnhinweis falls nötig“ anlegen; `kind` ist `text`, `gif` oder `link`, `category` ist `laugh`, `gif` oder `play`.
- [X] T024 [US3] In `index.html` eindeutig beschriftete Start-/Stop-Aktionen für GIFs und einen als extern und neuer Tab erkennbaren Link mit erreichbarem Ersatz bei Medienfehlern vorsehen.
- [X] T025 [US3] In `script.js` GIF zunächst als lokales Standbild anzeigen, nur auf Wunsch animieren und durch Stop oder Aktivieren reduzierter Bewegung wieder zum Standbild wechseln; `motion` ist „`still` oder `playing`“ und wird „beim Inhaltswechsel, Sperren oder Aktivieren reduzierter Bewegung zurück auf `still`“ gesetzt.
- [X] T026 [US3] In `script.js` externes HTTPS-Ziel nur nach Klick öffnen, den Kit-Tab erhalten und Online-Abhängigkeit kommunizieren; bei fehlendem Medium eine verständliche Textalternative und weitere Auswahl ermöglichen, ohne sich auf `navigator.onLine` als Verfügbarkeitsnachweis zu verlassen.
- [X] T027 [US3] In `style.css` GIF, Standbild, externe Links und Fehlerzustände ohne Layoutsprünge gestalten; Bewegungsreduktion und Textalternativen berücksichtigen.

## Phase 6: User Story 4 - Inhalte beurteilen und auswählen (P2)

**Ziel**: Die bestehende Inhaltsübersicht als vollständige Feedbackgrundlage erhalten und neue Veröffentlichungen nachvollziehbar kennzeichnen.

**Unabhängiger Test**: Acht Originaleinträge in `INHALTE.md` mit `surprises.js` vergleichen, Ideen anhand von Kennungen kommentieren und Rechte-/Freigabestatus neuer Medien überprüfen.

- [X] T028 [P] [US4] In `tests/unit/content-inventory.test.js` prüfen, dass alle acht ursprünglichen Kennungen und Texte unverändert im Bestand enthalten sind und inaktive Inhalte nicht zufällig ausgegeben werden.
- [X] T029 [US4] In `INHALTE.md` die acht Originaltexte und mindestens 30 getrennte Vorschläge erhalten; neu tatsächlich verwendete Inhalte, Quellen und ihren Freigabestatus ergänzen, ohne aus Ideen oder ausbleibendem Feedback eine Zustimmung abzuleiten.
- [X] T030 [US4] In `assets/CREDITS.md` die veröffentlichte Bild- und GIF-Herkunft sowie die Prüfung des externen Ziels mit dem Bestand in `surprises.js` abgleichen; ungeklärte Fremdmedien bleiben unveröffentlicht.

## Phase 7: Übergreifende Prüfung und Abschluss

**Ziel**: Vorherige Funktionalität, Zugänglichkeit, Offline-Verhalten und dokumentierte Abnahme überprüfen.

- [X] T031 [P] In `tests/e2e/accessibility.spec.js` Tastaturbedienung von Passwort, Namen, vier Auswahlaktionen, Verlauf, GIF-Steuerung und Sperren auf Desktop und Mobilgeräten sowie reduzierte Bewegung und fehlenden automatischen Ton prüfen.
- [X] T032 [P] In `README.md` Dateiöffnung, Testbefehle, Offline-Grenzen, externe Links und die nicht schützende lokale Passwortabfrage aktuell dokumentieren.
- [X] T033 In `tests/` die vollständigen Unit- und Playwright-Suites ausführen, Fehler beheben und Desktop-/Mobil-Screenshots auf Lesbarkeit, sichtbare Inhalte, ohne Überlappungen und ohne Straßenmotiv prüfen.
- [X] T034 In `specs/002-playful-surprises/quickstart.md` die tatsächlichen Testresultate festhalten; manuelle Screenreader-Prüfung, veröffentlichte GitHub-Pages-Prüfung und Fünf-Personen-Test durchführen oder jeweils ausdrücklich als ausstehend kennzeichnen.

## Dependencies & Execution Order

- Phase 1 → Phase 2 → US1: Bestehende Testwerkzeuge, Datenvalidierung und inaktiver Originalbestand sind gemeinsame Grundlagen.
- US2 kann nach Phase 2 unabhängig von US1 anhand der bestehenden Ansichten vorbereitet werden; Änderungen an `index.html`, `script.js` und `style.css` erfolgen abgestimmt oder nacheinander.
- US3 baut auf der Auswahl- und Darstellungsbasis aus US1 auf. GIF/Standbild und Link müssen vor Aufnahme in `surprises.js` erstellt beziehungsweise geprüft und freigegeben sein.
- US4 kann die bestehende Übersicht unabhängig von der Oberfläche prüfen; der finale Medienabgleich T030 folgt auf T021–T023.
- Phase 7 folgt auf die Storys. Die öffentliche Pages-Prüfung und die Fünf-Personen-Abnahme hängen von verfügbarer Veröffentlichung und Testpersonen ab und dürfen nicht als tatsächlich bestanden ausgegeben werden, solange sie ausstehen.

## Parallel Examples

- **US1**: T006, T007 und T008 bearbeiten unterschiedliche Testdateien; danach T009–T013 abgestimmt ausführen.
- **US2**: T014 bearbeitet Testdateien; T015 ist nach dem Testentwurf unabhängig von den Textänderungen T016/T017, solange die gemeinsame Bildwelt erhalten bleibt.
- **US3**: T019 und T020 bearbeiten unterschiedliche Testdateien; Assets und Linkprüfung folgen mit Freigabe vor T023.
- **US4**: T028 kann unabhängig vom redaktionellen Abgleich vorbereitet werden; T029 und T030 betreffen unterschiedliche Dateien, T030 erst nach den Medienaufgaben.
- **Abschluss**: T031 und T032 bearbeiten unterschiedliche Dateien und können nach den Storys parallel erfolgen.

## Implementation Strategy

1. **MVP**: Grundlagen und US1 liefern die vier klaren Auswahlaktionen und einen verständlichen Überraschungsstrom; US2 ergänzt die gewünschte humorvolle Bildwelt und Begrüßung.
2. **Inkremente**: US3 ergänzt kontrollierbare GIFs und freigegebene Fundstücke; US4 hält Bestand, Ideen und Rechte für Feedback nachvollziehbar.
3. **Abschluss**: Vorhandene und neue Tests aktualisieren, manuelle Prüfungen dokumentieren und keine vertraulichen Inhalte oder ungeprüften Fremdmedien veröffentlichen.