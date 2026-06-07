/* =========================================================
   Nextstep AI — Analytics & CTA tracking
   Fires GA4 events for every CTA click + loads Microsoft Clarity
   ========================================================= */
(function () {
  'use strict';

  // ---- 1) Microsoft Clarity (session recordings + heatmaps) ----
  // Paste your Clarity project ID between the quotes below.
  // Get it free at: https://clarity.microsoft.com  (Create project → copy the ID from the install snippet)
  var CLARITY_ID = 'winx2i4eli';

  if (CLARITY_ID) {
    (function (c, l, a, r, i, t, y) {
      c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
      t = l.createElement(r); t.async = 1;
      t.src = 'https://www.clarity.ms/tag/' + i;
      y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
    })(window, document, 'clarity', 'script', CLARITY_ID);
  }

  // ---- 2) GA4 CTA click tracking ----
  function send(eventName, params) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }
  }

  function classify(el) {
    var href = (el.getAttribute('href') || '').toLowerCase();
    var text = (el.innerText || el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 60);

    if (href.indexOf('calendly.com') !== -1) return { label: 'book_a_call', dest: 'calendly' };
    if (href.indexOf('qualify.html') !== -1) return { label: 'qualify_form', dest: 'qualify' };
    if (href.indexOf('instagram.com') !== -1) return { label: 'instagram', dest: 'instagram' };
    if (href.indexOf('book.html') !== -1) return { label: 'book_page', dest: 'book' };
    if (href.indexOf('contact.html') !== -1) return { label: 'contact', dest: 'contact' };
    if (href.indexOf('pricing.html') !== -1) return { label: 'nav_pricing', dest: 'pricing' };
    if (href.indexOf('services.html') !== -1) return { label: 'nav_services', dest: 'services' };
    if (href.indexOf('results.html') !== -1) return { label: 'nav_results', dest: 'results' };
    if (href.indexOf('case-study') !== -1) return { label: 'case_study', dest: 'case_study' };
    if (href.indexOf('how-it-works') !== -1) return { label: 'how_it_works', dest: 'how_it_works' };
    if (href.indexOf('tel:') === 0) return { label: 'phone_click', dest: 'phone' };
    if (href.indexOf('mailto:') === 0) return { label: 'email_click', dest: 'email' };
    return null;
  }

  document.addEventListener('click', function (e) {
    var el = e.target.closest('a, button');
    if (!el) return;

    var info = classify(el);
    if (!info) return;

    var label = (el.innerText || el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 60);
    var isButton = el.classList.contains('btn') || el.tagName === 'BUTTON';

    send('cta_click', {
      cta_name: info.label,
      cta_destination: info.dest,
      cta_text: label,
      cta_is_button: isButton,
      page_path: window.location.pathname
    });
  }, { passive: true });

  // ---- 3) Scroll depth (25 / 50 / 75 / 100%) ----
  var fired = {};
  function onScroll() {
    var h = document.documentElement;
    var scrolled = (h.scrollTop + window.innerHeight) / h.scrollHeight * 100;
    [25, 50, 75, 100].forEach(function (mark) {
      if (scrolled >= mark && !fired[mark]) {
        fired[mark] = true;
        send('scroll_depth', { percent: mark, page_path: window.location.pathname });
      }
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
})();
