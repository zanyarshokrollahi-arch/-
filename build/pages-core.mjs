import { SITE_URL, BRAND, SOCIAL, FOUNDERS, COURSES } from './config.mjs';
import { I, page, esc, de, url, orgLd, breadcrumbLd, crumbsHtml } from './layout.mjs';

const R = (d) => '../'.repeat(d);
const faq = (items) => `<div class="faq">${items.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('')}</div>`;
const faqLd = (items) => ({
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: items.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a.replace(/<[^>]+>/g, '') } })),
});
const checks = (arr) => `<ul class="checks">${arr.map((t) => `<li>${I.check}<span>${t}</span></li>`).join('')}</ul>`;
const cta = (root, title = 'آمادهٔ شروع هستید؟', text = 'با آزمون رایگان تعیین سطح شروع کنید؛ ۳ دقیقه وقت می‌گیرد و بعدش دقیقاً می‌دانید از کجا باید شروع کنید.') => `
<section class="section"><div class="container reveal"><div class="cta-band">
  <h2>${title}</h2><p>${text}</p>
  <div class="hero-actions"><a class="btn btn-primary" href="${root}level-test/">شروع آزمون تعیین سطح</a>
  <a class="btn btn-ghost" style="color:#fff;border-color:rgba(255,255,255,.35)" href="${SOCIAL.telegram}" target="_blank" rel="noopener">گفتگو در تلگرام</a></div>
</div></div></section>`;

/* ---------- FAQ (home) ---------- */
export const HOME_FAQ = [
  ['متد نوروساینس کوچر دقیقاً چیست؟', 'ما دوره‌ها را بر اساس یافته‌های علوم شناختی دربارهٔ یادگیری و حافظه طراحی می‌کنیم: تکرار فاصله‌دار، یادآوری فعال، یادگیری عبارت‌ها به‌جای کلمه‌های تکی و آموزش مرحله‌به‌مرحلهٔ گوش‌دادن و گفتن. هدف این است که زمان کمتری صرف مرور بی‌اثر شود و مطالب در حافظهٔ بلندمدت بمانند.'],
  ['آیا بدون هیچ پیش‌زمینه‌ای می‌توانم شروع کنم؟', 'بله. دورهٔ جامع A1 از صفر شروع می‌شود و حتی خواندن الفبا و تلفظ حروف خاص آلمانی (ä، ö، ü، ß) را هم پوشش می‌دهد. اگر مطمئن نیستید سطحتان چیست، ابتدا آزمون رایگان تعیین سطح را انجام دهید.'],
  ['چقدر طول می‌کشد تا آلمانی یاد بگیرم؟', 'زمان یادگیری به ساعت‌های تمرین، تکرار منظم و هدف شما بستگی دارد و هیچ عدد جادویی وجود ندارد. چیزی که می‌توانیم تضمین کنیم، مسیر مشخص و روش علمی است؛ نه وعدهٔ «آلمانی در ۳۰ روز».'],
  ['دوره‌ها بر چه اساسی تقسیم شده‌اند؟', `دوره‌ها بر اساس سطوح چارچوب مرجع مشترک اروپایی (CEFR) از A1 تا B2 طراحی شده‌اند. برای آشنایی با این سطوح، <a href="/blog/sathhaye-zaban-almani/">مقالهٔ سطوح زبان آلمانی</a> را بخوانید.`],
  ['آزمون تعیین سطح رایگان چقدر دقیق است؟', 'این آزمون ۱۵ سؤالی یک برآورد سریع از دستور زبان شماست و جایگزین آزمون رسمی نیست؛ ولی برای انتخاب نقطهٔ شروع مناسب است.'],
  ['چطور ثبت‌نام کنم یا سؤالی بپرسم؟', 'از طریق تلگرام یا اینستاگرام کوچر به ما پیام بدهید. جزئیات هر دوره در صفحهٔ همان دوره توضیح داده شده است.'],
];

