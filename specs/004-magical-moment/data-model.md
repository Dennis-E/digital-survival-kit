# Data Model: Magical Moments And Fascination

## Magical Moment

A combined item for either a joke or GIF.

- `id`: stable, unique identifier
- `category`: always `magical`
- `kind`: `text` or `gif`
- `title`: short display title
- `body`: short text or GIF description
- `active`: optional false value excludes the item
- For GIF: local `media`, local still `still`, accessible `mediaAlt` and `credit`

Validation:

- A text moment needs title and body.
- A GIF needs a local media path, local still path, alternative text and credit.
- The item must have a unique ID.
- The previous item is excluded when at least two candidates remain.

## Fascination Item

A positive, embedded video or similar fascination moment.

- `id`: stable, unique identifier
- `category`: always `fascinating`
- `kind`: `iframe`
- `title`: short display title
- `body`: one or two sentence description
- `embedUrl`: privacy-enhanced or verified embed URL
- `sourceUrl`: original public source
- `creator`: verified creator or channel
- `rightsStatus`: `unchecked`, `approved` or `rejected`
- `embedStatus`: `unchecked`, `verified` or `blocked`
- `active`: only true after both status checks pass

Validation:

- All source fields are required.
- `active` may be true only with approved rights and verified embedding.
- The embed URL must use HTTPS.
- A title, description and fallback are required.
- No autoplay or default audio behavior.

## Play Item

The existing external play destinations remain separate.

- `category`: `play`
- `kind`: `link`
- `url`, `linkLabel`, `title` and `body` retain the existing shape
- Interface copy may remain short and neutral

## Selection State

- `category`: `all`, `magical`, `fascinating` or `play`
- `current`: latest selected item
- `remainingIds`: items left in the current round
- `seenIds`: internal state for completed rounds

Changing category starts or continues the category pool according to the existing selection behavior. Repeated selection does not immediately show the current item if two or more candidates exist.
