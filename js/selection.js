class SurpriseDeck {
  constructor(items, random = Math.random) {
    const ids = new Set();
    this.items = items.filter(item => {
      if (!item || item.active === false || ![item.id, item.title, item.body].every(value => typeof value === 'string' && value.trim()) || ids.has(item.id)) return false;
      if (!['magical', 'fascinating', 'play'].includes(item.category) || !['text', 'gif', 'link', 'iframe'].includes(item.kind)) return false;
      if (item.kind === 'gif') {
        if (![item.media, item.still, item.mediaAlt, item.credit].every(value => typeof value === 'string' && value.trim())) return false;
        if (![item.media, item.still].every(value => /^assets\/[a-z0-9_./-]+$/i.test(value) && !value.split('/').includes('..'))) return false;
      }
      if (item.kind === 'iframe') {
        if (![item.embedUrl, item.sourceUrl, item.creator, item.mediaAlt, item.credit].every(value => typeof value === 'string' && value.trim())) return false;
        if (item.active !== false && (item.rightsStatus !== 'approved' || item.embedStatus !== 'verified')) return false;
        try {
          if (new URL(item.embedUrl).protocol !== 'https:' || new URL(item.sourceUrl).protocol !== 'https:') return false;
        } catch {
          return false;
        }
      }
      if (item.kind === 'link') {
        if (typeof item.url !== 'string' || typeof item.linkLabel !== 'string' || !item.linkLabel.trim()) return false;
        try {
          if (new URL(item.url).protocol !== 'https:') return false;
        } catch {
          return false;
        }
      }
      ids.add(item.id);
      return true;
    });
    this.random = random;
    this.category = 'all';
    this.current = null;
    this.seenIds = [];
    this.remainingIds = [];
  }

  get categories() {
    return [...new Set(this.items.map(item => item.category))];
  }

  get history() {
    return this.seenIds.map(id => this.items.find(item => item.id === id)).filter(Boolean);
  }

  matching() {
    return this.items.filter(item => this.category === 'all' || item.category === this.category);
  }

  record(item) {
    if (!item) return null;
    this.current = item;
    this.remainingIds = this.remainingIds.filter(id => id !== item.id);
    if (!this.seenIds.includes(item.id)) this.seenIds.push(item.id);
    return item;
  }

  pick(candidates) {
    if (!candidates.length) return null;
    const index = Math.min(candidates.length - 1, Math.floor(this.random() * candidates.length));
    return this.record(candidates[Math.max(0, index)]);
  }

  next() {
    const matching = this.matching();
    if (!matching.length) return null;
    if (!this.remainingIds.length) this.remainingIds = matching.map(item => item.id);
    let candidates = matching.filter(item => this.remainingIds.includes(item.id));
    if (candidates.length > 1 && this.current) candidates = candidates.filter(item => item.id !== this.current.id);
    return this.pick(candidates);
  }

  setCategory(category) {
    if (this.category !== category) {
      this.category = category;
      this.remainingIds = this.matching().map(item => item.id);
    }
    return this.next();
  }

  different() {
    if (!this.current || this.categories.length < 2) return null;
    const previousCategory = this.current.category;
    this.category = 'all';
    this.remainingIds = this.items.map(item => item.id);
    return this.pick(this.items.filter(item => item.category !== previousCategory));
  }

  open(id) {
    return this.record(this.items.find(item => item.id === id));
  }
}

if (typeof module !== 'undefined') module.exports = { SurpriseDeck };