/* ---------- Home ---------- */
export function home() {
  const root = '';
  const faqFixed = HOME_FAQ.map(([q, a]) => [q, a.replace('href="/blog', 'href="blog')]);
  const body = `
<section class="hero">
  <div class="flag-bar" aria-hidden="true"></div>
  <div class="container hero-grid">
    <div>
      <span class="eyebrow">آموزش آلمانی مخصوص فارسی‌زبانان</span>
      <h1>آموزش زبان آلمانی بر پایهٔ نوروساینس؛ <span class="hl">سریع‌تر یاد بگیرید، دیرتر فراموش کنید</span></h1>
      <p class="lead">اگر قبلاً لغت حفظ کرده‌اید و چند هفته بعد همه‌چیز از یادتان رفته، مشکل از شما نیست؛ از روش است. در کوچر آلمانی را با اصولی یاد می‌دهیم که مغز واقعاً با آن‌ها حافظهٔ بلندمدت می‌سازد.</p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="courses/a1/">شروع از دورهٔ جامع A1</a>
        <a class="btn btn-ghost" href="level-test/">آزمون رایگان تعیین سطح</a>
      </div>
      <ul class="trust">
        <li>${I.check}طراحی‌شده برای فارسی‌زبانان</li>
        <li>${I.check}مسیر روشن از A1 تا B2</li>
        <li>${I.check}ابزارهای تمرین رایگان</li>
      </ul>
    </div>
    <div class="hero-visual">
      <div class="curve-card reveal">
        <span class="float-chip c1">${I.brain}<span>حافظهٔ بلندمدت</span></span>
        <h2>منحنی فراموشی؛ با و بدون مرور فاصله‌دار</h2>
        <p class="sub">نمودار مفهومی برای نمایش ایدهٔ تکرار فاصله‌دار</p>
        <svg viewBox="0 0 400 240" role="img" aria-label="نمودار مفهومی: بدون مرور، یادآوری به‌سرعت افت می‌کند؛ با مرورهای فاصله‌دار، افت کندتر و کندتر می‌شود.">
          <g fill="none" stroke="currentColor" stroke-opacity=".12">
            <path d="M30 20V210H385"/><path d="M30 60H385M30 100H385M30 140H385M30 180H385" stroke-dasharray="3 6"/>
          </g>
          <text x="2" y="30" font-size="11" fill="currentColor" opacity=".6" style="direction:ltr" text-anchor="start">100%</text>
          <text x="385" y="230" font-size="11" fill="currentColor" opacity=".6" font-family="Vazirmatn" style="direction:ltr" text-anchor="end">زمان →</text>
          <path d="M30 34 C 60 120, 110 170, 385 200" fill="none" stroke="#d6362f" stroke-width="3" stroke-linecap="round" stroke-dasharray="1 0"/>
          <path d="M30 34 C 55 80, 80 108, 110 118 L110 40 C 140 78, 170 94, 200 100 L200 40 C 235 68, 270 78, 300 80 L300 40 C 330 54, 355 58, 385 60" fill="none" stroke="#12805c" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
          <g fill="#e8a817" stroke="#fff" stroke-width="2"><circle cx="110" cy="40" r="6"/><circle cx="200" cy="40" r="6"/><circle cx="300" cy="40" r="6"/></g>
        </svg>
        <div class="legend"><span><i style="background:#d6362f"></i>بدون مرور</span><span><i style="background:#12805c"></i>با مرور فاصله‌دار</span><span><i style="background:#e8a817;height:10px;width:10px;border-radius:50%"></i>جلسهٔ مرور</span></div>
        <span class="float-chip c2">${I.repeat}<span>تکرار در زمان درست</span></span>
      </div>
    </div>
  </div>
</section>

<div class="container">
  <div class="stats reveal">
    <div class="stat"><b>۴</b><span>سطح از A1 تا B2</span></div>
    <div class="stat"><b>+۵ سال</b><span>سابقهٔ تدریس و پژوهش هر مدرس</span></div>
    <div class="stat"><b>۲</b><span>ابزار تمرین رایگان</span></div>
    <div class="stat"><b>۳</b><span>کانال: اینستاگرام، تلگرام، یوتیوب</span></div>
  </div>
</div>

<section class="section">
  <div class="container">
    <div class="section-head reveal">
      <span class="eyebrow">چرا کوچر؟</span>
      <h2>شش اصل علمی که یادگیری آلمانی را متفاوت می‌کند</h2>
      <p class="lead">هر درس کوچر روی چند اصل ثابت از علوم شناختی ساخته شده است؛ چون «بیشتر خواندن» لزوماً به «بهتر یاد گرفتن» نمی‌انجامد.</p>
    </div>
    <div class="grid g3">
      <article class="card reveal"><div class="icon-box">${I.repeat}</div><h3>تکرار فاصله‌دار</h3><p>مرور را درست قبل از فراموشی انجام می‌دهید، نه همه را یک‌شب. نتیجه: حفظ بیشتر با زمان کمتر.</p></article>
      <article class="card reveal"><div class="icon-box">${I.target}</div><h3>یادآوری فعال</h3><p>به‌جای دوباره‌خواندن، از خودتان سؤال می‌پرسید. تلاش برای یادآوری، ردپای حافظه را قوی‌تر می‌کند.</p></article>
      <article class="card reveal"><div class="icon-box">${I.ear}</div><h3>اول گوش، بعد جمله</h3><p>مغز زبان را با شنیدن الگوها یاد می‌گیرد. تلفظ و ریتم آلمانی را از همان ابتدا با گوش می‌سازید.</p></article>
      <article class="card reveal"><div class="icon-box">${I.layers}</div><h3>عبارت‌ها، نه کلمه‌های تنها</h3><p>${de('Ich habe Hunger')} را به‌صورت یک بستهٔ آماده یاد می‌گیرید؛ همان‌طور که در مکالمهٔ واقعی استفاده می‌شود.</p></article>
      <article class="card reveal"><div class="icon-box">${I.spark}</div><h3>معنا و تصویر</h3><p>داستان، تصویر و موقعیت‌های واقعی، یادگیری را از «حفظ‌کردن» به «فهمیدن» تبدیل می‌کند.</p></article>
      <article class="card reveal"><div class="icon-box">${I.moon}</div><h3>جلسه‌های کوتاه، خواب کافی</h3><p>بار شناختی را کم نگه می‌داریم تا مغز فرصت تثبیت مطالب را داشته باشد؛ بدون فشار و فرسودگی.</p></article>
    </div>
    <p class="reveal" style="text-align:center;margin-top:2rem"><a class="btn btn-ghost" href="method/">با جزئیات متد و منابع علمی آشنا شوید</a></p>
  </div>
</section>

<section class="section alt">
  <div class="container">
    <div class="section-head reveal"><span class="eyebrow">مسیر یادگیری</span><h2>چهار قدم تا آلمانی که واقعاً در ذهنتان می‌ماند</h2></div>
    <ol class="steps reveal">
      <li><h3>تعیین سطح</h3><p>با آزمون رایگان بفهمید از کجا باید شروع کنید؛ نه عقب‌تر، نه جلوتر.</p></li>
      <li><h3>یادگیری هدفمند</h3><p>درس‌های کوتاه و متمرکز، با توضیح ساده و مثال‌های مناسب فارسی‌زبانان.</p></li>
      <li><h3>تمرین فعال</h3><p>مرور فاصله‌دار و آزمون‌های کوتاه، تا آنچه یاد گرفته‌اید جابه‌جا شود به حافظهٔ بلندمدت.</p></li>
      <li><h3>کاربرد واقعی</h3><p>جمله ساختن، گوش‌دادن و مکالمهٔ کوتاه، تا آلمانی از «دانستن» به «توانستن» برسد.</p></li>
    </ol>
  </div>
</section>

<section class="section" id="courses">
  <div class="container">
    <div class="section-head reveal"><span class="eyebrow">دوره‌های آموزش زبان آلمانی</span><h2>از اولین سلام تا گفتگوهای پیشرفته</h2>
      <p class="lead">هر دوره یک سطح استاندارد CEFR را پوشش می‌دهد تا مسیر یادگیری شما پیوسته و قابل‌اندازه‌گیری باشد.</p></div>
    <div class="grid g4">${COURSES.map((c) => courseCard(c, root)).join('')}</div>
  </div>
</section>

<section class="section alt">
  <div class="container">
    <div class="section-head reveal"><span class="eyebrow">رایگان امتحان کنید</span><h2>همین حالا یادگیری را شروع کنید</h2></div>
    <div class="grid g2">
      <a class="card tool reveal" href="level-test/" style="text-decoration:none"><div class="icon-box">${I.quiz}</div>
        <div><h3>آزمون تعیین سطح آلمانی</h3><p>۱۵ سؤال از A1 تا B1 با توضیح پاسخ‌ها. در پایان سطح تقریبی و دورهٔ پیشنهادی را می‌بینید.</p></div></a>
      <a class="card tool reveal" href="tools/der-die-das/" style="text-decoration:none"><div class="icon-box">${I.game}</div>
        <div><h3>بازی ${de('der / die / das')}</h3><p>جنسیت اسم‌ها بزرگ‌ترین دغدغهٔ فارسی‌زبانان است. با تمرین سریع و بازخورد فوری الگوها را یاد بگیرید.</p></div></a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head reveal"><span class="eyebrow">تیم کوچر</span><h2>پژوهش و تدریس، در کنار هم</h2>
      <p class="lead">کوچر را دو نفر ساخته‌اند که هر کدام بیش از ۵ سال با آلمانی کار کرده‌اند؛ یکی از زاویهٔ پژوهش، دیگری از زاویهٔ کلاس درس.</p></div>
    <div class="grid g2" style="max-width:780px;margin-inline:auto">
      ${FOUNDERS.map((f) => `<article class="card person reveal"><div class="avatar" aria-hidden="true">${f.initial}</div><h3>${f.name}</h3><span class="role">${f.role} · بیش از ${f.years} سال سابقه</span></article>`).join('')}
    </div>
    <p class="reveal" style="text-align:center;margin-top:1.6rem"><a href="about/">دربارهٔ تیم و رویکرد ما بیشتر بخوانید ←</a></p>
  </div>
</section>

<section class="section alt">
  <div class="container">
    <div class="section-head reveal"><span class="eyebrow">سؤالات متداول</span><h2>پرسش‌های رایج دربارهٔ آموزش زبان آلمانی در کوچر</h2></div>
    ${faq(faqFixed)}
  </div>
</section>

${cta(root)}`;

  return page({
    path: '', depth: 0,
    title: 'آموزش زبان آلمانی با متد نوروساینس | کوچر',
    description: 'آموزش زبان آلمانی مخصوص فارسی‌زبانان بر پایهٔ علوم شناختی و نوروساینس؛ دوره‌های A1 تا B2، آزمون رایگان تعیین سطح و ابزارهای تمرین.',
    body,
    schema: [orgLd(), {
      '@context': 'https://schema.org', '@type': 'WebSite', '@id': `${SITE_URL}/#website`, url: SITE_URL + '/',
      name: BRAND.name, inLanguage: 'fa', publisher: { '@id': `${SITE_URL}/#org` },
    }, faqLd(faqFixed)],
  });
}

