# Datenmodell und Zustände

## Witz

Ein aktiver Witz ist ein Eintrag mit stabiler eindeutiger `id`, `category: laugh`, `kind: text`, nicht leerem Titel und englischem Text mit erkennbarer Pointe. Mindestens sechs unterschiedliche Witze werden benötigt. Herkunft oder eigene Erstellung ist in der Inhaltsübersicht nachvollziehbar. Nicht geeignete frühere aufmunternde Texte bleiben bei Bedarf im Bestand inaktiv, statt als Witz ausgegeben zu werden.

## GIF-Kandidat

Ein Kandidat hat eine eindeutige `id`, einen verständlichen Titel, Beschreibung und ein oder mehrere gewünschte Themen: `cat`, `the-office`, `mishap`, `language`. Für das Veröffentlichungsziel sind mindestens vier unterschiedliche tatsächliche Animationen mit Abdeckung aller vier Themen nötig. Die Stempelanimation ist kein Ersatz für diese vier Motive.

Für einen Kandidaten werden Herkunft, Rechteinhaber, Quelle, spezifische Nutzungsfreigabe, gegebenenfalls Namensnennung, Einschränkungen und Status (`ungeprüft`, `angefragt`, `freigegeben`, `abgelehnt`) dokumentiert. `freigegeben` bedeutet, dass die konkrete öffentliche Nutzung im Kit abgedeckt ist; eine externe Fundstelle allein genügt nicht. Vor Aktivierung muss bei lokaler Bereitstellung auch die Nutzung des Standbilds und der lokalen Kopie erlaubt sein. Keine tatsächliche Freigabe für The Office wurde bisher nachgewiesen.

Ein aktivierter lokaler Eintrag hat `category: gif`, `kind: gif`, relative Medien- und Standbildpfade, eine beschreibende Textalternative und einen Verweis auf die dokumentierten Rechte. Nur freigegebene Kandidaten werden aktiviert; fehlende oder ungültige Medien führen zu einer verständlichen Alternative.

## Bestehende Spiel-Inhalte

`phone` und `craft` behalten Kennungen, Zieladressen, Kennzeichnung und freiwillige Öffnung in einem neuen Tab. Der bekannte, noch nicht geprüfte Ton hinter dem Einwilligungsdialog bleibt als Risiko dokumentiert.

## Besuch und Übergänge

- `unlocked`: Nur für die aktuelle Seiteninstanz; Reload zeigt die Passwortabfrage erneut. Kein sichtbarer Sperr-Button und keine echte Zugriffskontrolle.
- `name`: Optional, getrimmt und höchstens 40 Zeichen; leer ergibt `friend`.
- `category`: `all`, `laugh`, `gif` oder `play`; wiederholte Auswahl derselben Kategorie setzt die Runde fort.
- `current` und verbleibende IDs steuern die Anzeige und Wiederholungsvermeidung. Ein interner Auswahlzustand ist kein sichtbarer Verlauf; ein Verlauf darf nicht bedienbar sein.
- `motion`: GIF zunächst ruhig, nur auf Wunsch animiert; Stop oder Aktivierung reduzierter Bewegung stellt die ruhige Ansicht wieder her.

Nach richtigem Passwort wird das sichtbare Namensfeld fokussiert; Continue oder Skip zeigt eine Überraschung. Bei Reload werden Freigabezustand und Name zurückgesetzt. Fehlende Inhalte oder Medien dürfen die übrigen Kategorien und Lucky nicht blockieren.