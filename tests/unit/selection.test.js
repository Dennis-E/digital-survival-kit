const test = require('node:test');
const assert = require('node:assert/strict');
const { SurpriseDeck } = require('../../js/selection.js');

const items = [
  { id: 'one', title: 'One', category: 'magical', kind: 'text', body: 'One' },
  { id: 'two', title: 'Two', category: 'play', kind: 'text', body: 'Two' },
  { id: 'three', title: 'Three', category: 'magical', kind: 'text', body: 'Three' }
];

test('draws every item before repeating and avoids repeating at the boundary', () => {
  const deck = new SurpriseDeck(items, () => 0);
  const firstRound = [deck.next(), deck.next(), deck.next()];
  assert.equal(new Set(firstRound.map(item => item.id)).size, 3);
  assert.notEqual(deck.next().id, firstRound[2].id);
});

test('handles empty and single-item collections', () => {
  assert.equal(new SurpriseDeck([]).next(), null);
  const deck = new SurpriseDeck([items[0]], () => 0);
  assert.equal(deck.next().id, 'one');
  assert.equal(deck.next().id, 'one');
});

test('changing category resets the draw and different selects a different category', () => {
  const deck = new SurpriseDeck(items, () => 0);
  deck.next();
  assert.equal(deck.setCategory('play').category, 'play');
  assert.equal(deck.next().category, 'play');
  assert.equal(deck.different().category, 'magical');
  assert.equal(deck.category, 'all');
});

test('selects valid GIFs and returns to the complete pool', () => {
  const gif = { id: 'gif', title: 'GIF', category: 'magical', kind: 'gif', body: 'A GIF', media: 'assets/surprise.gif', still: 'assets/surprise-still.png', mediaAlt: 'A stamp', credit: 'Original' };
  const deck = new SurpriseDeck([...items, gif], () => 0);
  assert.equal(deck.setCategory('magical').category, 'magical');
  assert.ok(deck.matching().some(item => item.kind === 'gif'));
  deck.setCategory('all');
  assert.equal(deck.matching().length, items.length + 1);
});

test('history stays unique and reopening an item does not repeat it immediately', () => {
  const deck = new SurpriseDeck(items, () => 0);
  const first = deck.next();
  deck.next();
  deck.setCategory('all');
  deck.open(first.id);
  assert.notEqual(deck.next().id, first.id);
  assert.equal(new Set(deck.seenIds).size, deck.seenIds.length);
});

test('only accepts active items with valid categories, kinds and required fields', () => {
  const valid = { id: 'valid', title: 'Valid', category: 'magical', kind: 'text', body: 'Hello' };
  const deck = new SurpriseDeck([
    valid,
    { ...valid },
    { ...valid, id: 'inactive', active: false },
    { ...valid, id: 'missing', title: '' },
    { ...valid, id: 'category', category: 'unknown' },
    { ...valid, id: 'kind', kind: 'unknown' },
    { ...valid, id: 'gif', category: 'magical', kind: 'gif' },
    { ...valid, id: 'remote-gif', category: 'magical', kind: 'gif', media: 'https://example.com/image.gif', still: 'assets/still.png', mediaAlt: 'A stamp', credit: 'Original' },
    { ...valid, id: 'invalid-link', category: 'play', kind: 'link', url: 'https://not a host', linkLabel: 'Invalid' },
    { ...valid, id: 'link', category: 'play', kind: 'link', url: 'javascript:alert(1)' }
  ], () => 0);
  assert.deepEqual(deck.items.map(item => item.id), ['valid']);
});