/* ---------- course card ---------- */
function courseCard(c, root) {
  const open = c.status === 'open';
  const pts = {
    a1: ['شروع کاملاً از صفر', 'الفبا، تلفظ و ساختار جمله', 'مرور فاصله‌دار و تمرین فعال'],
    a2: ['گذشته، حرف اضافه و مکالمه', 'جمله‌های پیوسته و روان', 'آمادهٔ ثبت‌نام در لیست انتظار'],
    b1: ['جمله‌های مرکب و بیان نظر', 'گوش‌دادن به گفتار طبیعی', 'نوشتن متن‌های کوتاه'],
    b2: ['استدلال و بحث', 'متن‌ها و ویدیوهای پیچیده‌تر', 'دقت و روانی بالاتر'],
  }[c.id];
  return `<article class="card course reveal">
    <div class="course-top ${c.id}"><span class="badge ${open ? '' : 'soon'}">${open ? 'ثبت‌نام باز' : 'به‌زودی'}</span><span class="lvl">${c.level}</span><h3>${c.title}</h3></div>
    <div class="course-body"><p>${c.sub} — مناسب ${c.for}.</p>${checks(pts)}
    <a class="btn ${open ? 'btn-primary' : 'btn-ghost'} btn-block" href="${root}courses/${c.id}/">${open ? 'مشاهدهٔ دوره' : 'جزئیات و لیست انتظار'}</a></div></article>`;
}

/* ---------- courses index ---------- */
export function coursesIndex() {
  const root = R(1);
  const items = [['خانه', ''], ['دوره‌ها', 'courses/']];
  const body = `
<header class="page-hero"><div class="container">${crumbsHtml(items, root)}
  <h1>دوره‌های آموزش زبان آلمانی</h1>
  <p class="lead" style="max-width:40em">دوره‌ها بر اساس سطوح استاندارد اروپایی (CEFR) و اصول یادگیری مغز ساخته شده‌اند. اگر نمی‌دانید از کجا شروع کنید، اول <a href="${root}level-test/">آزمون رایگان تعیین سطح</a> را بدهید.</p></div></header>
<section class="section"><div class="container">
  <div class="grid g4">${COURSES.map((c) => courseCard(c, root)).join('')}</div>
  <div class="section-head reveal" style="margin-top:4rem"><h2>نقشهٔ راه سطوح</h2><p class="lead">هر سطح، مهارت مشخصی به شما اضافه می‌کند. دوره‌های فعلی کوچر سطوح A1 تا B2 را پوشش می‌دهند.</p></div>
  <ol class="roadmap reveal">
    <li class="on"><b>A1</b><small>مبتدی<br>جمله‌های ساده و معرفی</small></li>
    <li class="on"><b>A2</b><small>پایه<br>موقعیت‌های روزمره</small></li>
    <li class="on"><b>B1</b><small>متوسط<br>استقلال در زبان</small></li>
    <li class="on"><b>B2</b><small>بالاتر از متوسط<br>بحث و استدلال</small></li>
    <li><b>C1</b><small>پیشرفته<br>(در برنامه نیست)</small></li>
    <li><b>C2</b><small>تقریباً بومی<br>(در برنامه نیست)</small></li>
  </ol>
</div></section>
${cta(root)}`;
  return page({
    path: 'courses/', depth: 1, body,
    title: 'دوره‌های آموزش زبان آلمانی A1 تا B2 | کوچر',
    description: 'دوره‌های آموزش زبان آلمانی کوچر از A1 تا B2؛ طراحی‌شده برای فارسی‌زبانان و بر اساس تکرار فاصله‌دار، یادآوری فعال و اصول نوروساینس.',
    schema: breadcrumbLd(items),
  });
}

/* ---------- single course ---------- */
const SYLLABUS = {
  a1: [
    ['الفبا و تلفظ', 'حروف خاص ä، ö، ü، ß، تلفظ صحیح و معرفی خود'],
    ['اعداد، ساعت و تاریخ', 'شمردن، ساعت گفتن، روزها و ماه‌ها'],
    ['اسم و آرتیکل', `${de('der / die / das')}، الگوهای جنسیت و جمع بستن`],
    ['فعل‌های زمان حال', `فعل‌های منظم و ${de('sein')}، ${de('haben')} و چند فعل بی‌قاعدهٔ پرکاربرد`],
    ['ساختار جمله', 'جایگاه فعل، جملهٔ پرسشی، نفی با nicht و kein'],
    ['خانواده و توصیف', 'ضمایر ملکی، صفت‌های ساده، توصیف افراد'],
    ['غذا و خرید', 'حالت مفعولی (Akkusativ)، سفارش دادن و خرید'],
    ['روال روزانه', 'فعل‌های جداشدنی و برنامهٔ روزانه'],
    ['توانستن، خواستن، باید', 'فعل‌های کمکی (Modalverben)'],
    ['مرور و آمادگی آزمون', 'جمع‌بندی A1 و آشنایی با قالب آزمون Goethe-Zertifikat A1'],
  ],
};

