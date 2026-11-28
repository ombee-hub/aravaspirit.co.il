/* =========================================================
   עמותת רוח ערבה — סקריפט משותף
   תפריט, פוטר, גלריה, אנימציות וטפסים.
   כדי לשנות את התפריט — ערכו את NAV למטה.
   ========================================================= */
(function () {
  'use strict';

  var SITE = {
    name: 'עמותת רוח ערבה',
    email: 'office@aravaspirit.org.il',
    address: 'מושב חצבה 8681500',
    facebook: 'https://www.facebook.com/ARAVASPIRIT',
    donate: 'https://www.jgive.com/new/he/ils/external/charity-organizations/1879'
  };

  var NAV = [
    { label: 'עלינו', children: [
      { label: 'מי אנחנו', href: 'about.html' },
      { label: 'הצוות', href: 'team.html' },
      { label: 'ועד מנהל', href: 'board.html' },
      { label: 'שותפים לדרך', href: 'partners.html' },
      { label: 'כותבים עלינו', href: 'press.html' },
      { label: 'תכני העמותה', href: 'content.html' }
    ]},
    { label: 'מכינות ערבה', children: [
      { label: 'על המכינות', href: 'mechinot.html', icon: 'logo.svg' },
      { label: 'מכינת חצבה', href: 'hatzeva.html', icon: 'card-hatzeva.webp' },
      { label: 'מכינת עין יהב', href: 'ein-yahav.html', icon: 'card-ein-yahav.webp' },
      { label: 'מכינת פארן', href: 'paran.html', icon: 'card-paran.webp' },
      { label: 'מכינת צופר', href: 'tzofar.html', icon: 'card-tzofar.webp' },
      { label: 'מכינת ״ניר בערבה״', href: 'nir-baarava.html', icon: 'nir-logo.webp' }
    ]},
    { label: 'תכניות', children: [
      { label: 'עבודה עברית', href: 'avoda-ivrit.html', icon: 'card-avoda.webp' },
      { label: 'חוות בין השיטין', href: 'farm.html', icon: 'card-farm.webp' },
      { label: 'מדרשת הערבה', href: 'midrasha.html', icon: 'card-midrasha.webp' },
      { label: 'שנת שירות', href: 'service-year.html', icon: 'logo.svg' },
      { label: 'התיישבות בערבה', href: 'settlement.html', icon: 'card-settlement.webp' },
      { label: 'בוגרים', href: 'alumni.html', icon: 'card-alumni.webp' }
    ]},
    { label: 'דרושים', href: 'jobs.html' },
    { label: 'יצירת קשר', href: 'contact.html' }
  ];

  var ICONS = {
    chev: '<svg class="chev" viewBox="0 0 10 10" aria-hidden="true"><path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    fb: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.5 1.6-1.5h1.7V4.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.4H7.7V14h2.7v8h3.1z"/></svg>',
    ig: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 7.3A4.7 4.7 0 1 0 12 16.7 4.7 4.7 0 0 0 12 7.3zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm6-7.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0zM21.9 8.2c-.1-1.6-.4-3-1.6-4.2S17.6 2.4 16 2.3C14.3 2.2 9.7 2.2 8 2.3c-1.6.1-3 .4-4.2 1.6S2.4 6.6 2.3 8.2C2.2 9.9 2.2 14.5 2.3 16.2c.1 1.6.4 3 1.6 4.2s2.6 1.5 4.2 1.6c1.7.1 6.3.1 8 0 1.6-.1 3-.4 4.2-1.6s1.5-2.6 1.6-4.2c.1-1.7.1-6.3 0-8zm-2.1 9.8a3.2 3.2 0 0 1-1.8 1.8c-1.3.5-4.3.4-5.7.4s-4.4.1-5.7-.4A3.2 3.2 0 0 1 4.8 18c-.5-1.3-.4-4.3-.4-5.7s-.1-4.4.4-5.7A3.2 3.2 0 0 1 6.6 4.8c1.3-.5 4.3-.4 5.7-.4s4.4-.1 5.7.4a3.2 3.2 0 0 1 1.8 1.8c.5 1.3.4 4.3.4 5.7s.1 4.4-.4 5.7z"/></svg>',
    yt: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.7 15V9l5.8 3-5.8 3z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>'
  };
  window.SITE_ICONS = ICONS;

  var current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();

  function navItem(item, i) {
    if (item.children) {
      var active = item.children.some(function (c) { return c.href === current; });
      return '<li class="has-sub">' +
        '<button class="nav-toggle-sub" aria-expanded="false" aria-controls="sub-' + i + '"' + (active ? ' data-active' : '') + '>' + item.label + ICONS.chev + '</button>' +
        '<ul class="sub" id="sub-' + i + '">' + item.children.map(function (c) {
          var ic = c.icon ? '<span class="sub-ic"><img src="images/' + c.icon + '" alt="" loading="lazy"></span>' : '';
          return '<li><a href="' + c.href + '"' + (c.icon ? ' class="has-ic"' : '') + (c.href === current ? ' aria-current="page"' : '') + '>' + ic + c.label + '</a></li>';
        }).join('') + '</ul></li>';
    }
    return '<li><a href="' + item.href + '"' + (item.href === current ? ' aria-current="page"' : '') + '>' + item.label + '</a></li>';
  }

  // תפריט צד לנייד — לפי האתר של אגרוסופט: מגירה לבנה מימין, לוגו + סגירה,
  // קטגוריות נפתחות (לתכניות יש אייקון של הלוגו), וכפתור יצירת קשר בסוף
  var PLANE = '<svg class="mob-plane" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';

  function mobLink(c) {
    var cur = c.href === current ? ' aria-current="page"' : '';
    if (!c.icon) return '<a href="' + c.href + '"' + cur + '>' + c.label + '</a>';
    return '<a class="mob-prod" href="' + c.href + '"' + cur + '><span class="mob-prod-ic"><img src="images/' + c.icon + '" alt="" loading="lazy"></span><span class="mob-prod-txt">' + c.label + '</span></a>';
  }

  function renderDrawer(menuBtn) {
    var overlay = document.createElement('div');
    overlay.className = 'mob-overlay';
    var menu = document.createElement('div');
    menu.className = 'mob-menu'; menu.id = 'mob-menu';
    menu.setAttribute('role', 'dialog'); menu.setAttribute('aria-modal', 'true'); menu.setAttribute('aria-label', 'תפריט ראשי');
    menu.innerHTML =
      '<div class="mob-head">' +
        '<a class="mob-brand" href="index.html" aria-label="דף הבית"><img src="images/logo.svg" alt="" width="34" height="37"><strong>רוח ערבה</strong></a>' +
        '<button class="mob-close-btn" type="button" aria-label="סגירת התפריט">✕</button>' +
      '</div>' +
      '<nav class="mob-nav" aria-label="ניווט ראשי">' +
        NAV.filter(function (it) { return it.href !== 'contact.html'; }).map(function (it, i) {
          if (!it.children) return mobLink(it);
          var open = it.children.some(function (c) { return c.href === current; });
          return '<button class="mob-sep-toggle' + (open ? ' open' : '') + '" type="button" aria-expanded="' + open + '" aria-controls="mob-group-' + i + '">' + it.label + '<span class="mob-sep-arrow" aria-hidden="true">▾</span></button>' +
            '<div class="mob-products' + (open ? ' open' : '') + '" id="mob-group-' + i + '">' + it.children.map(mobLink).join('') + '</div>';
        }).join('') +
        '<a class="mob-cta" href="contact.html">יצירת קשר' + PLANE + '</a>' +
        '<a class="mob-donate" href="' + SITE.donate + '" target="_blank" rel="noopener">תרמו לנו ♥</a>' +
      '</nav>';
    document.body.appendChild(overlay);
    document.body.appendChild(menu);

    var closeBtn = menu.querySelector('.mob-close-btn');
    function open() {
      menu.classList.add('open'); overlay.classList.add('open'); menuBtn.classList.add('open');
      document.body.classList.add('nav-open'); menuBtn.setAttribute('aria-expanded', 'true');
      setTimeout(function () { closeBtn.focus(); }, 50);
    }
    function close() {
      if (!menu.classList.contains('open')) return;
      menu.classList.remove('open'); overlay.classList.remove('open'); menuBtn.classList.remove('open');
      document.body.classList.remove('nav-open'); menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.focus();
    }
    menuBtn.addEventListener('click', function () { menu.classList.contains('open') ? close() : open(); });
    closeBtn.addEventListener('click', close);
    overlay.addEventListener('click', close);
    menu.querySelectorAll('.mob-sep-toggle').forEach(function (t) {
      t.addEventListener('click', function () {
        var o = t.classList.toggle('open');
        t.setAttribute('aria-expanded', o);
        t.nextElementSibling.classList.toggle('open', o);
      });
    });
    document.addEventListener('keydown', function (e) {
      if (!menu.classList.contains('open')) return;
      if (e.key === 'Escape') { close(); return; }
      if (e.key !== 'Tab') return;
      var f = Array.prototype.filter.call(menu.querySelectorAll('a,button'), function (x) { return x.offsetParent !== null; });
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    });
    window.addEventListener('resize', function () { if (window.innerWidth > 1080) close(); });
  }

  function renderHeader() {
    var el = document.getElementById('site-header');
    if (!el) return;
    el.className = 'site-header';
    el.innerHTML =
      '<div class="container header-inner">' +
        // בנייד: ההמבורגר בצד ההתחלה (ימין), לפני הלוגו
        '<button class="menu-btn" aria-label="תפריט" aria-expanded="false" aria-controls="mob-menu"><span></span></button>' +
        '<a class="brand" href="index.html" aria-label="' + SITE.name + ' — דף הבית">' +
          '<img src="images/logo.svg" alt="" width="42" height="46">' +
          '<span class="brand-text"><strong>רוח ערבה</strong><small>חינוך · התיישבות · ציונות</small></span>' +
        '</a>' +
        '<nav class="main-nav" id="main-nav" aria-label="ניווט ראשי"><ul>' + NAV.map(navItem).join('') + '</ul></nav>' +
        '<div class="header-actions">' +
          '<a class="btn btn-sunset" href="' + SITE.donate + '" target="_blank" rel="noopener">תרמו לנו ♥</a>' +
        '</div>' +
      '</div>';
    var menuBtn = el.querySelector('.menu-btn');
    renderDrawer(menuBtn);
    el.querySelectorAll('.nav-toggle-sub').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var li = btn.parentElement;
        var willOpen = !li.classList.contains('open');
        el.querySelectorAll('.has-sub.open').forEach(function (o) { o.classList.remove('open'); o.firstChild.setAttribute('aria-expanded', 'false'); });
        if (willOpen) { li.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); }
      });
    });
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.has-sub')) el.querySelectorAll('.has-sub.open').forEach(function (o) { o.classList.remove('open'); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { el.querySelectorAll('.has-sub.open').forEach(function (o) { o.classList.remove('open'); }); }
    });
    var onScroll = function () { el.classList.toggle('scrolled', window.scrollY > 10); };
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  }

  function renderFooter() {
    var el = document.getElementById('site-footer');
    if (!el) return;
    el.className = 'site-footer';
    var col = function (title, items) {
      return '<div><h4>' + title + '</h4><ul>' + items.map(function (c) { return '<li><a href="' + c.href + '">' + c.label + '</a></li>'; }).join('') + '</ul></div>';
    };
    el.innerHTML =
      '<div class="container">' +
        '<div class="footer-grid">' +
          '<div>' +
            '<div class="footer-brand"><img src="images/logo.svg" alt=""><strong>רוח ערבה</strong></div>' +
            '<p class="footer-about">מאז 2009 מפתחים ומפעילים תכניות חינוכיות-ציוניות לצעירים בערבה, לחיזוק ההתיישבות והחברה הישראלית.</p>' +
            '<div class="socials">' +
              '<a href="' + SITE.facebook + '" target="_blank" rel="noopener" aria-label="פייסבוק">' + ICONS.fb + '</a>' +
              '<a href="https://www.youtube.com/watch?v=HypbVawpdak" target="_blank" rel="noopener" aria-label="יוטיוב">' + ICONS.yt + '</a>' +
            '</div>' +
          '</div>' +
          col('עלינו', NAV[0].children) +
          col('התכניות שלנו', NAV[1].children.slice(0, 1).concat(NAV[2].children.slice(0, 4))) +
          '<div><h4>יצירת קשר</h4><ul>' +
            '<li>' + SITE.address + '</li>' +
            '<li><a href="mailto:' + SITE.email + '">' + SITE.email + '</a></li>' +
            '<li><a href="contact.html">טופס פנייה</a></li>' +
            '<li><a href="jobs.html">דרושים</a></li>' +
            '<li><a href="' + SITE.donate + '" target="_blank" rel="noopener">תרומה לעמותה</a></li>' +
          '</ul></div>' +
        '</div>' +
        '<div class="footer-bottom">' +
          '<span>© ' + new Date().getFullYear() + ' כל הזכויות שמורות ל' + SITE.name + '</span>' +
          '<div class="footer-legal"><a href="accessibility.html">הצהרת נגישות</a><span class="footer-legal-sep" aria-hidden="true">|</span><a href="privacy.html">מדיניות פרטיות</a></div>' +
          '<a class="ombee-credit" href="https://ombee.co.il" target="_blank" rel="noopener"><span>עיצוב ובנייה ע"י</span><img class="ombee-logo" src="images/ombee-logo-white.webp" alt="OMBee" width="83" height="24"></a>' +
        '</div>' +
      '</div>';
  }

  // "קראו עוד" לביוגרפיות ארוכות
  function initBios() {
    document.querySelectorAll('.person .bio').forEach(function (bio) {
      if (bio.textContent.trim().length < 260) return;
      bio.classList.add('clamp');
      var btn = document.createElement('button');
      btn.className = 'more-btn'; btn.type = 'button'; btn.textContent = 'קראו עוד';
      btn.addEventListener('click', function () {
        var c = bio.classList.toggle('clamp');
        btn.textContent = c ? 'קראו עוד' : 'הצגת פחות';
      });
      bio.after(btn);
    });
  }

  // גלריית תמונות (Lightbox)
  function initLightbox() {
    var links = Array.prototype.slice.call(document.querySelectorAll('[data-lightbox] a'));
    if (!links.length) return;
    var box = document.createElement('div');
    box.className = 'lightbox'; box.setAttribute('role', 'dialog'); box.setAttribute('aria-modal', 'true');
    box.innerHTML = '<img alt=""><button class="lb-close" aria-label="סגירה">×</button><button class="lb-prev">הקודמת</button><button class="lb-next">הבאה</button>';
    document.body.appendChild(box);
    var img = box.querySelector('img'), idx = 0, group = [];
    function show(i) { idx = (i + group.length) % group.length; img.src = group[idx].href; img.alt = (group[idx].querySelector('img') || {}).alt || ''; }
    links.forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        group = Array.prototype.slice.call(a.closest('[data-lightbox]').querySelectorAll('a'));
        show(group.indexOf(a)); box.classList.add('open'); box.querySelector('.lb-close').focus();
      });
    });
    function close() { box.classList.remove('open'); }
    box.querySelector('.lb-close').onclick = close;
    box.querySelector('.lb-prev').onclick = function () { show(idx - 1); };
    box.querySelector('.lb-next').onclick = function () { show(idx + 1); };
    box.addEventListener('click', function (e) { if (e.target === box) close(); });
    document.addEventListener('keydown', function (e) {
      if (!box.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') show(idx + 1);
      if (e.key === 'ArrowRight') show(idx - 1);
    });
  }

  // הופעה הדרגתית בגלילה
  function initReveal() {
    var els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('in'); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (e) { io.observe(e); });
  }

  // מונה מספרים
  function initCounters() {
    var els = document.querySelectorAll('[data-count]');
    if (!els.length || !('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target, to = +el.dataset.count, suffix = el.dataset.suffix || '', prefix = el.dataset.prefix || '', t0 = null;
        io.unobserve(el);
        function step(t) {
          if (!t0) t0 = t;
          var p = Math.min((t - t0) / 1400, 1), v = Math.round(to * (1 - Math.pow(1 - p, 3)));
          el.textContent = prefix + v + suffix;
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    }, { threshold: .4 });
    els.forEach(function (e) { io.observe(e); });
  }

  // טפסים — כרגע נפתח בתוכנת הדואר. להחלפה בשירות טפסים (Formspree / Netlify / וכו') כשהאתר יעלה לאוויר.
  function initForms() {
    document.querySelectorAll('form[data-mailto]').forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!form.reportValidity()) return;
        var data = new FormData(form), lines = [];
        data.forEach(function (v, k) { if (k !== 'subject') lines.push(k + ': ' + v); });
        var subject = form.dataset.subject || 'פנייה מהאתר';
        location.href = 'mailto:' + form.dataset.mailto + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(lines.join('\n'));
        form.classList.add('sent');
      });
    });
  }

  // סינון כרטיסים (עמוד התיישבות)
  function initFilters() {
    document.querySelectorAll('[data-filter-bar]').forEach(function (bar) {
      var target = document.querySelector(bar.dataset.filterBar);
      bar.addEventListener('click', function (e) {
        var b = e.target.closest('button'); if (!b) return;
        bar.querySelectorAll('button').forEach(function (x) { x.classList.toggle('active', x === b); });
        var f = b.dataset.filter;
        target.querySelectorAll('[data-group]').forEach(function (c) { c.hidden = f !== 'all' && c.dataset.group !== f; });
      });
    });
  }

  // אייקונים בתוך העמודים: <span data-icon="mail"></span>
  function initIcons() {
    document.querySelectorAll('[data-icon]').forEach(function (el) {
      var svg = ICONS[el.dataset.icon];
      if (svg) el.outerHTML = svg.replace('<svg ', '<svg fill="currentColor" ').replace('fill="currentColor" viewBox="0 0 24 24" fill="none"', 'viewBox="0 0 24 24" fill="none"');
    });
  }

  renderHeader();
  renderFooter();
  initIcons();
  initBios();
  initLightbox();
  initReveal();
  initCounters();
  initForms();
  initFilters();
})();
