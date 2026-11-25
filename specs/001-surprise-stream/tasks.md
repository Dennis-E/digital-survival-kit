---
description: "Aufgaben für den Überraschungsstrom für PERSON"
---

# Tasks: Überraschungsstrom für PERSON

**Input**: `specs/001-surprise-stream/spec.md`, `plan.md`, `data-model.md`, `research.md`, `contracts/ui.md` und `quickstart.md`.

**Organisation**: Aufgaben sind nach Benutzererzählungen gruppiert. `[P]` kennzeichnet Aufgaben, die nach ihren angegebenen Voraussetzungen unabhängig in verschiedenen Dateien bearbeitet werden können. Tests entsprechen den in der Spezifikation beschriebenen Testszenarien.

## Phase 1: Setup

**Ziel**: Entwicklungswerkzeuge für Tests vorbereiten, ohne Laufzeitserver oder Build-Schritt einzuführen.

- [X] T001 In `package.json` und `package-lock.json` Node-24-kompatible Testskripte `npm test` und `npm run test:e2e` sowie Playwright ausschließlich als Entwicklungsabhängigkeit einrichten.
- [X] T002 [P] In `playwright.config.js` Chromium für Desktop und einen schmalen mobilen Viewport konfigurieren; Tests öffnen die lokale `index.html` über `file://`.
- [X] T003 [P] In `.gitignore` ausschließlich erzeugte Testartefakte und `node_modules/` ergänzen, bestehende Einträge einschließlich `TODO.md` erhalten.

## Phase 2: Grundlagen

**Ziel**: Gemeinsame Daten und Auswahlregeln bereitstellen; danach können die Story-Aufgaben beginnen.

- [X] T004 [P] In `surprises.js` mindestens sechs unverfängliche Überraschungen aus mindestens zwei Arten einschließlich humorvoller und ruhiger Inhalte anlegen; `id`: „Stabile, eindeutige Kennung; keine Dateipfade oder Geheimnisse“, `title`: „Kurze, verständliche Bezeichnung für den Besuchsverlauf“, `category`: „Eine verfügbare Inhaltsart“, `body`: „Inhalt als Text; keine ungeprüfte HTML-Ausführung“ und `media`: „Optionaler relativer Verweis auf ein öffentlich bereitgestelltes Medium“ beachten.
- [X] T005 [P] In `selection.js` eine eigenständig testbare Auswahl für übergebene Inhalte und Zufallsquelle vorsehen, die als klassisches Skript unter `file://` nutzbar ist und von Node-Tests geladen werden kann; IDs, Filter und noch nicht gezogene Inhalte getrennt halten.
- [X] T006 In `index.html` die klassischen Skripte `surprises.js`, `selection.js` und `script.js` in der erforderlichen Reihenfolge laden und für Passwort, Begrüßung und Strom getrennte semantische Ansichtsbereiche vorbereiten, ohne Inhalte vor der Passwortabfrage in der normalen Ansicht anzuzeigen.

## Phase 3: User Story 1 - Begrüßung und Überraschungsstrom (P1)

**Ziel**: Nach optionaler Namenseingabe unmittelbar eine Überraschung zeigen und weitere ohne vorzeitige Wiederholung anbieten.

**Unabhängiger Test**: Mit freigeschalteter Testansicht Begrüßung mit Namen und mit Skip abschließen; bei sechs Inhalten sechs unterschiedliche Anzeigen und anschließend keine direkte Wiederholung prüfen.

- [X] T007 [P] [US1] In `tests/unit/selection.test.js` Auswahltests für vollständige Durchläufe, Rundenwechsel ohne direkte Wiederholung, kontrollierte Zufallsquelle und null oder einen passenden Inhalt erstellen.
- [X] T008 [P] [US1] In `tests/e2e/greeting-stream.spec.js` die Begrüßung mit Namen, Skip, neutraler Anrede und direkt angezeigter erster Überraschung sowie eine vollständige Runde prüfen; die Testansicht darf bis US2 direkt geöffnet werden.
- [X] T009 [US1] In `selection.js` Ziehen ohne Zurücklegen, Neubefüllen am Rundenende und Vermeidung unmittelbarer Wiederholungen bei mindestens zwei verfügbaren IDs implementieren; null und eine ID ohne Schleife behandeln.
- [X] T010 [US1] In `index.html` ein beschriftetes Namensformular mit Continue und Skip sowie eine einzelne Überraschungsansicht mit Another one und höflicher Statusankündigung anlegen.
- [X] T011 [US1] In `script.js` Begrüßung und Anzeigenwechsel verbinden; `name` ist „optional, getrimmt, mit einer festgelegten maximalen Länge, nur für den laufenden Besuch; leer bedeutet neutrale Anrede“; sichtbare Längenbegrenzung und Fehlerkorrektur anbieten, Namen nur als Text ausgeben und nicht dauerhaft speichern.
- [X] T012 [US1] In `script.js` die erste Überraschung direkt nach Continue oder Skip anzeigen, Another one an `selection.js` anschließen und bei fehlenden oder beschädigten Inhalten einen verständlichen Zustand anbieten.
- [X] T013 [US1] In `style.css` Begrüßung und eine stabile, responsive Überraschungsansicht im bestehenden visuellen Stil gestalten; Fokus sichtbar halten und reduzierte Bewegung berücksichtigen.