export function course(c) {
  const root = R(2);
  const open = c.status === 'open';
  const items = [['خانه', ''], ['دوره‌ها', 'courses/'], [c.title, `courses/${c.id}/`]];
  const syl = SYLLABUS[c.id];
  const faqs = open ? [
    ['این دوره برای چه کسانی است؟', `${c.for.charAt(0).toUpperCase() + c.for.slice(1)}. اگر مطمئن نیستید، <a href="${root}level-test/">آزمون تعیین سطح</a> را انجام دهید.`],
    ['برای ثبت‌نام و دیدن قیمت و زمان‌بندی چه کنم؟', 'از طریق تلگرام یا اینستاگرام کوچر پیام بدهید تا آخرین جزئیات و شرایط ثبت‌نام را برایتان بفرستیم.'],
    ['آیا آموزش با متد نوروساینس واقعاً فرق دارد؟', `ما از اصول پژوهش‌شده‌ای مثل تکرار فاصله‌دار و یادآوری فعال استفاده می‌کنیم. <a href="${root}method/">منابع و جزئیات را در صفحهٔ متد</a> ببینید.`],
  ] : [
    ['دوره چه زمانی شروع می‌شود؟', 'هنوز تاریخ قطعی اعلام نشده است. با پیام دادن در تلگرام یا اینستاگرام در لیست انتظار قرار می‌گیرید تا اولین نفر باخبر شوید.'],
    ['تا آن موقع چه کنم؟', `دورهٔ جامع A1 و ابزارهای رایگان مثل <a href="${root}tools/der-die-das/">بازی der/die/das</a> بهترین شروع هستند.`],
  ];
  const ctaBtn = open
    ? `<a class="btn btn-primary" href="${SOCIAL.telegram}" target="_blank" rel="noopener">ثبت‌نام و مشاوره در تلگرام</a><a class="btn btn-ghost" href="${SOCIAL.instagram}" target="_blank" rel="noopener">پیام در اینستاگرام</a>`
    : `<a class="btn btn-primary" href="${SOCIAL.telegram}" target="_blank" rel="noopener">ثبت‌نام در لیست انتظار</a><a class="btn btn-ghost" href="${root}courses/a1/">دیدن دورهٔ A1</a>`;
  const body = `
<header class="page-hero"><div class="container">${crumbsHtml(items, root)}
  <span class="eyebrow">${open ? 'ثبت‌نام باز' : 'به‌زودی'} · سطح ${de(c.level)}</span>
  <h1>${c.title} آموزش زبان آلمانی (${de(c.level)})</h1>
  <p class="lead" style="max-width:40em">${c.sub}؛ مناسب ${c.for}. بر پایهٔ تکرار فاصله‌دار، یادآوری فعال و یادگیری عبارت‌محور.</p>
  <div class="hero-actions">${ctaBtn}</div></div></header>
<section class="section"><div class="container article-layout">
  <div class="prose">
    ${syl ? `<h2>سرفصل‌های دوره</h2><ol>${syl.map(([t, d]) => `<li><strong>${t}</strong> — ${d}</li>`).join('')}</ol>` :
      `<h2>این دوره چه می‌دهد؟</h2><p>دورهٔ ${de(c.level)} در ادامهٔ مسیر A1 طراحی می‌شود و همان اصول علمی کوچر را به کار می‌گیرد. سرفصل‌های دقیق پیش از شروع ثبت‌نام اعلام می‌شود.</p>`}
    <h2>روش آموزش در این دوره</h2>
    ${checks(['درس‌های کوتاه و متمرکز برای جلوگیری از خستگی ذهنی', 'مرور فاصله‌دار مطالب قبلی در هر جلسه', 'تمرین‌های یادآوری فعال به‌جای صرفاً دوباره‌خواندن', 'توضیح دستور زبان به‌زبان فارسی و با مثال‌های ملموس', 'تأکید بر گوش‌دادن و گفتن از همان ابتدا'])}
    <div class="callout"><strong>قیمت و زمان‌بندی</strong>برای اطلاع از آخرین شرایط ثبت‌نام، قیمت و تاریخ شروع، در تلگرام یا اینستاگرام به ما پیام بدهید.</div>
    <h2>سؤالات متداول این دوره</h2>
    ${faq(faqs)}
  </div>
  <aside class="toc"><h2>همین حالا شروع کنید</h2>
    <p style="font-size:.93rem;color:var(--ink-2)">اول سطح فعلی‌تان را بسنجید؛ رایگان و کمتر از ۳ دقیقه.</p>
    <a class="btn btn-dark btn-block" href="${root}level-test/">آزمون تعیین سطح</a>
    <p style="font-size:.88rem;color:var(--muted);margin:1rem 0 0">یا ابتدا با <a href="${root}method/">متد نوروساینس کوچر</a> آشنا شوید.</p></aside>
</div></section>`;
  return page({
    path: `courses/${c.id}/`, depth: 2, body,
    title: `${c.title} آموزش زبان آلمانی (${c.level}) | کوچر`,
    description: `${c.title} آموزش زبان آلمانی سطح ${c.level} مخصوص فارسی‌زبانان با متد نوروساینس؛ ${c.sub}. ${open ? 'جزئیات و ثبت‌نام را ببینید.' : 'در لیست انتظار ثبت‌نام کنید.'}`,
    schema: [breadcrumbLd(items), {
      '@context': 'https://schema.org', '@type': 'Course', name: `${c.title} آموزش زبان آلمانی (${c.level})`,
      description: `آموزش زبان آلمانی سطح ${c.level} برای فارسی‌زبانان بر پایهٔ اصول یادگیری مغز.`,
      inLanguage: 'fa', educationalLevel: c.level, teaches: 'زبان آلمانی',
      provider: { '@type': 'Organization', name: BRAND.name, sameAs: SITE_URL + '/' }, url: url(`courses/${c.id}/`),
    }, faqLd(faqs)],
  });
}

/* ---------- Method ---------- */
export const REFS = [
  { n: 1, t: 'Roediger, H. L., & Karpicke, J. D. (2006). Test-enhanced learning: Taking memory tests improves long-term retention. Psychological Science, 17(3), 249–255.', u: 'https://doi.org/10.1111/j.1467-9280.2006.01693.x' },
  { n: 2, t: 'Cepeda, N. J., Pashler, H., Vul, E., Wixted, J. T., & Rohrer, D. (2006). Distributed practice in verbal recall tasks: A review and quantitative synthesis. Psychological Bulletin, 132(3), 354–380.', u: 'https://doi.org/10.1037/0033-2909.132.3.354' },
];
export const refsHtml = (list = REFS) => `<ol class="sources">${list.map((r) => `<li value="${r.n}" id="ref${r.n}">${r.t} <a href="${r.u}" target="_blank" rel="noopener noreferrer nofollow">${r.u}</a></li>`).join('')}</ol>`;

