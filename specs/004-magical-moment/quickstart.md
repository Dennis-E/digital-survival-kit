# Quickstart: Magical Moments And Fascination

## Prerequisites

- Node.js and npm
- Chromium for Playwright
- The repository dependencies installed

## Setup

```powershell
npm ci
npx playwright install chromium
```

## Validation

Implementation status: 15 unit tests and 22 Playwright tests passed on 2026-11-25. Four official-channel fascination iframes are active. A published HTTPS embed check remains open. The Magical moment UI and local GIF frame are implemented. Verified fascination videos are not yet active.

Run unit tests:

```powershell
npm test
```

Run desktop and mobile browser tests:

```powershell
npm run test:e2e
```

Open [index.html](../../index.html) directly to test the static experience.

## Functional Checks

1. Open the kit with `survival` and enter or skip the name.
2. Confirm the main actions are `Magical moment`, `Something fascinating`, `Let's play` and `I'm feeling lucky`.
3. Confirm `Make me laugh` and `Show me a GIF` are absent.
4. Select `Magical moment` repeatedly. Confirm jokes and GIF moments do not immediately repeat.
5. Confirm GIF media has a still state and starts only after a play action.
6. Select `Something fascinating`. Confirm a title, short description and embedded player appear only after selection.
7. Confirm no media autoplay occurs on a reduced-motion setting.
8. Block external media and verify a short fallback while all category actions remain usable.
9. Check desktop and mobile layouts for overflow and overlap.

## Media Release Check

Before activating any GIF or video:

- Record creator, original source and license or permission.
- Verify the embed URL works.
- Verify a still or text fallback.
- Verify no hateful, violent, unsafe or sexually explicit content.
- Verify no autoplay or automatic audio.
- Mark rights and embed status as approved before setting `active: true`.

Do not activate a fascination item only because a YouTube search or channel page exists.
