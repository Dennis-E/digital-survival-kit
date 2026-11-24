const messages = [
  "You have survived 100% of your bad days. Your track record is honestly a little intimidating.",
  "Somewhere, a pigeon is walking around like it pays rent. You too can be inexplicably confident.",
  "Today may be a dumpster fire, but you are at least a very charming dumpster fire supervisor.",
  "If all you did today was exist, congratulations: the universe still gets to have you in it.",
  "Your brain has 47 tabs open, three are playing music, and that's okay. Maybe close one tab and have a snack.",
  "You are not behind. There is no universal life spreadsheet. And if there is, someone definitely broke the formulas.",
  "This is your official permission slip to do one thing badly, slowly, or not at all. Signed, the Management."
];

const messageElement = document.querySelector('#message');
const messageButton = document.querySelector('#another-message');
const breathPrompt = document.querySelector('#breath-prompt');
const breatheButton = document.querySelector('#breathe-button');
let messageIndex = 0;
let breathTimer;

messageButton.addEventListener('click', () => {
  const offset = Math.floor(Math.random() * (messages.length - 1)) + 1;
  messageIndex = (messageIndex + offset) % messages.length;
  messageElement.textContent = messages[messageIndex];
});

breatheButton.addEventListener('click', () => {
  clearTimeout(breathTimer);
  breatheButton.disabled = true;
  breathPrompt.textContent = 'Breathe in gently...';
  breathTimer = setTimeout(() => {
    breathPrompt.textContent = 'And slowly breathe out...';
    breathTimer = setTimeout(() => {
      breathPrompt.textContent = 'There you go. One breath at a time.';
      breatheButton.disabled = false;
    }, 4000);
  }, 4000);
});