export function method() {
  const root = R(1);
  const items = [['خانه', ''], ['متد نوروساینس', 'method/']];
  const P = [
    ['repeat', 'تکرار فاصله‌دار', 'Spaced repetition', 'مرور مطالب در فاصله‌های زمانی، به‌جای انباشتن همه‌چیز در یک جلسه، یکی از پایدارترین یافته‌های پژوهش حافظه است. یک مرور و متاآنالیز بزرگ دربارهٔ یادآوری کلامی نشان داد فاصلهٔ مناسب بین مرورها به مدتی که می‌خواهید مطلب را به یاد داشته باشید بستگی دارد <a href="#ref2">[۲]</a>.', 'در دوره‌ها، لغات و ساختارهای هر جلسه در جلسه‌های بعدی با فاصله‌های بازتر دوباره ظاهر می‌شوند.'],
    ['target', 'یادآوری فعال', 'Active recall', 'در پژوهش مشهور روِدیگر و کارپیکه، شرکت‌کنندگانی که به‌جای دوباره‌خواندن، خودشان را آزمودند، پس از یک هفته مطلب را بهتر به یاد آوردند، حتی اگر در لحظهٔ مطالعه احساس تسلط کمتری داشتند <a href="#ref1">[۱]</a>.', 'پایان هر درس، تمرین‌های کوتاه «بدون نگاه‌کردن» دارد؛ مثل همین بازی‌ها و آزمون رایگان سایت.'],
    ['ear', 'ورودی قابل‌فهم و شنیدار', 'Comprehensible input', 'مغز قبل از قواعد، الگوها را از طریق شنیدن جذب می‌کند. شنیدن جمله‌های قابل‌فهم، پایهٔ تلفظ و حس زبانی را می‌سازد.', 'هر نکتهٔ دستوری ابتدا در جمله‌های شنیدنی و ملموس دیده می‌شود، بعد قاعده‌اش توضیح داده می‌شود.'],
    ['layers', 'تکه‌بندی (Chunking)', 'Chunking', 'ذهن ما با واحدهای معنادار بهتر کار می‌کند تا با اجزای جدا. عبارت کامل را مثل یک بسته به خاطر می‌سپاریم.', `به‌جای حفظ ${de('Hunger')} تنها، عبارت ${de('Ich habe Hunger')} را با هم یاد می‌گیرید.`],
    ['spark', 'معنا، تصویر و موقعیت', 'Dual coding & context', 'وقتی کلمه با تصویر، داستان یا موقعیت واقعی گره می‌خورد، مسیرهای بازیابی بیشتری در ذهن ایجاد می‌شود.', 'درس‌ها با مثال‌های روزمره و تصویری ساخته می‌شوند، نه فهرست‌های خشک لغت.'],
    ['moon', 'بار شناختی و خواب', 'Cognitive load & sleep', 'حافظهٔ فعال ظرفیت محدودی دارد؛ جلسه‌های کوتاه و پیوسته معمولاً از ماراتن‌های طولانی مؤثرترند. خواب هم در تثبیت حافظه نقش دارد.', 'درس‌ها کوتاه‌اند و برنامهٔ مرور طوری چیده شده که فشار یک‌باره به شما وارد نشود.'],
  ];
  const body = `
<header class="page-hero"><div class="container">${crumbsHtml(items, root)}
  <h1>متد نوروساینس کوچر در آموزش زبان آلمانی</h1>
  <p class="lead" style="max-width:42em">متد ما یک شعار تبلیغاتی نیست؛ مجموعه‌ای از اصول یادگیری است که پژوهش‌های روان‌شناسی شناختی و علوم اعصاب پشتیبانی‌شان می‌کنند و ما آن‌ها را در ساختار دوره‌های آلمانی به کار گرفته‌ایم.</p></div></header>
<section class="section"><div class="container">
  <div class="grid g2">
  ${P.map(([ic, t, en, sci, how], i) => `<article class="card reveal"><div class="icon-box">${I[ic]}</div><span class="num">اصل ${i + 1}</span><h2 style="font-size:1.3rem">${t} <span class="de" style="font-size:.85rem;color:var(--muted);font-weight:600">${en}</span></h2>
    <p><strong>علم می‌گوید:</strong> ${sci}</p><p style="margin-top:.8rem"><strong>در کوچر:</strong> ${how}</p></article>`).join('')}
  </div>
  <div class="prose" style="margin:4rem auto 0">
    <h2>صادقانه: چه چیزی را ادعا نمی‌کنیم</h2>
    <p>نوروساینس جادو نیست. این اصول یادگیری را مؤثرتر می‌کنند، اما جای تمرین منظم را نمی‌گیرند. ما وعدهٔ «آلمانی در چند روز» نمی‌دهیم؛ وعدهٔ ما یک مسیر روشن و روشی است که زمانتان را هدر نمی‌دهد.</p>
    <h2>منابع علمی</h2>
    ${refsHtml()}
  </div>
</div></section>
${cta(root)}`;
  return page({
    path: 'method/', depth: 1, body,
    title: 'متد نوروساینس در آموزش زبان آلمانی | کوچر',
    description: 'متد نوروساینس کوچر در آموزش زبان آلمانی چیست؟ شش اصل علمی: تکرار فاصله‌دار، یادآوری فعال، ورودی شنیداری، تکه‌بندی و… همراه با منابع پژوهشی.',
    schema: breadcrumbLd(items),
  });
}

/* ---------- About ---------- */
export function about() {
  const root = R(1);
  const items = [['خانه', ''], ['دربارهٔ ما', 'about/']];
  const body = `
<header class="page-hero"><div class="container">${crumbsHtml(items, root)}
  <h1>دربارهٔ کوچر؛ آموزش آلمانی با نگاه علمی به یادگیری</h1>
  <p class="lead" style="max-width:42em">کوچر برای فارسی‌زبانانی ساخته شده که می‌خواهند آلمانی را درست، پایدار و بدون سردرگمی یاد بگیرند.</p></div></header>
<section class="section"><div class="container">
  <div class="split">
    <div class="prose">
      <h2>چرا کوچر را ساختیم؟</h2>
      <p>در سال‌ها تدریس و پژوهش در زبان آلمانی بارها یک الگو را دیدیم: زبان‌آموزان زیادی سخت تلاش می‌کنند، اما چون روش درستی ندارند، مطالب را چند هفته بعد فراموش می‌کنند. تا اینکه از خودمان پرسیدیم: <em>اگر آموزش را بر اساس نحوهٔ واقعی کار مغز بسازیم چه می‌شود؟</em></p>
      <p>نتیجهٔ این پرسش، متد کوچر بود: ترکیب تجربهٔ کلاس درس و یافته‌های علوم شناختی، مخصوص چالش‌های فارسی‌زبانان؛ از آرتیکل‌ها و جنسیت اسم‌ها تا ترتیب کلمات در جمله.</p>
      <p>می‌خواهید روش را از نزدیک ببینید؟ <a href="${root}method/">متد نوروساینس کوچر</a> را بخوانید یا با <a href="${root}courses/a1/">دورهٔ جامع A1</a> شروع کنید.</p>
    </div>
    <div class="panel"><h2>ارزش‌های ما</h2>
      ${checks(['صداقت: بدون وعدهٔ غیرواقعی', 'علم‌محور: روش‌ها بر پایهٔ پژوهش', 'فارسی‌محور: توضیح‌ها برای ذهن فارسی‌زبان', 'تمرین‌محور: یادگیری یعنی استفاده'].map((x) => x))}
    </div>
  </div>
  <div class="section-head" style="margin-top:5rem"><h2>بنیان‌گذاران</h2></div>
  <div class="grid g2" style="max-width:780px;margin-inline:auto">
    ${FOUNDERS.map((f) => `<article class="card person"><div class="avatar" aria-hidden="true">${f.initial}</div><h3>${f.name}</h3><span class="role">${f.role}</span><p>بیش از ${f.years} سال تجربه در حوزهٔ زبان آلمانی.</p></article>`).join('')}
  </div>
</div></section>
${cta(root, 'بیایید با هم شروع کنیم', 'سؤال دارید یا می‌خواهید بدانید کدام دوره مناسب شماست؟ به ما پیام بدهید.')}`;
  return page({
    path: 'about/', depth: 1, body,
    title: 'دربارهٔ کوچر؛ تیم آموزش زبان آلمانی | کوچر',
    description: 'با تیم کوچر آشنا شوید: زانیار شکراللهی (محقق زبان آلمانی) و ساسان حسینی (مدرس ارشد). آموزش آلمانی مخصوص فارسی‌زبانان با متد نوروساینس.',
    schema: [breadcrumbLd(items), { '@context': 'https://schema.org', '@type': 'AboutPage', url: url('about/'), name: 'دربارهٔ کوچر', about: { '@id': `${SITE_URL}/#org` } }],
  });
}

