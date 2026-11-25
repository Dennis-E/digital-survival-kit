# Phase 0: Recherche und Entscheidungen

## Einstiegshürde und Veröffentlichung

**Decision**: Die bestehende statische Seite prüft `survival` ausschließlich im Frontend. Der Freigabezustand bleibt im Arbeitsspeicher und geht bei jedem Neuladen verloren. Ein Server, eine Datenbank und ein Login sind nicht vorgesehen.

**Rationale**: Das entspricht der ausdrücklich gewünschten einfachen Hürde und erlaubt direktes Öffnen sowie GitHub Pages. Passwort und öffentlich bereitgestellte Dateien sind über Quelltext oder direkte Adressen einsehbar; wirklich vertrauliche Inhalte dürfen daher nicht veröffentlicht werden. Persönliche Inhalte nur mit Einverständnis und Kenntnis dieser Einschränkung veröffentlichen.

**Alternatives considered**: Eine serverseitige Zugriffskontrolle oder ein entsprechender Hostingdienst wären für wirkliche Vertraulichkeit nötig, liegen aber außerhalb der gewählten ersten Version. Dauerhafte lokale Speicherung würde der gewünschten erneuten Abfrage beim Neuladen widersprechen.

**Sources**: [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages), [MDN localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

## Formulare und Barrierefreiheit

**Decision**: Ein beschriftetes Formular mit Passwortfeld, Submit und verständlicher Fehleranzeige steuert die normale Ansicht. Nicht aktive Ansichten werden mit `hidden` verborgen; Fokus wird nach einem Wechsel sinnvoll gesetzt, Fehler werden zugeordnet und angekündigt.

**Rationale**: Formularsemantik unterstützt Tastatur und Eingabetaste; verborgene Ansichten bleiben auch aus dem Fokusablauf entfernt. Die Passwortprüfung bietet trotzdem keinerlei technische Abschirmung.

**Alternatives considered**: Ein rein dekoratives Overlay ohne semantisches Formular oder Fokussteuerung ist schwerer mit Tastatur und Screenreader bedienbar.

**Sources**: [W3C Form Labels](https://www.w3.org/WAI/tutorials/forms/labels/), [W3C Form Notifications](https://www.w3.org/WAI/tutorials/forms/notifications/).

## Statische Daten und Medien

**Decision**: Überraschungen werden als strukturierte statische Daten mit stabilen IDs gehalten; vorhandene klassische Skripte und relative Dateipfade bleiben mit `file://` nutzbar. Öffentlich bereitgestellte Medien sind direkt abrufbar.

**Rationale**: Die Anwendung benötigt weder Datenbank noch Server; dynamische lokale Datenabrufe oder Modulimporte können durch Browserregeln auf `file://` scheitern.

**Alternatives considered**: Ein separater Datenabruf per `fetch` oder ein Backend würde die einfache direkte Dateiöffnung erschweren oder ausschließen.

**Sources**: [MDN Same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Same-origin_policy#file_origins).

## Oberfläche und Tests

**Decision**: Bestehendes HTML/CSS/JavaScript weiterverwenden, Inhalte strukturiert verwalten und Besucherzustand flüchtig im Browser halten. Node-Test-Runner deckt Auswahl und Randfälle ab; Playwright prüft Bedienung, Neuladen und Sperren auf Desktop und Mobilgeräten.

**Rationale**: Die vorhandene Seite ist klein und hat bereits JavaScript-Interaktionen; ein Frontend-Framework ist dafür nicht nötig. Unit- und Browserprüfungen decken die Auswahl und sichtbare Abläufe ab; echte persönliche Inhalte sind dafür nicht erforderlich.

**Alternatives considered**: Ein neues Framework oder eine Datenbank für das Ein-Kit-Inhaltsmodell würden ohne aktuellen Mehrwert zusätzliche Komplexität schaffen. Die bisherige zufällige Auswahl vermeidet nur unmittelbare Wiederholungen und reicht für die geforderte vollständige Runde nicht aus.