// Static site generator for Koocher. Usage: node build/build.mjs
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE_URL, COURSES } from './config.mjs';
import { logoSvg } from './layout.mjs';
import * as core from './pages-core.mjs';
import { POSTS, post, blogIndex } from './pages-blog.mjs';

const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'docs');
const write = (rel, content) => {
  const f = join(OUT, rel);
  mkdirSync(dirname(f), { recursive: true });
  writeFileSync(f, content);
};

const pages = [
  ['index.html', '', core.home()],
  ['courses/index.html', 'courses/', core.coursesIndex()],
  ...COURSES.map((c) => [`courses/${c.id}/index.html`, `courses/${c.id}/`, core.course(c)]),
  ['method/index.html', 'method/', core.method()],
  ['level-test/index.html', 'level-test/', core.levelTest()],
  ['tools/der-die-das/index.html', 'tools/der-die-das/', core.artikelGame()],
  ['about/index.html', 'about/', core.about()],
  ['contact/index.html', 'contact/', core.contact()],
  ['blog/index.html', 'blog/', blogIndex()],
  ...POSTS.map((p) => [`blog/${p.slug}/index.html`, `blog/${p.slug}/`, post(p)]),
];
pages.forEach(([f, , html]) => write(f, html));
write('404.html', core.notFound());

const today = new Date().toISOString().slice(0, 10);
const prio = (p) => (p === '' ? '1.0' : p.startsWith('courses/') || p.startsWith('blog/') ? '0.8' : '0.7');
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(([, p]) => `  <url><loc>${SITE_URL}/${p}</loc><lastmod>${today}</lastmod><priority>${prio(p)}</priority></url>`).join('\n')}
</urlset>
`);
write('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
write('assets/img/logo.svg', logoSvg('x').replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" '));
write('.nojekyll', '');
console.log(`Built ${pages.length + 1} pages → docs/  (SITE_URL=${SITE_URL})`);