## Phase 4: User Story 2 - Lokale Passwortabfrage (P1)

**Ziel**: Die normale Ansicht mit einer lokalen Einstiegshürde versehen, ohne Vertraulichkeit vorzutäuschen.

**Unabhängiger Test**: `index.html` öffnen; leere und falsche Eingaben halten die normale Ansicht verdeckt, `survival` öffnet die Begrüßung, Sperren und Neuladen zeigen die Abfrage erneut. Quelltext und direkte Dateien bleiben zugänglich.

- [X] T014 [P] [US2] In `tests/e2e/password-gate.spec.js` leere, falsche und richtige Eingabe, Enter, Fehleranzeige, erneutes Sperren und erneute Abfrage nach Reload in der normalen Ansicht prüfen; keine Dateischutzbehauptung testen. In `tests/e2e/greeting-stream.spec.js` den Einstieg an die Passwortabfrage anpassen.
- [X] T015 [US2] In `index.html` ein semantisches Passwortformular mit Label, Submit, zugänglicher Fehlermeldung und einem Befehl zum erneuten Sperren der Kit-Ansicht ergänzen; zunächst nur die Abfrage anzeigen.
- [X] T016 [US2] In `script.js` `survival` ausschließlich lokal prüfen; bei Erfolg zur Begrüßung wechseln, bei leerer oder falscher Eingabe Fehler anzeigen und einen weiteren Versuch erlauben; Freigabe nicht dauerhaft speichern.
- [X] T017 [US2] In `script.js` beim Sperren und Neuladen Freigabe, Namenseingabe, Verlauf, Filter und angezeigte Inhalte zurücksetzen und die Passwortabfrage mit sinnvollem Fokus anzeigen.
- [X] T018 [US2] In `style.css` Passwortformular, Fehlermeldung und Sperrbefehl responsiv sowie mit sichtbaren Fokuszuständen gestalten; inaktive Ansichten mit `hidden` auch für Tastatur und Screenreader verbergen.

## Phase 5: User Story 3 - Inhaltsart wählen (P2)

**Ziel**: Zwischen Arten wechseln und eine Überraschung anderer Art abrufen, ohne den schnellen Einstieg zu verändern.

**Unabhängiger Test**: Eine Art auswählen, mehrere passende Inhalte abrufen, „Something different“ wählen und prüfen, dass eine andere Art erscheint und der Filter auf alle Arten zurückgesetzt wird.

- [X] T019 [P] [US3] In `tests/unit/category-selection.test.js` Filterwechsel, Neustart eines Durchlaufs, unterschiedliche Art, keine zweite Art und leere Ergebnismengen prüfen.
- [X] T020 [P] [US3] In `tests/e2e/categories.spec.js` Auswahl einer Art, persistierenden Filter bei Another one, Rückkehr zu allen Arten und Something different prüfen.
- [X] T021 [US3] In `selection.js` `categoryFilter` als „alle oder genau eine verfügbare Inhaltsart“ umsetzen; beim Filterwechsel den Durchlauf neu aufbauen, bei mindestens zwei passenden IDs die aktuelle ID bei der ersten Ziehung ausschließen und bei Something different alle Arten aktivieren und eine andere Art wählen.
- [X] T022 [US3] In `index.html` eine zugängliche Auswahl verfügbarer Inhaltsarten mit Option für alle Arten sowie Something different ergänzen; bei weniger als zwei Arten einen verständlich deaktivierten Zustand vorsehen.
- [X] T023 [US3] In `script.js` Auswahl und Filterzustand mit dem Strom verbinden, bei null Treffern eine Rückkehr zu allen Arten ermöglichen und Fehler beim Laden von Medien verständlich anzeigen.
- [X] T024 [US3] In `style.css` Inhaltsauswahl, deaktivierte Zustände und Meldungen für kleine und große Anzeigen gestalten, ohne dass Steuerelemente ihre Größe bei Zustandswechseln verschieben.

## Phase 6: User Story 4 - Gesehene Überraschungen wiederfinden (P3)

**Ziel**: Während des Besuchs gesehene Inhalte anhand verständlicher Titel erneut öffnen.

**Unabhängiger Test**: Zwei Überraschungen ansehen, den Verlauf öffnen und die erste erneut auswählen; leerer Verlauf und Rückkehr zum Strom sind ebenfalls prüfbar.

