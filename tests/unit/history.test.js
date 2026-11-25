const test = require('node:test');
const assert = require('node:assert/strict');
const { SurpriseDeck } = require('../../js/selection.js');

test('history remains unique and reopening removes an item from the current round', () => {
  const items = ['one', 'two', 'three'].map(id => ({ id, title: id, category: 'magical', kind: 'text', body: id }));
  const deck = new SurpriseDeck(items, () => 0);
  const first = deck.next();
  deck.next();
  deck.setCategory('all');
  deck.open(first.id);
  assert.ok(!deck.remainingIds.includes(first.id));
  assert.deepEqual(deck.seenIds, [...new Set(deck.seenIds)]);
});