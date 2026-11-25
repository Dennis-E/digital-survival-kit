# Datenmodell und Zustände

## Kit

Ein Kit besitzt eine stabile interne Kennung und eine Sammlung von Überraschungen. Version 1 kennt genau ein Kit und einen gemeinsamen Zugang; keine Felder für Mandantenverwaltung oder Nutzerkonten werden benötigt.

## Überraschung

| Feld | Regel |
| --- | --- |
| `id` | Stabile, eindeutige Kennung; keine Dateipfade oder Geheimnisse. |
| `title` | Kurze, verständliche Bezeichnung für den Besuchsverlauf. |
| `category` | Eine verfügbare Inhaltsart, z. B. `laugh` oder `pause`. |
| `body` | Inhalt als Text; keine ungeprüfte HTML-Ausführung. |
| `media` | Optionaler relativer Verweis auf ein öffentlich bereitgestelltes Medium. |

Mindestens sechs veröffentlichbare Beispiele aus mindestens zwei Arten. Alle bereitgestellten Daten und Medien können direkt abgerufen werden; keine vertraulichen Inhalte veröffentlichen. Beschädigte Einträge überspringen und einen verständlichen Fehlerzustand anzeigen.

## Lokaler Freigabezustand

Ein flüchtiger Zustand unterscheidet gesperrte und freigegebene normale Ansicht. Bei Eingabe von `survival` wird die Begrüßung angezeigt; beim Neuladen und beim manuellen Sperren wird der Zustand zurückgesetzt. Es gibt keine serverseitige Sitzung, keine technische Dateisperre und keinen Widerruf bereits ausgelieferter Daten.

## Besuchszustand

- `name`: optional, getrimmt, mit einer festgelegten maximalen Länge, nur für den laufenden Besuch; leer bedeutet neutrale Anrede. Namensgrenze und Fehlermeldung im Interface festlegen.
- `categoryFilter`: alle oder genau eine verfügbare Inhaltsart.
- `currentId`: aktuell angezeigte Überraschung oder leer vor dem ersten Inhalt.
- `seenIds`: geordnete, eindeutige IDs bereits angezeigter Inhalte für den Verlauf, unabhängig vom Filter.
- `remainingIds`: noch nicht gezogene IDs des aktuellen Durchlaufs, passend zum Filter; nicht identisch mit dem Besuchsverlauf.

Dieser Zustand lebt nur im Arbeitsspeicher der aktuellen Seite und geht bei einem Neuladen verloren. Er wird nicht an Dritte übertragen; der Name wird nicht für Authentifizierung genutzt.

## Übergänge

1. **Begrüßung abschließen/überspringen**: Name festlegen oder neutral setzen, alle Arten wählen, Durchlauf initialisieren und eine Überraschung zeigen.
2. **Another one**: Aus `remainingIds` eine zufällige passende ID ziehen und entfernen. Ist der Durchlauf leer, alle passenden IDs neu einfüllen; bei mehr als einer passenden ID darf die aktuelle ID nicht als erste neue ID gewählt werden. Anschließend `currentId` und `seenIds` aktualisieren.
3. **Filter setzen/zurücksetzen**: Auswahl ändern und Durchlauf aus den dazu passenden IDs neu aufbauen. Wenn mindestens zwei passende IDs existieren, bei der ersten Ziehung die aktuelle ID ausschließen. `seenIds` bleibt erhalten.
4. **Something different**: Auswahl auf alle Arten zurücksetzen, Durchlauf neu aufbauen und eine ID mit anderer Art als die aktuelle ziehen; bei weniger als zwei Arten deaktivieren. Die gezogene ID aus dem neuen Durchlauf entfernen.
5. **Verlauf öffnen**: Eine zuvor gesehene ID direkt erneut anzeigen; `seenIds` bleibt eindeutig. Falls die ID im aktuellen Durchlauf noch offen ist, wird sie aus `remainingIds` entfernt, damit „Another one“ sie nicht unmittelbar wiederholt.
6. **Kein passender Inhalt oder Ladefehler**: Verständlichen Hinweis zeigen und Wechsel zu allen Arten bzw. einen erneuten Abruf ermöglichen; keine Endlosschleife.
7. **Sperren/Neuladen**: Freigabezustand, Name, Verlauf und Medienansicht zurücksetzen und zur Passwortabfrage wechseln; der Quelltext und direkt erreichbare Dateien bleiben öffentlich.