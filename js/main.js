/* =====================================================
   OLEETZO - Site Interactivity, Animations & Performance
   Logo Preloader controller, IntersectionObserver Scroll Reveals,
   Hero crossfade slideshow, product category filter,
   and contact form handling.
   ===================================================== */
function initOleetzo() {

  /* ---- 1. Logo Preloader Animation Controller (Exact 3.0s Presentation) ---- */
  var loader = document.getElementById('site-loader');
  var TARGET_DURATION = 3000; // 3 seconds presentation
  var loaderHidden = false;

  function hideLoader() {
    if (loaderHidden) return;
    loaderHidden = true;
    if (!loader) {
      document.body.classList.add('loaded');
      return;
    }

    loader.classList.add('is-loaded');
    document.body.classList.add('loaded');

    setTimeout(function () {
      if (loader && loader.parentNode) {
        loader.style.display = 'none';
      }
    }, 850);
  }

  if (loader) {
    setTimeout(hideLoader, TARGET_DURATION);
  } else {
    document.body.classList.add('loaded');
  }

  // Safety fallback timer at 3.3s
  setTimeout(hideLoader, 3300);

  /* ---- 2. Scroll Reveal Animations (Performance Optimized) ---- */
  var revealSelectors = [
    '.section-head',
    '.pillar',
    '.spice-card',
    '.product-card',
    '.quote-card',
    '.craft-step',
    '.value-card',
    '.split-media',
    '.split-body',
    '.cta-banner',
    '.info-card',
    '.map-frame',
    '.region'
  ];

  var gridContainers = document.querySelectorAll('.pillars, .spice-grid, .product-grid, .products-collection-grid, .quote-row, .craft, .values-grid, .region-strip');
  gridContainers.forEach(function (container) {
    var children = container.children;
    for (var idx = 0; idx < children.length; idx++) {
      var item = children[idx];
      item.classList.add('reveal');
      item.classList.add('stagger-' + ((idx % 5) + 1));
    }
  });

  document.querySelectorAll(revealSelectors.join(',')).forEach(function (el) {
    if (!el.classList.contains('reveal')) {
      el.classList.add('reveal');
    }
  });

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -30px 0px'
    });

    document.querySelectorAll('.reveal').forEach(function (el) {
      observer.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('revealed');
    });
  }

  /* ---- 3. Graceful fallback for photography ---- */
  document.querySelectorAll('img.ext-img').forEach(function (img) {
    img.addEventListener('error', function () {
      if (img.dataset.fallenBack) return;
      img.dataset.fallenBack = '1';
      img.src = 'assets/images/logo-mark.png';
      img.classList.add('fallback');
    });
  });

  /* ---- 4. Hero slideshow (Smooth Luxury Crossfade & Interactive Dots) ---- */
  var slides = document.querySelectorAll('.hero-slide');
  var heroContainer = document.querySelector('.hero');
  var indicatorContainer = document.querySelector('.hero-indicators');

  if (slides.length) {
    var currentIdx = 0;
    var slideTimer = null;
    var ROTATION_TIME = 4500; // 4.5 seconds per slide

    // Generate indicator dots if container exists and is empty
    if (indicatorContainer && indicatorContainer.children.length === 0) {
      slides.forEach(function (_, idx) {
        var dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'hero-dot' + (idx === 0 ? ' is-active' : '');
        dot.setAttribute('role', 'tab');
        dot.setAttribute('aria-selected', idx === 0 ? 'true' : 'false');
        dot.setAttribute('aria-label', 'Show slide ' + (idx + 1));
        dot.setAttribute('data-slide', idx);
        indicatorContainer.appendChild(dot);
      });
    }

    var dots = document.querySelectorAll('.hero-dot');

    function updateDots(activeIdx) {
      if (!dots.length) return;
      dots.forEach(function (dot, idx) {
        var isActive = idx === activeIdx;
        dot.classList.toggle('is-active', isActive);
        dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });
    }

    function goToSlide(nextIdx) {
      if (nextIdx === currentIdx) return;
      var prevIdx = currentIdx;
      currentIdx = (nextIdx + slides.length) % slides.length;

      slides.forEach(function (s) {
        s.classList.remove('is-prev');
      });

      slides[prevIdx].classList.remove('is-active');
      slides[prevIdx].classList.add('is-prev');

      slides[currentIdx].classList.remove('is-prev');
      slides[currentIdx].classList.add('is-active');

      updateDots(currentIdx);

      setTimeout(function () {
        if (slides[prevIdx]) {
          slides[prevIdx].classList.remove('is-prev');
        }
      }, 1600);
    }

    function nextSlide() {
      goToSlide(currentIdx + 1);
    }

    function startAutoSlide() {
      stopAutoSlide();
      slideTimer = setInterval(nextSlide, ROTATION_TIME);
    }

    function stopAutoSlide() {
      if (slideTimer) {
        clearInterval(slideTimer);
        slideTimer = null;
      }
    }

    // Attach click listeners to dots
    if (dots.length) {
      dots.forEach(function (dot, idx) {
        dot.addEventListener('click', function () {
          goToSlide(idx);
          startAutoSlide(); // Reset timer on manual click
        });
      });
    }

    // Start rotation immediately
    startAutoSlide();

    // Pause on hover over hero content so user can read smoothly if desired
    if (heroContainer) {
      heroContainer.addEventListener('mouseenter', stopAutoSlide);
      heroContainer.addEventListener('mouseleave', startAutoSlide);
    }
  }

  /* ---- 5. Product filter (products.html) ---- */
  var filterBtns = document.querySelectorAll('.filter-btn');
  var cards = document.querySelectorAll('.product-card');
  if (filterBtns.length) {
    function applyFilter(cat) {
      filterBtns.forEach(function (b) {
        if (b.getAttribute('data-filter') === cat) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });
      cards.forEach(function (card) {
        var show = (cat === 'all') || card.getAttribute('data-category') === cat;
        if (show) {
          card.style.display = '';
          setTimeout(function () { card.classList.add('revealed'); }, 40);
        } else {
          card.style.display = 'none';
        }
      });
    }

    var searchParams = new URLSearchParams(window.location.search);
    var urlFilter = searchParams.get('filter');
    if (urlFilter) {
      applyFilter(urlFilter);
    }

    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyFilter(btn.getAttribute('data-filter'));
      });
    });
  }

  /* ---- 6. Contact form confirmation & auto-fill ---- */
  var form = document.getElementById('contactForm');
  var subjectField = document.getElementById('subject');
  if (subjectField) {
    var queryParams = new URLSearchParams(window.location.search);
    var spiceParam = queryParams.get('spice');
    if (spiceParam) {
      subjectField.value = 'Enquiry regarding ' + spiceParam;
    }
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('name') ? document.getElementById('name').value.trim() : '';
      var userEmail = document.getElementById('email') ? document.getElementById('email').value.trim() : '';
      var subjectVal = document.getElementById('subject') ? document.getElementById('subject').value.trim() : 'Oleetzo Spice Order / Enquiry';
      var messageVal = document.getElementById('message') ? document.getElementById('message').value.trim() : '';

      var mailSubject = encodeURIComponent(subjectVal || 'Oleetzo Spice Enquiry');
      var mailBody = encodeURIComponent(
        'Name: ' + name + '\n' +
        'Sender Email: ' + userEmail + '\n\n' +
        'Message:\n' + messageVal + '\n\n' +
        '---\nSent via Oleetzo Spices Website'
      );

      var mailtoLink = 'mailto:oleetzo@gmail.com?subject=' + mailSubject + '&body=' + mailBody;

      var note = document.getElementById('contactNote');
      if (note) {
        note.textContent = 'Opening your email to send to oleetzo@gmail.com... Thank you!';
        note.classList.add('show');
      }

      // Trigger user's mail client (Gmail / default mail app)
      window.location.href = mailtoLink;
    });
  }

  /* ---- 7. Ambient Falling Spices Shower (Uda idan pahalata lassanata watena widihata) ---- */
  var fallingOverlay = document.getElementById('fallingSpicesOverlay');
  if (fallingOverlay) {
    var spiceTypes = [
      { id: 'falling-anise', baseSize: 28, maxVar: 8 },
      { id: 'falling-chilli', baseSize: 26, maxVar: 8 },
      { id: 'falling-cardamom', baseSize: 22, maxVar: 6 },
      { id: 'falling-cinnamon', baseSize: 24, maxVar: 6 },
      { id: 'falling-clove', baseSize: 20, maxVar: 5 },
      { id: 'falling-pepper', baseSize: 20, maxVar: 6 },
      { id: 'falling-fleck', baseSize: 14, maxVar: 6 }
    ];

    var isMobile = window.innerWidth <= 768;
    var particleCount = isMobile ? 14 : 26;
    fallingOverlay.innerHTML = '';

    for (var i = 0; i < particleCount; i++) {
      var spice = spiceTypes[i % spiceTypes.length];
      var size = spice.baseSize + Math.floor(Math.random() * spice.maxVar);

      // Distribute evenly horizontally with subtle natural jitter
      var baseLeft = (i / particleCount) * 94 + 3;
      var leftJitter = (Math.random() * 8) - 4;
      var leftPos = Math.max(2, Math.min(96, baseLeft + leftJitter));

      // Varied falling speeds: between 12s and 20s
      var duration = 12 + Math.random() * 8;
      // Staggered negative delays so particles are ALREADY falling everywhere at different heights
      var delay = -((Math.random() * duration)).toFixed(2);

      // Random 3D swaying amounts (eha meha wena widiha)
      var sway1 = Math.round(18 + Math.random() * 24);
      var sway2 = -Math.round(18 + Math.random() * 24);
      var sway3 = Math.round(12 + Math.random() * 20);
      var sway4 = -Math.round(10 + Math.random() * 18);

      // Rotations
      var rot1 = Math.round(60 + Math.random() * 45);
      var rot2 = Math.round(150 + Math.random() * 45);
      var rot3 = Math.round(240 + Math.random() * 45);
      var rot4 = 360;
      var baseRot = Math.round(Math.random() * 360);

      var opacity = (0.50 + Math.random() * 0.28).toFixed(2);

      var particle = document.createElement('div');
      particle.className = 'falling-spice-particle' + (i >= 14 ? ' hide-on-mobile' : '');
      particle.style.left = leftPos.toFixed(1) + 'vw';
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      particle.style.setProperty('--fall-duration', duration.toFixed(1) + 's');
      particle.style.setProperty('--fall-delay', delay + 's');
      particle.style.setProperty('--target-opacity', opacity);
      particle.style.setProperty('--sway-1', sway1 + 'px');
      particle.style.setProperty('--sway-2', sway2 + 'px');
      particle.style.setProperty('--sway-3', sway3 + 'px');
      particle.style.setProperty('--sway-4', sway4 + 'px');
      particle.style.setProperty('--rot-1', rot1 + 'deg');
      particle.style.setProperty('--rot-2', rot2 + 'deg');
      particle.style.setProperty('--rot-3', rot3 + 'deg');
      particle.style.setProperty('--rot-4', rot4 + 'deg');
      particle.style.setProperty('--base-rot', baseRot + 'deg');

      particle.innerHTML = '<svg viewBox="0 0 50 50"><use href="#' + spice.id + '"/></svg>';
      fallingOverlay.appendChild(particle);
    }

    // Gentle cursor wind effect: particles sway subtly when mouse moves across screen
    if (window.matchMedia('(pointer: fine)').matches) {
      var mouseWindX = 0;
      var currentWindX = 0;
      window.addEventListener('mousemove', function (e) {
        mouseWindX = (e.clientX / window.innerWidth - 0.5) * 45;
      }, { passive: true });

      function tickWind() {
        currentWindX += (mouseWindX - currentWindX) * 0.05;
        fallingOverlay.style.transform = 'translateX(' + currentWindX.toFixed(1) + 'px)';
        requestAnimationFrame(tickWind);
      }
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initOleetzo);
} else {
  initOleetzo();
}


