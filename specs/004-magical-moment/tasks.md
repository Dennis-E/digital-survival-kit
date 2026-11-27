---

description: "Task list for magical moments and fascination"
---

# Tasks: Magical Moments And Fascination

**Input**: Design documents from `/specs/004-magical-moment/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/ui.md

**Organization**: Tasks are grouped by user story so each story can be implemented and validated independently.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel because it touches a different file or has no dependency on incomplete work
- **[Story]**: Maps tasks to a user story in spec.md
- Each task includes an exact repository path

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Confirm the existing static app and test setup before feature changes.

- [x] T001 Check existing scripts and dependencies in package.json
- [x] T002 [P] Check Playwright desktop and mobile projects in playwright.config.js
- [x] T003 [P] Inspect the current media, category and fallback implementation in index.html, script.js and selection.js

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish shared media and category behavior used by every story.

**CRITICAL**: No user story work should begin until the shared category model and media frame contract are ready.

- [x] T004 Extend the SurpriseDeck category validation and matching rules for `magical`, `fascinating`, `play` and `all` in selection.js
- [x] T005 [P] Extend the content schema validation for `kind: iframe` and its required `embedUrl`, `sourceUrl`, `creator`, `rightsStatus`, `embedStatus`, `mediaAlt` and `credit` fields in selection.js
- [x] T006 [P] Add a shared embedded media frame and fallback elements to index.html
- [x] T007 [P] Add responsive iframe and media-frame styles to style.css
- [x] T008 [P] Add regression tests for category validation, iframe validation and no-immediate-repeat behavior in tests/unit/selection.test.js

**Checkpoint**: Shared category and media behavior is ready.

---

## Phase 3: User Story 1 - One Magical Moment Choice (Priority: P1) MVP

**Goal**: Replace separate joke and GIF actions with one combined `Magical moment` action.

**Independent Test**: Open the kit, select `Magical moment` repeatedly, see jokes or GIFs without immediate repetition, and confirm the old labels are absent.

### Tests for User Story 1

- [x] T009 [P] [US1] Add failing e2e assertions for the exact `Magical moment` button and absence of old laugh/GIF buttons in tests/e2e/categories.spec.js
- [x] T010 [P] [US1] Add failing unit assertions that joke and GIF entries belong to `category: magical` and repeat no immediately previous item in tests/unit/content-inventory.test.js and tests/unit/selection.test.js
- [x] T011 [P] [US1] Add failing e2e GIF-frame, still-state, play/stop and fallback assertions in tests/e2e/media.spec.js

### Implementation for User Story 1

- [x] T012 [US1] Merge active joke and GIF entries under `category: magical` in surprises.js
- [x] T013 [US1] Remove the old `Make me laugh` and `Show me a GIF` category markup and add `Magical moment` in index.html
- [x] T014 [US1] Update category labels, rendering and selection handling for magical text/GIF items in script.js
- [x] T015 [US1] Render GIF moments in an embedded local media frame with still-first, explicit play/stop and fallback behavior in script.js
- [x] T016 [P] [US1] Update the magical action and media-frame styles in style.css
- [x] T017 [US1] Update the GIF and magical-moment inventory with source, rights and active status in INHALTE.md and assets/CREDITS.md

**Checkpoint**: User Story 1 is independently usable and testable.

---

## Phase 4: User Story 2 - Something Fascinating (Priority: P1)

**Goal**: Add a third `Something fascinating` action for positive, verified and embedded moments.

**Independent Test**: Select `Something fascinating`, see a title and short description, load only an approved iframe after explicit action, and see a fallback when media is blocked.

### Rights and Candidate Research

- [ ] T018 [P] [US2] Verify three official, suitable and embeddable video candidates, with exact creator, source URL, embed URL, rights status and embed status, and record them in assets/CREDITS.md
- [ ] T019 [P] [US2] Confirm each candidate is positive, age-appropriate and free of hate, sexual, violent or deceptive content, and record that review in INHALTE.md
- [ ] T020 [US2] Leave every fascination item inactive unless rights and embed status are both approved and documented

### Tests for User Story 2

- [x] T021 [P] [US2] Add failing e2e assertions for the third button, title, description, explicit iframe creation, fallback and no autoplay in tests/e2e/categories.spec.js or tests/e2e/media.spec.js
- [x] T022 [P] [US2] Add failing unit assertions that only active `category: fascinating`, `kind: iframe` items with approved rights and verified embedding are selected in tests/unit/content-inventory.test.js and tests/unit/selection.test.js

### Implementation for User Story 2

- [x] T023 [US2] Add only approved fascination items to surprises.js with `embedUrl`, `sourceUrl`, `creator`, `rightsStatus: approved`, `embedStatus: verified` and no autoplay
- [x] T024 [US2] Add `Something fascinating` to the category markup in index.html
- [x] T025 [US2] Render fascination items with title, short description, lazy iframe creation, source credit and fallback in script.js
- [x] T026 [P] [US2] Add desktop/mobile iframe sizing and blocked-media styles in style.css
- [x] T027 [US2] Add iframe error handling and reduced-motion safeguards in script.js

**Checkpoint**: User Story 2 is functional only with verified active media and independently testable.

---

## Phase 5: User Story 3 - Short, Quiet Interface Copy (Priority: P2)

**Goal**: Remove noisy technical notices and keep the interface short and clear.

**Independent Test**: Inspect all main states and confirm exactly four compact actions and no old external/tab/ads/privacy wording.

### Tests for User Story 3

- [x] T028 [P] [US3] Add failing e2e copy assertions for exact primary labels and absence of external-tab, internet, ad and privacy phrases in tests/e2e/visual.spec.js
- [x] T029 [P] [US3] Add failing e2e checks for no technical media wording in surprise states in tests/e2e/accessibility.spec.js

### Implementation for User Story 3

- [x] T030 [US3] Replace the existing external play-item descriptions in surprises.js with short, quiet text; retain targets and `Let's play`
- [x] T031 [US3] Simplify media and fallback labels in script.js and index.html without changing the core action names
- [x] T032 [P] [US3] Remove or compress obsolete explanatory styles and stale label-related CSS in style.css
- [x] T033 [US3] Update visible source or credit copy to one short unobtrusive line in script.js and INHALTE.md

