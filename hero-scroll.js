/* ═══════════════════════════════════════════════
   HERO SCROLL ANIMATION — GSAP ScrollTrigger
   4-scene cart recovery story driven by scroll
═══════════════════════════════════════════════ */
'use strict';

(function() {
  /* ── Guards ── */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  /* Use matchMedia so everything auto-cleans on resize to mobile */
  ScrollTrigger.matchMedia({
    '(min-width: 769px)': function() {
      var scrollWrap = document.getElementById('heroScroll');
      var hero = scrollWrap && scrollWrap.querySelector('.hero--animated');
      if (!scrollWrap || !hero) return;

      /* ── Element refs ── */
      var overlay    = document.getElementById('hsOverlay');
      var sceneCart  = document.getElementById('hsCart');
      var sceneRec   = document.getElementById('hsRecover');
      var sceneCheck = document.getElementById('hsCheckout');
      var sceneConf  = document.getElementById('hsConfirmed');

      if (!overlay || !sceneCart || !sceneRec || !sceneCheck || !sceneConf) return;

      var cartUI      = sceneCart.querySelector('.hs-cart-ui');
      var recLabel    = sceneRec.querySelector('.hs-recover-label');
      var waMsg       = sceneRec.querySelector('.hs-whatsapp-msg');
      var checkoutUI  = sceneCheck.querySelector('.hs-checkout-ui');
      var payBtn      = sceneCheck.querySelector('.hs-checkout-pay-btn');
      var processing  = sceneCheck.querySelector('.hs-checkout-processing');
      var confCard    = sceneConf.querySelector('.hs-confirmed-card');
      var checkPath   = sceneConf.querySelector('.hs-check-path');

      /* ── Initial states ── */
      gsap.set([sceneCart, sceneRec, sceneCheck, sceneConf], { opacity: 0 });
      gsap.set(cartUI, { scale: 0.88, y: 40, opacity: 0 });
      gsap.set(recLabel, { opacity: 0, y: 16 });
      gsap.set(waMsg, { x: 80, opacity: 0 });
      gsap.set(checkoutUI, { scale: 0.88, opacity: 0 });
      gsap.set(payBtn, { boxShadow: '0 0 0 rgba(14,165,233,0)' });
      gsap.set(processing, { opacity: 0 });
      gsap.set(confCard, { scale: 0.75, opacity: 0 });

      /* SVG checkmark — measure path length for draw animation */
      if (checkPath) {
        var pathLen = checkPath.getTotalLength();
        gsap.set(checkPath, { strokeDasharray: pathLen, strokeDashoffset: pathLen });
      }

      /* ── Master timeline ──
         Duration values are proportional: 0 to 1 maps to full scroll distance.
         scrub: 0.8 gives a smooth, slightly-lagged premium feel. */
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: scrollWrap,
          start: 'top top',
          end: 'bottom bottom',
          pin: hero,
          scrub: 0.8,
          anticipatePin: 1
        }
      });

      /* ────────────────────────────────────────────
         SCENE 1: Cart Abandonment  (0% – 30%)
         Cart UI zooms in, overlay fades, cart "closes"
      ──────────────────────────────────────────── */
      tl
        /* Show cart scene */
        .to(sceneCart, { opacity: 1, duration: 0.01 }, 0)
        /* Cart UI zooms in */
        .to(cartUI, { scale: 1, y: 0, opacity: 1, duration: 0.10, ease: 'power2.out' }, 0.02)
        /* Existing hero overlay fades out */
        .to(overlay, { opacity: 0, y: -40, duration: 0.10, ease: 'power2.in' }, 0.12)
        /* Cart "closes" — shrink + fade */
        .to(cartUI, { opacity: 0, scale: 0.92, y: -24, duration: 0.08, ease: 'power2.in' }, 0.22)
        .to(sceneCart, { opacity: 0, duration: 0.01 }, 0.29);

      /* ────────────────────────────────────────────
         SCENE 2: Recovery Triggered  (30% – 55%)
         Label appears, WhatsApp message slides in
      ──────────────────────────────────────────── */
      tl
        .to(sceneRec, { opacity: 1, duration: 0.01 }, 0.30)
        /* "Recovery workflow activated" label */
        .to(recLabel, { opacity: 1, y: 0, duration: 0.06, ease: 'power2.out' }, 0.30)
        /* WhatsApp message slides in from right */
        .to(waMsg, { x: 0, opacity: 1, duration: 0.12, ease: 'back.out(1.4)' }, 0.36)
        /* Hold for reading, then fade out */
        .to(recLabel, { opacity: 0, duration: 0.04 }, 0.48)
        .to(waMsg, { opacity: 0, x: -40, duration: 0.06, ease: 'power2.in' }, 0.50)
        .to(sceneRec, { opacity: 0, duration: 0.01 }, 0.54);

      /* ────────────────────────────────────────────
         SCENE 3: Checkout  (55% – 75%)
         Checkout form scales in, Pay Now glows, processing
      ──────────────────────────────────────────── */
      tl
        .to(sceneCheck, { opacity: 1, duration: 0.01 }, 0.55)
        .to(checkoutUI, { scale: 1, opacity: 1, duration: 0.08, ease: 'power2.out' }, 0.55)
        /* Pay Now button glow */
        .to(payBtn, { boxShadow: '0 0 24px rgba(14,165,233,0.5)', duration: 0.05 }, 0.63)
        /* Processing state — button fades, spinner shows */
        .to(payBtn, { opacity: 0, duration: 0.03 }, 0.68)
        .to(processing, { opacity: 1, duration: 0.03 }, 0.68)
        /* Checkout fades out */
        .to(checkoutUI, { opacity: 0, scale: 0.95, duration: 0.05 }, 0.72)
        .to(sceneCheck, { opacity: 0, duration: 0.01 }, 0.74);

      /* ────────────────────────────────────────────
         SCENE 4: Order Confirmed  (75% – 100%)
         Card scales up, checkmark draws, holds
      ──────────────────────────────────────────── */
      tl
        .to(sceneConf, { opacity: 1, duration: 0.01 }, 0.75)
        .to(confCard, { scale: 1, opacity: 1, duration: 0.12, ease: 'back.out(1.7)' }, 0.76);

      /* Draw the checkmark */
      if (checkPath) {
        tl.to(checkPath, { strokeDashoffset: 0, duration: 0.10, ease: 'power2.inOut' }, 0.80);
      }

      /* ── Pointer events toggle ──
         Disable hero CTA clicks once overlay has faded out,
         re-enable when scrolling back to top */
      ScrollTrigger.create({
        trigger: scrollWrap,
        start: 'top top',
        end: '20% top',
        onLeave: function() { if (overlay) overlay.style.pointerEvents = 'none'; },
        onEnterBack: function() { if (overlay) overlay.style.pointerEvents = ''; }
      });
    }
  });
})();
