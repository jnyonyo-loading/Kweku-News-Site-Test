const GHOST_URL = 'https://demo.ghost.io';
const GHOST_KEY = '22444f78447824223cefc48062';
const LOAD_SIZE  = 6;

let latestPosts  = [];
let latestShown  = 0;

// ── Helpers ────────────────────────────────────────────────

function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function getTag(post) {
  return post.tags?.[0]?.name || 'News';
}

function getAuthor(post) {
  return post.authors?.[0]?.name || 'Staff Writer';
}

function formatDate(iso) {
  const d   = new Date(iso);
  const day = d.getDate();
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const t   = day % 100;
  const s   = day % 10;
  const suf = (t >= 11 && t <= 13) ? 'th' : s === 1 ? 'st' : s === 2 ? 'nd' : s === 3 ? 'rd' : 'th';
  return `${day}${suf} ${months[d.getMonth()]}, ${d.getFullYear()}`;
}

function metaHTML(post) {
  return `<span class="art-meta"><span class="meta-author">${esc(getAuthor(post))}</span>&nbsp;&nbsp;|&nbsp;&nbsp;${esc(formatDate(post.published_at))}</span>`;
}

function thumbHTML(post, wrapClass, imgClass) {
  const img = post.feature_image;
  return `<div class="${wrapClass}">${img
    ? `<img class="${imgClass}" src="${esc(img)}" alt="${esc(post.title)}" loading="lazy" />`
    : `<div class="img-ph"></div>`
  }</div>`;
}

// ── Ghost API ──────────────────────────────────────────────

async function fetchPosts() {
  const url = `${GHOST_URL}/ghost/api/content/posts/?key=${GHOST_KEY}&include=tags,authors&limit=15`;
  const res  = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const { posts } = await res.json();
  return posts;
}

// ── Section renderers ──────────────────────────────────────

function renderHero(featured, sideList) {
  // Large featured (left)
  document.getElementById('hero-featured').innerHTML = `
    <a class="hero-feat-link" href="${esc(featured.url)}" target="_blank" rel="noopener">
      ${thumbHTML(featured, 'hero-feat-img-wrap', 'hero-feat-img')}
      <div class="hero-feat-body">
        <span class="cat-tag">${esc(getTag(featured))}</span>
        <h1 class="hero-feat-title">${esc(featured.title)}</h1>
        ${metaHTML(featured)}
      </div>
    </a>`;

  // 3 stacked side cards (right)
  document.getElementById('hero-side').innerHTML = sideList.map(p => `
    <a class="hero-side-card" href="${esc(p.url)}" target="_blank" rel="noopener">
      ${thumbHTML(p, 'hero-side-thumb-wrap', 'hero-side-thumb')}
      <div class="hero-side-body">
        <span class="cat-tag">${esc(getTag(p))}</span>
        <h3 class="hero-side-title">${esc(p.title)}</h3>
        ${metaHTML(p)}
      </div>
    </a>`).join('');
}

function articleCard(post) {
  return `
    <a class="art-card" href="${esc(post.url)}" target="_blank" rel="noopener">
      ${thumbHTML(post, 'art-card-img-wrap', 'art-card-img')}
      <div class="art-card-body">
        <span class="cat-tag">${esc(getTag(post))}</span>
        <h3 class="art-card-title">${esc(post.title)}</h3>
        ${metaHTML(post)}
      </div>
    </a>`;
}

function renderSecondaryGrid(posts) {
  document.getElementById('secondary-grid').innerHTML = posts.map(articleCard).join('');
}

function renderPressRoom(posts) {
  document.getElementById('press-room-grid').innerHTML = posts.map(articleCard).join('');
}

function renderCategorySection(posts) {
  if (posts.length < 2) {
    document.getElementById('cat-section').classList.add('hidden');
    return;
  }

  const [featured, ...rest] = posts;
  const catName = getTag(featured);

  document.getElementById('cat-section-label').textContent = catName;

  document.getElementById('cat-featured-row').innerHTML = `
    <a class="cat-feat-link" href="${esc(featured.url)}" target="_blank" rel="noopener">
      ${thumbHTML(featured, 'cat-feat-img-wrap', 'cat-feat-img')}
      <div class="cat-feat-body">
        <span class="cat-tag">${esc(catName)}</span>
        <h2 class="cat-feat-title">${esc(featured.title)}</h2>
        ${metaHTML(featured)}
      </div>
    </a>`;

  document.getElementById('cat-small-grid').innerHTML = rest.slice(0, 3).map(articleCard).join('');

  const link = document.getElementById('cat-more-link');
  link.textContent = `MORE ${catName.toUpperCase()} →`;
  link.href = '#';
}

function renderLatest(posts) {
  const grid    = document.getElementById('latest-grid');
  const wrap    = document.getElementById('load-more-wrap');
  const btn     = document.getElementById('load-more-btn');

  grid.innerHTML = '';
  latestShown    = 0;

  function append() {
    const slice = posts.slice(latestShown, latestShown + LOAD_SIZE);
    grid.insertAdjacentHTML('beforeend', slice.map(articleCard).join(''));
    latestShown += slice.length;
    wrap.classList.toggle('hidden', latestShown >= posts.length);
  }

  append();
  btn.onclick = append;
}

// ── Newsletter ─────────────────────────────────────────────

function initNewsletter() {
  const form = document.getElementById('nl-form');
  const btn  = document.getElementById('nl-submit');

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (btn.disabled) return;
    btn.textContent = 'Subscribed ✓';
    btn.classList.add('success');
    btn.disabled = true;
  });
}

// ── Init ───────────────────────────────────────────────────

async function init() {
  const loading = document.getElementById('page-loading');
  const error   = document.getElementById('page-error');
  const main    = document.getElementById('site-main');
  const retry   = document.getElementById('retry-btn');

  async function load() {
    loading.classList.remove('hidden');
    error.classList.add('hidden');
    main.classList.add('hidden');

    try {
      const posts = await fetchPosts();

      // Distribute 15 posts across sections:
      // 0     → hero featured
      // 1–3   → hero side stack
      // 4–6   → secondary 3-col grid
      // 7–9   → press room
      // 10–13 → category section (1 featured + up to 3 small)
      // 0–14  → latest articles (all, with load-more)

      renderHero(posts[0], posts.slice(1, 4));
      renderSecondaryGrid(posts.slice(4, 7));
      renderPressRoom(posts.slice(7, 10));
      renderCategorySection(posts.slice(10, 14));
      renderLatest(posts);

      loading.classList.add('hidden');
      main.classList.remove('hidden');

    } catch (err) {
      console.error('Ghost API error:', err);
      loading.classList.add('hidden');
      error.classList.remove('hidden');
    }
  }

  retry.addEventListener('click', load);
  initNewsletter();
  await load();
}

document.addEventListener('DOMContentLoaded', init);
