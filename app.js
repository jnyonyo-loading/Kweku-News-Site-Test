// ── Real Kweku Tech article data ──────────────────────────────
const ARTICLES = [
  {
    slug: 'how-darlington-akogo-created-minohealth-ai-to-fix-',
    title: 'How Darlington Akogo Created minoHealth AI to Fix Africa\'s Doctor Gap',
    excerpt: 'In 2013, Darlington Akogo woke up at 4AM to see a doctor. Not an emergency — he just knew the queues. So he calculated. And then he built minoHealth AI to solve what no one else would.',
    image: 'https://firebasestorage.googleapis.com/v0/b/kweku-tech-web.firebasestorage.app/o/article_images%2Fcontent-image-1772048102067.webp?alt=media&token=7479a5bc-ff2b-433a-8380-4993a795045c',
    url: 'https://www.kweku.tech/articles/how-darlington-akogo-created-minohealth-ai-to-fix-',
    likes: 11,
    date: '2026-02-25T19:36:50.830Z',
    category: 'AI & Health',
  },
  {
    slug: 'ghanas-first-ai-journalist',
    title: 'Ghana\'s First AI Journalist...',
    excerpt: 'Meet Margaret Tobbin — named after the late mother of the Tobinco Media Group Chairman, she was built to be a maternal figure: a helper who steps in to assist the family when the burden of work becomes too heavy.',
    image: 'https://firebasestorage.googleapis.com/v0/b/kweku-tech-web.firebasestorage.app/o/article_images%2Fcontent-image-1771930053940.webp?alt=media&token=386a56d5-e3c5-4ac4-b7b0-d5b81c16a19e',
    url: 'https://www.kweku.tech/articles/ghanas-first-ai-journalist',
    likes: 7,
    date: '2026-02-24T10:48:35.577Z',
    category: 'AI',
  },
  {
    slug: 'conviction-multiplied-by-time-how-alex-bram-built-',
    title: 'Conviction Multiplied by Time: How Alex Bram Built Hubtel',
    excerpt: 'How one founder turned decades of unwavering conviction into Hubtel — one of Ghana\'s most essential fintech platforms, trusted by millions across the continent.',
    image: 'https://firebasestorage.googleapis.com/v0/b/kweku-tech-web.firebasestorage.app/o/article_images%2Fcontent-image-1771402184489.webp?alt=media&token=0e4ac52d-e38f-4bed-95ab-3ce828d80b0d',
    url: 'https://www.kweku.tech/articles/conviction-multiplied-by-time-how-alex-bram-built-',
    likes: 6,
    date: '2026-02-18T08:11:32.515Z',
    category: 'Startups',
  },
  {
    slug: 'can-a-government-platform-actually-transform-small',
    title: 'Can a government platform actually transform smallholder farming in Ghana?',
    excerpt: 'A close look at whether digital platforms designed by governments can actually reach and transform the lives of Ghana\'s smallholder farmers — and what the evidence says.',
    image: 'https://firebasestorage.googleapis.com/v0/b/kweku-tech-web.firebasestorage.app/o/article_images%2Fcontent-image-1771324931417.webp?alt=media&token=c225da76-af03-40fd-b52f-9656951b8e11',
    url: 'https://www.kweku.tech/articles/can-a-government-platform-actually-transform-small',
    likes: 7,
    date: '2026-02-17T10:42:23.768Z',
    category: 'AgriTech',
  },
  {
    slug: 'rwanda-became-the-first-country-on-earth-to-achiev',
    title: 'Rwanda became the first country on earth to achieve nationwide autonomous delivery',
    excerpt: 'Rwanda just made history — becoming the first country in the world to achieve nationwide autonomous drone delivery. Here\'s how they did it, and what it means for the rest of Africa.',
    image: 'https://firebasestorage.googleapis.com/v0/b/kweku-tech-web.firebasestorage.app/o/article_images%2Fcontent-image-1770717651825.webp?alt=media&token=83ea672b-a044-4a9d-a30c-2936daffb97a',
    url: 'https://www.kweku.tech/articles/rwanda-became-the-first-country-on-earth-to-achiev',
    likes: 13,
    date: '2026-02-10T10:02:00.418Z',
    category: 'Logistics',
  },
  {
    slug: 'ghana-just-invited-google-to-build-what-we-already',
    title: 'Ghana just invited Google to build what we already finished',
    excerpt: 'Ghana\'s tech community is asking hard questions after the government invited Google to build infrastructure that local developers say already exists. Who decides what gets the spotlight?',
    image: 'https://firebasestorage.googleapis.com/v0/b/kweku-tech-web.firebasestorage.app/o/article_images%2Fcontent-image-1770413587297.webp?alt=media&token=c1283ab1-9904-4cb6-83d4-3c2214fab9ea',
    url: 'https://www.kweku.tech/articles/ghana-just-invited-google-to-build-what-we-already',
    likes: 5,
    date: '2026-02-05T09:00:00.000Z',
    category: 'Policy',
  },
];

