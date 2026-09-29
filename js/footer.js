/* =====================================================
   OLEETZO — Footer
   Injects the shared mobile-optimized footer into #site-footer.
   Supports collapsible accordions on mobile screens.
   ===================================================== */
(function(){
  var year = new Date().getFullYear();

  var html =
  '<div class="wrap footer-top">' +
    '<div class="footer-col footer-col-brand">' +
      '<div class="footer-brand">' +
        '<img src="assets/images/logo-mark.png" alt="Oleetzo emblem" style="height:34px;">' +
        '<span>OLEETZO</span>' +
      '</div>' +
      '<p class="footer-brand-desc">Single-origin spices grown, hand-harvested and sun-dried across the hill country of Sri Lanka — sealed fresh for kitchens around the world.</p>' +
      '<div class="footer-social">' +
        '<a href="#" aria-label="Instagram">' + icon('insta') + '</a>' +
        '<a href="#" aria-label="Facebook">' + icon('fb') + '</a>' +
        '<a href="#" aria-label="WhatsApp">' + icon('wa') + '</a>' +
      '</div>' +
    '</div>' +
    '<div class="footer-col footer-accordion">' +
      '<h4 class="footer-accordion-header"><span>EXPLORE</span><span class="acc-icon" aria-hidden="true">+</span></h4>' +
      '<ul class="footer-accordion-content">' +
        '<li><a href="index.html">Home</a></li>' +
        '<li><a href="products.html">Our Spices</a></li>' +
        '<li><a href="about.html">Our Story</a></li>' +
        '<li><a href="contact.html">Contact</a></li>' +
      '</ul>' +
    '</div>' +
    '<div class="footer-col footer-accordion">' +
      '<h4 class="footer-accordion-header"><span>CATEGORIES</span><span class="acc-icon" aria-hidden="true">+</span></h4>' +
      '<ul class="footer-accordion-content">' +
        '<li><a href="products.html#whole">Whole Spices</a></li>' +
        '<li><a href="products.html#ground">Ground Spices</a></li>' +
        '<li><a href="products.html#blends">Signature Blends</a></li>' +
        '<li><a href="products.html">Gifting Sets</a></li>' +
      '</ul>' +
    '</div>' +
    '<div class="footer-col footer-newsletter">' +
      '<h4>STAY SEASONED</h4>' +
      '<p class="footer-newsletter-desc">Recipes, harvest notes and new arrivals — occasionally, never a flood.</p>' +
      '<form id="footerNewsletter">' +
        '<input type="email" placeholder="Your email address" required aria-label="Your email address">' +
        '<button type="submit" aria-label="Subscribe to newsletter">Join &rarr;</button>' +
      '</form>' +
      '<p class="newsletter-note" id="newsletterNote">Thank you — you are on the list.</p>' +
    '</div>' +
  '</div>' +
  '<div class="wrap footer-bottom">' +
    '<span>&copy; ' + year + ' Oleetzo. All rights reserved.</span>' +
    '<span>Crafted with care in Sri Lanka.</span>' +
  '</div>';

  function icon(name){
    var paths = {
      insta:'<path d="M8 2h8a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6Zm0 2a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4H8Zm4 3.2A4.8 4.8 0 1 1 7.2 12 4.8 4.8 0 0 1 12 7.2Zm0 2A2.8 2.8 0 1 0 14.8 12 2.8 2.8 0 0 0 12 9.2ZM17.6 6a1.1 1.1 0 1 1-1.1 1.1A1.1 1.1 0 0 1 17.6 6Z"/>',
      fb:'<path d="M13.5 21v-7.6h2.6l.4-3H13.5V8.4c0-.86.24-1.45 1.48-1.45h1.58V4.28C16.3 4.2 15.3 4.1 14.15 4.1c-2.4 0-4.05 1.47-4.05 4.16v2.14H7.5v3h2.6V21Z"/>',
      wa:'<path d="M12.04 3a8.9 8.9 0 0 0-7.6 13.6L3 21l4.5-1.4A8.9 8.9 0 1 0 12.04 3Zm0 1.9a7 7 0 0 1 6 10.6l-.24.4.7 2.5-2.55-.66-.4.24a7 7 0 1 1-3.5-13.08Zm-2.9 3.6c-.2 0-.5 0-.7.3s-.85.8-.85 1.9.85 2.2 1 2.4a7.9 7.9 0 0 0 3.2 2.9c1.5.6 1.8.5 2.15.5.5-.05 1.4-.55 1.6-1.1.2-.55.2-1 .15-1.1s-.2-.15-.4-.25-1.4-.7-1.6-.75-.35-.1-.5.1-.6.75-.7.9-.25.15-.45.05a6.5 6.5 0 0 1-1.9-1.2 7 7 0 0 1-1.3-1.6c-.15-.25 0-.35.1-.45s.2-.25.3-.4.15-.25.2-.4.05-.3 0-.4-.6-1.45-.85-2Z"/>'
    };
    return '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="color:#f8f2e7">' + paths[name] + '</svg>';
  }

  var host = document.getElementById('site-footer');
  if(host){ host.innerHTML = html; }

  /* Mobile Accordion Toggle Event Handlers */
  var accordionHeaders = document.querySelectorAll('.footer-accordion-header');
  accordionHeaders.forEach(function(header){
    header.addEventListener('click', function(){
      if(window.innerWidth <= 640){
        var col = header.parentElement;
        var isOpen = col.classList.contains('active');
        // Close all other accordions for a accordion feel
        document.querySelectorAll('.footer-accordion').forEach(function(item){
          item.classList.remove('active');
        });
        if(!isOpen){
          col.classList.add('active');
        }
      }
    });
  });

  var form = document.getElementById('footerNewsletter');
  var note = document.getElementById('newsletterNote');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      note.classList.add('show');
      form.reset();
    });
  }
})();

