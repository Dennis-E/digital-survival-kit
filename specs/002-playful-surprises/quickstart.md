# Quickstart und Validierung

Der folgende Ablauf prüft die umgesetzte Version. Keine echten vertraulichen Inhalte für Tests verwenden; die Passwortabfrage ist keine echte Zugriffskontrolle.

## Voraussetzungen

1. Node.js 24 LTS und npm installieren. Im Repository `npm ci` und einmalig `npx playwright install chromium` ausführen.
2. Nach Umsetzung `npm test` für Auswahl- und Datenprüfungen sowie `npm run test:e2e` für Desktop- und Mobilansicht ausführen. Tests öffnen `index.html` direkt über `file://`.
3. Für eine manuelle Prüfung `index.html` im Browser öffnen; kein Entwicklungsserver und keine Datenbank erforderlich.

## Bedienung und Inhalt

1. Falsches Passwort testen; die Meldung ist verständlich und erlaubt einen neuen Versuch. Mit `survival` öffnen, Namenseingabe und Skip jeweils prüfen: Sofort erscheint eine Überraschung.
2. Genau drei Kategorie-Buttons und den größeren „I'm feeling lucky“-Button prüfen. Zweimal dieselbe Kategorie wählen: Bei mindestens zwei passenden Inhalten erscheint ein anderer Inhalt. Wechsel zu Lucky muss aus allen Kategorien ziehen; zehn weitere Abrufe dürfen nicht unmittelbar denselben Inhalt wiederholen.
3. Zwei Einträge ansehen und den ersten über den Verlauf wieder öffnen. Danach Sperren und Neuladen testen: Passwortabfrage erscheint erneut, Name und Verlauf sind zurückgesetzt.
4. Die acht Bestandskennungen und Texte mit `INHALTE.md` abgleichen; die vier ruhigen Texte müssen im Bestand erhalten bleiben, auch wenn sie nicht als Witz angezeigt werden. Geänderte oder neue Medien brauchen dokumentierte Rechte und Freigabe.

## Medien, Offline und Zugänglichkeit

1. GIF-Kategorie wählen: Zuerst erscheint ein lokales Standbild mit passender Beschreibung. Animation starten und stoppen; Stop zeigt wieder das Standbild. Bei reduzierter Bewegung und deren nachträglicher Aktivierung muss eine ruhige Darstellung möglich sein.
2. Eine lokale Mediendatei im Testlauf gezielt als nicht verfügbar simulieren: Ein verständlicher Ersatz erscheint und eine weitere Auswahl bleibt möglich. Keine echten Assets dauerhaft löschen.
3. Externen Link prüfen: Ziel und neuer Tab sind erkennbar, Öffnen erfolgt erst nach Klick, der ursprüngliche Kit-Tab bleibt nutzbar. Fremde Seiten können Werbung, Datenerhebung, Ton oder Fehler enthalten und müssen einzeln vor Freigabe geprüft werden.
4. Externe Netzwerkanfragen im Browser-Test blockieren und die lokale Dateiansicht neu laden: Einstieg, Textüberraschungen und Navigation funktionieren; externe Ziele werden als onlineabhängig behandelt. `navigator.onLine` allein gilt nicht als Verfügbarkeitsnachweis.
5. Desktop und schmales Mobilgerät per Tastatur prüfen, einschließlich Fokus, Kategorien, Verlauf, GIF-Steuerung und Sperren. Zusätzlich eine manuelle Screenreader-Prüfung durchführen; falls nicht möglich, im Ergebnis ausdrücklich als ausstehend vermerken.
6. Bei einer späteren GitHub-Pages-Veröffentlichung dieselben Abläufe erneut testen; lokal erfolgreiche Tests beweisen keine Offlinefähigkeit der gehosteten Seite. Passwort und öffentlich bereitgestellte Dateien sind weiterhin einsehbar.

## Akzeptanz mit Menschen

Mit fünf Personen beobachten, ob mindestens vier ohne Erklärung den Inhalt und Zufallsbutton erkennen, eine Kategorie wählen und innerhalb derselben Kategorie weiterblättern können. Falls keine Testpersonen verfügbar sind, Ergebnis als ausstehend dokumentieren; keine Testergebnisse erfinden.

## Prüfstand: 24. November 2026

- 12 Unit- und 22 Playwright-Tests bestehen lokal unter Windows mit Node.js 24 und Desktop-/Mobil-Chromium. Die direkte Dateiöffnung sowie Screenshots beider Ansichten wurden geprüft.
- Die manuelle Screenreader-Prüfung, eine veröffentlichte GitHub-Pages-Prüfung und der Fünf-Personen-Test stehen aus.
- Die externe Seite „Design the Next iPhone“ wurde ohne Einwilligung geprüft; ihr Ton nach Interaktion hinter dem Einwilligungsdialog ist noch nicht geprüft. Externe Links bleiben freiwillig und entsprechend gekennzeichnet.