# UI Contract: Magical Moments And Fascination

## Primary Actions

The surprise view exposes exactly these main choices:

- `Magical moment`
- `Something fascinating`
- `Let's play`
- `I'm feeling lucky`

The old labels `Make me laugh` and `Show me a GIF` must not be visible.

## Magical Moment Contract

Selecting `Magical moment` renders:

- a text joke, or
- a local GIF in an embedded media frame.

Text output requires `title` and `body`.

GIF output requires:

- a title
- a description
- local still and media paths
- alternative text
- source or credit text
- a clear play/stop control

GIF motion does not start automatically.

## Fascination Contract

Selecting `Something fascinating` renders:

- a title
- a short description
- an iframe only after explicit selection
- a source name or unobtrusive source link
- a fallback for unavailable media

The iframe must not autoplay. Reduced-motion users receive no forced movement.

## Lucky Contract

`I'm feeling lucky` selects from all active categories, subject to the existing no-immediate-repeat rule.

## Failure Contract

- Missing media: show `This moment is unavailable right now.`
- Iframe blocked: show `This moment could not be opened.`
- No active items: keep category actions usable and offer `I'm feeling lucky`.

Messages remain short and do not describe ads, consent prompts or external-tab mechanics as primary interface copy.
