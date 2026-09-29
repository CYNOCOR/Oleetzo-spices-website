/* =====================================================
   OLEETZO — Site interactivity & animations
   Logo Preloader controller, IntersectionObserver Scroll Reveals,
   Hero crossfade slideshow, product category filter,
   and contact form handling.
   ===================================================== */
document.addEventListener('DOMContentLoaded', function(){

  /* ---- 1. Logo Preloader Animation Controller ---- */
  var loader = document.getElementById('site-loader');
  function hideLoader(){
    if(!loader) return;
    loader.classList.add('is-loaded');
    document.body.classList.add('loaded');
    setTimeout(function(){
      if(loader && loader.parentNode){
        loader.style.display = 'none';
      }
    }, 900);
  }

  // Smooth timer to ensure preloader animation displays elegantly on page load
  var minLoaderTime = 1300; // 1.3s for breathtaking logo bloom
  var loadStartTime = Date.now();

  window.addEventListener('load', function(){
    var elapsed = Date.now() - loadStartTime;
    var remaining = Math.max(0, minLoaderTime - elapsed);
    setTimeout(hideLoader, remaining);
  });

  // Fallback in case window load fires very early or is delayed
  setTimeout(hideLoader, 2400);

  /* ---- 2. Scroll Reveal Animations ---- */
  // Automatically tag grid items and sections with reveal classes
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

  // Grouped containers for stagger effect
  var gridContainers = document.querySelectorAll('.pillars, .spice-grid, .product-grid, .quote-row, .craft, .values-grid, .region-strip');
  gridContainers.forEach(function(container){
    var children = container.children;
    for(var idx = 0; idx < children.length; idx++){
      var item = children[idx];
      item.classList.add('reveal');
      item.classList.add('stagger-' + ((idx % 5) + 1));
    }
  });

  // Tag remaining elements
  document.querySelectorAll(revealSelectors.join(',')).forEach(function(el){
    if(!el.classList.contains('reveal')){
      el.classList.add('reveal');
    }
  });

  // IntersectionObserver for scroll triggers
  if('IntersectionObserver' in window){
    var observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.reveal').forEach(function(el){
      observer.observe(el);
    });
  } else {
    // Fallback for older browsers
    document.querySelectorAll('.reveal').forEach(function(el){
      el.classList.add('revealed');
    });
  }

  /* ---- 3. Graceful fallback for hotlinked spice photography ---- */
  document.querySelectorAll('img.ext-img').forEach(function(img){
    img.addEventListener('error', function(){
      if(img.dataset.fallenBack) return;
      img.dataset.fallenBack = '1';
      img.src = 'assets/images/logo-mark.png';
      img.classList.add('fallback');
    });
  });

  /* ---- 4. Hero slideshow ---- */
  var slides = document.querySelectorAll('.hero-slide');
  if(slides.length){
    var i = 0;
    setInterval(function(){
      slides[i].classList.remove('is-active');
      i = (i + 1) % slides.length;
      slides[i].classList.add('is-active');
    }, 6000);
  }

  /* ---- 5. Product filter (products.html) ---- */
  var filterBtns = document.querySelectorAll('.filter-btn');
  var cards = document.querySelectorAll('.product-card');
  if(filterBtns.length){
    filterBtns.forEach(function(btn){
      btn.addEventListener('click', function(){
        filterBtns.forEach(function(b){ b.classList.remove('active'); });
        btn.classList.add('active');
        var cat = btn.getAttribute('data-filter');
        cards.forEach(function(card){
          var show = (cat === 'all') || card.getAttribute('data-category') === cat;
          if(show){
            card.style.display = '';
            setTimeout(function(){ card.classList.add('revealed'); }, 50);
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  /* ---- 6. Contact form confirmation & auto-fill ---- */
  var form = document.getElementById('contactForm');
  var subjectField = document.getElementById('subject');
  if(subjectField){
    var queryParams = new URLSearchParams(window.location.search);
    var spiceParam = queryParams.get('spice');
    if(spiceParam){
      subjectField.value = 'Enquiry regarding ' + spiceParam;
    }
  }

  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var note = document.getElementById('contactNote');
      note.textContent = 'Thank you — your message has been noted. We will reply within one business day.';
      note.classList.add('show');
      form.reset();
    });
  }

  /* ---- 7. Mobile nav body-scroll lock ---- */
  var navMobile = document.getElementById('navMobile');
  if(navMobile){
    var obs = new MutationObserver(function(){
      document.body.style.overflow = navMobile.classList.contains('open') ? 'hidden' : '';
    });
    obs.observe(navMobile, { attributes:true, attributeFilter:['class'] });
  }
});
