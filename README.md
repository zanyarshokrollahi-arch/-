# سایت کوچر — آموزش زبان آلمانی بر پایهٔ نوروساینس

سایت استاتیک، سریع و سئو‌محور (RTL فارسی). بدون فریم‌ورک و بدون وابستگی؛ فقط Node.js برای ساخت صفحات.

## اجرا
```bash
npm run serve        # ساخت + اجرا روی http://localhost:8080
npm run build        # فقط ساخت خروجی در پوشهٔ docs/
SITE_URL=https://your-domain.com npm run build   # با دامنهٔ واقعی (canonical, sitemap, schema)
```

## شخصی‌سازی
1. `build/config.mjs` — دامنه، لینک‌های اینستاگرام/تلگرام/یوتیوب، وضعیت دوره‌ها (`open` / `soon`)
2. `build/pages-core.mjs` — صفحات اصلی، سرفصل‌های دوره، سؤالات آزمون تعیین سطح، لیست اسم‌های بازی
3. `build/pages-blog.mjs` — مقاله‌های بلاگ (یک آبجکت جدید به آرایهٔ `POSTS` اضافه کنید)
4. `docs/assets/css/style.css` — طراحی (رنگ‌ها در `:root`)

## انتشار
پوشهٔ `docs/` خروجی نهایی است. روی GitHub Pages (Settings → Pages → Deploy from branch → `/docs`)،
Netlify، Cloudflare Pages یا هر هاست استاتیک قابل انتشار است.
پس از انتشار، `sitemap.xml` را در Google Search Console ثبت کنید.
