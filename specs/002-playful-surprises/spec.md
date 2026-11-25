# Feature Specification: Spielerische Überraschungen

**Feature Branch**: Nicht angelegt; aktueller Git-Branch bleibt unverändert.

**Created**: 2026-11-24

**Status**: Draft

**Input**: Inhalte übersichtlich für Feedback auflisten; statt des ernsten Straßenmotivs eine überraschende, alberne und lustige Gestaltung; lustiger Einstiegsdialog; drei verständliche Kategorie-Buttons und ein größerer „I'm feeling lucky“-Button statt Dropdown und doppelter Navigation; GIFs, unterhaltsame Links und eine breite Recherche zu neuen Inhalten.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Eine lustige Überraschung wählen (Priority: P1)

PERSON sieht nach dem Einstieg eine einzelne, deutlich als Inhalt erkennbare Überraschung. Drei verständlich benannte Kategorien und ein größerer „I'm feeling lucky“-Button ermöglichen neue Inhalte, ohne ein Dropdown oder doppelte Auswahlwege zu benötigen.

**Why this priority**: Die Unterscheidung zwischen Inhalt und Aktion sowie eine einfache Auswahl bestimmen die gesamte Erfahrung.

**Independent Test**: Das Kit öffnen, eine Kategorie wählen, erneut dieselbe Kategorie wählen und anschließend „I'm feeling lucky“ nutzen; Inhalt und Bedienelemente sind klar unterscheidbar.

**Acceptance Scenarios**:

1. **Given** der Einstieg ist abgeschlossen, **When** die erste Überraschung erscheint, **Then** sind der Inhalt, drei Kategorie-Buttons und der größere „I'm feeling lucky“-Button deutlich voneinander unterscheidbar.
2. **Given** eine Kategorie ist verfügbar, **When** PERSON ihren Button auswählt, **Then** erscheint eine neue Überraschung dieser Kategorie; erneutes Auswählen liefert eine weitere passende Überraschung, sofern vorhanden.
3. **Given** mehrere Kategorien sind verfügbar, **When** PERSON „I'm feeling lucky“ auswählt, **Then** erscheint eine Überraschung aus allen verfügbaren Kategorien, unabhängig von der vorherigen Kategorie.
4. **Given** die Inhaltsauswahl wird angezeigt, **When** PERSON sie nutzt, **Then** gibt es genau drei Kategorie-Buttons und einen größeren übergreifenden Zufalls-Button, kein Kategorie-Dropdown und keinen zweiten Auswahlmechanismus für dieselben Kategorien.

### User Story 2 - Mit einem Schmunzeln begrüßt werden (Priority: P1)

PERSON wird durch einen kurzen, freundlichen und bewusst albernen Einstieg begrüßt, der neugierig macht, ohne ihre Stimmung zu bewerten oder eine Reaktion zu verlangen. Das bisherige Straßenmotiv wird durch eine passend überraschende, verspielte Bildwelt ersetzt.

**Why this priority**: Bildwelt und erste Worte bestimmen den Ton des persönlichen Geschenks.

**Independent Test**: Die Seite öffnen und nach der Passwortabfrage den Begrüßungsdialog bis zur ersten Überraschung mit und ohne Namensangabe durchlaufen.

**Acceptance Scenarios**:

1. **Given** die Seite wird geöffnet, **When** PERSON den Einstieg sieht, **Then** prägen eine humorvolle, überraschende Bildwelt und kurze, leichte Texte das Erlebnis; das bisherige Straßenmotiv erscheint nicht mehr.
2. **Given** die Namensfrage wird angezeigt, **When** PERSON einen Namen eingibt oder überspringt, **Then** gelangt sie unmittelbar zur ersten Überraschung und wird passend persönlich oder neutral angesprochen.
3. **Given** ein falsches Passwort, **When** PERSON es eingibt, **Then** erhält sie eine freundliche, leicht humorvolle und verständliche Fehlermeldung und kann es erneut versuchen.

### User Story 3 - GIFs und unterhaltsame Fundstücke entdecken (Priority: P2)

PERSON kann neben kurzen Texten auch GIFs und ausgewählte unterhaltsame externe Seiten entdecken. Sie erkennt, welche Überraschung sich im Kit abspielt und welche zu einer externen Seite führt.

**Why this priority**: Unterschiedliche Medien und Fundstücke sorgen für überraschende Abwechslung.

**Independent Test**: Je eine GIF-Überraschung und einen externen Link aufrufen, anschließend eine nicht verfügbare Ressource simulieren.

**Acceptance Scenarios**:

1. **Given** eine GIF-Überraschung, **When** sie angezeigt wird, **Then** ist das Motiv verständlich beschrieben und PERSON kann die Bewegung bei Bedarf anhalten oder eine ruhige Alternative nutzen.
2. **Given** eine Link-Überraschung, **When** PERSON den eindeutig als extern erkennbaren Link wählt, **Then** kann sie die externe Seite besuchen und zum Kit zurückkehren.
3. **Given** ein GIF oder eine verlinkte Seite ist nicht erreichbar, **When** PERSON es versucht, **Then** bleibt das Kit bedienbar und bietet einen verständlichen nächsten Schritt zu einer anderen Überraschung.

### User Story 4 - Inhalte beurteilen und auswählen (Priority: P2)

Der Absender kann alle derzeit vorhandenen Inhalte und neue Vorschläge in einer Markdown-Übersicht durchsehen und Rückmeldungen dazu geben, bevor persönliche oder fremde Inhalte veröffentlicht werden.

**Why this priority**: Humor und persönliche Passung hängen von PERSON Vorlieben und den Rechten an den Inhalten ab.

**Independent Test**: Die Inhaltsübersicht öffnen, vorhandene Einträge mit der laufenden Seite vergleichen und einzelne Vorschläge anhand ihrer Kennung kommentieren.

**Acceptance Scenarios**:

1. **Given** die aktuelle Version des Kits, **When** der Absender die Übersicht öffnet, **Then** findet er alle acht derzeit vorhandenen Überraschungen mit Titel, Text und Kennung sowie getrennt davon neue Ideen.
2. **Given** ein Vorschlag für GIF, Spiel oder externen Link, **When** der Absender ihn beurteilt, **Then** sind Art, kurze Idee und bei recherchierten Fundstücken eine überprüfbare Quelle erkennbar.
3. **Given** ein Inhalt ist noch nicht freigegeben oder seine Rechte sind ungeklärt, **When** die nächste Version vorbereitet wird, **Then** wird er nicht automatisch als freigegebener veröffentlichter Inhalt behandelt.

### Edge Cases

- Keine oder nur eine Überraschung in einer Kategorie: verständlichen leeren Zustand oder Wiederholung des einzigen Inhalts zeigen; andere Kategorien und „I'm feeling lucky“ bleiben erreichbar.
- Wenn verfügbare Inhalte wechseln oder externe Seiten offline sind, bleibt die Navigation nutzbar und das Kit schlägt eine andere Überraschung vor.
- Bei reduzierter Bewegung darf keine unkontrollierbare Animation nötig sein; eine statische Alternative oder eine manuelle Wiedergabe ist verfügbar.
- GIFs, externe Inhalte und Netzwerkfehler dürfen keine unerwarteten Töne auslösen; die wesentlichen textbasierten Inhalte bleiben auch ohne Internet nutzbar.
- Lange Namen und Inhalte passen auf schmale Anzeigen; Eingaben werden als Text behandelt und die Namensfrage bleibt überspringbar.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Das Kit MUSS die bestehende Straßenbildwelt durch eine verspielte, überraschende und humorvolle visuelle Richtung ersetzen, die auf mobilen und großen Anzeigen funktioniert.
- **FR-002**: Passwort- und Namenseinstieg MÜSSEN kurze, freundliche und humorvolle Texte einschließlich einer verständlichen Fehlermeldung anbieten; die Namensfrage bleibt freiwillig.
- **FR-003**: Nach der Begrüßung MUSS sofort eine einzelne Überraschung sichtbar sein, deren Inhalt von den Aktionen klar unterscheidbar ist.
- **FR-004**: Die Inhaltsauswahl MUSS genau drei klar benannte Kategorie-Buttons sowie einen deutlich größeren übergreifenden Button „I'm feeling lucky“ anbieten; Dropdown und redundante Kategorie-Auswahl entfallen.
- **FR-005**: Ein Kategorie-Button MUSS eine Überraschung der gewählten Kategorie anzeigen; bei erneutem Drücken und mindestens zwei verfügbaren passenden Inhalten MUSS ein anderer Inhalt erscheinen.
- **FR-006**: „I'm feeling lucky“ MUSS aus allen verfügbaren Kategorien auswählen und die vorherige Kategorieeinschränkung aufheben; bei mindestens zwei verfügbaren Inhalten darf nicht unmittelbar derselbe Inhalt erneut erscheinen.
- **FR-007**: Das Kit MUSS Text, mindestens eine GIF-Überraschung und mindestens einen kuratierten externen Link anbieten; GIFs und Fremdmaterial dürfen nur mit geklärten Nutzungsrechten veröffentlicht werden.
- **FR-008**: Externe Links MÜSSEN vor dem Öffnen als solche erkennbar sein; eine Rückkehr zum Kit MUSS möglich bleiben.
- **FR-009**: Für nicht verfügbare Inhalte oder Medien MUSS ein verständlicher Ersatz oder eine Möglichkeit zur nächsten Überraschung bestehen; Kerntexte und Navigation funktionieren auch ohne Internet.
- **FR-010**: Die Inhaltsübersicht MUSS alle acht bestehenden Einträge mit Kennung, Titel und Text sowie einen getrennten Ideenpool mit Feedbackmöglichkeit enthalten. Recherchequellen und konkrete Einschränkungen externer Angebote MÜSSEN nachvollziehbar sein.
- **FR-011**: Animationen MÜSSEN bei Bedarf pausierbar sein oder eine ruhige Alternative bieten; reduzierte Bewegung wird respektiert und Ton startet im Kit nicht automatisch.
- **FR-012**: Alle wesentlichen Bedienelemente MÜSSEN auf Mobilgeräten, per Tastatur und mit Screenreader nutzbar sein; Medien benötigen passende Textalternativen.
- **FR-013**: Bisherige lokale Passwortabfrage, erneute Abfrage nach Neuladen und Sperren bleiben erhalten; sie stellt keine Vertraulichkeit oder Schutz vor direkten Zugriffen her.
- **FR-014**: Inhalte MÜSSEN freundlich und nicht verletzend sein; persönliche Inhalte dürfen nur mit Einverständnis veröffentlicht werden und wirklich vertrauliche Inhalte nicht öffentlich erscheinen.
- **FR-015**: Bereits gesehene Überraschungen bleiben während des laufenden Besuchs über einen separaten Verlauf wieder auffindbar, ohne eine zusätzliche Kategorie-Auswahl einzuführen.

