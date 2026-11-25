# Oberflächenvertrag

Die Beschreibung ist das Ziel für die nächste Implementierung, nicht der aktuelle Stand. Die Texte bleiben englischsprachig. Fokus ist sichtbar, Aktionen sind per Tastatur und Screenreader erreichbar, und bewegte Inhalte starten nicht automatisch.

| Ansicht | Inhalt und Aktionen | Ergebnis |
| --- | --- | --- |
| Passwort | Humorvoller Einstieg, beschriftetes Passwortfeld, eindeutig beschrifteter Submit, verständliche Fehlermeldung | Richtiges Passwort öffnet die Begrüßung; falsch oder leer erlaubt erneuten Versuch. |
| Begrüßung | Kurze humorvolle Namensfrage, beschriftetes optionales Feld, Continue und Skip | Name oder neutrale Anrede; direkt eine erste Überraschung. |
| Überraschung | Ein visuell klar von Aktionen abgegrenzter Inhalt; exakt drei Kategorie-Buttons und ein größerer „I'm feeling lucky“-Button | Kategorie zieht passenden Inhalt; Lucky zieht aus allen. Kein Dropdown oder redundanter nächster-Auswahl-Button. |
| GIF | Inhalt mit Textalternative und Standbild; auf Wunsch Start-/Stop-Aktion | Animation wird erst durch Aktion gestartet und kann durch Standbild ersetzt werden; reduzierte Bewegung beachten. |
| Externer Link | Name des Ziels, Hinweis auf externen neuen Tab und gegebenenfalls Ton-, Werbe- oder Datenschutzhinweis | Öffnet nur bei Klick in einem neuen Tab; das Kit bleibt im ursprünglichen Tab erhalten. |
| Verlauf | Separater Rückblick auf gesehene Titel und Rückkehr | Einen gesehenen Inhalt erneut öffnen; keine zusätzliche Kategorieauswahl. |
| Fehler/leer | Verständlicher Hinweis statt fehlender Medien oder leerer Kategorie | Andere Kategorie oder Lucky bleibt erreichbar; Offline-Hinweis für externe Links. |

Neue Inhalte werden zurückhaltend angekündigt, ohne bei jedem Ziehen den Tastaturfokus zu versetzen. Buttons haben stabile, mobile Zielgrößen und sichtbare Zustände. Sperren und Reload führen zur Passwortabfrage zurück; die Abfrage schützt keine direkten Dateien.