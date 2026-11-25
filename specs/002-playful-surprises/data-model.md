# Datenmodell und Zustände

## Überraschung

Ein freigegebener Eintrag in `surprises.js` hat eine stabile, eindeutige `id`, einen verständlichen `title`, eine nicht leere `body`-Beschreibung und eine `category`: `laugh`, `gif` oder `play`. `kind` ist `text`, `gif` oder `link`; die Inhaltsanzeige prüft die für die jeweilige Art benötigten Felder. Text wird als Text und nicht als ausführbarer Inhalt dargestellt.

| Art | Zusätzliche Daten | Regeln |
| --- | --- | --- |
| `text` | Keine | Ein eigener oder freigegebener kurzer Text; offline verfügbar. |
| `gif` | Relative Pfade für GIF und Standbild, beschreibender Alternativtext, Herkunft/Rechte | Beide Dateien lokal und für Veröffentlichung freigegeben; zunächst Standbild, Bewegung nur nach Aktion. |
| `link` | HTTPS-Ziel, sichtbarer Name des Angebots, Warnhinweis falls nötig | Nur explizit geprüftes und freigegebenes Ziel; keine automatischen Weiterleitungen oder Einbettung. |

Einträge ohne benötigte Daten oder mit doppelter ID werden übersprungen; leere Kategorien zeigen einen verständlichen Zustand. Bestehende ruhige Texte behalten ihre IDs und Texte in einem gekennzeichneten inaktiven Bestand, bis der Absender ihre weitere Verwendung festlegt. Die Übersicht enthält weiterhin alle acht ursprünglichen Einträge. Keine privaten Informationen oder ungeklärten Fremdmedien veröffentlichen.

## Medienfreigabe

Für jedes veröffentlichte Asset dokumentieren: Ersteller, Herkunft oder eigene Erstellung, Nutzungsrechte, erforderliche Namensnennung und Freigabe zur Veröffentlichung. Recherchelinks und GIF-Beispiele mit ungeklärten Rechten in `INHALTE.md` sind ausschließlich Ideen, nicht automatisch freigegebene Dateien. Ein externer Link benötigt eine dokumentierte Prüfung von Ziel, Datenschutz-/Werbehinweis, Ton und Eignung vor Veröffentlichung.

## Besuchszustand

- `unlocked`: Nur während der aktuellen Seiteninstanz; Neuladen und Sperren setzen zurück.
- `name`: Optional, getrimmt, höchstens 40 Zeichen; leer ergibt `friend`.
- `category`: `all` oder eine der drei Kategorien; `all` ist der Pool für „I'm feeling lucky“.
- `currentId`: Aktuelle Überraschung oder leer, wenn keine passende verfügbar ist.
- `remainingIds`: Noch nicht gezogene IDs des aktiven Pools; Wiederholung erst nach dessen Durchlauf, sofern möglich.
- `seenIds`: Geordnete, eindeutige IDs bereits angezeigter Inhalte; Verlauf bleibt beim Poolwechsel erhalten.
- `motion`: Für das aktuelle GIF `still` oder `playing`; beim Inhaltswechsel, Sperren oder Aktivieren reduzierter Bewegung zurück auf `still`.

## Übergänge

1. **Einstieg**: Nach richtiger lokaler Passwortabfrage und Namenseingabe/Skip eine erste freigegebene Überraschung aus `all` anzeigen.
2. **Kategorie**: Bei Wechsel den passenden Pool neu aufbauen; bei erneutem Drücken derselben Kategorie aus dessen verbleibenden IDs weiterziehen. Die aktuelle ID bei mindestens zwei verfügbaren Einträgen nicht unmittelbar wiederholen.
3. **I'm feeling lucky**: Beim Wechsel von einer Kategorie den Pool `all` aufbauen, bei wiederholtem Klick aus diesem Pool weiterziehen; bei mindestens zwei Einträgen keine unmittelbare Wiederholung.
4. **Rundenende**: Passenden Pool neu befüllen; die aktuelle ID bei der ersten Ziehung ausschließen, sofern mindestens zwei IDs passen. Null Treffer zeigen eine Meldung, ein Treffer darf sich wiederholen.
5. **Verlauf**: Ein bereits angezeigter Eintrag wird direkt geöffnet, `seenIds` bleibt eindeutig; seine ID wird aus einem noch offenen Durchlauf entfernt. Der nächste Abruf bleibt im gewählten Pool.
6. **GIF**: Standbild → auf Wunsch animiertes GIF → durch Stop zurück zum Standbild. Fehlende Dateien zeigen Textalternative und erlauben eine weitere Auswahl; beim Wechsel keine Animation weiterlaufen lassen.
7. **Sperren/Neuladen**: Freigabezustand, Namen, Auswahl, Verlauf und aktive Medien zurücksetzen. Dies schützt weder Quelltext noch direkte Dateien.