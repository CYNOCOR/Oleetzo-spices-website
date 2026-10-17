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
      '<div class="loader-ambient-glow"></div>' +
      '<div class="loader-glow-ring"></div>' +
      '<div class="loader-glow-ring ring-2"></div>' +
      '<div class="loader-glow-ring ring-3"></div>' +
      '<img src="assets/images/logo-mark.png" alt="Oleetzo emblem" class="loader-logo-mark" width="90" height="90">' +
      '</div>' +
      '<div class="loader-title">OLEETZO</div>' +
      '<div class="loader-sub">Single-Origin Ceylon Spices</div>' +
      '<div class="loader-tagline">Pure &bull; Sun-Dried &bull; Authentic</div>' +
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
    '<a href="https://www.instagram.com/oleetzo.official/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 2h8a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6Zm0 2a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4H8Zm4 3.2A4.8 4.8 0 1 1 7.2 12 4.8 4.8 0 0 1 12 7.2Zm0 2A2.8 2.8 0 1 0 14.8 12 2.8 2.8 0 0 0 12 9.2ZM17.6 6a1.1 1.1 0 1 1-1.1 1.1A1.1 1.1 0 0 1 17.6 6Z"/></svg></a>' +
    '<a href="https://www.facebook.com/profile.php?id=61595077504256" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7.6h2.6l.4-3H13.5V8.4c0-.86.24-1.45 1.48-1.45h1.58V4.28C16.3 4.2 15.3 4.1 14.15 4.1c-2.4 0-4.05 1.47-4.05 4.16v2.14H7.5v3h2.6V21Z"/></svg></a>' +
    '<a href="https://wa.me/94701137377" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"/></svg></a>' +
    '<a href="mailto:oleetzo@gmail.com" aria-label="Email Oleetzo on Gmail"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 3.25L12 12.25 4 7.25V6l8 5 8-5v1.25Z"/></svg></a>' +
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
    if (current === 'product-detail') {
      navEl.classList.add('is-scrolled', 'always-visible');
      return;
    }
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

  /* ---- Floating WhatsApp Widget ---- */
  if (!document.getElementById('floatingWhatsApp') && document.body) {
    var waBtn = document.createElement('a');
    waBtn.id = 'floatingWhatsApp';
    waBtn.className = 'floating-wa-btn';
    waBtn.href = 'https://wa.me/94701137377';
    waBtn.target = '_blank';
    waBtn.rel = 'noopener noreferrer';
    waBtn.setAttribute('aria-label', 'Chat with Oleetzo on WhatsApp (+94 70 113 7377)');
    waBtn.setAttribute('title', 'Chat on WhatsApp: +94 70 113 7377');
    waBtn.innerHTML =
      '<svg width="30" height="30" viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true">' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"/>' +
      '</svg>';
    document.body.appendChild(waBtn);
  }
})();
