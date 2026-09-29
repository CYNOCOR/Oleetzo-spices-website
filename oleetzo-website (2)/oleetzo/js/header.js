/* =====================================================
   OLEETZO — Header / Navigation & Loader Injection
   Injects the loader overlay + nav bar + mobile menu.
   Reads data-page on <body> to highlight the active link.
   ===================================================== */
(function(){
  /* ---- Preloader Injection ---- */
  if(!document.getElementById('site-loader') && document.body){
    var loaderHTML =
      '<div id="site-loader" class="loader-overlay">' +
        '<div class="loader-content">' +
          '<div class="loader-emblem-wrap">' +
            '<div class="loader-glow-ring"></div>' +
            '<div class="loader-glow-ring ring-2"></div>' +
            '<img src="assets/images/logo-mark.png" alt="Oleetzo emblem" class="loader-logo-mark">' +
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
    { href: 'index.html',    label: 'Home',     key: 'home' },
    { href: 'products.html', label: 'Spices',   key: 'products' },
    { href: 'about.html',    label: 'Our Story',key: 'about' },
    { href: 'contact.html',  label: 'Contact',  key: 'contact' }
  ];

  function linkHTML(l, cls){
    var active = l.key === current ? ' active' : '';
    return '<a class="' + cls + active + '" href="' + l.href + '">' + l.label + '</a>';
  }

  var desktopLinks = links.map(function(l){ return linkHTML(l, ''); }).join('');
  var mobileLinks  = links.map(function(l){ return linkHTML(l, ''); }).join('');

  var html =
    '<nav class="nav" id="mainNav">' +
      '<a class="nav-brand" href="index.html">' +
        '<img src="assets/images/logo-mark.png" alt="Oleetzo emblem">' +
        '<span>OLEETZO</span>' +
      '</a>' +
      '<div class="nav-links">' + desktopLinks +
        '<a class="btn btn-gold nav-cta" href="contact.html">Enquire</a>' +
      '</div>' +
      '<button class="nav-toggle" id="navToggle" aria-label="Open menu">' +
        '<span></span><span></span><span></span>' +
      '</button>' +
    '</nav>' +
    '<div class="nav-mobile" id="navMobile">' +
      '<div class="nav-mobile-top">' +
        '<a class="nav-brand" href="index.html"><span>OLEETZO</span></a>' +
        '<button class="nav-mobile-close" id="navClose" aria-label="Close menu">&times;</button>' +
      '</div>' +
      '<div class="nav-mobile-links">' + mobileLinks + '</div>' +
    '</div>';

  var host = document.getElementById('site-header');
  if(host){ host.innerHTML = html; }

  var navEl = document.getElementById('mainNav');
  var toggle = document.getElementById('navToggle');
  var mobile = document.getElementById('navMobile');
  var close  = document.getElementById('navClose');

  function onScroll(){
    if(!navEl) return;
    if(window.scrollY > 24){ navEl.classList.add('is-scrolled'); }
    else { navEl.classList.remove('is-scrolled'); }
  }
  window.addEventListener('scroll', onScroll);
  onScroll();

  if(toggle){ toggle.addEventListener('click', function(){ mobile.classList.add('open'); }); }
  if(close){ close.addEventListener('click', function(){ mobile.classList.remove('open'); }); }
  if(mobile){
    mobile.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ mobile.classList.remove('open'); });
    });
  }
})();