### Key Entities *(include if feature involves data)*

- **Überraschung**: Ein klar erkennbarer Inhalt mit Kennung, Titel, einer der drei Kategorien und einer Inhaltsart wie Text, GIF oder Link.
- **Inhaltsvorschlag**: Eine Idee mit kurzer Beschreibung, vorgesehener Inhaltsart und gegebenenfalls Quelle und Freigabe- bzw. Rechtehinweis; keine automatische Veröffentlichung.
- **Besuch**: Zeitlich begrenzter Ablauf mit optionalem Namen, angezeigter Überraschung und Verlauf.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Bei einem Test mit fünf Personen können mindestens vier ohne Erklärung eine Kategorie auswählen und eine weitere Überraschung derselben Kategorie anzeigen.
- **SC-002**: Bei demselben Test identifizieren mindestens vier von fünf Personen den angezeigten Inhalt und den übergreifenden Zufalls-Button korrekt; die Auswahl besteht aus drei Kategorie-Buttons und einem größeren Zufalls-Button.
- **SC-003**: Bei Tests mit mindestens zwei zur jeweiligen Auswahl passenden Inhalten erscheint bei zehn aufeinanderfolgenden Abrufen über einen Kategorie-Button oder „I'm feeling lucky“ nie unmittelbar derselbe Inhalt zweimal.
- **SC-004**: Die Übersicht enthält alle acht vorhandenen Inhalte und mindestens 30 getrennt gekennzeichnete neue Ideen, darunter GIF- und Link-Ideen mit Quellen.
- **SC-005**: Passwort, Namenseinstieg, alle vier Auswahl-Buttons und Verlauf sind auf einem schmalen Mobilgerät und einem Desktop per Tastatur bedienbar.
- **SC-006**: Bei blockierter Internetverbindung bleiben Einstieg, textbasierte Überraschungen und Navigation bedienbar; nicht verfügbare Medien und Links führen nicht in eine Sackgasse.

## Assumptions

- Die Oberfläche bleibt zunächst englischsprachig und für PERSON gedacht. Kategorienamen sind Arbeitsvorschläge; zunächst werden „Make me laugh“, „Show me a GIF“ und „Let's play“ angenommen.
- „I'm feeling lucky“ ersetzt die Funktion „Another one“ als übergreifende nächste Überraschung; erneutes Drücken einer Kategorie liefert innerhalb dieser Kategorie weitere Inhalte. Der Verlauf bleibt ein eigenständiger Rückblick und keine vierte Kategorie.
- Der Absender entscheidet anhand der Übersicht, welche bestehenden und neuen Inhalte bleiben, geändert oder entfernt werden; Ideen sind keine Freigaben.
- Das bisherige statische Kit und die lokale Passwortabfrage bleiben erhalten; öffentlich bereitgestellte Inhalte und das Passwort sind weiterhin einsehbar.
- Externe Angebote können Werbung, Datenerhebung, Ton, starke Bewegung oder sich ändernde Inhalte haben; Links werden einzeln geprüft und vor Freigabe auf Eignung bewertet.