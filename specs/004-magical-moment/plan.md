# Implementation Plan: Magical Moments And Fascination

**Branch**: `004-magical-moment` | **Date**: 2026-11-24 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `/specs/004-magical-moment/spec.md`

**Note**: This template is filled in by the `/speckit-plan` command; it reflects the active implementation plan.

## Summary

Replace the separate laugh and GIF actions with one "Magical moment" category and add "Something fascinating" for verified embedded videos. GIFs and fascination items are displayed inside the kit through embedded media, without opening a new tab. Interface copy stays short and avoids repetitive technical warnings.

## Technical Context

**Language/Version**: HTML5, CSS3 and classic JavaScript; Node.js 24 for tests

**Primary Dependencies**: Static Playwright tests and the existing Node test runner; no runtime framework

**Storage**: Static data in `surprises.js` and local licensed media in `assets/`

**Testing**: Node built-in unit tests and Playwright desktop/mobile browser tests

**Target Platform**: Modern desktop and mobile browsers; direct `file://` use remains supported

**Project Type**: Static local-first website

**Performance Goals**: Media loads only after a user selects it; primary actions remain usable without external network access

**Constraints**: No unverified embed or copyright use; no autoplay; reduced motion respected; no backend or personal data storage

**Scale/Scope**: One page, one static visitor session and a small curated media collection

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

The constitution is not yet ratified and contains placeholders. It imposes no additional executable gates. The existing project practices are retained: static delivery, focused tests, minimal dependencies and careful rights documentation.

## Project Structure

### Documentation (this feature)

```text
specs/004-magical-moment/
├── plan.md              # This feature plan
├── research.md          # Phase 0 research
├── data-model.md        # Phase 1 data model
├── quickstart.md        # Phase 1 validation
├── contracts/           # Phase 1 UI contract
└── tasks.md             # Phase 2 task list
```

### Source Code (repository root)
<!--
  ACTION REQUIRED: Replace the placeholder tree below with the concrete layout
  for this feature. Delete unused options and expand the chosen structure with
  real paths (e.g., apps/admin, packages/something). The delivered plan must
  not include Option labels.
-->

```text
# [REMOVE IF UNUSED] Option 1: Single project (DEFAULT)
src/
├── models/
├── services/
├── cli/
└── lib/

tests/
├── contract/
├── integration/
└── unit/

# [REMOVE IF UNUSED] Option 2: Web application (when "frontend" + "backend" detected)
backend/
├── src/
│   ├── models/
│   ├── services/
│   └── api/
└── tests/

frontend/
├── src/
│   ├── components/
│   ├── pages/
│   └── services/
└── tests/

# [REMOVE IF UNUSED] Option 3: Mobile + API (when "iOS/Android" detected)
api/
└── [same as backend above]

ios/ or android/
└── [platform-specific structure: feature modules, UI flows, platform tests]
```

**Structure Decision**: Keep the existing static single-page structure. Add no framework or backend. UI and media behavior remain in the current HTML, CSS and JavaScript files.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
| --- | --- | --- |
| None | No constitution violation identified | Not applicable |