const PODCASTS = [
  {
    id: 'BiwSY-GYF4g',
    title: 'He left $500K to build Africa\'s PayPal | CEO of Payd',
    url: 'https://www.youtube.com/watch?v=BiwSY-GYF4g',
  },
  {
    id: 'EHxg91FymMQ',
    title: 'The Sophisticated Software Engineer: The Truth About Modern Coding',
    url: 'https://www.youtube.com/watch?v=EHxg91FymMQ',
  },
  {
    id: 'tgrbD2skW54',
    title: 'Student by Day, Dev Lead by Night | The Story of Sui Ghana DevLead',
    url: 'https://www.youtube.com/watch?v=tgrbD2skW54',
  },
];

const PAGE_SIZE = 6;
const AUTO_INTERVAL = 5000;

let filteredArticles = [...ARTICLES];
let displayedCount = 0;
let activeTag = 'All';
let currentSlide = 0;
let autoTimer = null;

// ── DOM refs ──────────────────────────────────────────────
const track       = document.getElementById('carousel-track');
const dotsWrap    = document.getElementById('carousel-dots');
const prevBtn     = document.getElementById('prev-btn');
const nextBtn     = document.getElementById('next-btn');
const articleList = document.getElementById('article-list');
const tagRow      = document.getElementById('tag-row');
const loadMoreWrap= document.getElementById('load-more-wrap');
const loadMoreBtn = document.getElementById('load-more-btn');
const loadingVeil = document.getElementById('loading-veil');
const seeAllBtn   = document.getElementById('see-all-btn');
const listScene   = document.getElementById('list-scene');

