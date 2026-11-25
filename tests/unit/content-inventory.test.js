const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { SurpriseDeck } = require('../../js/selection.js');

const root = path.resolve(__dirname, '../..');
const sandbox = {};
vm.runInNewContext(`${fs.readFileSync(path.join(root, 'js/surprises.js'), 'utf8')}\nthis.items = surprises;`, sandbox);
const original = {
  notice: 'Today has been formally reported to management. The paperwork is extensive.',
  permission: 'Permission granted to do one thing slowly, badly, or not at all. Signed, the Management.',
  tabs: 'Your brain has 47 tabs open and one of them is playing music. The music tab remains unidentified.',
  award: 'Congratulations on your outstanding achievement in continuing to exist on a day like this.',
  pause: 'Unclench your jaw. Let your shoulders drop. Nothing else is required right now.',
  enough: "You don't have to turn today around. Getting through it is enough.",
  water: 'A glass of water, a look out the window, or absolutely nothing. All excellent options.',
  human: 'Not every day has to be productive, graceful, or even remotely photogenic.'
};

test('preserves the eight original texts and excludes inactive items', () => {
  const overview = fs.readFileSync(path.join(root, 'docs/INHALTE.md'), 'utf8');
  const deck = new SurpriseDeck(sandbox.items);
  for (const [id, body] of Object.entries(original)) {
    const item = sandbox.items.find(entry => entry.id === id);
    assert.ok(item, `Missing ${id}`);
    assert.equal(item.body, body);
    assert.ok(overview.includes(`\`${id}\``));
    if (item.active === false) assert.ok(!deck.items.some(entry => entry.id === id));
  }
  assert.ok(['pause', 'enough', 'water', 'human'].every(id => sandbox.items.find(item => item.id === id).active === false));
});

test('contains at least three verified active fascination moments', () => {
  const fascination = new SurpriseDeck(sandbox.items).items.filter(item => item.category === 'fascinating');
  assert.ok(fascination.length >= 3);
  assert.ok(fascination.every(item => item.kind === 'iframe' && item.rightsStatus === 'approved' && item.embedStatus === 'verified'));
});

test('contains at least six distinct active magical moments', () => {
  const moments = new SurpriseDeck(sandbox.items).items.filter(item => item.category === 'magical');
  const jokes = moments.filter(item => item.kind === 'text');
  assert.ok(jokes.length >= 6);
  assert.equal(new Set(moments.map(item => item.id)).size, moments.length);
  assert.ok(jokes.every(item => item.title.trim() && item.body.trim()));
});