**Checkpoint**: The interface copy is short and free of the requested noisy notices.

---

## Phase 6: Polish and Cross-Cutting Concerns

**Purpose**: Finish validation, documentation and quality checks across all stories.

- [x] T034 [P] Update the active media and release status in specs/004-magical-moment/quickstart.md
- [x] T035 [P] Update the feature inventory and no-unverified-autoplay guidance in INHALTE.md
- [x] T036 [P] Add or refine desktop/mobile visual screenshots for the three primary states in tests/e2e/visual.spec.js
- [x] T037 Run npm test and resolve regressions in tests/unit/*.test.js
- [x] T038 Run npm run test:e2e and resolve regressions in tests/e2e/*.spec.js
- [x] T039 Validate desktop/mobile layout, iframe sizing, reduced motion and missing-media fallback from specs/004-magical-moment/quickstart.md
- [ ] T040 Do not mark the feature complete while fewer than three verified fascination items are active or any GIF rights are unresolved

---

## Dependencies and Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies; starts immediately.
- **Foundational (Phase 2)**: Depends on Setup; blocks every user story.
- **User Story 1 (Phase 3)**: Depends on Foundational; independently deliverable MVP.
- **User Story 2 (Phase 4)**: Depends on Foundational and verified rights; may proceed in parallel with US1 after foundations.
- **User Story 3 (Phase 5)**: Depends on the final visible labels and media rendering; should follow US1/US2 implementation.
- **Polish (Phase 6)**: Depends on all desired user stories being complete.

### User Story Dependencies

- **US1**: No dependency on US2 or US3; can be the MVP.
- **US2**: No dependency on US1 after the shared media frame exists; rights verification may remain independently blocked.
- **US3**: Integrates labels and copy from US1/US2 but does not require media research for copy cleanup.

### Parallel Opportunities

- T002, T003 and T005-T008 can run independently after Setup.
- US1 tests T009-T011 can run as a parallel test-first group.
- US2 rights and tests T018-T022 can run independently before activation.
- US3 copy tests T028-T029 can run in parallel.
- Polish documentation and visual tasks T034-T036 can run in parallel.

## Parallel Example: User Story 1

```text
Task: "T009 [P] [US1] Add category assertions in tests/e2e/categories.spec.js"
Task: "T010 [P] [US1] Add joke/GIF inventory assertions in tests/unit/content-inventory.test.js"
Task: "T011 [P] [US1] Add GIF frame assertions in tests/e2e/media.spec.js"
```

## Parallel Example: User Story 2

```text
Task: "T018 [P] [US2] Verify three official embed candidates"
Task: "T019 [P] [US2] Review candidate suitability"
Task: "T021 [P] [US2] Add fascination e2e assertions"
Task: "T022 [P] [US2] Add fascination inventory unit assertions"
```

## Implementation Strategy

### MVP First

1. Complete Setup and Foundational phases.
2. Implement and validate User Story 1.
3. Stop and validate the combined Magical moment category before starting fascination media.

### Incremental Delivery

1. Add User Story 1 as the independently testable MVP.
2. Add User Story 2 only as soon as candidate rights and embedding are verified.
3. Finish User Story 3 copy cleanup and run full validation.

### Full Feature Completion

A public completion requires at least three active, verified fascination items and no unresolved GIF rights. Missing rights keep the corresponding task open and must not be reported as complete.
