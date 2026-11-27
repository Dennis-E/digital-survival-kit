const greetingView = document.querySelector('#greeting-view');
const surpriseView = document.querySelector('#surprise-view');
const nameForm = document.querySelector('#name-form');
const nameInput = document.querySelector('#visitor-name');
const heading = document.querySelector('#stream-heading');
const title = document.querySelector('#surprise-title');
const body = document.querySelector('#surprise-body');
const categoryLabel = document.querySelector('#surprise-category');
const categoryActions = document.querySelector('#category-actions');
const media = document.querySelector('#surprise-media');
const iframe = document.querySelector('#surprise-iframe');
const mediaError = document.querySelector('#media-error');
const motionButton = document.querySelector('#motion-button');
const externalLink = document.querySelector('#external-link');
const externalPreview = document.querySelector('#external-preview');
const externalPreviewLink = document.querySelector('#external-preview-link');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let motionPlaying = false;
const labels = { magical: 'MAGICAL MOMENT', fascinating: 'SOMETHING FASCINATING', play: 'FIELD TRIP' };
let deck = new SurpriseDeck(surprises);

function showView(view, focusTarget) {
  [greetingView, surpriseView].forEach(section => { section.hidden = section !== view; });
  document.querySelector('.experience').classList.toggle('is-open', view === surpriseView);
  focusTarget.focus();
}

function renderSurprise(item) {
  motionPlaying = false;
  media.hidden = true;
  media.removeAttribute('src');
  iframe.hidden = true;
  iframe.removeAttribute('src');
  mediaError.hidden = true;
  motionButton.hidden = true;
  motionButton.textContent = 'Play animation';
  externalLink.hidden = true;
  externalLink.removeAttribute('href');
  externalPreview.hidden = true;
  externalPreview.removeAttribute('src');
  externalPreviewLink.hidden = true;
  externalPreviewLink.removeAttribute('href');
  if (!item) {
    categoryLabel.textContent = 'A LITTLE SOMETHING';
    title.textContent = 'Nothing here just yet.';
    body.textContent = "Try another category or choose I'm feeling lucky.";
  } else {
    categoryLabel.textContent = labels[item.category] || item.category.toUpperCase();
    title.textContent = item.title;
    body.textContent = item.body;
    if (item.kind === 'iframe') {
      iframe.title = item.title;
      iframe.hidden = false;
      iframe.src = item.embedUrl;
      externalLink.href = item.sourceUrl;
      externalLink.textContent = 'Open on YouTube';
      externalLink.hidden = false;
    } else if (item.kind === 'gif') {
      media.alt = item.mediaAlt || '';
      motionPlaying = !reducedMotion.matches;
      media.src = motionPlaying ? item.media : item.still;
      media.hidden = false;
      motionButton.hidden = false;
      motionButton.textContent = motionPlaying ? 'Stop animation' : 'Play animation';
    } else if (item.kind === 'link') {
      externalLink.href = item.url;
      externalLink.textContent = `Visit ${item.linkLabel}`;
      externalLink.hidden = false;
      if (item.preview) {
        externalPreview.src = item.preview;
        externalPreview.alt = `${item.linkLabel} preview`;
        externalPreview.hidden = false;
        externalPreviewLink.href = item.url;
        externalPreviewLink.hidden = false;
      }
    }
  }
}

function begin(name) {
  const visitorName = name.trim().slice(0, 40) || 'friend';
  heading.textContent = `For you, ${visitorName}`;
  deck = new SurpriseDeck(surprises);
  updateSelection('fascinating');
  renderSurprise(deck.open('fascination-biking'));
  showView(surpriseView, heading);
}

function updateSelection(category) {
  categoryActions.querySelectorAll('button').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.category === category));
  });
}

nameForm.addEventListener('submit', event => {
  event.preventDefault();
  begin(nameInput.value);
});
document.querySelector('#skip-name').addEventListener('click', () => begin(''));
categoryActions.addEventListener('click', event => {
  const button = event.target.closest('button[data-category]');
  if (!button) return;
  updateSelection(button.dataset.category);
  renderSurprise(deck.setCategory(button.dataset.category));
});
motionButton.addEventListener('click', () => {
  if (!deck.current || deck.current.kind !== 'gif') return;
  motionPlaying = !motionPlaying;
  media.src = motionPlaying ? deck.current.media : deck.current.still;
  motionButton.textContent = motionPlaying ? 'Stop animation' : 'Play animation';
});
iframe.addEventListener('load', () => {
  if (deck.current && deck.current.kind === 'iframe' && iframe.contentWindow) mediaError.hidden = true;
});
iframe.addEventListener('error', () => {
  iframe.hidden = true;
  mediaError.hidden = false;
});
reducedMotion.addEventListener('change', event => {
  if (event.matches && motionPlaying && deck.current && deck.current.kind === 'gif') {
    motionPlaying = false;
    media.src = deck.current.still;
    motionButton.textContent = 'Play animation';
  }
});
media.addEventListener('error', () => { media.hidden = true; mediaError.hidden = false; motionButton.hidden = true; });