/**
 * FLOSSWORK™ — SHARED COMPONENTS
 * Navbar + Footer rendered on every page from CONTENT data
 * Edit text in content.js — never edit this file for content
 */

(function () {
  'use strict';

  /* ── helpers ────────────────────────────────────────────── */
  const C  = CONTENT;
  const CL = C.clinic;
  const DS = C.design;

  function waLink(msg) {
    return `https://wa.me/${CL.whatsapp}?text=${encodeURIComponent(C.whatsappMessages[msg] || C.whatsappMessages.general)}`;
  }

  /* Apply CSS variables from design system */
  function applyDesignTokens() {
    const root = document.documentElement;
    const col  = DS.colors;
    root.style.setProperty('--clr-primary',       col.primary);
    root.style.setProperty('--clr-primary-hover',  col.primaryHover);
    root.style.setProperty('--clr-primary-light',  col.primaryLight);
    root.style.setProperty('--clr-dark',           col.dark);
    root.style.setProperty('--clr-white',          col.white);
    root.style.setProperty('--clr-surface',        col.surface);
    root.style.setProperty('--clr-heading',        col.headingText);
    root.style.setProperty('--clr-body',           col.bodyText);
    root.style.setProperty('--clr-muted',          col.mutedText);
    root.style.setProperty('--clr-border',         col.border);
    root.style.setProperty('--clr-gold',           col.gold);
    root.style.setProperty('--clr-gold-light',     col.goldLight);
    root.style.setProperty('--clr-wa',             col.whatsapp);
    root.style.setProperty('--clr-wa-dark',        col.whatsappDark);
    root.style.setProperty('--font-display',       DS.fonts.display);
    root.style.setProperty('--font-body',          DS.fonts.body);
  }

  /* ── NAVBAR ─────────────────────────────────────────────── */
  function renderNavbar() {
    const nav = document.getElementById('navbar');
    if (!nav) return;

    const logoHTML = DS.logo.useImageLogo
      ? `<img src="${DS.logo.logoImage}" alt="${DS.logo.logoAlt}" />`
      : `<span class="navbar__logo-text">${DS.logo.clinicShortName}</span>`;

    nav.innerHTML = `
      <div class="container">
        <div class="navbar__inner">

          <a href="index.html" class="navbar__logo" aria-label="${CL.name} Home">
            <svg class="navbar__logo-icon" width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <path d="M14 3C10 3 7 6 7 9.5C7 12 8.5 14 10 15.5C11 16.5 11.5 18 11.5 20C11.5 22.5 12.5 25 14 25C15.5 25 16.5 22.5 16.5 20C16.5 18 17 16.5 18 15.5C19.5 14 21 12 21 9.5C21 6 18 3 14 3Z"
                stroke="currentColor" stroke-width="1.5" fill="none"/>
            </svg>
            ${logoHTML}
          </a>

          <nav class="navbar__links" aria-label="Main navigation">
            <a href="index.html"   class="navbar__link">Home</a>

            <div class="navbar__dropdown">
              <a href="aligners.html" class="navbar__link navbar__dropdown-toggle">
                Aligners
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M4 6l4 4 4-4"/>
                </svg>
              </a>
              <div class="navbar__dropdown-menu">
                <a href="aligners.html"            class="navbar__dropdown-item">Clear Aligners</a>
                <a href="aligners.html#how"        class="navbar__dropdown-item">How It Works</a>
                <a href="aligners.html#pricing"    class="navbar__dropdown-item">Pricing & EMI</a>
                <a href="aligners.html#faq"        class="navbar__dropdown-item">FAQs</a>
              </div>
            </div>

            <div class="navbar__dropdown">
              <a href="services.html" class="navbar__link navbar__dropdown-toggle">
                Services
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M4 6l4 4 4-4"/>
                </svg>
              </a>
              <div class="navbar__dropdown-menu">
                <a href="services.html#whitening"   class="navbar__dropdown-item">Teeth Whitening</a>
                <a href="services.html#implants"    class="navbar__dropdown-item">Dental Implants</a>
                <a href="services.html#rootcanal"   class="navbar__dropdown-item">Root Canal</a>
                <a href="services.html#braces"      class="navbar__dropdown-item">Braces</a>
                <a href="services.html#smiledesign" class="navbar__dropdown-item">Smile Design</a>
              </div>
            </div>

            <a href="about.html"   class="navbar__link">About</a>
            <a href="contact.html" class="navbar__link">Contact</a>
          </nav>

          <a href="tel:${CL.phone.replace(/\s/g,'')}" class="navbar__cta">
            Book Free Scan
          </a>

          <button class="navbar__hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>

        </div>
      </div>
    `;

    /* Active link highlight */
    const page = location.pathname.split('/').pop() || 'index.html';
    nav.querySelectorAll('.navbar__link').forEach(link => {
      const href = link.getAttribute('href');
      if (href && page.startsWith(href.split('#')[0])) {
        link.classList.add('active');
      }
    });
  }

  /* ── MOBILE MENU ────────────────────────────────────────── */
  function renderMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    if (!menu) return;

    menu.innerHTML = `
      <nav class="mobile-menu__nav" aria-label="Mobile navigation">
        <a href="index.html"    class="mobile-menu__link" onclick="COMPONENTS.closeMobileMenu()">Home</a>
        <div class="mobile-menu__divider"></div>
        <a href="aligners.html" class="mobile-menu__link" onclick="COMPONENTS.closeMobileMenu()">Aligners</a>
        <a href="services.html" class="mobile-menu__link" onclick="COMPONENTS.closeMobileMenu()">Services</a>
        <a href="about.html"    class="mobile-menu__link" onclick="COMPONENTS.closeMobileMenu()">About</a>
        <a href="contact.html"  class="mobile-menu__link" onclick="COMPONENTS.closeMobileMenu()">Contact</a>
        <a href="tel:${CL.phone.replace(/\s/g,'')}" class="mobile-menu__cta" onclick="COMPONENTS.closeMobileMenu()">
          Book Free Scan
        </a>
      </nav>
    `;
  }

  /* ── FOOTER ─────────────────────────────────────────────── */
  function renderFooter() {
    const footer = document.getElementById('footer');
    if (!footer) return;

    const FT = C.footer;
    const SC = C.social;

    const col1Links = FT.col1Links.map(l =>
      `<a href="${l.href}" class="footer__col-link">${l.label}</a>`
    ).join('');

    const col2Links = FT.col2Links.map(l =>
      `<a href="${l.href}" class="footer__col-link">${l.label}</a>`
    ).join('');

    footer.innerHTML = `
      <div class="container">
        <div class="footer__inner">

          <!-- Brand column -->
          <div class="footer__brand">
            <div class="footer__logo">
              <svg width="20" height="20" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <path d="M14 3C10 3 7 6 7 9.5C7 12 8.5 14 10 15.5C11 16.5 11.5 18 11.5 20C11.5 22.5 12.5 25 14 25C15.5 25 16.5 22.5 16.5 20C16.5 18 17 16.5 18 15.5C19.5 14 21 12 21 9.5C21 6 18 3 14 3Z"
                  stroke="rgba(255,255,255,0.5)" stroke-width="1.5" fill="none"/>
              </svg>
              <span class="footer__logo-text">${DS.logo.clinicShortName}</span>
            </div>
            <p class="footer__tagline">${FT.tagline}</p>
            <div class="footer__contact-items">
              <a href="tel:${CL.phone.replace(/\s/g,'')}" class="footer__contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                ${CL.phone}
              </a>
              <a href="mailto:${CL.email}" class="footer__contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                ${CL.email}
              </a>
              <a href="${SC.instagram}" target="_blank" rel="noopener" class="footer__contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke-linecap="round"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
                ${SC.instagramHandle}
              </a>
              <div class="footer__contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                ${CL.address.area}, ${CL.address.city}, ${CL.address.state}
              </div>
            </div>
          </div>

          <!-- Treatments column -->
          <div class="footer__col">
            <p class="footer__col-title">${FT.col1Label}</p>
            <div class="footer__col-links">${col1Links}</div>
          </div>

          <!-- Clinic column -->
          <div class="footer__col">
            <p class="footer__col-title">${FT.col2Label}</p>
            <div class="footer__col-links">${col2Links}</div>
          </div>

        </div>

        <!-- Bottom bar -->
        <div class="footer__bottom">
          <p class="footer__copyright">${FT.copyright}</p>
          <div class="footer__social">
            <a href="${SC.instagram}" target="_blank" rel="noopener noreferrer" class="footer__social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
            </a>
            <a href="${SC.facebook}" target="_blank" rel="noopener noreferrer" class="footer__social-link" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            <a href="${waLink('general')}" target="_blank" rel="noopener noreferrer" class="footer__social-link" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>
          <p class="footer__disclaimer">${FT.disclaimer}</p>
        </div>
      </div>
    `;
  }

  /* ── FLOATING BUTTONS ───────────────────────────────────── */
  function renderFloating() {
    const FL = C.floating;

    const waFab = document.createElement('a');
    waFab.href = waLink('general');
    waFab.target = '_blank';
    waFab.rel = 'noopener noreferrer';
    waFab.className = 'fab-wa';
    waFab.setAttribute('aria-label', FL.whatsappTooltip);
    waFab.innerHTML = `
      <span class="fab-tooltip">${FL.whatsappTooltip}</span>
      <svg viewBox="0 0 24 24" fill="white" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>`;
    document.body.appendChild(waFab);

    if (FL.showCallButton) {
      const callFab = document.createElement('a');
      callFab.href = `tel:${CL.phone.replace(/\s/g,'')}`;
      callFab.className = 'fab-call';
      callFab.setAttribute('aria-label', FL.callTooltip);
      callFab.innerHTML = `
        <span class="fab-tooltip">${FL.callTooltip}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>`;
      document.body.appendChild(callFab);
    }
  }

  /* ── SCHEMA (Google structured data) ───────────────────── */
  function injectSchema() {
    const S  = C.schema;
    const AD = CL.address;
    const schema = {
      "@context": "https://schema.org",
      "@type":    "Dentist",
      "name":     CL.name,
      "url":      CL.website,
      "telephone":CL.phone,
      "email":    CL.email,
      "image":    CL.website + "/images/seo/og-home.jpg",
      "description": "Flosswork™ Dental Clinic — Certified Invisalign provider and Toothsi partner in Raipur, Chhattisgarh. Specialist dental care, clear aligners, implants, smile design.",
      "priceRange":   S.priceRange,
      "currenciesAccepted": S.currenciesAccepted,
      "paymentAccepted":    S.paymentAccepted,
      "areaServed":         S.areaServed,
      "address": {
        "@type":          "PostalAddress",
        "streetAddress":  AD.line1 + ', ' + AD.line2,
        "addressLocality":AD.area + ', ' + AD.city,
        "addressRegion":  AD.state,
        "postalCode":     AD.pin,
        "addressCountry": "IN"
      },
      "geo": {
        "@type":     "GeoCoordinates",
        "latitude":  CL.coordinates.lat,
        "longitude": CL.coordinates.lng
      },
      "openingHoursSpecification": CL.hours.schema.split(',').map(day => ({
        "@type":    "OpeningHoursSpecification",
        "dayOfWeek":"https://schema.org/" + day.trim().split(' ')[0],
        "opens":    "08:00",
        "closes":   "20:00"
      })),
      "sameAs": [
        C.social.facebook,
        C.social.instagram,
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema, null, 2);
    document.head.appendChild(script);
  }

  /* ── INIT ───────────────────────────────────────────────── */
  function init() {
    applyDesignTokens();
    renderNavbar();
    renderMobileMenu();
    renderFooter();
    renderFloating();
    injectSchema();
  }

  document.addEventListener('DOMContentLoaded', init);

  /* ── PUBLIC API ─────────────────────────────────────────── */
  let menuOpen = false;
  window.COMPONENTS = {
    waLink,
    closeMobileMenu: function () {
      if (!menuOpen) return;
      menuOpen = false;
      const menu = document.getElementById('mobileMenu');
      const ham  = document.getElementById('hamburger');
      if (menu) { menu.classList.remove('open'); menu.setAttribute('aria-hidden','true'); }
      if (ham)  { ham.classList.remove('open');  ham.setAttribute('aria-expanded','false'); }
      document.body.style.overflow = '';
    }
  };

  /* Hamburger toggle (delegated — works after render) */
  document.addEventListener('click', function(e) {
    const ham = e.target.closest('#hamburger');
    if (!ham) return;
    menuOpen = !menuOpen;
    ham.classList.toggle('open', menuOpen);
    ham.setAttribute('aria-expanded', String(menuOpen));
    const menu = document.getElementById('mobileMenu');
    if (menu) {
      menu.classList.toggle('open', menuOpen);
      menu.setAttribute('aria-hidden', String(!menuOpen));
    }
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && menuOpen) COMPONENTS.closeMobileMenu();
  });

})();
