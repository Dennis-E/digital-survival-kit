# Implementation Plan: Überraschungsstrom für Ieva

**Branch**: `main` | **Date**: 2026-11-24 | **Spec**: [spec.md](spec.md)

**Input**: Feature-Spezifikation unter `specs/001-surprise-stream/spec.md`; Spec Kit meldet `001-surprise-stream` als Feature-Kennung, ein entsprechender Git-Branch wurde nicht angelegt.

## Summary

Nach einer lokalen Passwortabfrage und einer optionalen Namensbegrüßung erscheint sofort eine Überraschung. Weitere Inhalte lassen sich ohne unmittelbare Wiederholung, nach Inhaltsart und über einen Besuchsverlauf erreichen. Die vorhandene statische HTML-/CSS-/JavaScript-Seite wird zu diesem Ablauf umgebaut; ein Server oder eine Datenbank ist nicht erforderlich. Die Abfrage ist keine Zugriffskontrolle: Passwort und öffentlich bereitgestellte Inhalte sind einsehbar. [research.md](research.md) dokumentiert Entscheidungen und Alternativen.

## Technical Context

**Language/Version**: HTML, CSS und JavaScript für aktuelle Desktop- und Mobilbrowser; Node.js 24 LTS nur für automatisierte Entwicklungstests.

**Primary Dependencies**: Keine Laufzeitabhängigkeiten und kein Build-Schritt. Node-Test-Runner und Playwright als Entwicklungswerkzeuge für Auswahlregeln und Browserabläufe; Testabhängigkeiten per Lockfile reproduzierbar halten.

**Storage**: Unverfängliche Beispielinhalte als statische Daten im Repository; Freigabezustand, Namen und Besuchsverlauf nur im Arbeitsspeicher der Browserseite. Persönliche Inhalte sind bei öffentlicher Veröffentlichung ebenfalls öffentlich und benötigen Einverständnis; wirklich vertrauliche Inhalte dürfen nicht veröffentlicht werden.

**Testing**: Node-Test-Runner für Auswahlregeln; Playwright für Passwortabfrage, Neuladen, Filter und Verlauf auf Desktop und Mobilgeräten. `file://` und bei Veröffentlichung GitHub Pages separat prüfen; Tastatur, reduzierte Bewegung und Screenreader zusätzlich manuell testen.

**Target Platform**: Windows für Entwicklung; direktes Öffnen der HTML-Datei sowie optional statische Veröffentlichung über GitHub Pages.

**Project Type**: Statische Webanwendung ohne Frontend-Framework, Server oder Build-Schritt.

**Performance Goals**: Erste Überraschung innerhalb von 30 Sekunden nach Öffnen des zugänglichen Kits für mindestens vier von fünf Testpersonen; Auswahl ohne lange Wartezeit bei mindestens sechs Inhalten.

**Constraints**: Ein einzelnes Kit; Passwort `survival` darf im Quelltext stehen und wird bei jedem Neuladen erneut abgefragt. Keine Vertraulichkeitsgarantie; keine vertraulichen Inhalte öffentlich bereitstellen. Barrierearme, mobile Bedienung und kein automatischer Ton; die Anwendung funktioniert auch über `file://`.

**Scale/Scope**: Eine Empfängerin und ein Betreiber; keine Kontoverwaltung, keine Erstellen-Maske und keine Mehrmandantenfähigkeit in Version 1.

## Constitution Check

**Vor Phase 0**: Die Projekt-Constitution ist noch eine unveränderte Vorlage und enthält keine ratifizierten Prinzipien oder überprüfbaren Gates. Es werden keine zusätzlichen Regeln als beschlossen unterstellt. Ergebnis: kein festgestellter Verstoß; fehlende Constitution bei Gelegenheit gesondert festlegen.

**Nach Phase 1**: Unverändert kein festgestellter Verstoß. Barrierefreiheit und der ausdrücklich begrenzte Datenschutzanspruch folgen aus der Feature-Spezifikation; eine Server-Infrastruktur ist für Version 1 nicht vorgesehen.

## Project Structure

### Documentation (this feature)

```text
specs/001-surprise-stream/
├── spec.md
├── plan.md
├── research.md
├── data-model.md
├── contracts/
│   ├── http.md
│   └── ui.md
└── quickstart.md
```

### Source Code (repository root)

```text
index.html, style.css, script.js  # vorhandene Oberfläche, für den Strom weiterentwickelt
tests/                           # geplant: Auswahlregeln und Browserflüsse
package.json, package-lock.json  # geplant: ausschließlich Testwerkzeuge und Testbefehle
```

**Structure Decision**: Die bestehende Oberfläche bleibt erhalten und wird gezielt angepasst. Inhalte liegen in klassischen Skripten oder anderen direkt geladenen statischen Dateien; keine lokalen `fetch`-Aufrufe oder Modulimporte voraussetzen, die unter `file://` scheitern können. Die Passwortprüfung verdeckt nur die normale Ansicht.

## Delivery Design

1. Lokale Passwortabfrage mit Fehlermeldung, erneutem Sperren und Rücksetzung beim Neuladen umsetzen; keine vertraulichen Daten als geschützt ausgeben.
2. Begrüßung und Strom mit mindestens sechs unverfänglichen Inhalten aus mindestens zwei Arten entwickeln; Namen nur als Text ausgeben und für den Besuch behalten.
3. Filter, „Something different“, Verlauf und definierte Fehlerzustände ergänzen; Zustandsübergänge und Anti-Wiederholungsregel gemäß [data-model.md](data-model.md) testen.
4. Dateiöffnung, GitHub Pages und Barrierefreiheit prüfen; vor Veröffentlichung mit allen Beteiligten klären, welche Inhalte öffentlich sein dürfen.

## Complexity Tracking

Keine Verletzung einer ratifizierten Constitution festgestellt. Die lokale Abfrage ist bewusst nur eine Einstiegshürde und schützt weder Passwort noch veröffentlichte Inhalte vor direktem Zugriff.
