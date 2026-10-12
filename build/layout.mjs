import { SITE_URL, BRAND, SOCIAL, FOUNDERS } from './config.mjs';

/* ---------- icons (24x24, stroke) ---------- */
const ic = (d, extra = '') =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${d}</svg>`;
export const I = {
  brain: ic('<path d="M9.5 3A3.5 3.5 0 0 0 6 6.5a3.5 3.5 0 0 0-2 3.2A3.5 3.5 0 0 0 5.2 12.4 3.6 3.6 0 0 0 6 17a3.5 3.5 0 0 0 6 1.2V4.8A3.4 3.4 0 0 0 9.5 3Z"/><path d="M14.5 3A3.5 3.5 0 0 1 18 6.5a3.5 3.5 0 0 1 2 3.2 3.5 3.5 0 0 1-1.2 2.7A3.6 3.6 0 0 1 18 17a3.5 3.5 0 0 1-6 1.2"/>'),
  repeat: ic('<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>'),
  target: ic('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/>'),
  ear: ic('<path d="M6 8.5a6 6 0 1 1 12 0c0 3-2 4-3 5.5s-.5 3-2 4.5a3 3 0 0 1-5-2"/><path d="M9.5 8.5a2.5 2.5 0 0 1 5 0"/>'),
  moon: ic('<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"/>'),
  layers: ic('<path d="m12 2 10 5-10 5L2 7l10-5Z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/>'),
  book: ic('<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14Z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>'),
  chat: ic('<path d="M21 12a8 8 0 0 1-11.7 7.1L3 21l1.9-5.3A8 8 0 1 1 21 12Z"/>'),
  check: ic('<path d="m5 12.5 4.5 4.5L19 7.5"/>'),
  play: ic('<circle cx="12" cy="12" r="9.5"/><path d="m10 8.5 5.5 3.5-5.5 3.5v-7Z" fill="currentColor"/>'),
  clock: ic('<circle cx="12" cy="12" r="9.5"/><path d="M12 6.5V12l3.5 2"/>'),
  quiz: ic('<path d="M9 11l3 3 8-8"/><path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9"/>'),
  game: ic('<rect x="2" y="7" width="20" height="12" rx="4"/><path d="M7 11v4M5 13h4"/><circle cx="16" cy="12" r=".8" fill="currentColor"/><circle cx="18.5" cy="14.5" r=".8" fill="currentColor"/>'),
  sun: ic('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'),
  menu: ic('<path d="M4 7h16M4 12h16M4 17h16"/>'),
  insta: ic('<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>'),
  tg: ic('<path d="M21.5 4.5 2.5 11.8l5.6 2 2 6.2 3.2-3.7 4.8 3.5 3.4-15.3Z"/><path d="m8.1 13.8 9.6-6.2"/>'),
  yt: ic('<rect x="2" y="5" width="20" height="14" rx="4"/><path d="m10 9 5 3-5 3V9Z" fill="currentColor"/>'),
  globe: ic('<circle cx="12" cy="12" r="9.5"/><path d="M2.5 12h19M12 2.5c3 3.2 3 15.8 0 19M12 2.5c-3 3.2-3 15.8 0 19"/>'),
  spark: ic('<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"/>'),
};

export const logoSvg = (id = 'a') => `<svg viewBox="0 0 48 48" role="img" aria-label="لوگوی کوچر"><defs><linearGradient id="g${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1f4a8a"/><stop offset="1" stop-color="#0a1d3a"/></linearGradient></defs><rect width="48" height="48" rx="14" fill="url(#g${id})"/><path d="M15 31l9-13 9 13" stroke="#fff" stroke-opacity=".35" stroke-width="2" fill="none" stroke-linejoin="round"/><circle cx="24" cy="18" r="4.6" fill="#e8a817"/><circle cx="15" cy="31" r="4.6" fill="#d6362f"/><circle cx="33" cy="31" r="4.6" fill="#111827" stroke="#fff" stroke-opacity=".6" stroke-width="1.5"/></svg>`;

export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const de = (s) => `<span class="de" lang="de" dir="ltr">${s}</span>`;
export const url = (p) => `${SITE_URL}/${p}`;

const NAV = [
  ['courses/', 'دوره‌ها'],
  ['method/', 'متد نوروساینس'],
  ['level-test/', 'آزمون تعیین سطح'],
  ['tools/der-die-das/', 'بازی der/die/das'],
  ['blog/', 'بلاگ'],
  ['about/', 'دربارهٔ ما'],
];

export function breadcrumbLd(items) {
  return {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: items.map(([name, p], i) => ({ '@type': 'ListItem', position: i + 1, name, item: url(p) })),
  };
}
export function crumbsHtml(items, root) {
  return `<nav aria-label="مسیر صفحه"><ol class="crumbs">${items.map(([n, p], i) =>
    i === items.length - 1 ? `<li aria-current="page">${esc(n)}</li>` : `<li><a href="${root}${p}">${esc(n)}</a></li>`).join('')}</ol></nav>`;
}

export const orgLd = () => ({
  '@context': 'https://schema.org', '@type': 'EducationalOrganization', '@id': `${SITE_URL}/#org`,
  name: `${BRAND.name} (${BRAND.latin})`, alternateName: BRAND.latin, url: SITE_URL + '/',
  logo: `${SITE_URL}/assets/img/logo.svg`, description: 'آموزش زبان آلمانی به فارسی‌زبانان بر پایهٔ متد نوروساینس',
  inLanguage: 'fa', sameAs: Object.values(SOCIAL),
  founder: FOUNDERS.map((f) => ({ '@type': 'Person', name: f.name, jobTitle: f.role })),
});

