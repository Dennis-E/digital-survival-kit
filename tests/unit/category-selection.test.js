const test = require('node:test');
const assert = require('node:assert/strict');
const { SurpriseDeck } = require('../../js/selection.js');

const items = [
  { id: 'one', title: 'One', category: 'magical', kind: 'text', body: 'One' },
  { id: 'two', title: 'Two', category: 'magical', kind: 'text', body: 'Two' },
  { id: 'three', title: 'Three', category: 'play', kind: 'text', body: 'Three' }
];

test('filter changes start a new round and preserve a different current item', () => {
  const deck = new SurpriseDeck(items, () => 0);
  const first = deck.next();
  const next = deck.setCategory('magical');
  assert.notEqual(next.id, first.id);
  assert.equal(deck.next().category, 'magical');
  assert.equal(deck.setCategory('missing'), null);
});

test('different returns no item when only one category exists', () => {
  const deck = new SurpriseDeck([items[0]], () => 0);
  deck.next();
  assert.equal(deck.different(), null);
});

test('repeating a category continues the round before returning an item again', () => {
  const choices = ['one', 'two', 'three'].map(id => ({ id, title: id, category: 'magical', kind: 'text', body: id }));
  const deck = new SurpriseDeck(choices, () => 0);
  const chosen = [deck.setCategory('magical'), deck.setCategory('magical'), deck.setCategory('magical')];
  assert.equal(new Set(chosen.map(item => item.id)).size, 3);
  assert.notEqual(deck.setCategory('magical').id, chosen[2].id);
});

test('lucky returns to all categories and avoids immediate repetition', () => {
  const deck = new SurpriseDeck(items, () => 0);
  let current = deck.setCategory('magical');
  for (let index = 0; index < 10; index += 1) {
    const next = deck.setCategory('all');
    assert.notEqual(next.id, current.id);
    assert.equal(deck.category, 'all');
    current = next;
  }
});

test('empty categories return no item and a single item can repeat', () => {
  const deck = new SurpriseDeck([items[0]], () => 0);
  assert.equal(deck.setCategory('fascinating'), null);
  assert.equal(deck.setCategory('magical').id, 'one');
  assert.equal(deck.setCategory('magical').id, 'one');
});