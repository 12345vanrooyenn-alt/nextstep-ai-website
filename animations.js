/* Nextstep AI — Premium Scroll Animations
   Parallax, cinematic reveals, scroll-driven storytelling */
'use strict';

(function() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  /* ─── GRADIENT SHIMMER — subtle headline effect ─── */
  var shimmerCSS = '@keyframes gradient-shift{0%{background-position:0% center}50%{background-position:100% center}100%{background-position:0% center}}.headline-gradient{background-size:200% auto !important;animation:gradient-shift 6s ease infinite}';
  var style = document.createElement('style');
  style.textContent = shimmerCSS;
  document.head.appendChild(style);

  /* ─── PARALLAX — subtle depth on scroll ─── */
  var parallaxEls = document.querySelectorAll('[data-parallax]');
  var heroOrbs = document.querySelectorAll('.hero-gradient-orb');
  var heroSection = document.querySelector('.hero');
  var ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function() {
      var scrollY = window.scrollY;
      var winH = window.innerHeight;

      /* Hero parallax — orbs drift slower than scroll */
      if (heroSection && scrollY < winH * 1.5) {
        heroOrbs.forEach(function(orb) {
          orb.style.transform = 'translateY(' + (scrollY * 0.15) + 'px)';
        });
      }

      /* Generic parallax elements */
      parallaxEls.forEach(function(el) {
        var rect = el.getBoundingClientRect();
        if (rect.top > winH || rect.bottom < 0) return;
        var speed = parseFloat(el.dataset.parallax) || 0.1;
        var offset = (rect.top - winH / 2) * speed;
        el.style.transform = 'translateY(' + offset + 'px)';
      });

      ticking = false;
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  /* ─── COUNTER ANIMATION — animate numbers on scroll ─── */
  var counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    var counterObs = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        counterObs.unobserve(el);
        var target = parseInt(el.dataset.count, 10);
        var prefix = el.dataset.countPrefix || '';
        var suffix = el.dataset.countSuffix || '';
        var duration = 1800;
        var start = performance.now();

        function step(now) {
          var progress = Math.min((now - start) / duration, 1);
          /* ease-out cubic */
          var eased = 1 - Math.pow(1 - progress, 3);
          var current = Math.round(target * eased);
          el.textContent = prefix + current.toLocaleString() + suffix;
          if (progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    }, { threshold: 0.5 });
    counters.forEach(function(el) { counterObs.observe(el); });
  }

  /* ─── STAGGERED CARD REVEALS — enhanced entrance ─── */
  var cardGroups = document.querySelectorAll('.services-grid, .problem-grid, .steps-grid, .why-grid, .testimonials-row, .pricing-grid');
  cardGroups.forEach(function(group) {
    var cards = group.children;
    var groupObs = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (!entry.isIntersecting) return;
        groupObs.unobserve(entry.target);
        Array.prototype.forEach.call(cards, function(card, i) {
          setTimeout(function() {
            card.classList.add('revealed');
          }, i * 120);
        });
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
    groupObs.observe(group);
  });

  /* ─── WORKFLOW CINEMATIC SEQUENCE ─── */
  /* When the Live System section scrolls into view, play a cinematic
     zoom-in on the workflow video, then pop in story cards one by one */
  var workflowWrap = document.querySelector('.workflow-video-wrap');
  var liveSection = document.querySelector('.live-section');

  if (workflowWrap && liveSection) {
    /* Only animate if the section is below the fold */
    var liveRect = liveSection.getBoundingClientRect();
    var shouldAnimate = liveRect.top > window.innerHeight;

    if (shouldAnimate) {
      workflowWrap.style.opacity = '0';
      workflowWrap.style.transform = 'scale(0.92) translateY(30px)';
      workflowWrap.style.transition = 'opacity 1s cubic-bezier(0.22, 1, 0.36, 1), transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)';
    }

    var workflowRevealed = !shouldAnimate;

    var workflowObs = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting && !workflowRevealed) {
          workflowRevealed = true;
          workflowObs.disconnect();

          /* Phase 1 — zoom in the video player */
          workflowWrap.style.opacity = '1';
          workflowWrap.style.transform = 'scale(1) translateY(0)';

          /* Phase 2 — after video settles, add a glow pulse */
          setTimeout(function() {
            workflowWrap.classList.add('workflow-glow-active');
          }, 800);

          /* Phase 3 — trigger the story cards + notification overlays */
          var storyCards = workflowWrap.querySelectorAll('.workflow-story-card');
          storyCards.forEach(function(card) {
            card.style.animationPlayState = 'running';
          });

          var notifs = workflowWrap.querySelectorAll('.workflow-notif');
          notifs.forEach(function(notif) {
            notif.style.animationPlayState = 'running';
          });
        }
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -80px 0px' });
    workflowObs.observe(liveSection);

    /* Pause story + notification animations until triggered */
    var allAnimated = workflowWrap.querySelectorAll('.workflow-story-card, .workflow-notif');
    allAnimated.forEach(function(el) {
      el.style.animationPlayState = 'paused';
    });
  }

  /* ─── SECTION HEADER REVEALS — slide up with blur ─── */
  var sectionHeaders = document.querySelectorAll('.section-header');
  sectionHeaders.forEach(function(header) {
    /* Only hide headers that are below the fold — don't hide visible content */
    var rect = header.getBoundingClientRect();
    if (rect.top > window.innerHeight) {
      header.classList.add('section-header-animate');
      var headerObs = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-header-revealed');
            headerObs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -20px 0px' });
      headerObs.observe(header);
    }
  });

  /* ─── GLOW TRAIL — mouse-follow glow on dark sections ─── */
  var glowSections = document.querySelectorAll('.live-section, .why-section, .proof-section');
  glowSections.forEach(function(section) {
    var glow = document.createElement('div');
    glow.className = 'mouse-glow';
    section.style.position = section.style.position || 'relative';
    section.appendChild(glow);

    section.addEventListener('mousemove', function(e) {
      var rect = section.getBoundingClientRect();
      glow.style.left = (e.clientX - rect.left) + 'px';
      glow.style.top = (e.clientY - rect.top) + 'px';
      glow.style.opacity = '1';
    });

    section.addEventListener('mouseleave', function() {
      glow.style.opacity = '0';
    });
  });

  /* ─── PROOF METRICS — count up on scroll ─── */
  var proofNums = document.querySelectorAll('.proof-metric-num');
  if (proofNums.length) {
    var proofObs = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (!entry.isIntersecting) return;
        proofObs.unobserve(entry.target);
        var el = entry.target;
        var text = el.textContent.trim();

        /* Parse the number — handle $8,433 and +592% and 227 */
        var prefix = '';
        var suffix = '';
        if (text.charAt(0) === '$' || text.charAt(0) === '+') prefix = text.charAt(0);
        if (text.charAt(text.length - 1) === '%') suffix = '%';
        var numStr = text.replace(/[^0-9]/g, '');
        var target = parseInt(numStr, 10);
        if (isNaN(target) || target === 0) return;

        var duration = 2000;
        var start = performance.now();

        function step(now) {
          var progress = Math.min((now - start) / duration, 1);
          var eased = 1 - Math.pow(1 - progress, 3);
          var current = Math.round(target * eased);
          el.textContent = prefix + current.toLocaleString() + suffix;
          if (progress < 1) requestAnimationFrame(step);
        }

        el.textContent = prefix + '0' + suffix;
        requestAnimationFrame(step);
      });
    }, { threshold: 0.5 });
    proofNums.forEach(function(el) { proofObs.observe(el); });
  }

  /* ─── STEP CONNECTOR ANIMATION — draw line between steps ─── */
  var connectors = document.querySelectorAll('.step-connector');
  connectors.forEach(function(conn) {
    conn.classList.add('step-connector-animate');
    var connObs = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('step-connector-drawn');
          connObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    connObs.observe(conn);
  });

})();