/**
 * Render a full HTML page.
 * opts: path, title, description, body, depth, schema[], type, noindex, ogImage
 */
export function page(o) {
  const root = '../'.repeat(o.depth || 0);
  const canonical = url(o.path);
  const img = `${SITE_URL}/assets/img/${o.ogImage || 'og.png'}`;
  const ld = [o.schema || []].flat().filter(Boolean)
    .map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('\n');
  const navHtml = NAV.map(([p, t]) => {
    const cur = o.path === p || (p !== '' && o.path.startsWith(p));
    return `<li><a href="${root}${p}"${cur ? ' aria-current="page"' : ''}>${t}</a></li>`;
  }).join('');

  return `<!doctype html>
<html lang="fa" dir="rtl" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(o.title)}</title>
<meta name="description" content="${esc(o.description)}">
<link rel="canonical" href="${canonical}">
<meta name="robots" content="${o.noindex ? 'noindex,follow' : 'index,follow,max-image-preview:large,max-snippet:-1'}">
<meta name="theme-color" content="#14315c">
<meta property="og:type" content="${o.type || 'website'}">
<meta property="og:site_name" content="${BRAND.name}">
<meta property="og:locale" content="fa_IR">
<meta property="og:title" content="${esc(o.title)}">
<meta property="og:description" content="${esc(o.description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${img}">
<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(o.title)}">
<meta name="twitter:description" content="${esc(o.description)}">
<meta name="twitter:image" content="${img}">
<link rel="icon" href="${root}assets/img/logo.svg" type="image/svg+xml">
<link rel="alternate" hreflang="fa" href="${canonical}">
<link rel="alternate" hreflang="x-default" href="${canonical}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@600;800&family=Vazirmatn:wght@400;600;700;800;900&display=swap">
<link rel="stylesheet" href="${root}assets/css/style.css">
<script>(function(){try{var t=localStorage.getItem('koocher-theme');if(t)document.documentElement.setAttribute('data-theme',t)}catch(e){}})()</script>
${ld}
</head>
<body>
<a class="skip" href="#main">رفتن به محتوای اصلی</a>
<header class="site-header">
  <div class="container nav">
    <a class="brand" href="${root}" aria-label="${BRAND.name} — صفحهٔ اصلی">${logoSvg('h')}<span>${BRAND.name}<small>Koocher · Deutsch lernen</small></span></a>
    <nav aria-label="منوی اصلی"><ul class="nav-links" id="nav-links">${navHtml}</ul></nav>
    <div class="nav-cta">
      <button class="theme-toggle" type="button" aria-label="تغییر حالت روشن/تاریک">${I.sun}</button>
      <a class="btn btn-primary btn-sm" href="${root}level-test/">آزمون رایگان تعیین سطح</a>
      <button class="menu-btn" type="button" aria-label="منو" aria-expanded="false" aria-controls="nav-links">${I.menu}</button>
    </div>
  </div>
</header>
<main id="main">
${o.body}
</main>
<footer class="site-footer">
  <div class="container">
    <div class="foot-grid">
      <div>
        <a class="brand" href="${root}">${logoSvg('f')}<span>${BRAND.name}<small>Koocher · Deutsch lernen</small></span></a>
        <p>${BRAND.tagline}. دوره‌هایی که مخصوص فارسی‌زبانان طراحی شده‌اند و با اصول یادگیری مغز هماهنگ‌اند.</p>
        <div class="socials">
          <a href="${SOCIAL.instagram}" rel="noopener me" target="_blank" aria-label="اینستاگرام کوچر">${I.insta}</a>
          <a href="${SOCIAL.telegram}" rel="noopener me" target="_blank" aria-label="تلگرام کوچر">${I.tg}</a>
          <a href="${SOCIAL.youtube}" rel="noopener me" target="_blank" aria-label="یوتیوب کوچر">${I.yt}</a>
        </div>
      </div>
      <div><h2>دوره‌ها</h2><ul>
        <li><a href="${root}courses/a1/">دورهٔ جامع A1</a></li>
        <li><a href="${root}courses/a2/">دورهٔ A2</a></li>
        <li><a href="${root}courses/b1/">دورهٔ B1</a></li>
        <li><a href="${root}courses/b2/">دورهٔ B2</a></li></ul></div>
      <div><h2>یادگیری رایگان</h2><ul>
        <li><a href="${root}level-test/">آزمون تعیین سطح</a></li>
        <li><a href="${root}tools/der-die-das/">بازی der / die / das</a></li>
        <li><a href="${root}blog/">مقالات آموزشی</a></li>
        <li><a href="${root}method/">متد نوروساینس</a></li></ul></div>
      <div><h2>کوچر</h2><ul>
        <li><a href="${root}about/">دربارهٔ ما</a></li>
        <li><a href="${root}contact/">تماس با ما</a></li></ul></div>
    </div>
    <div class="copy"><span>© ${new Date().getFullYear()} ${BRAND.name} — تمام حقوق محفوظ است.</span><span>ساخته‌شده با ❤ برای زبان‌آموزان فارسی‌زبان</span></div>
  </div>
</footer>
<script src="${root}assets/js/main.js" defer></script>
</body>
</html>
`;
}
