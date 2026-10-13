/* =====================================================
   OLEETZO - Header / Navigation & Loader Injection
   Injects the loader overlay + nav bar + mobile menu.
   Reads data-page on <body> to highlight the active link.
   Mobile-optimized with accessibility, escape key & safe areas.
   ===================================================== */
(function () {
  /* ---- Preloader Injection ---- */
  if (!document.getElementById('site-loader') && document.body) {
    var loaderHTML =
      '<div id="site-loader" class="loader-overlay" role="status" aria-live="polite" aria-label="Loading Oleetzo">' +
      '<div class="loader-content">' +
      '<div class="loader-emblem-wrap">' +
      '<div class="loader-glow-ring"></div>' +
      '<div class="loader-glow-ring ring-2"></div>' +
      '<img src="assets/images/logo-mark.png" alt="Oleetzo emblem" class="loader-logo-mark" width="82" height="82">' +
      '</div>' +
      '<div class="loader-title">OLEETZO</div>' +
      '<div class="loader-sub">Single-Origin Ceylon Spices</div>' +
      '<div class="loader-progress-bar"><div class="loader-progress-fill"></div></div>' +
      '</div>' +
      '</div>';
    document.body.insertAdjacentHTML('afterbegin', loaderHTML);
  }

  var current = document.body.getAttribute('data-page') || 'home';

  var links = [
    { href: 'index.html', label: 'Home', key: 'home' },
    { href: 'products.html', label: 'Spices', key: 'products' },
    { href: 'about.html', label: 'Our Story', key: 'about' },
    { href: 'contact.html', label: 'Contact', key: 'contact' }
  ];

  function linkHTML(l, cls) {
    var active = l.key === current ? ' active' : '';
    var ariaCurrent = l.key === current ? ' aria-current="page"' : '';
    return '<a class="' + cls + active + '" href="' + l.href + '"' + ariaCurrent + '>' + l.label + '</a>';
  }

  var desktopLinks = links.map(function (l) { return linkHTML(l, ''); }).join('');
  var mobileLinks = links.map(function (l) { return linkHTML(l, ''); }).join('');

  var html =
    '<nav class="nav" id="mainNav" aria-label="Main Navigation">' +
    '<a class="nav-brand" href="index.html" aria-label="Oleetzo Home">' +
    '<img src="assets/images/logo-mark.png" alt="Oleetzo emblem" width="40" height="40">' +
    '<span>OLEETZO</span>' +
    '</a>' +
    '<div class="nav-links">' + desktopLinks +
    '<a class="btn btn-gold nav-cta" href="contact.html">Enquire</a>' +
    '</div>' +
    '<button class="nav-toggle" id="navToggle" aria-label="Open navigation menu" aria-expanded="false" aria-controls="navMobile">' +
    '<span></span><span></span><span></span>' +
    '</button>' +
    '</nav>' +
    '<div class="nav-mobile" id="navMobile" aria-hidden="true" role="dialog" aria-modal="true" aria-label="Mobile Navigation Menu">' +
    '<div class="nav-mobile-top">' +
    '<a class="nav-brand" href="index.html" aria-label="Oleetzo Home">' +
    '<img src="assets/images/logo-mark.png" alt="Oleetzo emblem" style="height:32px; width:auto;" width="32" height="32">' +
    '<span>OLEETZO</span>' +
    '</a>' +
    '<button class="nav-mobile-close" id="navClose" aria-label="Close navigation menu">&times;</button>' +
    '</div>' +
    '<div class="nav-mobile-links">' + mobileLinks + '</div>' +
    '<div class="nav-mobile-footer">' +
    '<a class="btn btn-gold nav-mobile-cta" href="contact.html">Enquire &amp; Order</a>' +
    '<div class="nav-mobile-social">' +
    '<a href="#" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 2h8a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6Zm0 2a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4H8Zm4 3.2A4.8 4.8 0 1 1 7.2 12 4.8 4.8 0 0 1 12 7.2Zm0 2A2.8 2.8 0 1 0 14.8 12 2.8 2.8 0 0 0 12 9.2ZM17.6 6a1.1 1.1 0 1 1-1.1 1.1A1.1 1.1 0 0 1 17.6 6Z"/></svg></a>' +
    '<a href="#" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7.6h2.6l.4-3H13.5V8.4c0-.86.24-1.45 1.48-1.45h1.58V4.28C16.3 4.2 15.3 4.1 14.15 4.1c-2.4 0-4.05 1.47-4.05 4.16v2.14H7.5v3h2.6V21Z"/></svg></a>' +
    '<a href="#" aria-label="WhatsApp"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 3a8.9 8.9 0 0 0-7.6 13.6L3 21l4.5-1.4A8.9 8.9 0 1 0 12.04 3Zm0 1.9a7 7 0 0 1 6 10.6l-.24.4.7 2.5-2.55-.66-.4.24a7 7 0 1 1-3.5-13.08Zm-2.9 3.6c-.2 0-.5 0-.7.3s-.85.8-.85 1.9.85 2.2 1 2.4a7.9 7.9 0 0 0 3.2 2.9c1.5.6 1.8.5 2.15.5.5-.05 1.4-.55 1.6-1.1.2-.55.2-1 .15-1.1s-.2-.15-.4-.25-1.4-.7-1.6-.75-.35-.1-.5.1-.6.75-.7.9-.25.15-.45.05a6.5 6.5 0 0 1-1.9-1.2 7 7 0 0 1-1.3-1.6c-.15-.25 0-.35.1-.45s.2-.25.3-.4.15-.25.2-.4.05-.3 0-.4-.6-1.45-.85-2Z"/></svg></a>' +
    '</div>' +
    '</div>' +
    '</div>';

  var host = document.getElementById('site-header');
  if (host) { host.innerHTML = html; }

  var navEl = document.getElementById('mainNav');
  var toggle = document.getElementById('navToggle');
  var mobile = document.getElementById('navMobile');
  var close = document.getElementById('navClose');

  var ticking = false;
  function onScroll() {
    if (!navEl) return;
    if (!ticking) {
      window.requestAnimationFrame(function () {
        if (window.scrollY > 20) {
          navEl.classList.add('is-scrolled');
        } else {
          navEl.classList.remove('is-scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  function openMenu() {
    if (!mobile) return;
    mobile.classList.add('open');
    mobile.setAttribute('aria-hidden', 'false');
    if (toggle) toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    if (!mobile) return;
    mobile.classList.remove('open');
    mobile.setAttribute('aria-hidden', 'true');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      if (mobile.classList.contains('open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  if (close) {
    close.addEventListener('click', closeMenu);
  }

  // Close when pressing Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobile && mobile.classList.contains('open')) {
      closeMenu();
      if (toggle) toggle.focus();
    }
  });

  // Close on link click
  if (mobile) {
    mobile.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
  }
})();
