# Phase 0: Recherche und Entscheidungen

## Bildwelt und Einstieg

**Decision**: Die bestehende „Good Day Department“-Idee wird als humorvolle Behörde für unwichtige Angelegenheiten weiterentwickelt. Das Straßenmotiv wird durch ein eigenes oder eindeutig zur Veröffentlichung freigegebenes, komisches Bitmap-Motiv mit passenden Gegenständen ersetzt; die eigentliche Anwendung ist die erste Ansicht, keine zusätzliche Werbeseite. Passwort- und Namensdialog erhalten kurze, alberne und verständliche englische Texte.

**Rationale**: Das nutzt die vorhandene Identität, trifft den gewünschten leichteren Ton und macht den Zweck der visuellen Elemente nachvollziehbar. Eigene Bildinhalte vermeiden die ungeklärten Rechte der GIF-Fundstücke in `INHALTE.md`.

**Alternatives considered**: Das bestehende Straßenfoto wirkt zu ernst; ein rein dekorativer abstrakter Hintergrund vermittelt die gewünschte komische Situation schlechter. Die anderen Motive aus `INHALTE.md` bleiben Feedbackoptionen.

## Auswahl und Erhalt bestehender Inhalte

**Decision**: Drei Kategorien „Make me laugh“, „Show me a GIF“ und „Let's play“ wählen jeweils direkt einen passenden Inhalt; „I'm feeling lucky“ zieht aus allen Kategorien. Bei wiederholter Wahl derselben Kategorie wird die Runde fortgesetzt. Der Verlauf bleibt ein eigener Rückblick. Die vier bisherigen ruhigeren Texte bleiben mit IDs und Text im Datenbestand und in `INHALTE.md` erhalten, aber bis zur Inhaltsentscheidung außerhalb der aktiven „Laugh“-Auswahl.

**Rationale**: Vier klar getrennte Aktionen ersetzen das bestehende Dropdown und die doppelte „Another one“-/„Something different“-Navigation. Ein passender Inhalt ist sofort sichtbar; ruhigere Texte als Witze zu bezeichnen wäre irreführend. Einträge gehen nicht verloren und sind weiterhin reviewbar.

**Alternatives considered**: Alle Texte ungeprüft als „Laugh“ einordnen oder die ruhigen Inhalte löschen; beides nimmt dem Absender die geplante Feedbackentscheidung ab. Ein weiteres Kategorienmenü würde den Wunsch nach einfacher Auswahl verletzen.

## GIFs und Bewegung

**Decision**: Mindestens ein selbst erstelltes oder eindeutig freigegebenes lokales GIF zusammen mit einem passenden lokalen Standbild und Textalternative vorsehen. Zunächst das Standbild zeigen; eine klare Aktion startet das GIF, „Stop“ zeigt wieder das Standbild. Bei `prefers-reduced-motion` auch CSS-Bewegung reduzieren und laufende Animation bei Änderung der Einstellung stoppen. Kein automatischer Ton oder blinkendes Motiv.

**Rationale**: CSS kann ein animiertes GIF im Bild nicht zuverlässig pausieren; der Wechsel zum Standbild bietet eine kontrollierbare ruhige Alternative. Das Stoppen ist kein bildgenaues Pausieren: Beim erneuten Start kann die Animation von vorn beginnen. Lokale Dateien funktionieren auch bei direkter Dateiöffnung.

**Alternatives considered**: Fremde GIPHY-Fundstücke ohne geprüfte Rechte einbetten oder automatisch laden. Ein Video könnte bildgenau pausieren, ersetzt aber nicht die ausdrücklich gewünschte GIF-Überraschung.

**Sources**: [MDN: reduzierte Bewegung](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion), [W3C: Bewegung stoppen](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html), [W3C: Bildalternativen](https://www.w3.org/WAI/tutorials/images/).

## Externe Links und Verfügbarkeit

**Decision**: Externe Fundstücke werden vor Veröffentlichung einzeln geprüft und als solche beschriftet; sie öffnen erst nach bewusstem Klick in einem angekündigten neuen Tab. Der ursprüngliche Tab bleibt erhalten. Für einen ersten Kandidaten wird „Design the Next iPhone“ aus `INHALTE.md` erneut auf Eignung und die dort vermerkte mögliche Werbe-/Dateneinwilligung geprüft; Aufnahme erst nach dieser Prüfung. Keine fremden Seiten einbetten oder vorladen.

**Rationale**: Die Nutzerin behält den Weg zurück und das Kit startet keine fremden Inhalte automatisch. Auf der Fremdseite lassen sich Werbung, Ton, Datenschutz und Verfügbarkeit nicht garantieren. Bei Offline-Nutzung bleibt der Kit-Tab bedienbar und erklärt, dass externe Links Internet benötigen; ein Fehler einer Fremdseite im neuen Tab kann nicht zuverlässig vom Kit erkannt werden.

**Alternatives considered**: Automatische Weiterleitung oder zufällige externe Ziele; diese erschweren Rückkehr und Inhaltskontrolle. Einbettungen würden weitere Rechte- und Datenschutzfragen aufwerfen.

**Sources**: [MDN: Links](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a), [W3C: Hinweis auf neuen Tab](https://www.w3.org/WAI/WCAG22/Techniques/general/G201), die Recherche und Einschränkungen in `INHALTE.md`.

## Dateibetrieb und Qualität

**Decision**: Klassische Skripte und relative Asset-Pfade beibehalten; keine lokalen `fetch`- oder Modulimporte voraussetzen. Vorhandene Node- und Playwright-Suites weiterentwickeln, nicht durch neue Testwerkzeuge ersetzen. Kategorie-Buttons mit sichtbarem Fokus und mindestens 44 × 44 CSS-Pixeln als Ziel ausstatten; relevante Änderungen zurückhaltend ankündigen.

**Rationale**: Die bestehende Anwendung funktioniert über `file://`; lokale Dateien können browserabhängig verschiedene Origins haben. Tests müssen die tatsächliche Dateiansicht, mobile Größen und Tastaturabläufe prüfen. GitHub Pages selbst ist keine Offline-Garantie.

**Alternatives considered**: Ein zusätzliches Framework, Backend oder rein automatisierte Barrierefreiheitsprüfung würde die Anwendung verkomplizieren oder manuelle Prüfungen nicht ersetzen.

**Sources**: [MDN: Dateiorsprünge](https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Same-origin_policy#file_origins), [W3C: Tastatur](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html), [W3C: Zielgröße](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html).