// ── Helpers ───────────────────────────────────────────────
function esc(s) {
  return String(s ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function timeAgo(iso) {
  const ms = Date.now() - new Date(iso).getTime();
  const d = Math.floor(ms / 86400000);
  if (d < 1) return 'Today';
  if (d === 1) return '1 day ago';
  if (d < 30) return `${d} days ago`;
  const m = Math.floor(d / 30);
  if (m === 1) return '1 month ago';
  return `${m} months ago`;
}

const LOGO_SM_SVG = `<img src="kt-logo.png" alt="Kweku Tech" style="width:100%;height:100%;object-fit:contain;" />`;

// ── Build carousel cards ──────────────────────────────────
function buildCarousel() {
  track.innerHTML = ARTICLES.map(a => {
    const imgHtml = a.image
      ? `<img src="${esc(a.image)}" alt="${esc(a.title)}" loading="lazy" />`
      : `<div class="kcard-no-img">
           <svg width="32" height="32" viewBox="0 0 32 32" fill="none" opacity=".12">
             <rect x="2" y="5" width="28" height="22" rx="3" stroke="#3dd68c" stroke-width="1.5"/>
             <circle cx="11" cy="13" r="3" stroke="#3dd68c" stroke-width="1.5"/>
             <path d="M2 22l8-6 6 4.5 5-3.5 9 7" stroke="#3dd68c" stroke-width="1.5" stroke-linejoin="round"/>
           </svg>
         </div>`;

    return `
      <a class="kcard" href="${esc(a.url)}" target="_blank" rel="noopener">
        <div class="kcard-header">
          <div class="kcard-handle">
            <div class="kcard-dots">
              <div class="kcard-dot"></div>
              <div class="kcard-dot"></div>
              <div class="kcard-dot"></div>
            </div>
            <span>kwekutech</span>
          </div>
          <div class="kcard-logo-sm">${LOGO_SM_SVG}</div>
        </div>
        <div class="kcard-body">
          <span class="kcard-category">${esc(a.category)}</span>
          <h2 class="kcard-title">${esc(a.title)}</h2>
          <p class="kcard-excerpt">${esc(a.excerpt)}</p>
        </div>
        <div class="kcard-img-wrap">${imgHtml}</div>
        <div class="kcard-footer">
          <div class="kcard-likes">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M6.5 11C6.5 11 1.5 7.5 1.5 4.5C1.5 3.1 2.6 2 4 2C5.1 2 5.9 2.6 6.5 3.4C7.1 2.6 7.9 2 9 2C10.4 2 11.5 3.1 11.5 4.5C11.5 7.5 6.5 11 6.5 11Z" stroke="currentColor" stroke-width="1.2"/>
            </svg>
            ${a.likes} likes
          </div>
          <span class="kcard-readmore">Read article →</span>
        </div>
      </a>`;
  }).join('');

  buildDots();
  goTo(0, false);
}

function buildDots() {
  dotsWrap.innerHTML = ARTICLES.map((_, i) =>
    `<button class="cdot ${i === 0 ? 'active' : ''}" data-i="${i}" aria-label="Slide ${i+1}"></button>`
  ).join('');

  dotsWrap.querySelectorAll('.cdot').forEach(btn => {
    btn.addEventListener('click', () => { goTo(parseInt(btn.dataset.i)); resetTimer(); });
  });
}

function goTo(idx, animate = true) {
  currentSlide = ((idx % ARTICLES.length) + ARTICLES.length) % ARTICLES.length;
  console.log('[carousel] goTo — currentSlide:', currentSlide, '| viewport.offsetWidth:', viewport.offsetWidth);
  track.style.transition = animate ? 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)' : 'none';
  track.style.transform = `translateX(-${currentSlide * viewport.offsetWidth}px)`;
  dotsWrap.querySelectorAll('.cdot').forEach((d, i) => d.classList.toggle('active', i === currentSlide));
}

function next() { goTo(currentSlide + 1); }
function prev() { goTo(currentSlide - 1); }

function startTimer() {
  autoTimer = setInterval(next, AUTO_INTERVAL);
}

function resetTimer() {
  clearInterval(autoTimer);
  startTimer();
}

prevBtn.addEventListener('click', () => { prev(); resetTimer(); });
nextBtn.addEventListener('click', () => { next(); resetTimer(); });

// Pause on hover
const viewport = document.getElementById('carousel-viewport');
viewport.addEventListener('mouseenter', () => clearInterval(autoTimer));
viewport.addEventListener('mouseleave', startTimer);

// Touch swipe support
let touchStartX = 0;
viewport.addEventListener('touchstart', e => {
  touchStartX = e.touches[0].clientX;
}, { passive: true });
viewport.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 40) {
    dx < 0 ? next() : prev();
    resetTimer();
  }
}, { passive: true });

// ── Tag filters ───────────────────────────────────────────
function buildTagFilters() {
  const cats = ['All', ...new Set(ARTICLES.map(a => a.category))];
  tagRow.innerHTML = cats.map(c =>
    `<button class="tag-chip ${c === activeTag ? 'active' : ''}" data-cat="${esc(c)}">${esc(c)}</button>`
  ).join('');

  tagRow.querySelectorAll('.tag-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      activeTag = btn.dataset.cat;
      tagRow.querySelectorAll('.tag-chip').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterAndRender();
    });
  });
}

