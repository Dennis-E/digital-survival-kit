# Feature Specification: Überraschungsstrom für PERSON

**Feature Branch**: Nicht angelegt; aktueller Branch bleibt unverändert.

**Created**: 2026-11-24

**Status**: Draft

**Input**: Ein persönliches Digital Survival Kit für PERSON mit Benutzerführung nach Option 3: Nach einer einfachen Passwortabfrage und Begrüßung erscheint direkt eine Überraschung; weitere Überraschungen und verschiedene Inhaltsarten sind einfach zugänglich.

## Clarifications

### Session 2026-11-24

- Q: Wie soll die Passwortabfrage für die erste Version funktionieren? → A: Als einfache Einstiegshürde mit dem vom Absender geteilten Passwort `survival`, nicht als echte Zugriffskontrolle. Die technische Umsetzung ist im Plan festgehalten.
- Q: Soll PERSON das Passwort nach jedem Neuladen der Seite erneut eingeben? → A: Ja, bei jedem Neuladen erscheint die Passwortabfrage erneut.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Eine Überraschung nach der Begrüßung (Priority: P1)

PERSON öffnet das Kit, wird freundlich begrüßt und kann ihren Namen eingeben oder den Schritt überspringen. Direkt danach sieht sie eine einzelne Überraschung, ohne zunächst eine Kategorie auswählen zu müssen. Mit „Another one“ erhält sie eine weitere.

**Why this priority**: Der unmittelbare, spielerische Einstieg ist der Kern des gewählten Erlebnisses.

**Independent Test**: Das Kit mit mehreren unverfänglichen Beispielinhalten öffnen, die Begrüßung mit und ohne Namen abschließen und mehrfach „Another one“ wählen.

**Acceptance Scenarios**:

1. **Given** die Begrüßung ist geöffnet, **When** PERSON einen Namen eingibt und fortfährt, **Then** erscheint direkt eine Überraschung und die Anrede verwendet den eingegebenen Namen.
2. **Given** die Begrüßung ist geöffnet, **When** PERSON sie überspringt, **Then** erscheint direkt eine Überraschung mit neutraler Anrede.
3. **Given** mindestens zwei passende Überraschungen sind verfügbar, **When** PERSON „Another one“ wählt, **Then** erscheint eine andere Überraschung.
4. **Given** mehrere passende Überraschungen sind verfügbar, **When** PERSON sie wiederholt abruft, **Then** werden alle passenden Inhalte einmal gezeigt, bevor sich einer wiederholt.

### User Story 2 - Das Kit mit einer einfachen Passwortabfrage öffnen (Priority: P1)

PERSON erhält vom Absender das Passwort und gibt es beim Öffnen des Kits ein. Die Abfrage verdeckt die Inhalte in der normalen Seitenansicht, schützt sie aber nicht vor Zugriff über Quelltext oder direkte Dateiadressen.

**Why this priority**: Die Abfrage verhindert, dass beiläufige Besucher die Inhalte sofort in der normalen Ansicht sehen.

**Independent Test**: Die Seite öffnen und die normale Ansicht ohne Eingabe, mit falschem und mit richtigem Passwort prüfen; anschließend Quelltext und direkte Testdateien auf ihre öffentliche Erreichbarkeit prüfen.

**Acceptance Scenarios**:

1. **Given** die Seite wird in der normalen Ansicht geöffnet, **When** noch kein richtiges Passwort eingegeben wurde, **Then** zeigt die Seite die Passwortabfrage statt der Kit-Inhalte.
2. **Given** die Passwortabfrage ist geöffnet, **When** ein falsches Passwort eingegeben wird, **Then** bleibt die normale Kit-Ansicht verdeckt und eine verständliche Fehlermeldung ermöglicht einen erneuten Versuch.
3. **Given** das Passwort `survival`, **When** PERSON es eingibt, **Then** erscheint die Begrüßung und sie kann das Kit nutzen.
4. **Given** die Seite wird öffentlich bereitgestellt, **When** jemand den Quelltext oder eine direkte Adresse einer bereitgestellten Datei aufruft, **Then** können Passwort und veröffentlichte Inhalte auch ohne Abfrage einsehbar sein.
5. **Given** das Kit ist geöffnet, **When** PERSON die Ansicht wieder sperrt, **Then** erscheint erneut die Passwortabfrage und die normale Kit-Ansicht ist verdeckt.
6. **Given** das Kit ist geöffnet, **When** PERSON die Seite neu lädt, **Then** erscheint die Passwortabfrage erneut und die normale Kit-Ansicht bleibt bis zur richtigen Eingabe verdeckt.

### User Story 3 - Eine andere Art Überraschung wählen (Priority: P2)

PERSON kann nach einer Überraschung „Something different“ wählen oder eine kleine Auswahl nach Inhaltsart öffnen, um etwa etwas Lustiges, eine persönliche Nachricht oder einen ruhigen Moment zu erleben.

