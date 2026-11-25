# Feature Specification: Witze, GIFs und aufgeräumter Einstieg

**Feature Branch**: Nicht angelegt; aktueller Git-Branch bleibt unverändert.

**Created**: 2026-11-24

**Status**: Draft

**Input**: „Make me laugh“ soll echte alberne Witze und Wortspiele enthalten; statt nur der Stempelanimation sollen unterschiedliche lustige GIFs zu Katzen, The Office, menschlichen Missgeschicken und englischen Sprachpannen erscheinen. „Let's play“ gefällt und bleibt erhalten. „Seen so far“ und „Lock kit“ entfallen. Nach dem Passwort soll das Namensfeld direkt fokussiert sein. Kopf- und Fußtexte sollen vereinfacht und wie gewünscht platziert werden.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Echte Witze lesen (Priority: P1)

Ieva wählt „Make me laugh“ und erhält kurze, bewusst alberne englische Witze oder Wortspiele, statt vorwiegend tröstender Mitteilungen. Erneutes Auswählen liefert einen weiteren Witz.

**Why this priority**: Die Kategorie soll tatsächlich das einlösen, was ihre Beschriftung verspricht.

**Independent Test**: Die Kategorie mehrfach auswählen und die Inhalte auf erkennbare Pointe, abwechslungsreiche Formulierungen und Wiederholungsverhalten prüfen.

**Acceptance Scenarios**:

1. **Given** Ieva ist im Kit, **When** sie „Make me laugh“ auswählt, **Then** erscheint ein kurzer englischer Witz oder ein Wortspiel mit erkennbarer Pointe.
2. **Given** mindestens zwei Witze verfügbar sind, **When** Ieva die Kategorie erneut auswählt, **Then** erscheint ein anderer Witz und nicht unmittelbar derselbe erneut.
3. **Given** die Witze werden durchgesehen, **When** sie beurteilt werden, **Then** sind sie liebevoll und albern, ohne Witze auf Kosten der Person oder ihrer Gefühle.

### User Story 2 - Abwechslungsreiche lustige GIFs entdecken (Priority: P1)

Ieva öffnet „Show me a GIF“ und entdeckt verschiedene lustige Animationen, beispielsweise Katzen, Szenen aus The Office, harmlose menschliche Missgeschicke und Sprachpannen. Der bisherige Stempel ist nicht mehr der einzige Inhalt.

**Why this priority**: Eine Auswahl tatsächlicher unterschiedlicher GIFs ist der zentrale Wunsch hinter der Kritik am bisherigen Stempel.

**Independent Test**: Mehrfach die GIF-Kategorie wählen, unterschiedliche Motive ansehen und für jedes veröffentlichte GIF Herkunft, Nutzungsrechte und Medienverhalten prüfen.

**Acceptance Scenarios**:

1. **Given** die GIF-Kategorie enthält mehrere freigegebene Animationen, **When** Ieva sie wiederholt auswählt, **Then** erscheinen unterschiedliche GIF-Inhalte und nicht lediglich Varianten der Stempelanimation.
2. **Given** das Kit bereit für Veröffentlichung ist, **When** seine GIF-Inhalte geprüft werden, **Then** sind mindestens vier unterschiedliche Animationen vorhanden, darunter Motive zu Katzen, The Office, harmlosen menschlichen Missgeschicken und englischen Sprachpannen; Überschneidungen sind möglich, ersetzen aber nicht vier unterschiedliche Animationen.
3. **Given** ein GIF wird angezeigt, **When** Ieva Bewegung reduzieren oder stoppen möchte, **Then** ist eine verständliche ruhige Alternative oder eine Steuerung verfügbar; das Kit startet keinen Ton automatisch.
4. **Given** Nutzungsrechte für ein GIF, insbesondere eine Szene aus The Office, sind nicht geklärt, **When** eine Veröffentlichung vorbereitet wird, **Then** wird dieses GIF nicht ungeprüft veröffentlicht; die ausstehende Freigabe und ihre Auswirkung auf die inhaltliche Vollständigkeit bleiben sichtbar.

### User Story 3 - Direkt und mit weniger Ablenkung starten (Priority: P1)

Nach richtiger Passworteingabe kann Ieva sofort ihren Namen eingeben, ohne zunächst zum Eingabefeld navigieren zu müssen. Die Oberfläche verzichtet auf die vom Nutzer als überflüssig empfundenen Bedienelemente „Seen so far“ und „Lock kit“.

**Why this priority**: Ein direkter Einstieg und weniger sichtbare Optionen machen das Geschenk leichter nutzbar.

**Independent Test**: Das Kit ausschließlich mit Tastatur öffnen, das Passwort eingeben und anschließend ohne weitere Navigation den Namen eintippen; die Überraschungsansicht auf entfernte Bedienelemente prüfen.

**Acceptance Scenarios**:

1. **Given** die Passwortabfrage ist sichtbar, **When** Ieva das richtige Passwort bestätigt, **Then** ist das Feld „Your name“ direkt fokussiert und für die Eingabe bereit.
2. **Given** Ieva möchte keinen Namen eingeben, **When** sie Skip wählt, **Then** erscheint weiterhin unmittelbar eine Überraschung mit neutraler Anrede.
3. **Given** Ieva sieht die Überraschungsansicht, **When** sie die verfügbaren Bedienelemente betrachtet, **Then** sind weder „Seen so far“ noch „Lock kit“ sichtbar oder per Tastatur erreichbar.
4. **Given** die Seite wird neu geladen, **When** Ieva das Kit erneut öffnet, **Then** erscheint weiterhin die bisherige Passwortabfrage; sie ist keine echte Zugriffskontrolle.

### User Story 4 - Eine klare Kopf- und Fußzeile sehen (Priority: P2)

Ieva sieht eine reduzierte Beschriftung ohne doppelte Botschaften: Die persönliche Widmung steht im Kopfbereich; die humorvolle Herstellerzeile steht unten.

**Why this priority**: Weniger wiederholter Text unterstützt die gewünschte klare, spielerische Oberfläche.

**Independent Test**: Kopf und Fuß auf Desktop und Mobilgerät in Passwort-, Namens- und Überraschungsansicht prüfen.

**Acceptance Scenarios**:

1. **Given** eine Ansicht ist geöffnet, **When** Ieva den Kopfbereich sieht, **Then** steht dort „Made for one very good human“ statt „A little something for you“.
2. **Given** eine Ansicht ist geöffnet, **When** Ieva den unteren Bereich sieht, **Then** steht dort „Made with care & questionable humour“ genau einmal an der bisherigen Stelle von „Made for one very good human“.
3. **Given** eine Ansicht ist geöffnet, **When** Ieva die übrigen Fußtexte betrachtet, **Then** erscheinen weder eine zweite Kopie von „Made with care & questionable humour“ noch „Est. for the hard days“.

### Edge Cases

- Ein GIF oder sein Standbild ist nicht erreichbar: verständliche Alternative anzeigen und andere Überraschungen weiterhin auswählbar halten.
- Wenn nicht für alle gewünschten GIF-Motive die Veröffentlichungsrechte geklärt sind, den fehlenden Inhalt nicht als erledigt ausgeben und keine fremden Medien ohne Erlaubnis verwenden.
- Bei reduzierter Bewegung bleibt das Motiv verständlich und die Animation kontrollierbar; blinkende oder automatisch laute Inhalte sind ausgeschlossen.
- Lange oder leere Namen bleiben handhabbar; Skip, Tastaturbedienung und Screenreader-Beschriftung bleiben nutzbar.
- Bei nur einem verfügbaren Inhalt einer Kategorie ist Wiederholung zulässig; bei mindestens zwei verfügbaren Inhalten nicht unmittelbar derselbe Inhalt erneut anzeigen.
- Externe Spiele oder GIF-Quellen können offline sein oder eigene Datenschutz-/Tonhinweise haben; das Kit bleibt bedienbar und erklärt den nächsten Schritt.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: „Make me laugh“ MUSS mindestens sechs unterschiedliche kurze englische Witze oder Wortspiele mit erkennbarer Pointe anbieten, darunter bewusst alberne Dad-Joke-artige Inhalte.
- **FR-002**: Beim erneuten Wählen einer Kategorie DARF bei mindestens zwei verfügbaren passenden Inhalten nicht unmittelbar derselbe Inhalt erneut erscheinen; die bestehende Zufallsauswahl über alle Kategorien bleibt nutzbar.
- **FR-003**: „Show me a GIF“ MUSS mindestens vier unterschiedliche tatsächliche Animationen mit Motiven zu Katzen, The Office, harmlosen menschlichen Missgeschicken und englischen Sprachpannen anbieten; die Stempelanimation allein genügt nicht.
- **FR-004**: GIFs und Witze über Sprachpannen MÜSSEN sich auf die komische Situation oder Mehrdeutigkeit beziehen, nicht auf eine Nationalität, einen Akzent oder die Herabsetzung von Menschen, die eine Fremdsprache lernen.
- **FR-005**: Jedes veröffentlichte GIF MUSS eine dokumentierte zulässige Nutzung und eine verständliche Beschreibung haben. Bei fehlender Freigabe DARF es nicht veröffentlicht werden; insbesondere DARF The Office nicht durch einen als Original ausgegebenen Platzhalter ersetzt werden.
- **FR-006**: Bewegung MUSS gestoppt werden können oder eine ruhige Alternative bieten; reduzierte Bewegung wird respektiert. Das Kit DARF keinen Ton automatisch starten.
- **FR-007**: „Let's play“ einschließlich der bestehenden Fundstücke und ihres bisherigen Verhaltens MUSS unverändert nutzbar bleiben; externe Ziele bleiben als solche kenntlich und freiwillig.
- **FR-008**: „Seen so far“ und „Lock kit“ sowie ihre zugehörigen Bedienwege MÜSSEN aus der sichtbaren und per Tastatur erreichbaren Oberfläche entfallen. Die drei Kategorien und „I'm feeling lucky“ bleiben erhalten.
- **FR-009**: Nach erfolgreicher Passworteingabe MUSS das Feld „Your name“ unmittelbar den Tastaturfokus erhalten, ohne dass Benutzer vorher eine andere Aktion ausführen müssen.
- **FR-010**: Namenseingabe, Skip, persönliche beziehungsweise neutrale Anrede und Passwortabfrage nach Neuladen MÜSSEN erhalten bleiben. Die lokale Passwortabfrage schützt veröffentlichte Inhalte nicht vor direktem Zugriff.
- **FR-011**: Im Kopfbereich MUSS „Made for one very good human“ statt „A little something for you“ stehen; die Widmung MUSS auch auf schmalen Anzeigen lesbar sein.
- **FR-012**: Im unteren Fußbereich MUSS „Made with care & questionable humour“ genau einmal anstelle von „Made for one very good human“ erscheinen; „Est. for the hard days“ und die frühere zusätzliche Kopie entfallen.
- **FR-013**: Das Kit MUSS auf Desktop und Mobilgeräten mit Tastatur und Screenreader nutzbar bleiben; Inhalte und Aktionen dürfen sich nicht unverständlich überlagern.
- **FR-014**: Wenn eine Überraschung nicht verfügbar ist, MUSS eine verständliche Alternative oder eine andere auswählbare Überraschung erreichbar bleiben. Textbasierte Kernfunktionen bleiben ohne Internet nutzbar.
- **FR-015**: Die Inhaltsübersicht MUSS neue Witze und GIF-Kandidaten mit Kennung und ausreichender Beschreibung zur Rückmeldung enthalten; GIF-Quellen und ihr tatsächlicher Freigabestatus MÜSSEN erkennbar sein.