/* ---------- Contact ---------- */
export function contact() {
  const root = R(1);
  const items = [['خانه', ''], ['تماس با ما', 'contact/']];
  const ch = [
    ['tg', 'تلگرام', 'سریع‌ترین راه برای مشاوره و ثبت‌نام', SOCIAL.telegram],
    ['insta', 'اینستاگرام', 'نکته‌های روزانه و پیام مستقیم', SOCIAL.instagram],
    ['yt', 'یوتیوب', 'ویدیوهای آموزشی', SOCIAL.youtube],
  ];
  const body = `
<header class="page-hero"><div class="container">${crumbsHtml(items, root)}
  <h1>تماس با کوچر</h1><p class="lead">برای مشاورهٔ انتخاب دوره، ثبت‌نام یا هر سؤالی، از یکی از کانال‌های زیر پیام بدهید.</p></div></header>
<section class="section"><div class="container">
  <div class="grid g3">${ch.map(([ic, t, d, h]) => `<a class="card channel reveal" href="${h}" target="_blank" rel="noopener me" style="text-decoration:none"><div class="icon-box">${I[ic]}</div><div><h3 style="margin:0">${t}</h3><p>${d}</p></div></a>`).join('')}</div>
  ${BRAND.email ? `<p style="text-align:center;margin-top:2rem">ایمیل: <a href="mailto:${BRAND.email}">${BRAND.email}</a></p>` : ''}
</div></section>`;
  return page({
    path: 'contact/', depth: 1, body,
    title: 'تماس با کوچر؛ مشاوره و ثبت‌نام | کوچر',
    description: 'برای مشاوره و ثبت‌نام در دوره‌های آموزش زبان آلمانی کوچر، از طریق تلگرام، اینستاگرام یا یوتیوب با ما در ارتباط باشید.',
    schema: [breadcrumbLd(items), { '@context': 'https://schema.org', '@type': 'ContactPage', url: url('contact/'), name: 'تماس با کوچر' }],
  });
}

/* ---------- Level test ---------- */
export const QUIZ = {
  questions: [
    { level: 'A1', q: 'Ich ___ Zanyar.', options: ['bin', 'bist', 'ist', 'sind'], answer: 0, explain: 'با ich فعل sein می‌شود bin.' },
    { level: 'A1', q: '___ Buch ist neu.', options: ['Der', 'Die', 'Das', 'Den'], answer: 2, explain: 'Buch خنثی است: das Buch.' },
    { level: 'A1', q: 'Wir ___ aus dem Iran.', options: ['kommt', 'kommen', 'komme', 'kommst'], answer: 1, explain: 'با wir فعل به‌شکل مصدر می‌آید: kommen.' },
    { level: 'A1', q: 'Wie ___ du?', options: ['heiße', 'heißt', 'heißen', 'heiß'], answer: 1, explain: 'با du پسوند -st/-t می‌گیرد: Wie heißt du?' },
    { level: 'A1', q: 'Ich habe zwei ___.', options: ['Bruders', 'Bruder', 'Brüder', 'Brüdern'], answer: 2, explain: 'جمع Bruder می‌شود Brüder (با اومالوت).' },
    { level: 'A2', q: 'Gestern ___ ich ins Kino gegangen.', options: ['habe', 'bin', 'wurde', 'hatte'], answer: 1, explain: 'فعل‌های حرکتی مثل gehen در Perfekt با sein می‌آیند: ich bin gegangen.' },
    { level: 'A2', q: 'Ich warte ___ den Bus.', options: ['an', 'für', 'auf', 'bei'], answer: 2, explain: 'warten auf + Akkusativ.' },
    { level: 'A2', q: 'Ich fahre mit ___ Bus.', options: ['den', 'der', 'dem', 'das'], answer: 2, explain: 'mit همیشه Dativ می‌خواهد: mit dem Bus.' },
    { level: 'A2', q: 'Weil ich müde ___, gehe ich ins Bett.', options: ['ich bin', 'bin ich', 'bin', 'habe'], answer: 2, explain: 'در جملهٔ فرعی با weil فعل به آخر جمله می‌رود: weil ich müde bin.' },
    { level: 'A2', q: 'Mein Computer ist ___ als deiner.', options: ['schnell', 'schneller', 'am schnellsten', 'schnellere'], answer: 1, explain: 'با als از صفت برتر (Komparativ) استفاده می‌شود.' },
    { level: 'B1', q: 'Wenn ich mehr Zeit ___, würde ich öfter reisen.', options: ['habe', 'hatte', 'hätte', 'haben'], answer: 2, explain: 'در جملهٔ شرطی غیرواقعی از Konjunktiv II استفاده می‌شود: hätte.' },
    { level: 'B1', q: 'Der Film, ___ wir gestern gesehen haben, war spannend.', options: ['der', 'dem', 'den', 'dessen'], answer: 2, explain: 'ضمیر موصولی مفعول مستقیم برای اسم مذکر: den (Akkusativ).' },
    { level: 'B1', q: 'Ich freue mich schon sehr ___ nächste Woche.', options: ['über', 'auf', 'an', 'für'], answer: 1, explain: 'برای آینده: sich freuen auf؛ برای چیزی که اکنون یا قبلاً رخ داده: sich freuen über.' },
    { level: 'B1', q: 'Das Haus ___ letztes Jahr renoviert.', options: ['wird', 'wurde', 'werde', 'worden'], answer: 1, explain: 'مجهول گذشتهٔ ساده (Passiv Präteritum): wurde + Partizip II.' },
    { level: 'B1', q: 'Obwohl es regnete, ___ spazieren.', options: ['wir gingen', 'gingen wir', 'wir gehen', 'gehen wir'], answer: 1, explain: 'بعد از جملهٔ فرعی، در جملهٔ اصلی فعل در جایگاه اول می‌آید: gingen wir.' },
  ],
  recs: {
    start: { title: 'شروع از صفر؛ جای درستی آمده‌اید', text: 'نتیجه نشان می‌دهد هنوز در ابتدای مسیر هستید و این کاملاً طبیعی است. دورهٔ جامع A1 از همین نقطه شروع می‌شود.', href: 'courses/a1/', cta: 'مشاهدهٔ دورهٔ جامع A1' },
    A1: { title: 'پایهٔ A1 را دارید', text: 'مفاهیم اولیه را بلدید. پیشنهاد ما: A1 را مرور کنید تا خوب جا بیفتد و سپس به A2 بروید.', href: 'courses/a2/', cta: 'مشاهدهٔ دورهٔ A2' },
    A2: { title: 'در سطح A2 هستید', text: 'می‌توانید جمله‌های روزمره بسازید. قدم بعدی، استقلال بیشتر در زبان است، یعنی سطح B1.', href: 'courses/b1/', cta: 'مشاهدهٔ دورهٔ B1' },
    B1: { title: 'سطح B1 یا بالاتر', text: 'آفرین! دستور زبان شما از سطح متوسط عبور کرده است. پیشنهاد ما سطح B2 است.', href: 'courses/b2/', cta: 'مشاهدهٔ دورهٔ B2' },
  },
};

