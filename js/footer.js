/* =====================================================
   OLEETZO - Footer
   Injects the shared mobile-optimized luxury footer into #site-footer.
   Mobile-optimized with responsive accordions, unified pill form,
   accessible ARIA attributes, and safe area insets.
   ===================================================== */
(function () {
  var year = new Date().getFullYear();

  var html =
    '<div class="footer-spice-pattern" aria-hidden="true"></div>' +
    '<div class="wrap footer-wrap">' +
    '<div class="footer-top">' +

    '<!-- Brand column -->' +
    '<div class="footer-col footer-col-brand">' +
    '<a href="index.html" class="footer-brand" aria-label="Oleetzo Home">' +
    '<img src="assets/images/logo-mark.png" alt="Oleetzo emblem" width="36" height="36">' +
    '<span>OLEETZO</span>' +
    '</a>' +
    '<p class="footer-brand-desc">Single-origin spices grown, hand-harvested and sun-dried across the hill country of Sri Lanka - sealed fresh for kitchens around the world.</p>' +
    '<div class="footer-social" aria-label="Oleetzo Social Media">' +
    '<a href="https://www.instagram.com/oleetzo.official/" target="_blank" rel="noopener noreferrer" aria-label="Follow Oleetzo on Instagram">' + icon('insta') + '</a>' +
    '<a href="https://www.facebook.com/profile.php?id=61595077504256" target="_blank" rel="noopener noreferrer" aria-label="Follow Oleetzo on Facebook">' + icon('fb') + '</a>' +
    '<a href="https://wa.me/94701137377" target="_blank" rel="noopener noreferrer" aria-label="Chat with Oleetzo on WhatsApp">' + icon('wa') + '</a>' +
    '<a href="mailto:oleetzo@gmail.com" aria-label="Email Oleetzo on Gmail">' + icon('gmail') + '</a>' +
    '</div>' +
    '<div class="footer-contacts">' +
    '<a href="mailto:oleetzo@gmail.com">' + icon('mail', 15, 'var(--gold-400)') + ' oleetzo@gmail.com</a>' +
    '<a href="tel:+94701137377" aria-label="Call Oleetzo at +94 70 113 7377">' + icon('phone', 15, 'var(--gold-400)') + ' +94 70 113 7377</a>' +
    '</div>' +
    '</div>' +

    '<!-- Navigation links group (Accordions on mobile, normal lists on desktop) -->' +
    '<div class="footer-nav-group">' +
    '<div class="footer-col footer-accordion" id="footerAccExplore">' +
    '<button type="button" class="footer-accordion-header" aria-expanded="false" aria-controls="footerContentExplore">' +
    '<span>EXPLORE</span>' +
    '<span class="acc-icon" aria-hidden="true">+</span>' +
    '</button>' +
    '<ul class="footer-accordion-content" id="footerContentExplore">' +
    '<li><a href="index.html">Home</a></li>' +
    '<li><a href="products.html">Our Spices</a></li>' +
    '<li><a href="about.html">Our Story</a></li>' +
    '<li><a href="contact.html">Contact</a></li>' +
    '</ul>' +
    '</div>' +

    '<div class="footer-col footer-accordion" id="footerAccCategories">' +
    '<button type="button" class="footer-accordion-header" aria-expanded="false" aria-controls="footerContentCategories">' +
    '<span>CATEGORIES</span>' +
    '<span class="acc-icon" aria-hidden="true">+</span>' +
    '</button>' +
    '<ul class="footer-accordion-content" id="footerContentCategories">' +
    '<li><a href="products.html?filter=curry">Curry Powders</a></li>' +
    '<li><a href="products.html?filter=chilli">Chilli &amp; Flakes</a></li>' +
    '<li><a href="products.html?filter=pepper">Highland Black Pepper</a></li>' +
    '<li><a href="products.html">1 kg Master Collection</a></li>' +
    '</ul>' +
    '</div>' +
    '</div>' +
    '</div>' +

    '<!-- Footer bottom copyright -->' +
    '<div class="footer-bottom">' +
    '<span>&copy; ' + year + ' Oleetzo. All rights reserved.</span>' +
    '<span>Crafted with care in Sri Lanka.</span>' +
    '</div>' +
    '</div>';

  function icon(name, size, color) {
    var sz = size || 18;
    var clr = color || '#f8f2e7';
    var paths = {
      insta: '<path d="M8 2h8a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6Zm0 2a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4H8Zm4 3.2A4.8 4.8 0 1 1 7.2 12 4.8 4.8 0 0 1 12 7.2Zm0 2A2.8 2.8 0 1 0 14.8 12 2.8 2.8 0 0 0 12 9.2ZM17.6 6a1.1 1.1 0 1 1-1.1 1.1A1.1 1.1 0 0 1 17.6 6Z"/>',
      fb: '<path d="M13.5 21v-7.6h2.6l.4-3H13.5V8.4c0-.86.24-1.45 1.48-1.45h1.58V4.28C16.3 4.2 15.3 4.1 14.15 4.1c-2.4 0-4.05 1.47-4.05 4.16v2.14H7.5v3h2.6V21Z"/>',
      wa: '<path fill-rule="evenodd" clip-rule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"/>',
      gmail: '<path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 3.25L12 12.25 4 7.25V6l8 5 8-5v1.25Z"/>',
      mail: '<path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 3.25L12 12.25 4 7.25V6l8 5 8-5v1.25Z"/>',
      phone: '<path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z"/>'
    };
    return '<svg width="' + sz + '" height="' + sz + '" viewBox="0 0 24 24" fill="currentColor" style="color:' + clr + ';flex-shrink:0;" aria-hidden="true">' + paths[name] + '</svg>';
  }

  var host = document.getElementById('site-footer');
  if (host) { host.innerHTML = html; }

  /* Mobile Accordion Toggle Event Handlers */
  var accordionHeaders = document.querySelectorAll('.footer-accordion-header');
  function toggleAccordion(btn) {
    if (window.innerWidth <= 768) {
      var col = btn.closest('.footer-accordion');
      if (!col) return;
      var isOpen = col.classList.contains('active');

      if (isOpen) {
        col.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
      } else {
        col.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
      }
    }
  }

  accordionHeaders.forEach(function (header) {
    header.addEventListener('click', function () {
      toggleAccordion(header);
    });
  });

  })();
