# Feature Specification: Magical Moments And Fascination

**Feature Branch**: `004-magical-moment`

**Created**: 2026-11-24

**Status**: Draft

**Input**: User description: "1) for gifs include them as iframe. 2) merge make me laugh and show a gif together under magical moment and then new third button something fascinating and there please research great awesome youtube videos that you include as iframe, eg people are awesome and materials like this. 3) simplify, eg not (external, new tab; internet required) also not external site; may show ads or a privacy prompt and such things. Only easy, clean, short, swift sentences"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - One Magical Moment Choice (Priority: P1)

the visitor sees one clear action named "Magical moment" instead of separate "Make me laugh" and "Show me a GIF" actions. The action brings together a short joke or an embedded GIF, so every choice feels playful and varied.

**Why this priority**: This reduces clutter and makes the kit quicker and easier to use.

**Independent Test**: Several selections produce jokes and GIF moments without repeating the immediately previous item, and the interface contains no separate laugh or GIF selection button.

**Acceptance Scenarios**:

1. **Given** the kit is open, **When** the visitor chooses "Magical moment", **Then** she receives either a short joke or a GIF moment.
2. **Given** at least two active items exist, **When** one magical moment follows another, **Then** the immediately previous item is not shown again.
3. **Given** GIF items exist, **When** an item is selected, **Then** the GIF is shown inside the kit in an embedded frame.
4. **Given** a GIF cannot be loaded, **When** that item is selected, **Then** a short understandable fallback appears and another moment remains available.

---

### User Story 2 - Something Fascinating (Priority: P1)

the visitor sees a new clear action named "Something fascinating". It shows a short, positive, surprising or inspiring video or embedded fascination moment without leaving the kit.

**Why this priority**: It adds a new category of delight and lets the visitor discover uplifting material quickly.

**Independent Test**: Choosing "Something fascinating" several times opens only approved, embeddable, age-appropriate fascination items, with text alternatives and working playback controls.

**Acceptance Scenarios**:

1. **Given** the fascination category has active items, **When** the visitor chooses "Something fascinating", **Then** the kit shows an embedded video or other fascination moment.
2. **Given** embedded video content, **When** it is selected, **Then** the kit provides a title and a short description before playback.
3. **Given** an embedded video cannot be loaded, **When** that item is selected, **Then** a short fallback explains the problem and another action remains available.
4. **Given** reduced motion is enabled, **When** a fascination item is considered, **Then** motion and autoplay are not forced.

---

### User Story 3 - Short, Quiet Interface Copy (Priority: P2)

the visitor sees short, friendly interface sentences. Technical notices about external tabs, internet access, advertising, consent prompts or data collection are removed or replaced with one simple source or availability note only where needed.

**Why this priority**: It keeps the experience warm and uncomplicated while avoiding repeated warnings that distract from the moment.

**Independent Test**: The interface uses the three requested primary actions and contains no duplicate, noisy or technical explanatory labels.

**Acceptance Scenarios**:

1. **Given** the visitor sees the main actions, **When** the kit is open, **Then** the primary choices are "Magical moment", "Something fascinating" and "Let's play" plus "I'm feeling lucky".
2. **Given** an embedded GIF or video is used, **When** it displays, **Then** it is not accompanied by the old phrases about external tabs, internet requirement, advertising or privacy prompts.
3. **Given** a source matters to attribution or rights, **When** it is shown, **Then** it is short and unobtrusive.

---

### Edge Cases

- What happens when no GIF or video item has been approved for embedding?
- How does the kit behave when a provider blocks embedding or the network is unavailable?
- How are source, creator, rights and embed permission recorded before public use?
- How does the experience avoid repeated or unsuitable video choices?
- How are still, descriptive text and keyboard operation provided if an embedded item cannot play?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST present "Magical moment" as one combined category for jokes and GIF moments.
- **FR-002**: The system MUST remove separate "Make me laugh" and "Show me a GIF" actions from the main interface.
- **FR-003**: "Magical moment" MUST return at least one active joke or GIF when active content is available.
- **FR-004**: GIF moments MUST be presented inside the kit in an embedded frame.
- **FR-005**: The system MUST avoid immediately repeating the previous magical moment when at least two active moments exist.
- **FR-006**: The system MUST present "Something fascinating" as a third playful main category.
- **FR-007**: "Something fascinating" MUST contain uplifting, surprising or inspiring embedded moments.
- **FR-008**: The fascination collection MUST exclude content that is hateful, sexually explicit, violent, deceptive or unsafe for a general adult audience.
- **FR-009**: Each fascination item MUST have a title, short description, source and embed permission status before activation.
- **FR-010**: Embedded GIF and video items MUST be silent or provide no automatic audio by default.
- **FR-011**: Embedded items MUST start only after a clear user action.
- **FR-012**: Embedded items MUST provide a readable title, keyboard-operable controls and an understandable fallback.
- **FR-013**: The system MUST respect reduced-motion preferences and not automatically animate or play media.
- **FR-014**: The interface copy MUST avoid repeated technical notices about external tabs, internet access, advertising or privacy prompts.
- **FR-015**: The system MUST retain "Let's play" as a separately usable play category.
- **FR-016**: The existing "I'm feeling lucky" action MUST remain available and draw across the active categories.
- **FR-017**: No fascination item MUST be activated when source, creator, rights and embed permission are not documented.
- **FR-018**: GIF items MUST be documented for source, rights and embed suitability before activation.

### Key Entities *(include if feature involves data)*

- **Magical Moment**: A playful text joke or embedded GIF, with title, unique identifier, source information and active status.
- **Fascination Item**: A positive, surprising or inspiring embedded video or moment, with title, description, source, embed permission, rights status and active status.
- **Play Item**: An existing play action or external play destination, kept as a separate category.
- **Media Source**: Creator or channel, original location, embed permission, rights status and attribution requirement.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: On desktop and mobile, the visitor can reach a magical moment in no more than two clicks after the kit opens.
- **SC-002**: At least 90 percent of tested primary interactions complete without a broken label, missing media fallback or overlap.
- **SC-003**: The main selection area contains exactly the three requested primary choices: "Magical moment", "Something fascinating" and "Let's play", plus the existing lucky action.
- **SC-004**: At least six active, distinct magical moments are available; repeated selection does not immediately repeat the previous item.
- **SC-005**: At least three genuinely positive and verified fascination items are active before public release.
- **SC-006**: No fascination or GIF item is active without documented source, rights and embed permission.
- **SC-007**: On a reduced-motion and blocked-network check, the kit retains the primary actions and shows a fallback for unavailable media.

## Assumptions

- GIF and video embeds use only sources that allow embedding for this website.
- "People Are Awesome" is an example of the desired tone, not a guaranteed source or a promise that any specific video is embeddable or reusable.
- The selected fascination videos are short enough for repeated casual viewing and do not rely on shock, fear or embarrassment.
- The current static, local-first kit remains the delivery format.
- Existing games remain separate and optional under "Let's play".