export function levelTest() {
  const root = R(1);
  const items = [['خانه', ''], ['آزمون تعیین سطح', 'level-test/']];
  const body = `
<header class="page-hero"><div class="container">${crumbsHtml(items, root)}
  <h1>آزمون رایگان تعیین سطح زبان آلمانی (A1 تا B1)</h1>
  <p class="lead" style="max-width:42em">۱۵ سؤال دستور زبان با توضیح فارسی هر پاسخ. در پایان، سطح تقریبی شما و دورهٔ مناسب را می‌بینید. حدود ۳ دقیقه زمان لازم است.</p></div></header>
<section class="section"><div class="container">
  <div class="tool-shell" id="level-test">
    <noscript><p>برای انجام آزمون، جاوااسکریپت را فعال کنید.</p></noscript>
    <div class="quiz-body">
      <div class="progress" aria-hidden="true"><i></i></div>
      <div class="q-meta"><span>سؤال <span class="q-num"></span></span><span>سطح: <b class="q-level de"></b></span></div>
      <div class="q-text" lang="de" dir="ltr"></div>
      <div class="options" role="group" aria-label="گزینه‌ها"></div>
      <div class="feedback" role="status" aria-live="polite"></div>
      <div class="tool-actions"><span style="color:var(--muted);font-size:.85rem">کلیدهای A–D برای انتخاب و Enter برای ادامه</span><button class="btn btn-dark next" type="button" disabled>سؤال بعدی</button></div>
    </div>
    <div class="result" hidden>
      <div class="score-ring"><svg viewBox="0 0 160 160" width="170" height="170"><circle cx="80" cy="80" r="70" fill="none" stroke="var(--bg-2)" stroke-width="14"/><circle class="ring-fg" cx="80" cy="80" r="70" fill="none" stroke="var(--gold)" stroke-width="14" stroke-linecap="round" stroke-dasharray="440" stroke-dashoffset="440" style="transition:stroke-dashoffset 1s"/></svg><span class="score-num"></span></div>
      <p style="margin:0;color:var(--muted)">سطح تقریبی شما</p>
      <div class="level-pill"></div>
      <h2 class="res-title" style="font-size:1.4rem"></h2>
      <p class="res-text"></p>
      <div class="hero-actions" style="justify-content:center"><a class="btn btn-primary res-cta" href="#"></a><button class="btn btn-ghost restart" type="button">انجام دوباره</button></div>
      <p style="font-size:.85rem;color:var(--muted)">این نتیجه فقط یک برآورد سریع است و جایگزین آزمون رسمی نیست.</p>
    </div>
  </div>
  <script type="application/json" id="quiz-data">${JSON.stringify(QUIZ).replace(/href":"/g, `href":"${root}`).replace(/<\//g, '<\\/')}</script>
</div></section>`;
  return page({
    path: 'level-test/', depth: 1, body,
    title: 'آزمون تعیین سطح زبان آلمانی رایگان | کوچر',
    description: 'آزمون رایگان تعیین سطح زبان آلمانی از A1 تا B1 با ۱۵ سؤال و توضیح فارسی پاسخ‌ها؛ سطح تقریبی و دورهٔ پیشنهادی خود را در ۳ دقیقه بدانید.',
    schema: [breadcrumbLd(items), { '@context': 'https://schema.org', '@type': 'WebApplication', name: 'آزمون تعیین سطح زبان آلمانی', applicationCategory: 'EducationalApplication', operatingSystem: 'Any', url: url('level-test/'), inLanguage: 'fa', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } }],
  });
}

/* ---------- der/die/das game ---------- */
const N = (art, de_, fa, tip) => ({ art, de: de_, fa, tip });
export const NOUNS = [
  N('der', 'Tisch', 'میز', 'بیشتر اسم‌های روزمره قاعدهٔ ثابتی ندارند؛ همراه با آرتیکلشان حفظ کنید.'),
  N('der', 'Montag', 'دوشنبه', 'روزهای هفته، ماه‌ها و فصل‌ها همه der هستند.'),
  N('der', 'Sommer', 'تابستان', 'فصل‌ها همه der هستند.'),
  N('der', 'Lehrer', 'معلم (مرد)', 'اسم شغل‌هایی که با -er تمام می‌شوند معمولاً der هستند.'),
  N('der', 'Computer', 'رایانه', 'اسم‌های -er که وسیله‌اند معمولاً der هستند.'),
  N('der', 'Mann', 'مرد', 'موجودات مذکر معمولاً der هستند.'),
  N('der', 'Regen', 'باران', 'پدیده‌های جوی (Regen, Schnee, Wind) معمولاً der هستند.'),
  N('der', 'Käse', 'پنیر', 'بسیاری از غذاها و نوشیدنی‌ها مثل Käse و Wein، der هستند.'),
  N('der', 'Bruder', 'برادر', 'اعضای مذکر خانواده der هستند.'),
  N('der', 'Winter', 'زمستان', 'فصل‌ها همه der هستند.'),
  N('die', 'Zeitung', 'روزنامه', 'پایان -ung تقریباً همیشه die است.'),
  N('die', 'Wohnung', 'آپارتمان', 'پایان -ung تقریباً همیشه die است.'),
  N('die', 'Freiheit', 'آزادی', 'پایان -heit همیشه die است.'),
  N('die', 'Möglichkeit', 'امکان', 'پایان -keit همیشه die است.'),
  N('die', 'Freundschaft', 'دوستی', 'پایان -schaft همیشه die است.'),
  N('die', 'Information', 'اطلاعات', 'پایان -tion همیشه die است.'),
  N('die', 'Universität', 'دانشگاه', 'پایان -ität همیشه die است.'),
  N('die', 'Frau', 'زن', 'موجودات مؤنث معمولاً die هستند.'),
  N('die', 'Familie', 'خانواده', 'پایان -ie معمولاً die است.'),
  N('die', 'Blume', 'گل', 'اسم‌هایی که با -e تمام می‌شوند اغلب die هستند.'),
  N('die', 'Schule', 'مدرسه', 'اسم‌هایی که با -e تمام می‌شوند اغلب die هستند.'),
  N('die', 'Gesundheit', 'سلامتی', 'پایان -heit همیشه die است.'),
  N('das', 'Mädchen', 'دختر', 'پایان -chen همیشه das است (حتی برای دختر!).'),
  N('das', 'Brötchen', 'نان کوچک', 'پایان -chen (تصغیر) همیشه das است.'),
  N('das', 'Medikament', 'دارو', 'پایان -ment معمولاً das است.'),
  N('das', 'Museum', 'موزه', 'پایان -um معمولاً das است.'),
  N('das', 'Datum', 'تاریخ', 'پایان -um معمولاً das است.'),
  N('das', 'Kind', 'کودک', 'کودکان و بچه‌ حیوانات (das Kind, das Baby) خنثی‌اند.'),
  N('das', 'Haus', 'خانه', 'بسیاری از اسم‌های تک‌سیلابی ملموس خنثی‌اند؛ همراه آرتیکل حفظ کنید.'),
  N('das', 'Wasser', 'آب', 'قاعدهٔ ثابتی ندارد؛ همراه آرتیکل حفظ کنید.'),
  N('das', 'Auto', 'ماشین', 'اسم‌های وام‌گرفته‌ای مثل Auto, Hotel, Radio اغلب das هستند.'),
  N('das', 'Hotel', 'هتل', 'اسم‌های وام‌گرفته‌ای مثل Auto, Hotel, Radio اغلب das هستند.'),
  N('das', 'Problem', 'مشکل', 'پایان -em در اسم‌های یونانی-لاتین معمولاً das است.'),
];