### Key Entities *(include if feature involves data)*

- **Witz**: Eine kurze englische Überraschung mit eindeutiger Kennung und erkennbarer Pointe.
- **GIF-Kandidat**: Eine unterscheidbare Animation mit Thema, Beschreibung, Herkunft und dokumentiertem Freigabestatus; nur freigegebene Inhalte sind für Veröffentlichung geeignet.
- **Besuch**: Ein zeitlich begrenzter Ablauf mit optionalem Namen und jeweils ausgewählter Überraschung; es gibt keinen sichtbaren Verlauf und keinen Sperr-Button.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Sechs aufeinanderfolgende Abrufe in „Make me laugh“ zeigen sechs unterschiedliche kurze Witze oder Wortspiele, jeweils mit erkennbarer Pointe.
- **SC-002**: Die Veröffentlichung enthält mindestens vier unterschiedliche freigegebene GIFs und deckt die vier gewünschten Themen ab; ein einzelner Stempel erfüllt dieses Ziel nicht.
- **SC-003**: In allen geprüften Desktop- und Mobilansichten liegt nach erfolgreicher Passworteingabe der Fokus sofort auf „Your name“; die Eingabe gelingt ohne zusätzlichen Navigationsschritt.
- **SC-004**: In den drei Hauptansichten erscheinen weder „Seen so far“, „Lock kit“ noch „Est. for the hard days“; die beiden gewünschten Kopf-/Fußtexte erscheinen jeweils einmal an der vorgesehenen Stelle.
- **SC-005**: Bei einem Test mit fünf Personen können mindestens vier ohne Erklärung einen Witz und ein GIF aufrufen sowie nach Passworteingabe direkt einen Namen eingeben.
- **SC-006**: Die bestehenden „Let's play“-Fundstücke bleiben auswählbar und öffnen sich wie zuvor; Tastaturbedienung und Offline-Fallbacks funktionieren weiterhin.

## Assumptions

- Die Oberfläche und die Witze bleiben zunächst englischsprachig und für Ieva gedacht. Das Feedback beschreibt eine Überarbeitung der bestehenden Erfahrung, kein neues Mehrmandantensystem.
- „Seen so far“ und „Lock kit“ werden entfernt, obwohl frühere Spezifikationen diese Bedienelemente vorgesehen haben. Das Neuladen fragt das Passwort weiterhin erneut ab.
- Die bestehende Freigabehürde bleibt bewusst einfach und bietet keinen Schutz vertraulicher Inhalte. Keine persönlichen Informationen ohne Einverständnis veröffentlichen.
- Die bisherigen „Let's play“-Links werden nicht durch neue Vorschläge ersetzt. Ein zuvor offener Prüfpunkt zur Tonwiedergabe der Fremdseite bleibt als bestehendes Risiko bestehen.
- Für The Office und andere Drittinhalte sind geeignete Rechte oder eine erlaubte Bereitstellung Voraussetzung. Falls dies nicht möglich ist, ist die GIF-Auswahl vor Veröffentlichung noch unvollständig; keine stillschweigende Ersetzung durch unpassende Inhalte.
- Die vorhandene Stempelanimation darf als Zusatz erhalten bleiben, ist aber keine Erfüllung der vier gewünschten GIF-Motive. Die endgültige Auswahl und Rechteprüfung erfolgen vor Veröffentlichung.