function filterAndRender() {
  filteredArticles = activeTag === 'All'
    ? ARTICLES
    : ARTICLES.filter(a => a.category === activeTag);
  displayedCount = 0;
  articleList.innerHTML = '';
  appendRows(PAGE_SIZE);
}

function appendRows(n) {
  const slice = filteredArticles.slice(displayedCount, displayedCount + n);
  slice.forEach(a => {
    const card = document.createElement('a');
    card.className = 'art-card';
    card.href = a.url;
    card.target = '_blank';
    card.rel = 'noopener';

    const imgHtml = a.image
      ? `<img src="${esc(a.image)}" alt="${esc(a.title)}" loading="lazy" />`
      : `<div class="art-card-no-img"></div>`;

    card.innerHTML = `
      <div class="art-card-img">${imgHtml}</div>
      <div class="art-card-body">
        <span class="art-card-cat">${esc(a.category)}</span>
        <h3 class="art-card-title">${esc(a.title)}</h3>
        <p class="art-card-excerpt">${esc(a.excerpt)}</p>
      </div>
      <div class="art-card-footer">
        <div class="art-card-author">
          <div class="art-card-avatar"><img src="kt-logo.png" alt="Kweku Tech" /></div>
          <div>
            <span class="art-card-name">Kweku Tech</span>
            <span class="art-card-date">${timeAgo(a.date)}</span>
          </div>
        </div>
        <div class="art-card-likes">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M6.5 11C6.5 11 1.5 7.5 1.5 4.5C1.5 3.1 2.6 2 4 2C5.1 2 5.9 2.6 6.5 3.4C7.1 2.6 7.9 2 9 2C10.4 2 11.5 3.1 11.5 4.5C11.5 7.5 6.5 11 6.5 11Z" stroke="currentColor" stroke-width="1.2"/>
          </svg>
          ${a.likes}
        </div>
      </div>
    `;

    articleList.appendChild(card);
  });

  displayedCount += slice.length;
  loadMoreWrap.style.display = displayedCount < filteredArticles.length ? 'block' : 'none';
}

// ── Podcasts ──────────────────────────────────────────────
function buildPodcasts() {
  const podViewport = document.getElementById('podcast-viewport');
  const podPrev     = document.getElementById('pod-prev-btn');
  const podNext     = document.getElementById('pod-next-btn');
  const cardWidth   = () => podViewport.querySelector('.pod-card').offsetWidth + 16;

  podPrev.addEventListener('click', () => podViewport.scrollBy({ left: -cardWidth(), behavior: 'smooth' }));
  podNext.addEventListener('click', () => podViewport.scrollBy({ left:  cardWidth(), behavior: 'smooth' }));
}

// ── Init ──────────────────────────────────────────────────
function init() {
  buildCarousel();
  startTimer();
  buildTagFilters();
  filterAndRender();
  buildPodcasts();

  // Hide loading veil
  loadingVeil.classList.add('done');
  setTimeout(() => loadingVeil.style.display = 'none', 350);
}

// CTA scrolls to article list
seeAllBtn.addEventListener('click', () => {
  listScene.scrollIntoView({ behavior: 'smooth' });
});

loadMoreBtn.addEventListener('click', () => appendRows(PAGE_SIZE));

// ── Newsletter ────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const form    = document.getElementById('newsletter-form');
  const btn     = document.getElementById('newsletter-btn');
  const btnText = btn.querySelector('.newsletter-btn-text');

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (btn.classList.contains('subscribed')) return;
    btn.classList.add('subscribed');
    btnText.textContent = 'Subscribed ✓';
    btn.disabled = true;
  });
});

document.addEventListener('DOMContentLoaded', init);