**Why this priority**: Der Strom bleibt abwechslungsreich und gibt gleichzeitig Kontrolle, ohne den ersten Moment zu verzögern.

**Independent Test**: Mit mindestens zwei verfügbaren Inhaltsarten erst „Something different“ und anschließend eine bestimmte Inhaltsart auswählen.

**Acceptance Scenarios**:

1. **Given** mindestens zwei Inhaltsarten verfügbar sind, **When** PERSON „Something different“ wählt, **Then** erscheint eine Überraschung einer anderen Art als die aktuelle.
2. **Given** eine Auswahl der Inhaltsarten ist geöffnet, **When** PERSON eine verfügbare Art wählt, **Then** erscheint eine passende Überraschung und weitere Abrufe bleiben bei dieser Art, bis sie die Auswahl ändert.
3. **Given** eine Inhaltsart ausgewählt ist, **When** PERSON die Auswahl auf alle Arten zurücksetzt, **Then** stehen wieder alle verfügbaren Überraschungen zur Auswahl.

### User Story 4 - Eine Überraschung wiederfinden (Priority: P3)

PERSON kann bereits gesehene Überraschungen während ihres Besuchs wieder aufrufen, ohne zufällig auf sie warten zu müssen.

**Why this priority**: Wiederfinden macht persönliche Inhalte bei längerer Nutzung zugänglich, ohne den schnellen Einstieg zu beeinträchtigen.

**Independent Test**: Zwei Überraschungen ansehen, die Übersicht der gesehenen Inhalte öffnen und die erste erneut auswählen.

**Acceptance Scenarios**:

1. **Given** PERSON hat mindestens eine Überraschung gesehen, **When** sie die Übersicht öffnet, **Then** kann sie eine gesehene Überraschung anhand einer verständlichen Bezeichnung erneut öffnen.
2. **Given** sie hat noch keine Überraschung gesehen, **When** sie die Übersicht öffnet, **Then** wird ein verständlicher leerer Zustand angezeigt.

### Edge Cases

- Ein leerer oder nur aus Leerzeichen bestehender Name führt zur neutralen Anrede; überlange Eingaben werden verständlich begrenzt und können korrigiert werden.
- Ist genau eine passende Überraschung verfügbar, darf sie erneut angezeigt werden; die Bedienung darf nicht blockieren.
- Sind keine passenden Überraschungen verfügbar, erscheint ein freundlicher Hinweis mit der Möglichkeit, eine andere Art oder alle Arten zu wählen.
- Gibt es keine zweite Inhaltsart, bleibt „Something different“ verständlich nicht verfügbar; vorhandene Inhalte bleiben erreichbar.
- Kann ein Inhalt oder Medium nicht geladen werden, erscheint eine verständliche Fehlermeldung und eine andere Überraschung bleibt erreichbar.
- Bei falschem oder leerem Passwort bleibt die normale Kit-Ansicht verdeckt; ein erneuter Versuch ist möglich.
- Eine sehr kleine Anzeige, Tastaturbedienung oder reduzierte Bewegung darf den Zugriff auf Begrüßung, Inhalte und Navigation nicht verhindern.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Das Kit MUSS vor der ersten Überraschung eine kurze Begrüßung mit freiwilliger Namenseingabe und einer Möglichkeit zum Überspringen anbieten.
- **FR-002**: Nach Abschluss oder Überspringen der Begrüßung MUSS unmittelbar eine einzelne Überraschung erscheinen, ohne dass zuvor eine Inhaltsart gewählt werden muss.
- **FR-003**: Das Kit MUSS den angegebenen Namen in der Anrede verwenden und andernfalls eine neutrale Anrede anzeigen; eingegebene Namen dürfen nicht als ausführbare Inhalte interpretiert werden.
- **FR-004**: Der Name DARF ohne ausdrückliche Zustimmung nicht über den laufenden Besuch hinaus gespeichert oder an Dritte weitergegeben werden.
- **FR-005**: „Another one“ MUSS eine weitere Überraschung aus den aktuell passenden Inhalten zeigen und Wiederholungen vermeiden, bis alle passenden Inhalte gezeigt wurden; bei nur einem passenden Inhalt ist Wiederholung erlaubt. Beim Wechsel der Inhaltsauswahl beginnt ein neuer Durchlauf.
- **FR-006**: „Something different“ MUSS bei mindestens zwei verfügbaren Inhaltsarten eine Überraschung einer anderen Art als der aktuellen zeigen und eine aktive Auswahl auf alle Arten zurücksetzen.
- **FR-007**: PERSON MUSS eine verfügbare Inhaltsart auswählen und anschließend zu allen Arten zurückkehren können; weitere Abrufe berücksichtigen die aktive Auswahl.
- **FR-008**: Bereits gesehene Überraschungen MÜSSEN während des laufenden Besuchs über eine verständliche Übersicht erneut erreichbar sein.
- **FR-009**: Vor der Begrüßung und nach jedem Neuladen MUSS die normale Seitenansicht das Passwort `survival` abfragen; der Freigabezustand wird nicht über das Neuladen hinaus gespeichert.
- **FR-010**: Bei falschem oder fehlendem Passwort MUSS die normale Kit-Ansicht verdeckt bleiben und ein erneuter Versuch möglich sein. Die Abfrage ist keine echte Zugriffskontrolle und schützt weder Quelltext noch direkte Dateizugriffe.
- **FR-011**: PERSON MUSS die normale Kit-Ansicht wieder sperren können; danach erscheint erneut die Passwortabfrage. Dies widerruft keinen direkten Zugriff auf bereitgestellte Dateien.
- **FR-012**: Die erste Version MUSS mindestens zwei Inhaltsarten und insgesamt mindestens sechs veröffentlichbare Überraschungen enthalten, darunter humorvolle und ruhige Inhalte. Persönliche Inhalte dürfen nur mit Einverständnis veröffentlicht werden; alle Beteiligten müssen wissen, dass die Abfrage deren Vertraulichkeit nicht gewährleistet.
- **FR-013**: Alle wesentlichen Bedienelemente MÜSSEN auf mobilen und großen Anzeigen, mit Tastatur und mit Screenreader nutzbar sein; reduzierte Bewegung MUSS respektiert werden.
- **FR-014**: Ton DARF nicht automatisch starten; Humor und Botschaften DÜRFEN nicht zu erzwungenem Optimismus oder einer Reaktion verpflichten.
- **FR-015**: Bei fehlenden Inhalten, nicht verfügbaren Inhaltsarten oder Ladefehlern MUSS das Kit einen verständlichen Zustand und einen erreichbaren nächsten Schritt anbieten.

