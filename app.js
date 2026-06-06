// ── Kweku Tech Article Data ───────────────────────────────────

const KT_ARTICLES = [
  {
    title: 'How Darlington Akogo Created minoHealth AI to Fix Africa\'s Doctor Gap',
    url: 'https://www.kweku.tech/articles/how-darlington-akogo-created-minohealth-ai-to-fix-',
    feature_image: 'https://firebasestorage.googleapis.com/v0/b/kweku-tech-web.firebasestorage.app/o/article_images%2Fcontent-image-1772048102067.webp?alt=media&token=7479a5bc-ff2b-433a-8380-4993a795045c',
    excerpt: 'In 2013, Darlington Akogo woke up at 4AM to see a doctor. Not an emergency — he just knew the queues would swallow the morning if he arrived any later.',
    published_at: '2026-03-06T08:00:00.000Z',
    tags: [{ name: 'AI & Health' }],
    authors: [{ name: 'Kweku Tech' }]
  },
  {
    title: "Ghana's First AI Journalist",
    url: 'https://www.kweku.tech/articles/ghanas-first-ai-journalist',
    feature_image: 'https://firebasestorage.googleapis.com/v0/b/kweku-tech-web.firebasestorage.app/o/article_images%2Fcontent-image-1771930053940.webp?alt=media&token=386a56d5-e3c5-4ac4-b7b0-d5b81c16a19e',
    excerpt: 'Imagine waking up, turning on your TV to catch the morning brief, and realising the voice you have trusted for years has been replaced by an algorithm.',
    published_at: '2026-03-06T08:00:00.000Z',
    tags: [{ name: 'AI' }],
    authors: [{ name: 'Kweku Tech' }]
  },
  {
    title: 'Conviction Multiplied by Time: How Alex Bram Built Hubtel',
    url: 'https://www.kweku.tech/articles/conviction-multiplied-by-time-how-alex-bram-built-',
    feature_image: 'https://firebasestorage.googleapis.com/v0/b/kweku-tech-web.firebasestorage.app/o/article_images%2Fcontent-image-1771402184489.webp?alt=media&token=0e4ac52d-e38f-4bed-95ab-3ce828d80b0d',
    excerpt: 'Most people remember their last day of university as a closing ceremony. For Alex Bram, it was groundbreaking.',
    published_at: '2026-02-06T08:00:00.000Z',
    tags: [{ name: 'Startups' }],
    authors: [{ name: 'Kweku Tech' }]
  },
  {
    title: 'Can a government platform actually transform smallholder farming in Ghana?',
    url: 'https://www.kweku.tech/articles/can-a-government-platform-actually-transform-small',
    feature_image: 'https://firebasestorage.googleapis.com/v0/b/kweku-tech-web.firebasestorage.app/o/article_images%2Fcontent-image-1771324931417.webp?alt=media&token=c225da76-af03-40fd-b52f-9656951b8e11',
    excerpt: 'On February 16, MoFA signed an MoU with Fauree Link GH Limited to bring Akuafoɔ Anidasoɔ to life — a platform designed to put Ghana\'s entire agricultural ecosystem in one place.',
    published_at: '2026-02-06T08:00:00.000Z',
    tags: [{ name: 'AgriTech' }],
    authors: [{ name: 'Kweku Tech' }]
  },
  {
    title: 'Rwanda became the first country on earth to achieve nationwide autonomous delivery',
    url: 'https://www.kweku.tech/articles/rwanda-became-the-first-country-on-earth-to-achiev',
    feature_image: 'https://firebasestorage.googleapis.com/v0/b/kweku-tech-web.firebasestorage.app/o/article_images%2Fcontent-image-1770717651825.webp?alt=media&token=83ea672b-a044-4a9d-a30c-2936daffb97a',
    excerpt: 'In 2016, while the rest of the world treated autonomous delivery as a science fiction debate, Rwanda quietly turned its skies into emergency rooms.',
    published_at: '2026-02-06T08:00:00.000Z',
    tags: [{ name: 'Innovation' }],
    authors: [{ name: 'Kweku Tech' }]
  },
  {
    title: 'Ghana just invited Google to build what we already finished',
    url: 'https://www.kweku.tech/articles/ghana-just-invited-google-to-build-what-we-already',
    feature_image: 'https://firebasestorage.googleapis.com/v0/b/kweku-tech-web.firebasestorage.app/o/article_images%2Fcontent-image-1770413587297.webp?alt=media&token=c1283ab1-9904-4cb6-83d4-3c2214fab9ea',
    excerpt: "Ghana's education minister announced a partnership with Google, University of Ghana, and GDI Hub to develop AI tools for local languages including Twi, Ewe, and Dagbani.",
    published_at: '2026-02-06T08:00:00.000Z',
    tags: [{ name: 'Tech Policy' }],
    authors: [{ name: 'Kweku Tech' }]
  },
  {
    title: 'Tech Spotlight: Bernard Kafui Sokpe',
    url: 'https://www.kweku.tech/articles/tech-spotlight-bernard-kafui-sokpe',
    feature_image: 'https://firebasestorage.googleapis.com/v0/b/kweku-tech-web.firebasestorage.app/o/article_images%2F1770395890245_1770193789296.jpeg?alt=media&token=870a2d57-425c-4fe4-a1ee-9b5dda0d2e9d',
    excerpt: "Here's a question every young creative in Ghana has asked at least once: Do I stay and build here, or do I leave to 'make it'? For 15 years, one person has been answering that question with his work.",
    published_at: '2026-02-06T08:00:00.000Z',
    tags: [{ name: 'People' }],
    authors: [{ name: 'Ralph Mensah' }]
  }
];

