/**
 * FLOSSWORK™ — MAIN INTERACTIONS
 * Navbar scroll · Before/After sliders · FAQ accordion
 * Scroll reveal · Active nav · Smooth anchor scroll
 */

(function () {
  'use strict';

  /* ── Navbar scroll state ────────────────────────────────── */
  const navbar = document.getElementById('navbar');
  function handleScroll() {
    if (!navbar) return;
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* ── Hero image load animation ─────────────────────────── */
  const hero = document.querySelector('.hero');
  if (hero) {
    const img = hero.querySelector('.hero__img');
    if (img) {
      if (img.complete) {
        hero.classList.add('loaded');
      } else {
        img.addEventListener('load', () => hero.classList.add('loaded'));
      }
    } else {
      hero.classList.add('loaded');
    }
  }

  /* ── Smooth anchor scroll ───────────────────────────────── */
  document.addEventListener('click', function (e) {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    const offset = (navbar ? navbar.offsetHeight : 72) + 16;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });

  /* ── Active nav link on scroll ─────────────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.navbar__link');

  if (sections.length && navLinks.length) {
    const sectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach(link => {
              const href = link.getAttribute('href') || '';
              link.style.color = href.includes('#' + id) ? 'var(--clr-primary)' : '';
            });
          }
        });
      },
      { threshold: .35 }
    );
    sections.forEach(s => sectionObserver.observe(s));
  }

  /* ── Scroll reveal ──────────────────────────────────────── */
  const revealSelectors = [
    '.usp-card', '.service-card', '.product-card',
    '.doctor-card', '.review-card', '.partner-card',
    '.pricing-card', '.step-card', '.equipment-card',
    '.contact-card', '.ba-card', '.timeline-item',
    '.benefit-pill', '.hours-card', '.faq-item',
    '.section-header', '.about-story__p',
  ].join(', ');

  const revealEls = document.querySelectorAll(revealSelectors);

  revealEls.forEach((el, i) => {
    el.classList.add('reveal');
    const siblings = Array.from(el.parentElement.children).filter(c => c.classList.contains('reveal'));
    const idx = siblings.indexOf(el);
    if (idx > 0 && idx <= 5) el.classList.add(`reveal-delay-${idx}`);
  });

  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: .1, rootMargin: '0px 0px -40px 0px' }
  );
  revealEls.forEach(el => revealObserver.observe(el));

  /* ── Trust bar ticker duplication ──────────────────────── */
  const track = document.querySelector('.trust-bar__track');
  if (track) {
    track.innerHTML += track.innerHTML; // duplicate for seamless loop
  }

  /* ── Before/After sliders ───────────────────────────────── */
  function initSlider(container) {
    const after  = container.querySelector('.ba-after');
    const handle = container.querySelector('.ba-handle');
    if (!after || !handle) return;

    let dragging = false;
    let startPct = 50;

    function setPosition(clientX) {
      const rect = container.getBoundingClientRect();
      let pct = ((clientX - rect.left) / rect.width) * 100;
      pct = Math.max(4, Math.min(96, pct));
      after.style.width  = pct + '%';
      handle.style.left  = pct + '%';
      handle.setAttribute('aria-valuenow', Math.round(pct));

      /* Show/hide after tag based on position */
      const afterTag = container.querySelector('.ba-tag--after');
      if (afterTag) afterTag.style.opacity = pct > 20 ? '1' : '0';
    }

    /* Set initial 50/50 */
    setPosition(container.getBoundingClientRect().left + container.offsetWidth * .5);

    /* Mouse */
    handle.addEventListener('mousedown', e => { dragging = true; e.preventDefault(); });
    window.addEventListener('mousemove', e => { if (dragging) setPosition(e.clientX); });
    window.addEventListener('mouseup',   ()  => { dragging = false; });

    /* Touch */
    handle.addEventListener('touchstart', () => { dragging = true; }, { passive: true });
    window.addEventListener('touchmove',  e  => {
      if (dragging) setPosition(e.touches[0].clientX);
    }, { passive: true });
    window.addEventListener('touchend',   ()  => { dragging = false; });

    /* Keyboard */
    handle.setAttribute('tabindex', '0');
    handle.setAttribute('role', 'slider');
    handle.addEventListener('keydown', e => {
      const rect = container.getBoundingClientRect();
      const cur  = parseFloat(after.style.width) || 50;
      if (e.key === 'ArrowLeft')  { setPosition(rect.left + Math.max(4,  cur - 5) / 100 * rect.width); e.preventDefault(); }
      if (e.key === 'ArrowRight') { setPosition(rect.left + Math.min(96, cur + 5) / 100 * rect.width); e.preventDefault(); }
    });
  }

  /* Expose so page scripts can call after rendering gallery HTML */
  window.FLOSS = window.FLOSS || {};
  window.FLOSS.initSlider = initSlider;

  /* ── FAQ Accordion ──────────────────────────────────────── */
  document.addEventListener('click', function (e) {
    const trigger = e.target.closest('.faq-item__trigger');
    if (!trigger) return;

    const item   = trigger.closest('.faq-item');
    const isOpen = item.classList.contains('open');

    /* Close all */
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));

    /* Toggle current */
    if (!isOpen) item.classList.add('open');
  });

  /* ── Pricing tab switcher (brand plans) ─────────────────── */
  document.addEventListener('click', function (e) {
    const tab = e.target.closest('.pricing-tab');
    if (!tab) return;
    const group = tab.closest('.pricing-tabs');
    if (!group) return;
    group.querySelectorAll('.pricing-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const target = tab.dataset.target;
    const parent = tab.closest('.pricing__brand-plans');
    if (parent) {
      parent.querySelectorAll('.brand-plan').forEach(p => {
        p.style.display = p.dataset.brand === target ? 'block' : 'none';
      });
    }
  });

  /* ── Lazy image loading placeholder swap ────────────────── */
  document.querySelectorAll('img[data-src]').forEach(img => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    }, { rootMargin: '200px' });
    observer.observe(img);
  });

  /* ── Doctors: show only active on homepage ──────────────── */
  /* (handled in page-specific inline script, not here) */

  /* ── Reduce motion support ──────────────────────────────── */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in-view'));
    const ticker = document.querySelector('.trust-bar__track');
    if (ticker) ticker.style.animationPlayState = 'paused';
  }

})();