### Key Entities *(include if feature involves data)*

- **Kit**: Das für PERSON bestimmte Geschenk mit einer einfachen Passwortabfrage und einer Sammlung von Überraschungen.
- **Überraschung**: Ein anzeigbarer Inhalt mit verständlicher Bezeichnung und Inhaltsart; dazu können Medien gehören, die bei öffentlicher Bereitstellung direkt erreichbar sein können.
- **Besuch**: Ein zeitlich begrenzter Nutzungsvorgang mit optionalem Namen, Zugangszustand, aktiver Inhaltsart und Liste bereits gesehener Überraschungen.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: In einem Test mit fünf Personen erreichen mindestens vier nach Öffnen des zugänglichen Kits innerhalb von 30 Sekunden die erste Überraschung, ohne eine Inhaltsart wählen zu müssen.
- **SC-002**: Bei einer Testsammlung aus mindestens sechs Inhalten erscheinen bei sechs aufeinanderfolgenden Abrufen ohne Filter alle sechs einmal, bevor eine Wiederholung auftritt.
- **SC-003**: In der normalen Seitenansicht bleiben bei leerer oder falscher Eingabe alle Überraschungen verdeckt; bei Eingabe von `survival` wird die Begrüßung angezeigt. Direkte Datei- und Quelltextzugriffe sind ausdrücklich nicht geschützt.
- **SC-004**: In einem Test auf einem schmalen Mobilgerät und einem Desktop können Begrüßung, nächste Überraschung, Inhaltsart und Verlauf vollständig per Tastatur genutzt werden.
- **SC-005**: In einem Test mit fünf Personen können mindestens vier eine bereits gesehene Überraschung ohne Hilfestellung erneut öffnen.

## Assumptions

- Die erste Version ist ein einzelnes Kit für PERSON; eine Erstellen-Maske und getrennte Kits für mehrere Nutzende sind nicht Teil dieses Features.
- Die Oberfläche bleibt zunächst englischsprachig. Die endgültigen persönlichen Texte und Medien werden später mit Einverständnis ausgewählt; diese Spezifikation enthält keine privaten Botschaften.
- Der Name und die Liste gesehener Überraschungen gelten nur für den laufenden Besuch; ein dauerhaftes Profil ist nicht erforderlich.
- Bei öffentlicher Bereitstellung sind das Passwort sowie veröffentlichte Texte und Medien grundsätzlich öffentlich zugänglich. Die Abfrage ist lediglich eine Einstiegshürde; sie ist kein Datenschutz oder Ersatz für echte Zugriffskontrolle.
- Wirklich vertrauliche Inhalte dürfen nicht öffentlich bereitgestellt werden. Ob und welche persönlichen Inhalte trotz der öffentlichen Zugänglichkeit veröffentlicht werden, entscheiden die Beteiligten mit Einverständnis.
- Der Implementierungsplan berücksichtigt die lokale Einstiegshürde; eine spätere echte Zugriffskontrolle wäre ein separates Vorhaben.