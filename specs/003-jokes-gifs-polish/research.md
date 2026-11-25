# Phase 0: Recherche und Entscheidungen

## Witze und Auswahl

**Decision**: Mindestens sechs kurze englische Witze oder Wortspiele mit erkennbarem Setup und Pointe als eigene oder für diese Verwendung freigegebene Texte im bestehenden Überraschungsbestand vorsehen. Der vorhandene Auswahlmechanismus bleibt erhalten; erneutes Wählen von „Make me laugh“ setzt die laufende Runde fort und vermeidet bei mindestens zwei Witzen die direkte Wiederholung.

**Rationale**: Das erfüllt die Erwartung an echte Dad-Joke-artige Inhalte, statt freundliche Mitteilungen als Witze auszugeben. Originale Texte oder dokumentierte Nutzungsrechte vermeiden unnötige Urheberrechtsrisiken.

**Alternatives considered**: Zufällige Witz-APIs würden Onlineabhängigkeit, wechselnde Qualität und fremde Datenschutzbedingungen einführen. Die bestehenden vier aufmunternden Texte unverändert als Witze auszugeben erfüllt die gewünschte Pointe nicht.

## GIF-Rechte und Bereitstellung

**Decision**: Vier unterschiedliche echte Animationen zu Katzen, The Office, harmlosen menschlichen Missgeschicken und englischen Sprachpannen werden vor Aktivierung einzeln ausgewählt und auf Nutzungsrechte geprüft. Lokale Dateien und Standbilder kommen nur infrage, wenn Download, Bearbeitung und öffentliche Anzeige jeweils für dieses Projekt abgedeckt sind. Für jedes Motiv werden Quelle, Rechteinhaber, Nutzungsumfang, erlaubte Bereitstellung, Namensnennung und Freigabestatus dokumentiert. Bei Sprachpannen gilt der Witz der Situation, nicht Nationalität oder Akzent.

**Rationale**: Das tatsächliche Anzeigen einer Szene im Kit ist etwas anderes als ein Link zur Plattform. Ein auf einer Plattform auffindbares GIF oder eine technische Einbettung belegt nicht automatisch die Nutzungsrechte für dieses öffentliche Projekt. Auch ein aus fremdem Material erzeugtes Standbild benötigt passende Rechte. Für The Office konnte keine projektbezogene ausreichende Erlaubnis nachgewiesen werden: Dieses Motiv und das vollständige Vier-Motive-Ziel bleiben vor Veröffentlichung blockiert, bis sie vorliegt.

**Alternatives considered**: Ein bloßer Link zum [offiziellen The-Office-Profil](https://giphy.com/theoffice) ist ein mögliches Recherchehilfsmittel, zeigt aber keine Szene im Kit und erfüllt das GIF-Ziel nicht. Ein eigenes Büromotiv darf nicht als Originalszene ausgegeben werden. Ein als Entwicklungsoption denkbarer GIPHY-Dienst kann echte Szenen anzeigen, erfordert aber eine passende API-Freigabe, Schlüssel und Attribution sowie eine Prüfung der konkret erlaubten Inhalte; er ist keine pauschale Lizenzgarantie. Ungeprüfte Kopien oder Scraping sind ausgeschlossen.

**Sources**: [GIPHY API](https://developers.giphy.com/docs/api/), [GIPHY API Terms](https://support.giphy.com/hc/en-us/articles/360028134111-GIPHY-API-Terms-of-Service), [GIPHY User Terms](https://support.giphy.com/hc/en-us/articles/360020027752-GIPHY-User-Terms-of-Service), [Creative Commons FAQ](https://creativecommons.org/faq/#does-a-creative-commons-license-give-me-all-the-rights-i-need-to-use-the-work).

## GIF-Steuerung und Offline-Verhalten

**Decision**: Das vorhandene Muster beibehalten: lokale Standbilder zuerst anzeigen, GIFs nur nach einer Aktion starten und durch Rückkehr zum Standbild stoppen. Bei aktivierter oder während der Wiedergabe eingeschalteter Bewegungseinschränkung wird die ruhige Ansicht genutzt. Fehlende Medien zeigen eine Textalternative und lassen die vier Auswahlaktionen erreichbar.

**Rationale**: Die bestehende Anwendung funktioniert über `file://`; lokale freigegebene Dateien erhalten diese Eigenschaft. Stoppen per Standbild ist keine bildgenaue Pause. Eine künftige externe Einbettung würde Netzwerk- und Datenschutzfragen verändern und bedarf eigener Prüfung; sie darf den textbasierten Offline-Kern nicht blockieren.

**Alternatives considered**: Externe GIFs automatisch laden oder CSS-Pause für ein laufendes GIF verwenden; beides erfüllt Datenschutz- beziehungsweise Bewegungskontrolle nicht zuverlässig.

**Sources**: [W3C: Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html), [MDN: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion), [GIPHY privacy](https://support.giphy.com/hc/en-us/articles/360032872931-GIPHY-Privacy-Policy).

## Fokus, Übersicht und bestehende Spiele

**Decision**: Beim Wechsel zur Namensansicht direkt das beschriftete Namensfeld fokussieren. Sichtbare und per Tastatur erreichbare Bedienwege für Verlauf und Sperren entfernen; Passwortabfrage nach Reload und Skip erhalten. Die Widmung in der Kopfzeile auf schmalen Anzeigen sichtbar halten und die Herstellerzeile nur einmal im unteren Fußbereich anzeigen. Die beiden bestehenden „Let's play“-Einträge und ihre freiwillig geöffneten Links unverändert lassen.

**Rationale**: Ein tatsächlicher Eingabefokus erfüllt den ausdrücklich gewünschten direkten Start. Das Entfernen muss auch eventuelle verwaiste Listener und Tests berücksichtigen, damit die Seite nicht beim Laden fehlschlägt. Der bisher offene Prüfpunkt zur interaktiven Tonwiedergabe der Fremdseite bleibt bestehen; er ist kein Anlass, die Spiele stillschweigend zu verändern.

**Alternatives considered**: Fokus auf der Überschrift belassen oder nur die Bedienelemente visuell verstecken; beides verfehlt das gewünschte Verhalten beziehungsweise kann nicht erreichbare oder fehlerhafte Interaktionen hinterlassen.

**Sources**: [W3C: Form Labels](https://www.w3.org/WAI/tutorials/forms/labels/), [W3C: Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html).