/* Koocher — site scripts (vanilla JS, no dependencies) */
(function () {
  'use strict';
  var doc = document;
  doc.documentElement.classList.remove('no-js');

  var $ = function (s, r) { return (r || doc).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || doc).querySelectorAll(s)); };
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  /* ---------- theme ---------- */
  var saved = store.get('koocher-theme');
  if (saved) doc.documentElement.setAttribute('data-theme', saved);
  var tt = $('.theme-toggle');
  if (tt) tt.addEventListener('click', function () {
    var cur = doc.documentElement.getAttribute('data-theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    var next = cur === 'dark' ? 'light' : 'dark';
    doc.documentElement.setAttribute('data-theme', next);
    store.set('koocher-theme', next);
  });

  /* ---------- mobile menu ---------- */
  var mb = $('.menu-btn'), links = $('.nav-links');
  if (mb && links) {
    mb.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      mb.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    doc.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && links.classList.contains('open')) { links.classList.remove('open'); mb.setAttribute('aria-expanded', 'false'); mb.focus(); }
    });
  }

  /* ---------- reveal on scroll ---------- */
  var rv = $$('.reveal');
  if ('IntersectionObserver' in window && rv.length) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: .12 });
    rv.forEach(function (el) { io.observe(el); });
  } else { rv.forEach(function (el) { el.classList.add('in'); }); }

  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function readJSON(id) { var el = doc.getElementById(id); try { return JSON.parse(el.textContent); } catch (e) { return null; } }

  /* ============================================================
     Placement test
     ============================================================ */
  var qz = $('#level-test');
  if (qz) {
    var data = readJSON('quiz-data');
    var idx = 0, score = 0, byLevel = {}, answered = false;
    var elP = $('.progress>i', qz), elN = $('.q-num', qz), elL = $('.q-level', qz), elQ = $('.q-text', qz),
        elO = $('.options', qz), elF = $('.feedback', qz), btnNext = $('.next', qz), body = $('.quiz-body', qz), res = $('.result', qz);

    var render = function () {
      var q = data.questions[idx]; answered = false;
      elN.textContent = (idx + 1) + ' / ' + data.questions.length;
      elL.textContent = q.level;
      elQ.textContent = q.q;
      elP.style.width = (idx / data.questions.length * 100) + '%';
      elO.innerHTML = ''; elF.className = 'feedback'; elF.textContent = ''; btnNext.disabled = true;
      btnNext.textContent = idx === data.questions.length - 1 ? 'مشاهده نتیجه' : 'سؤال بعدی';
      q.options.forEach(function (o, i) {
        var b = doc.createElement('button');
        b.type = 'button'; b.className = 'opt';
        b.innerHTML = '<kbd>' + 'ABCD'[i] + '</kbd><span></span>';
        b.lastChild.textContent = o;
        b.addEventListener('click', function () { pick(i, b); });
        elO.appendChild(b);
      });
    };
    var pick = function (i, btn) {
      if (answered) return; answered = true;
      var q = data.questions[idx], ok = i === q.answer;
      byLevel[q.level] = byLevel[q.level] || { t: 0, c: 0 };
      byLevel[q.level].t++; if (ok) { score++; byLevel[q.level].c++; }
      $$('.opt', elO).forEach(function (b, k) { b.disabled = true; if (k === q.answer) b.classList.add('right'); });
      if (!ok) btn.classList.add('wrong');
      elF.textContent = (ok ? '✓ درست! ' : '✗ نادرست. ') + q.explain;
      elF.classList.add('show'); btnNext.disabled = false; btnNext.focus();
    };
    var finish = function () {
      body.hidden = true; res.hidden = false; elP.style.width = '100%';
      var n = data.questions.length, pct = Math.round(score / n * 100);
      /* level = highest level where the student got >= 60% of its questions, requiring lower levels to be passed too */
      var order = ['A1', 'A2', 'B1'], lvl = 'قبل از A1', rec = data.recs.start;
      for (var i = 0; i < order.length; i++) {
        var s = byLevel[order[i]];
        if (s && s.c / s.t >= 0.6) { lvl = order[i]; } else break;
      }
      if (lvl !== 'قبل از A1') rec = data.recs[lvl];
      $('.score-num', res).textContent = score + '/' + n;
      var C = 2 * Math.PI * 70;
      var ring = $('.ring-fg', res); ring.setAttribute('stroke-dasharray', C); ring.setAttribute('stroke-dashoffset', C * (1 - pct / 100));
      $('.level-pill', res).textContent = lvl === 'قبل از A1' ? 'A0' : lvl;
      $('.res-title', res).textContent = rec.title;
      $('.res-text', res).textContent = rec.text;
      var a = $('.res-cta', res); a.href = rec.href; a.textContent = rec.cta;
      store.set('koocher-level', lvl);
    };
    btnNext.addEventListener('click', function () {
      if (idx < data.questions.length - 1) { idx++; render(); } else finish();
    });
    $('.restart', qz).addEventListener('click', function () {
      idx = 0; score = 0; byLevel = {}; res.hidden = true; body.hidden = false; render();
    });
    doc.addEventListener('keydown', function (e) {
      if (body.hidden) return;
      var k = 'abcd'.indexOf(e.key.toLowerCase());
      if (k > -1 && !answered && elO.children[k]) elO.children[k].click();
      else if (e.key === 'Enter' && answered) btnNext.click();
    });
    render();
  }

  /* ============================================================
     der / die / das game
     ============================================================ */
  var gm = $('#artikel-game');
  if (gm) {
    var words = readJSON('noun-data');
    var ROUND = 10, queue = [], pos = 0, right = 0, streak = 0, best = parseInt(store.get('koocher-best') || '0', 10), lock = false;
    var elW = $('.w', gm), elFa = $('.fa', gm), btns = $$('.art-btns .opt', gm), elFb = $('.feedback', gm),
        elPr = $('.progress>i', gm), stBody = $('.game-body', gm), stRes = $('.result', gm), elNext = $('.next', gm);
    var upd = function () {
      $('.s-right', gm).textContent = right; $('.s-streak', gm).textContent = streak; $('.s-best', gm).textContent = best;
    };
    var start = function () {
      queue = shuffle(words).slice(0, ROUND); pos = 0; right = 0; streak = 0;
      stRes.hidden = true; stBody.hidden = false; show(); upd();
    };
    var show = function () {
      var w = queue[pos]; lock = false;
      elW.textContent = w.de; elFa.textContent = w.fa;
      elPr.style.width = (pos / ROUND * 100) + '%';
      btns.forEach(function (b) { b.disabled = false; b.className = 'opt'; });
      elFb.className = 'feedback'; elFb.textContent = ''; elNext.disabled = true;
      elNext.textContent = pos === ROUND - 1 ? 'مشاهده نتیجه' : 'کلمهٔ بعدی';
    };
    btns.forEach(function (b) {
      b.addEventListener('click', function () {
        if (lock) return; lock = true;
        var w = queue[pos], ok = b.dataset.art === w.art;
        btns.forEach(function (x) { x.disabled = true; if (x.dataset.art === w.art) x.classList.add('right'); });
        if (ok) { right++; streak++; if (streak > best) { best = streak; store.set('koocher-best', String(best)); } }
        else { b.classList.add('wrong'); streak = 0; }
        elFb.textContent = (ok ? '✓ آفرین! ' : '✗ ') + w.art + ' ' + w.de + ' — ' + w.tip;
        elFb.classList.add('show'); upd(); elNext.disabled = false; elNext.focus();
      });
    });
    elNext.addEventListener('click', function () {
      if (pos < ROUND - 1) { pos++; show(); }
      else {
        stBody.hidden = true; stRes.hidden = false; elPr.style.width = '100%';
        $('.final', stRes).textContent = right + ' از ' + ROUND;
        $('.final-msg', stRes).textContent = right >= 9 ? 'عالی! حس جنسیت اسم‌ها در شما بیدار شده است.' :
          right >= 6 ? 'خوب است! با چند دور تکرار، الگوها در ذهنتان جا می‌افتند.' :
          'اشکالی ندارد؛ جنسیت اسم‌ها با تکرار فاصله‌دار و الگوها یاد گرفته می‌شود. دوباره امتحان کنید.';
      }
    });
    $('.restart', gm).addEventListener('click', start);
    doc.addEventListener('keydown', function (e) {
      if (stBody.hidden) return;
      var m = { '1': 'der', '2': 'die', '3': 'das' }[e.key];
      if (m && !lock) { var t = btns.filter(function (b) { return b.dataset.art === m; })[0]; if (t) t.click(); }
      else if (e.key === 'Enter' && lock) elNext.click();
    });
    start();
  }
})();