- [X] T025 [P] [US4] In `tests/unit/history.test.js` eindeutige Reihenfolge gesehener IDs und das Entfernen einer über den Verlauf geöffneten ID aus dem aktuellen Durchlauf prüfen.
- [X] T026 [P] [US4] In `tests/e2e/history.spec.js` leeren Verlauf, Öffnen eines früheren Inhalts, Rückkehr und Zurücksetzen nach Sperren oder Reload prüfen.
- [X] T027 [US4] In `selection.js` `seenIds` als „geordnete, eindeutige IDs bereits angezeigter Inhalte für den Verlauf, unabhängig vom Filter“ verwalten; beim Wiederöffnen eine noch offene ID aus `remainingIds` entfernen.
- [X] T028 [US4] In `index.html` einen per Tastatur erreichbaren Verlauf mit verständlichen Titeln, leerem Zustand und Rückkehr zum Strom ergänzen.
- [X] T029 [US4] In `script.js` Verlauf aus dem flüchtigen Besuchszustand rendern, zuvor angezeigte Inhalte öffnen und bei Sperren oder Neuladen zurücksetzen.
- [X] T030 [US4] In `style.css` Verlauf, langen Inhaltstiteln und Leerzustand auf Mobilgeräten und Desktop ausreichend Platz und sichtbaren Fokus geben.

## Phase 7: Übergreifende Prüfung und Abschluss

**Ziel**: Verhalten, Barrierefreiheit und Veröffentlichungshinweise über alle Storys hinweg prüfen.

- [X] T031 [P] In `tests/e2e/accessibility.spec.js` Passwort, Begrüßung, Strom, Filter, Verlauf und Sperren auf Desktop und mobilem Viewport per Tastatur sowie mit reduzierter Bewegung prüfen; kein Ton startet automatisch.
- [X] T032 [P] In `README.md` direkte Dateiöffnung, Testbefehle und die öffentliche Einsehbarkeit von Passwort, Quelltext und Dateien dokumentieren; persönliche Inhalte nur mit Einverständnis, vertrauliche Inhalte nicht öffentlich veröffentlichen.
- [X] T033 In `specs/001-surprise-stream/quickstart.md` die nach Implementierung tatsächlich verfügbaren Testbefehle und manuellen Prüfschritte für `file://`, Screenreader und gegebenenfalls GitHub Pages aktualisieren.
- [X] T034 In `tests/` alle Unit- und Browserprüfungen ausführen und Ergebnisse einschließlich nicht verfügbarer Browser oder Screenreader festhalten; Fehler im jeweiligen Feature beheben.
- [X] T035 In `specs/001-surprise-stream/quickstart.md` die Durchführung der fünf-Personen-Prüfungen für Zeit bis zur ersten Überraschung und Wiederfinden dokumentieren; falls nicht durchführbar, als ausstehend kennzeichnen, keine Ergebnisse erfinden.

## Dependencies & Execution Order

- Phase 1 → Phase 2 → US1. Die gemeinsame Daten- und Auswahlgrundlage blockiert die Storys.
- US2 baut auf den in US1 vorhandenen Begrüßungs- und Stromansichten auf; die beiden P1-Storys bilden gemeinsam den nutzbaren MVP.
- US3 und US4 bauen auf US1 auf. Ihre Testdateien können parallel vorbereitet werden; Änderungen an `selection.js`, `index.html`, `script.js` und `style.css` erfolgen abgestimmt oder nacheinander.
- Phase 7 folgt auf die fertiggestellten Storys. Die öffentliche GitHub-Pages-Prüfung setzt eine tatsächliche Veröffentlichung voraus und wird bis dahin als ausstehend geführt.

## Parallel Examples

- **US1**: T007 und T008 parallel nach Phase 2; Implementierung T009–T013 anschließend abgestimmt.
- **US2**: T014 unabhängig vorbereiten; danach T015–T018 in der angegebenen Reihenfolge.
- **US3**: T019 und T020 parallel nach US1; T021–T024 anschließend abgestimmt.
- **US4**: T025 und T026 parallel nach US1; T027–T030 anschließend abgestimmt.
- **Übergreifend**: T031 und T032 bearbeiten verschiedene Dateien und können nach den Storys parallel erfolgen.

## Implementation Strategy

1. **MVP**: Grundlagen, US1 und US2 liefern Passwortabfrage, Begrüßung und einen sofort spielbaren Überraschungsstrom mit mindestens sechs unverfänglichen Inhalten.
2. **Inkremente**: US3 ergänzt die Inhaltsarten; US4 ergänzt das Wiederfinden. Jede Story wird anhand ihres unabhängigen Tests geprüft.
3. **Abschluss**: Automatisierte und manuelle Prüfungen durchführen; persönliche Inhalte nur mit Einverständnis und nicht als vertraulich geschützt behandeln. Mehrmandanten-Erstellung und echter Zugriffsschutz bleiben außerhalb dieses Features.