// ── Kweku Tech Podcast Data ───────────────────────────────────

const KT_PODCASTS = [
  {
    title: "He left $500K to build Africa's PayPal | CEO of Payd",
    url: 'https://www.youtube.com/watch?v=BiwSY-GYF4g',
    thumbnail: 'https://img.youtube.com/vi/BiwSY-GYF4g/maxresdefault.jpg',
    label: 'Kweku Tech Podcast'
  },
  {
    title: 'The Sophisticated Software Engineer: The Truth About Modern Coding',
    url: 'https://www.youtube.com/watch?v=EHxg91FymMQ',
    thumbnail: 'https://img.youtube.com/vi/EHxg91FymMQ/maxresdefault.jpg',
    label: 'Kweku Tech Podcast'
  },
  {
    title: 'The Modern Day Software Engineer',
    url: 'https://www.youtube.com/watch?v=mZIg0Ub3wj8',
    thumbnail: 'https://img.youtube.com/vi/mZIg0Ub3wj8/maxresdefault.jpg',
    label: 'Kweku Tech Podcast'
  }
];

const LOAD_SIZE = 6;
let latestShown = 0;

// ── Helpers ───────────────────────────────────────────────────

function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function getTag(post)    { return post.tags?.[0]?.name || 'News'; }
function getAuthor(post) { return post.authors?.[0]?.name || 'Kweku Tech'; }

function formatDate(iso) {
  const d      = new Date(iso);
  const day    = d.getDate();
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const t = day % 100, s = day % 10;
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

// ── Section renderers ─────────────────────────────────────────

function renderHero(featured, sideList) {
  document.getElementById('hero-featured').innerHTML = `
    <a class="hero-feat-link" href="${esc(featured.url)}" target="_blank" rel="noopener">
      ${thumbHTML(featured, 'hero-feat-img-wrap', 'hero-feat-img')}
      <div class="hero-feat-body">
        <span class="cat-tag">${esc(getTag(featured))}</span>
        <h1 class="hero-feat-title">${esc(featured.title)}</h1>
        ${metaHTML(featured)}
        <p class="hero-feat-excerpt">${esc(featured.excerpt)}</p>
      </div>
    </a>`;

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

function podcastCard(pod) {
  return `
    <a class="pod-card" href="${esc(pod.url)}" target="_blank" rel="noopener">
      <div class="pod-thumb-wrap">
        <img class="pod-thumb" src="${esc(pod.thumbnail)}" alt="${esc(pod.title)}" loading="lazy" />
        <div class="pod-overlay">
          <div class="pod-play-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="6,3 20,12 6,21"/></svg>
          </div>
        </div>
      </div>
      <div class="pod-body">
        <span class="cat-tag">${esc(pod.label)}</span>
        <h3 class="pod-title">${esc(pod.title)}</h3>
        <span class="pod-yt-link">Watch on YouTube →</span>
      </div>
    </a>`;
}

function renderSecondaryGrid(posts) {
  document.getElementById('secondary-grid').innerHTML = posts.map(articleCard).join('');
}

function renderPodcasts() {
  document.getElementById('press-room-grid').innerHTML = KT_PODCASTS.map(podcastCard).join('');
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
  link.href = 'https://www.kweku.tech/articles';
}

function renderLatest(posts) {
  const grid = document.getElementById('latest-grid');
  const wrap = document.getElementById('load-more-wrap');
  const btn  = document.getElementById('load-more-btn');

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

// ── Newsletter ────────────────────────────────────────────────

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

// ── Init ──────────────────────────────────────────────────────

function init() {
  const loading = document.getElementById('page-loading');
  const main    = document.getElementById('site-main');

  const posts = KT_ARTICLES;

  // Distribute 7 articles across sections; category section reuses 0–3
  renderHero(posts[0], posts.slice(1, 4));
  renderSecondaryGrid(posts.slice(4, 7));
  renderPodcasts();
  renderCategorySection(posts.slice(0, 4));
  renderLatest(posts);

  loading.classList.add('hidden');
  main.classList.remove('hidden');

  initNewsletter();
}

document.addEventListener('DOMContentLoaded', init);
