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
    '<a href="mailto:oleetzo@gmail.com"><span style="color:var(--gold-400);">&bull;</span> oleetzo@gmail.com</a>' +
    '<a href="https://wa.me/94701137377" target="_blank" rel="noopener noreferrer"><span style="color:#25d366;">&bull;</span> +94 70 113 7377</a>' +
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

    '<!-- Newsletter column -->' +
    '<div class="footer-col footer-newsletter">' +
    '<div class="footer-newsletter-card">' +
    '<h4>STAY SEASONED</h4>' +
    '<p class="footer-newsletter-desc">Recipes, harvest notes and new arrivals - occasionally, never a flood.</p>' +
    '<form id="footerNewsletter" class="footer-form" aria-label="Subscribe to newsletter">' +
    '<input type="email" placeholder="Your email address" required aria-label="Your email address" autocomplete="email">' +
    '<button type="submit" aria-label="Subscribe to newsletter">' +
    '<span>Join</span>' +
    '</button>' +
    '</form>' +
    '<p class="newsletter-note" id="newsletterNote" role="status" aria-live="polite">Thank you - you are on the list.</p>' +
    '</div>' +
    '</div>' +

    '</div>' +

    '<!-- Footer bottom copyright -->' +
    '<div class="footer-bottom">' +
    '<span>&copy; ' + year + ' Oleetzo. All rights reserved.</span>' +
    '<span>Crafted with care in Sri Lanka.</span>' +
    '</div>' +
    '</div>';

  function icon(name) {
    var paths = {
      insta: '<path d="M8 2h8a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6Zm0 2a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4H8Zm4 3.2A4.8 4.8 0 1 1 7.2 12 4.8 4.8 0 0 1 12 7.2Zm0 2A2.8 2.8 0 1 0 14.8 12 2.8 2.8 0 0 0 12 9.2ZM17.6 6a1.1 1.1 0 1 1-1.1 1.1A1.1 1.1 0 0 1 17.6 6Z"/>',
      fb: '<path d="M13.5 21v-7.6h2.6l.4-3H13.5V8.4c0-.86.24-1.45 1.48-1.45h1.58V4.28C16.3 4.2 15.3 4.1 14.15 4.1c-2.4 0-4.05 1.47-4.05 4.16v2.14H7.5v3h2.6V21Z"/>',
      wa: '<path d="M12.04 3a8.9 8.9 0 0 0-7.6 13.6L3 21l4.5-1.4A8.9 8.9 0 1 0 12.04 3Zm0 1.9a7 7 0 0 1 6 10.6l-.24.4.7 2.5-2.55-.66-.4.24a7 7 0 1 1-3.5-13.08Zm-2.9 3.6c-.2 0-.5 0-.7.3s-.85.8-.85 1.9.85 2.2 1 2.4a7.9 7.9 0 0 0 3.2 2.9c1.5.6 1.8.5 2.15.5.5-.05 1.4-.55 1.6-1.1.2-.55.2-1 .15-1.1s-.2-.15-.4-.25-1.4-.7-1.6-.75-.35-.1-.5.1-.6.75-.7.9-.25.15-.45.05a6.5 6.5 0 0 1-1.9-1.2 7 7 0 0 1-1.3-1.6c-.15-.25 0-.35.1-.45s.2-.25.3-.4.15-.25.2-.4.05-.3 0-.4-.6-1.45-.85-2Z"/>',
      gmail: '<path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 3.25L12 12.25 4 7.25V6l8 5 8-5v1.25Z"/>'
    };
    return '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="color:#f8f2e7" aria-hidden="true">' + paths[name] + '</svg>';
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

  var form = document.getElementById('footerNewsletter');
  var note = document.getElementById('newsletterNote');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (note) {
        note.classList.add('show');
      }
      form.reset();
    });
  }
})();
