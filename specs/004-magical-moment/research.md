# Research: Magical Moments And Fascination

## 1. Media Embedding

- **Decision:** GIF and video content appears inside the existing surprise card in an iframe or a controlled media frame, never as an automatic redirect.
- **Rationale:** This keeps the visitor in the kit and uses familiar embedded-player behavior without moving through another website.
- **Alternatives considered:** External links and a popup window. Rejected because they remove the visitor from the current experience and add less predictable privacy and layout behavior.

## 2. GIF Source Strategy

- **Decision:** Keep only locally stored, documented GIF assets for the public feature. GIF URLs must stay in the local `assets/` tree.
- **Rationale:** Local files support still frames, fallbacks and offline behavior; the previous rights research found no verified Office or GIPHY asset ready for copying.
- **Alternatives considered:** Embedding GIPHY or GIF platform pages. Rejected until rights, embed policy and fallback behavior are documented.

## 3. Fascination Video Strategy

- **Decision:** Use a small manually curated collection of official-channel embed URLs. Every item needs a title, description, creator, source URL, embed check and rights status before activation.
- **Rationale:** Official channels reduce the chance of accidental reposting, and a small static collection stays predictable.
- **Alternatives considered:** Live YouTube search, scraped feeds and full channel embeds. Rejected because content may change and cannot meet rights or content-safety checks.

## 4. Concrete YouTube Candidates

Verified official-channel candidates found on 2026-11-25:

| Theme | Channel | Video | ID | Status |
| --- | --- | --- | --- | --- |
| High energy | People Are Awesome | Ten Years Of Awesome - Best Of All Time | `ES2EMAUlspM` | Candidate; embed check open |
| High energy | People Are Awesome | PEOPLE ARE AWESOME 2015 - Best Videos Of The Year | `vLT3A0a3hoQ` | Candidate; embed check open |
| High energy | People Are Awesome | balanced biking / MTB / flips Shorts | `LcbPWP8bwCQ`, `DUB6bYY0tHA`, `xqD31o_j0P0` | Candidates; suitability and embed check open |
| Human mishaps | America's Funniest Home Videos | People Chose CHAOS - Funniest Fails | `Mx6iTqDJR6g` | Candidate; embed check open |
| Human mishaps | America's Funniest Home Videos | TRY NOT TO LAUGH AT YOUR OWN FAMILY | `x2z8iRLo7IU` | Candidate; review content and embed |
| Human mishaps | FailArmy | Masterclass in how NOT to do things | `IFf68lHuqyw` | Candidate; exclude dangerous or humiliating clips |
| Human mishaps | FailArmy | Home improvement or home disaster | `lro7IgUFDpk` | Candidate; exclude injuries or dangerous accidents |
| High energy | Red Bull | World First Touch & Go Landing On A Moving Train | `8cyuqpKZ534` | Candidate; safety and embed check open |
| High energy | World Chase Tag | The most exciting pursuits from WCT5 UK | `bo8sSGwo1UY` | Candidate; embed check open |

Direct privacy-enhanced embed checks currently show YouTube Error 153 in this local browser context. This is not a video-specific block and must be retested on the published HTTPS site. No candidate is active yet.

Official channel or search presence alone does not establish project rights. Activation also requires embed verification and a short, safe edit or full-clip suitability review.

## 5. Playback and Motion

- **Decision:** Embed a placeholder or title first. Create the iframe only after the user chooses the item. Use `youtube-nocookie.com` where appropriate, no autoplay and no default audio claim.
- **Rationale:** This avoids surprise loading and makes blocked networks easier to handle.
- **Alternatives considered:** Loading all embeds at page start or autoplay. Rejected for motion, privacy and performance reasons.

## 6. Interface Copy

- **Decision:** Remove technical phrases about external tabs, internet requirements, ads and privacy prompts from primary and media copy.
- **Rationale:** The user asked for short, calm, swift sentences. Technical caveats remain only in source documentation and test notes.
- **Alternatives considered:** Small warning paragraphs under embeds. Rejected for distracting from the playful experience.

## 7. Failure Behavior

- **Decision:** Show a short title and fallback text when iframe or GIF loading fails. Keep all category buttons usable.
- **Rationale:** Media is optional enrichment; it must not block the rest of the kit.