export function artikelGame() {
  const root = R(2);
  const items = [['خانه', ''], ['ابزارها', 'tools/der-die-das/'], ['بازی der / die / das', 'tools/der-die-das/']];
  const body = `
<header class="page-hero"><div class="container">${crumbsHtml(items.filter((_, i) => i !== 1), root)}
  <h1>بازی ${de('der / die / das')}؛ تمرین جنسیت اسم‌ها در زبان آلمانی</h1>
  <p class="lead" style="max-width:42em">در هر دور ۱۰ اسم می‌بینید. آرتیکل درست را انتخاب کنید؛ بعد از هر پاسخ، قاعده یا ترفند مربوطه را می‌بینید. (کلیدهای ۱، ۲، ۳ و Enter هم کار می‌کنند.)</p></div></header>
<section class="section"><div class="container">
  <div class="tool-shell" id="artikel-game">
    <div class="game-body">
      <div class="progress" aria-hidden="true"><i></i></div>
      <div class="stats-row"><div><b class="s-right">0</b><span>درست</span></div><div><b class="s-streak">0</b><span>پیاپی</span></div><div><b class="s-best">0</b><span>بهترین پیاپی</span></div></div>
      <div class="noun-card"><div class="w" lang="de"></div><div class="fa"></div></div>
      <div class="art-btns" role="group" aria-label="آرتیکل"><button class="opt" type="button" data-art="der">der</button><button class="opt" type="button" data-art="die">die</button><button class="opt" type="button" data-art="das">das</button></div>
      <div class="feedback" role="status" aria-live="polite"></div>
      <div class="tool-actions"><span></span><button class="btn btn-dark next" type="button" disabled>کلمهٔ بعدی</button></div>
    </div>
    <div class="result" hidden>
      <h2>پایان دور!</h2><div class="level-pill final"></div><p class="final-msg"></p>
      <div class="hero-actions" style="justify-content:center"><button class="btn btn-primary restart" type="button">دور تازه</button><a class="btn btn-ghost" href="${root}blog/der-die-das/">قاعده‌های جنسیت اسم‌ها</a></div>
    </div>
  </div>
  <script type="application/json" id="noun-data">${JSON.stringify(NOUNS)}</script>
  <div class="prose" style="margin:3rem auto 0">
    <h2>چطور از این بازی بیشترین نتیجه را بگیریم؟</h2>
    <p>طبق اصل یادآوری فعال، قبل از دیدن جواب باید خودتان حدس بزنید. حتی اگر اشتباه کردید، تلاش برای یادآوری حافظه را قوی‌تر می‌کند <a href="${root}method/#ref1">[۱]</a>. روزی ۵ دقیقه بازی کنید، به‌جای یک بار طولانی در هفته؛ این همان تکرار فاصله‌دار است.</p>
    <p>بیشتر بدانید: <a href="${root}blog/der-die-das/">چطور جنسیت اسم‌ها در آلمانی را یاد بگیریم؟</a></p>
  </div>
</div></section>
${cta(root, 'آلمانی را از پایه محکم یاد بگیرید', 'در دورهٔ جامع A1 همین اصول را در ساختار کامل درس‌ها تجربه می‌کنید.')}`;
  return page({
    path: 'tools/der-die-das/', depth: 2, body,
    title: 'بازی der die das؛ تمرین آرتیکل آلمانی | کوچر',
    description: 'تمرین رایگان آرتیکل‌های der، die و das با بازی تعاملی؛ ۳۰+ اسم پرکاربرد با قاعده و ترفند هر کلمه و بازخورد فوری برای فارسی‌زبانان.',
    schema: [breadcrumbLd([items[0], items[2]]), { '@context': 'https://schema.org', '@type': 'WebApplication', name: 'بازی der / die / das', applicationCategory: 'EducationalApplication', operatingSystem: 'Any', url: url('tools/der-die-das/'), inLanguage: 'fa', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } }],
  });
}

export function notFound() {
  const body = `<section class="section"><div class="container" style="text-align:center;max-width:620px">
  <p class="de" style="font-size:6rem;font-weight:900;margin:0;color:var(--gold)">404</p>
  <h1 style="font-size:2rem">این صفحه پیدا نشد</h1>
  <p class="lead">شاید آدرس تغییر کرده باشد. از اینجا ادامه دهید:</p>
  <div class="hero-actions" style="justify-content:center"><a class="btn btn-primary" href="/">صفحهٔ اصلی</a><a class="btn btn-ghost" href="/blog/">بلاگ</a></div></div></section>`;
  // 404 is served from arbitrary paths, so asset links must be absolute-root
  return page({ path: '404.html', depth: 0, body, title: 'صفحه پیدا نشد | کوچر', description: 'صفحهٔ مورد نظر پیدا نشد.', noindex: true })
    .replace(/(href|src)="assets\//g, '$1="/assets/').replace(/href="(courses|method|level-test|tools|blog|about|contact)\//g, 'href="/$1/').replace(/href=""/g, 'href="/"');
}
