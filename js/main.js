/* =====================================================
   OLEETZO - Site Interactivity, Animations & Performance
   Logo Preloader controller, IntersectionObserver Scroll Reveals,
   Hero crossfade slideshow, product category filter,
   and contact form handling.
   ===================================================== */
document.addEventListener('DOMContentLoaded', function () {

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

  /* ---- 4. Hero slideshow ---- */
  var slides = document.querySelectorAll('.hero-slide');
  if (slides.length) {
    var i = 0;
    setInterval(function () {
      slides[i].classList.remove('is-active');
      i = (i + 1) % slides.length;
      slides[i].classList.add('is-active');
    }, 6000);
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
});
