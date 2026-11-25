# Oberflächenvertrag

Die Oberfläche bleibt englischsprachig und funktioniert auf mobilen und großen Anzeigen. Tastatur und Screenreader erreichen sämtliche Bedienelemente; Status- und Fehlermeldungen werden verständlich angekündigt. Animationen respektieren reduzierte Bewegung, Ton startet nicht automatisch.

| Zustand | Sichtbar und bedienbar | Übergang |
| --- | --- | --- |
| Passwortabfrage | Beschriftetes Passwortfeld, Weiter und verständlicher Fehler | `survival` → Begrüßung; falsche oder leere Eingabe → erneuter Versuch. |
| Begrüßung | Beschriftetes optionales Namensfeld, Continue und Skip | Continue oder Skip → unmittelbar erste Überraschung. |
| Überraschung | Eine Überraschung, Another one, Something different, Inhaltsarten, Verlauf und Sperren | Weitere Überraschung, Filterwechsel, Verlauf oder erneute Passwortabfrage. |
| Verlauf | Verständliche Bezeichnungen gesehener Inhalte und Rückkehr | Auswahl → entsprechender Inhalt; bei leerem Verlauf ein Hinweis. |
| Fehler/leer | Verständlicher Hinweis und nächster Schritt | Wiederholen oder alle Arten wählen. |

„Something different“ wechselt die aktuelle Inhaltsart und setzt einen aktiven Filter auf alle Arten zurück. Der Name wird als Text und nur während des Besuchs verwendet. Vor richtiger Passworteingabe bleibt die normale Kit-Ansicht verdeckt; Sperren oder Neuladen setzt den Besuchszustand zurück und zeigt die Passwortabfrage erneut. Die Abfrage schützt keine direkten Datei- oder Quelltextzugriffe.