// ============================================================
// تنظیمات اصلی سایت کوچر — فقط همین فایل را برای شخصی‌سازی ویرایش کنید
// سپس:  node build/build.mjs   (یا  npm run build)
// ============================================================

// آدرس نهایی سایت (بدون اسلش پایانی). برای سئو (canonical, sitemap, schema) حیاتی است.
// می‌توانید موقع بیلد هم بدهید:  SITE_URL=https://example.com node build/build.mjs
export const SITE_URL = (process.env.SITE_URL || 'https://koocher.example').replace(/\/$/, '');

export const BRAND = {
  name: 'کوچر',
  latin: 'Koocher',
  tagline: 'آموزش زبان آلمانی بر پایهٔ نوروساینس',
  email: '',                                  // اختیاری: info@yourdomain.com
};

// ⚠️ لینک‌های واقعی شبکه‌های اجتماعی را اینجا جایگزین کنید
export const SOCIAL = {
  instagram: 'https://instagram.com/koocher',
  telegram: 'https://t.me/koocher',
  youtube: 'https://youtube.com/@koocher',
};

export const FOUNDERS = [
  { name: 'زانیار شکراللهی', initial: 'ز', role: 'محقق زبان آلمانی', years: 5 },
  { name: 'ساسان حسینی', initial: 'س', role: 'مدرس ارشد زبان آلمانی', years: 5 },
];

// وضعیت دوره‌ها: 'open' = ثبت‌نام باز | 'soon' = به‌زودی (لیست انتظار)
export const COURSES = [
  { id: 'a1', level: 'A1', title: 'دورهٔ جامع A1', sub: 'شروع از صفر', status: 'open',
    for: 'کسی که هرگز آلمانی نخوانده یا قبلاً نیمه‌کاره رها کرده است' },
  { id: 'a2', level: 'A2', title: 'دورهٔ A2', sub: 'مکالمهٔ روزمره', status: 'soon',
    for: 'کسی که A1 را تمام کرده و می‌خواهد جمله‌های روان بسازد' },
  { id: 'b1', level: 'B1', title: 'دورهٔ B1', sub: 'استقلال در زبان', status: 'soon',
    for: 'کسی که برای آزمون، مهاجرت یا کار به B1 نیاز دارد' },
  { id: 'b2', level: 'B2', title: 'دورهٔ B2', sub: 'سطح پیشرفته', status: 'soon',
    for: 'کسی که برای دانشگاه یا کار حرفه‌ای به سطح بالاتر می‌رود' },
];
