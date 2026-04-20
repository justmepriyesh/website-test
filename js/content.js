/**
 * ============================================================
 *  FLOSSWORK™ DENTAL CLINIC — MASTER CONTENT & CONFIG FILE
 * ============================================================
 *
 *  THIS IS YOUR ONLY EDITING FILE.
 *
 *  Everything on every page — text, colors, images, icons,
 *  prices, doctors, services, products — is controlled here.
 *
 *  HOW TO EDIT:
 *  1. Open this file in VS Code (free download: code.visualstudio.com)
 *  2. Press Ctrl+F (or Cmd+F on Mac) to search for any word
 *  3. Change the value BETWEEN the quotes " "
 *  4. Save the file (Ctrl+S)
 *  5. Refresh your browser — change appears instantly
 *
 *  RULES — only break these if you know what you're doing:
 *  ✓  Only change text BETWEEN the quotes
 *  ✓  Don't delete commas, colons, or brackets
 *  ✓  For images: drop the file in the correct images/ folder,
 *     then update the path here e.g. "images/hero/photo.jpg"
 *  ✓  To show/hide a doctor: change active: true / false
 *  ✓  To show/hide any section: change visible: true / false
 *
 * ============================================================
 */

const CONTENT = {


  /* =========================================================
     ① DESIGN SYSTEM
     Change colors, fonts, and logo for the ENTIRE site here.
     One change here = changes everywhere automatically.
     ========================================================= */

  design: {

    colors: {
      /* ── Main brand color ──────────────────────────────────
         Used for: buttons, links, accents, section headings
         Change this one value to completely rebrand the site */
      primary:           "#1a6b5a",   // Deep teal

      /* Hover state of primary (slightly lighter) */
      primaryHover:      "#2d8c75",

      /* Very light tint — card backgrounds, badges */
      primaryLight:      "#edf5f2",

      /* ── Dark sections ─────────────────────────────────────
         Used for: trust bar, footer, dark CTA sections */
      dark:              "#0f0f0f",   // Near black

      /* ── Page backgrounds ──────────────────────────────────*/
      white:             "#ffffff",   // Pure white
      surface:           "#f8f7f5",   // Warm off-white (alternating sections)

      /* ── Text ──────────────────────────────────────────────*/
      headingText:       "#0f0f0f",   // Near black — for H1, H2, H3
      bodyText:          "#3d3d3d",   // Dark gray — for paragraphs
      mutedText:         "#7a7a7a",   // Light gray — captions, labels

      /* ── Borders ───────────────────────────────────────────*/
      border:            "#e8e8e8",

      /* ── Gold accent ───────────────────────────────────────
         Used for: price badges, EMI banner, premium highlights */
      gold:              "#b8936a",
      goldLight:         "#faf3ec",

      /* ── WhatsApp ──────────────────────────────────────────*/
      whatsapp:          "#25d366",
      whatsappDark:      "#1fad56",
    },

    fonts: {
      /* Heading / display font — elegant serif for headlines */
      display:  "'Cormorant Garamond', Georgia, serif",

      /* Body font — clean sans-serif for all other text */
      body:     "'DM Sans', -apple-system, sans-serif",

      /*
       * HOW TO CHANGE FONTS:
       * 1. Visit fonts.google.com
       * 2. Choose a font → click "Get font" → "Get embed code"
       * 3. Copy the font name and replace above
       * 4. In each HTML file's <head>, replace the Google Fonts
       *    <link> with the new embed code
       * Good alternatives:
       *   Display: 'Playfair Display', 'Libre Baskerville'
       *   Body:    'Inter', 'Plus Jakarta Sans', 'Outfit'
       */
    },

    /*
     * LOGO
     * ─────────────────────────────────────────────────────
     * Option A (default): Text logo — shows clinicShortName
     * Option B: Image logo — set useImageLogo: true
     *   then drop your logo file in images/logo/ folder
     *   Supported: .svg (recommended), .png, .webp
     */
    logo: {
      useImageLogo:      false,
      logoImage:         "images/logo/flosswork-logo.svg",
      logoAlt:           "Flosswork Dental Clinic",
      clinicShortName:   "Flosswork™",      // shown when useImageLogo is false
    },

  },


  /* =========================================================
     ② CLINIC INFO
     These values appear everywhere: navbar, footer, contact
     page, Google schema, WhatsApp links, and call buttons.
     Update once → updates everywhere.
     ========================================================= */

  clinic: {
    name:              "Flosswork™ Dental Clinic",
    tagline:           "Aligners & Implants Experience Centre",
    city:              "Raipur",
    phone:             "+91 83540 88822",
    phoneSecondary:    "+91 77135 93252",
    whatsapp:          "918354088822",      // no + or spaces — just digits
    email:             "helloflosswork@gmail.com",
    instagram:         "@helloflosswork",
    instagramURL:      "https://instagram.com/helloflosswork",
    website:           "https://flosswork.in",

    address: {
      line1:           "6, South Avenue",
      line2:           "Opp. Dr. Bhagwat Hospital",
      area:            "Choubey Colony",
      city:            "Raipur",
      state:           "Chhattisgarh",
      pin:             "492001",
      country:         "India",
      /* Full address — used in footer, contact page, and schema */
      full:            "6, South Avenue, Opp. Dr. Bhagwat Hospital, Choubey Colony, Raipur, Chhattisgarh 492001",
      landmark:        "Opposite Dr. Bhagwat Hospital",
      /* Paste your Google Maps share link here */
      googleMapsURL:   "https://maps.google.com/?q=Flosswork+Dental+Clinic+Raipur",
      /* Paste the embed URL from Google Maps → Share → Embed a map */
      googleMapsEmbed: "https://maps.google.com/maps?q=Flosswork+Dental+Clinic+Raipur&output=embed",
    },

    hours: {
      display:         "Mon – Sun: 8:00 AM – 8:00 PM",
      lunch:           "Lunch break: 2:00 PM – 3:00 PM",
      note:            "Open all 7 days including Sundays",
      /* Used in Google schema — format: "Mo,Tu,We,Th,Fr,Sa,Su HH:MM-HH:MM" */
      schema:          "Mo,Tu,We,Th,Fr,Sa,Su 08:00-20:00",
    },

    established:       "2023",
    patientCount:      "5,000+",
    rating:            "4.9",
    reviewCount:       "61",
    coordinates: {
      lat:             "21.2514",   // ← update with your exact coordinates
      lng:             "81.6296",
    },
  },


  /* =========================================================
     ③ SOCIAL LINKS & WHATSAPP MESSAGES
     ========================================================= */

  social: {
    instagram:         "https://instagram.com/helloflosswork",
    instagramHandle:   "@helloflosswork",
    facebook:          "https://facebook.com/p/Flosswork-Dental-Clinic-61550807602424/",
    googleReview:      "https://g.page/r/flossworkdental/review",  // ← your review link
    youtube:           "",    // leave empty if none
    email:             "helloflosswork@gmail.com",
  },

  /*
   * Pre-written WhatsApp messages
   * These appear as tap buttons on the contact page and
   * throughout the site. Patient taps → opens WhatsApp
   * with the message pre-filled. Zero typing friction.
   */
  whatsappMessages: {
    aligners:    "Hi! I'd like to know more about clear aligners at Flosswork™ Dental Clinic, Raipur.",
    appointment: "Hi! I'd like to book an appointment at Flosswork™ Dental Clinic.",
    emergency:   "Hi! I have a dental emergency and need urgent assistance at Flosswork™.",
    products:    "Hi! I'd like to order a dental product from Flosswork™.",
    scan:        "Hi! I'd like to book a free 3D scan consultation at Flosswork™ Dental Clinic.",
    general:     "Hi! I have a query about Flosswork™ Dental Clinic.",
  },


  /* =========================================================
     ④ HOMEPAGE
     ========================================================= */

  home: {

    /* SEO metadata — appears in Google search results */
    seo: {
      title:       "Flosswork™ Dental Clinic | Best Dentist in Raipur, Chhattisgarh",
      description: "Premium dental clinic in Choubey Colony, Raipur. Clear aligners from ₹50,000, dental implants, teeth whitening & smile design. Certified Invisalign & Toothsi partner. Trusted by 5,000+ patients.",
      keywords:    "dentist in raipur, dental clinic raipur, clear aligners raipur, invisible braces raipur, best dentist choubey colony, dental implants raipur, invisalign raipur",
      /* 1200×630px image used when page is shared on WhatsApp/social */
      ogImage:     "images/seo/og-home.jpg",
    },

    /* ── Hero ─────────────────────────────────────────────── */
    hero: {
      badge:           "Now accepting new patients",
      headline:        "Straighten your teeth.",
      headlineItalic:  "Without anyone noticing.",
      subtext:         "Precision-planned clear aligners using advanced 3D digital scanning — designed around your life, not around brackets and wires.",
      priceBadge:      "Plans from ₹50,000  ·  Easy EMI available",
      ctaPrimary:      "Book Your Free Scan",
      ctaSecondary:    "Chat on WhatsApp",
      scrollHint:      "Scroll to explore",
      /*
       * Replace with your clinic/patient hero photo
       * Recommended: 1920×1080px, .jpg or .webp
       * Subject: patient smiling, or close-up of clear aligner
       */
      image:           "images/hero/hero-main.jpg",
      imageAlt:        "Premium dental care at Flosswork Dental Clinic, Choubey Colony, Raipur",
    },

    /* ── Trust Bar ────────────────────────────────────────── */
    trustBar: [
      { text: "5,000+ Patients Treated"       },
      { text: "Certified Invisalign Provider"  },
      { text: "Official Toothsi Partner"       },
      { text: "3D Digital Scanning"            },
      { text: "Open 7 Days · 8am – 8pm"        },
      { text: "No-Cost EMI Available"          },
    ],

    /* ── Aligners Spotlight ───────────────────────────────── */
    alignersSpotlight: {
      label:           "Our Speciality",
      headline:        "The clearest path",
      headlineItalic:  "to your best smile.",
      subtext:         "Crowded, spaced, or misaligned teeth corrected comfortably — with aligners you can remove, clean, and wear with total confidence.",
      benefits: [
        { title: "Invisible",    desc: "Barely noticeable in daily life"   },
        { title: "Comfortable",  desc: "No wires, no irritation"           },
        { title: "Removable",    desc: "Eat and clean with ease"           },
      ],
      pricingNote:     "Plans from ₹50,000  ·  No-cost EMI",
      cta:             "Explore Aligner Plans",
      ctaLink:         "aligners.html",
      image:           "images/treatments/aligners-showcase.jpg",
      imageAlt:        "Clear aligner treatment at Flosswork Dental Clinic, Raipur",
    },

    /* ── Case Gallery ─────────────────────────────────────── */
    gallery: {
      label:           "Patient Outcomes",
      headline:        "Real results you can see.",
      headlineItalic:  "Confidence you can feel.",
      subtext:         "Every smile is unique. See what our patients have achieved with precision treatment at Flosswork.",
      viewAllCta:      "View all cases",
      disclaimer:      "Results may vary. A personalised plan is created after your 3D scan consultation.",

      /*
       * HOW TO ADD A CASE:
       * 1. Add before photo to images/gallery/caseX-before.jpg
       * 2. Add after photo to images/gallery/caseX-after.jpg
       * 3. Fill in treatment and duration below
       * Use square or 4:3 ratio photos for best results
       */
      cases: [
        {
          id: 1,
          treatment:   "Crowding Correction",
          duration:    "14 months",
          beforeImage: "images/gallery/case1-before.jpg",
          afterImage:  "images/gallery/case1-after.jpg",
          beforeAlt:   "Before aligner treatment — crowded teeth, Flosswork Raipur",
          afterAlt:    "After aligner treatment — aligned smile, Flosswork Raipur",
        },
        {
          id: 2,
          treatment:   "Spacing & Alignment",
          duration:    "10 months",
          beforeImage: "images/gallery/case2-before.jpg",
          afterImage:  "images/gallery/case2-after.jpg",
          beforeAlt:   "Before aligners — spacing issue",
          afterAlt:    "After aligners — closed spacing",
        },
        {
          id: 3,
          treatment:   "Overbite Correction",
          duration:    "18 months",
          beforeImage: "images/gallery/case3-before.jpg",
          afterImage:  "images/gallery/case3-after.jpg",
          beforeAlt:   "Before treatment — overbite",
          afterAlt:    "After treatment — corrected bite",
        },
        {
          id: 4,
          treatment:   "Smile Design",
          duration:    "12 months",
          beforeImage: "images/gallery/case4-before.jpg",
          afterImage:  "images/gallery/case4-after.jpg",
          beforeAlt:   "Before smile design",
          afterAlt:    "After smile design",
        },
      ],
    },

    /* ── Patient Reviews ──────────────────────────────────── */
    reviews: {
      label:           "Patient Stories",
      headline:        "Trusted by thousands",
      headlineItalic:  "across Raipur.",
      viewAllCta:      "See all reviews on Google",
      viewAllLink:     "https://g.page/r/flossworkdental/review",

      /*
       * HOW TO ADD A REVIEW:
       * 1. Copy a review from Google or Justdial
       * 2. Replace a placeholder item below
       * 3. Set platform to "Google" or "Justdial"
       */
      items: [
        {
          name:     "Anand Agrawal",
          date:     "January 2026",
          rating:   5,
          text:     "I had a great experience at Flosswork. Dr. Priyesh Gupta is very professional, knowledgeable, and patient. Everything was clearly explained and the follow-ups were excellent. Highly recommend.",
          platform: "Google",
        },
        {
          name:     "Kusum Verma",
          date:     "March 2026",
          rating:   5,
          text:     "Dr. Nehal and Dr. Priyesh are skilled, polite, and cooperative. The clinic is clean, hygienic, and has a warm, welcoming atmosphere. Very happy with my treatment.",
          platform: "Google",
        },
        {
          name:     "[Patient Name]",
          date:     "[Month Year]",
          rating:   5,
          text:     "[Paste patient review text here — copy from Google or ask a happy patient to share their review with you.]",
          platform: "Google",
        },
        {
          name:     "[Patient Name]",
          date:     "[Month Year]",
          rating:   5,
          text:     "[Paste patient review text here.]",
          platform: "Google",
        },
      ],
    },

    /* ── Flosswork+ Advantage ─────────────────────────────── */
    advantage: {
      label:           "The Flosswork Difference",
      headline:        "Why patients choose",
      headlineItalic:  "Flosswork™+",
      subtext:         "We built Flosswork around one belief — every patient deserves specialist-grade care, not a rushed appointment.",
      usps: [
        {
          icon:    "scanner",
          title:   "Advanced 3D Digital Scanning",
          desc:    "Precise intraoral scans replace messy impressions. Your treatment is planned to the sub-millimetre.",
          stat:    "Sub-mm accuracy",
        },
        {
          icon:    "specialist",
          title:   "Specialist-Only Treatment",
          desc:    "Every case is handled by an MDS-qualified specialist — not a general dentist.",
          stat:    "MDS qualified",
        },
        {
          icon:    "patients",
          title:   "5,000+ Patients Treated",
          desc:    "Trusted by patients across Raipur and Chhattisgarh for consistent, predictable results.",
          stat:    "5,000+ smiles",
        },
        {
          icon:    "emi",
          title:   "Transparent Pricing & EMI",
          desc:    "No hidden charges. Clear pricing upfront. No-cost EMI options available on all treatments.",
          stat:    "₹0 hidden fees",
        },
        {
          icon:    "equipment",
          title:   "International-Grade Equipment",
          desc:    "We invest in the same technology used by top clinics globally — for better outcomes every time.",
          stat:    "Global standards",
        },
        {
          icon:    "plan",
          title:   "Personalised Treatment Plans",
          desc:    "No two smiles are the same. Every plan is built around your teeth, your timeline, your life.",
          stat:    "100% personalised",
        },
      ],
    },

    /* ── Services Grid ────────────────────────────────────── */
    services: {
      label:           "Complete Care",
      headline:        "More than aligners.",
      headlineItalic:  "Complete dental care under one roof.",
      viewAllCta:      "View all services",
      viewAllLink:     "services.html",
      items: [
        {
          name:    "Teeth Whitening",
          desc:    "Professional-grade whitening for a noticeably brighter smile in a single session.",
          image:   "images/services/whitening.jpg",
          imageAlt:"Teeth whitening at Flosswork Dental Clinic Raipur",
          link:    "services.html#whitening",
        },
        {
          name:    "Dental Implants",
          desc:    "Long-lasting tooth replacements placed with surgical precision and aesthetic care.",
          image:   "images/services/implants.jpg",
          imageAlt:"Dental implants at Flosswork Raipur",
          link:    "services.html#implants",
        },
        {
          name:    "Root Canal",
          desc:    "Pain-free root canal treatment using rotary endodontic technology.",
          image:   "images/services/root-canal.jpg",
          imageAlt:"Root canal treatment Raipur",
          link:    "services.html#rootcanal",
        },
        {
          name:    "Braces",
          desc:    "Metal and ceramic braces for comprehensive orthodontic correction.",
          image:   "images/services/braces.jpg",
          imageAlt:"Dental braces at Flosswork Raipur",
          link:    "services.html#braces",
        },
        {
          name:    "Smile Design",
          desc:    "Digitally planned smile makeovers — veneers, bonding, and full transformations.",
          image:   "images/services/smile-design.jpg",
          imageAlt:"Smile design Raipur",
          link:    "services.html#smiledesign",
        },
      ],
    },

    /* ── Products ─────────────────────────────────────────── */
    products: {
      visible:         true,          // ← set false to hide this section
      label:           "Dental Products",
      headline:        "Clinic-grade care",
      headlineItalic:  "at home.",
      subtext:         "Curated dental products recommended by our specialists. Order directly on WhatsApp.",
      /*
       * HOW TO ADD A PRODUCT:
       * 1. Add product photo to images/products/ folder
       * 2. Fill in name, desc, price below
       * 3. Set badge: "Bestseller" / "New" / "" (empty = no badge)
       */
      items: [
        {
          name:    "[Product Name]",
          desc:    "[One line description of the product]",
          price:   "₹[price]",
          image:   "images/products/product1.jpg",
          imageAlt:"[Product name] by Flosswork",
          badge:   "Bestseller",
        },
        {
          name:    "[Product Name]",
          desc:    "[One line description]",
          price:   "₹[price]",
          image:   "images/products/product2.jpg",
          imageAlt:"[Product name] by Flosswork",
          badge:   "",
        },
        {
          name:    "[Product Name]",
          desc:    "[One line description]",
          price:   "₹[price]",
          image:   "images/products/product3.jpg",
          imageAlt:"[Product name] by Flosswork",
          badge:   "New",
        },
        {
          name:    "[Product Name]",
          desc:    "[One line description]",
          price:   "₹[price]",
          image:   "images/products/product4.jpg",
          imageAlt:"[Product name] by Flosswork",
          badge:   "",
        },
      ],
    },

    /* ── Online Consultation Band ─────────────────────────── */
    consultationBand: {
      headline:        "Not sure what you need?",
      subtext:         "Describe your concern to our specialist on WhatsApp — get a personalised response the same day.",
      cta:             "Start a Free WhatsApp Consultation",
    },

    /* ── Partner Logos ────────────────────────────────────── */
    partners: {
      label:           "Certified Partner Clinics",
      /*
       * Drop logo files (SVG or PNG, transparent background)
       * into the images/partners/ folder, then update paths below
       */
      items: [
        { name: "Invisalign", logo: "images/partners/invisalign.svg",  alt: "Certified Invisalign Provider — Flosswork Raipur"   },
        { name: "Toothsi",    logo: "images/partners/toothsi.svg",     alt: "Official Toothsi Partner Clinic — Flosswork Raipur" },
        { name: "SureSmile",  logo: "images/partners/suresmile.svg",   alt: "SureSmile Partner — Flosswork Raipur"               },
        { name: "Smile",      logo: "images/partners/smile.svg",       alt: "Smile Partner — Flosswork Raipur"                   },
      ],
    },

    /* ── Homepage Doctors Section ─────────────────────────── */
    /*
     * Shows 2 featured doctor cards + 1 "Meet Our Team" card
     * pointing to the full about page.
     * To change which doctors are featured: update featuredIds
     * to match the doctor id numbers in CONTENT.about.doctors
     */
    doctorsSection: {
      visible:         true,
      label:           "Our Specialists",
      headline:        "Care led by",
      headlineItalic:  "specialists, not generalists.",
      subtext:         "Every treatment at Flosswork™ is planned and delivered by MDS-qualified specialist doctors.",
      featuredIds:     [1, 2],   // ← doctor IDs to show on homepage (from about.doctors)
      meetTeamCard: {
        headline:      "Meet Our Full Team",
        subtext:       "8 specialist doctors across implants, aligners, smile design & more.",
        cta:           "View All Doctors",
        ctaLink:       "about.html#doctors",
      },
    },

    /* ── Final CTA ────────────────────────────────────────── */
    finalCta: {
      headline:        "Ready for your",
      headlineItalic:  "new smile?",
      subtext:         "Book your free 3D scan consultation. Our specialists will assess your teeth and walk you through your personalised treatment plan — in one visit.",
      ctaPrimary:      "Book Your Free Scan",
      ctaSecondary:    "Chat on WhatsApp",
    },

  },


  /* =========================================================
     ⑤ ALIGNERS PAGE
     ========================================================= */

  aligners: {

    seo: {
      title:       "Clear Aligners in Raipur | Invisible Braces — Flosswork™ Dental",
      description: "Get precision clear aligners in Raipur from MDS-qualified orthodontists. Certified Invisalign & Toothsi partner. Invisible, comfortable, removable. Plans from ₹50,000. Book free 3D scan.",
      keywords:    "clear aligners raipur, invisible braces raipur, invisalign raipur, toothsi raipur, aligner cost raipur, orthodontist raipur chhattisgarh",
      ogImage:     "images/seo/og-aligners.jpg",
    },

    hero: {
      label:           "Clear Aligners · Raipur",
      headline:        "Invisible. Comfortable.",
      headlineItalic:  "Life-changing.",
      subtext:         "Precision-planned clear aligner treatment in Raipur using advanced 3D scanning. Certified Invisalign provider and Toothsi partner clinic.",
      cta:             "Book Your Free 3D Scan",
      image:           "images/aligners/aligners-hero.jpg",
      imageAlt:        "Clear aligner treatment in Raipur at Flosswork Dental Clinic",
    },

    howItWorks: {
      label:    "The Process",
      headline: "Simple. Precise. Transformative.",
      steps: [
        {
          number:  "01",
          title:   "3D Digital Scan",
          desc:    "We scan your teeth in under 3 minutes. No messy impressions — precise digital models that form the foundation of your treatment plan.",
          image:   "images/aligners/step-scan.jpg",
        },
        {
          number:  "02",
          title:   "Your Smile Plan",
          desc:    "Your specialist designs a custom digital treatment plan. See your projected end result before a single aligner is made.",
          image:   "images/aligners/step-plan.jpg",
        },
        {
          number:  "03",
          title:   "Start Your Journey",
          desc:    "Receive your custom aligners and begin your transformation — with regular specialist check-ins at every stage.",
          image:   "images/aligners/step-start.jpg",
        },
      ],
    },

    timeline: {
      label:    "Treatment Timeline",
      headline: "What to expect, month by month.",
      milestones: [
        { period: "Month 1",     event: "3D scan, consultation, and custom aligner fabrication."         },
        { period: "Month 2–3",   event: "First aligners received. Wear each tray for 1–2 weeks."        },
        { period: "Month 4–6",   event: "Visible alignment progress. Mid-treatment specialist check-in." },
        { period: "Month 8–12",  event: "Major alignment achieved. 70%+ of patients see clear results."  },
        { period: "Month 12–18", event: "Final refiners. Treatment complete. Custom retainers provided."  },
      ],
    },

    comparison: {
      label:    "Making the Decision",
      headline: "Aligners vs Braces",
      points: [
        { feature: "Visibility",        aligners: "Nearly invisible",     braces: "Clearly visible metal"    },
        { feature: "Comfort",           aligners: "Smooth, no wires",     braces: "Wires can cause irritation"},
        { feature: "Removable",         aligners: "Yes — for meals",      braces: "Fixed, cannot remove"      },
        { feature: "Cleaning teeth",    aligners: "Brush normally",       braces: "Requires special tools"    },
        { feature: "Diet restriction",  aligners: "None whatsoever",      braces: "Avoid sticky & hard foods" },
        { feature: "Clinic visits",     aligners: "Every 6–8 weeks",      braces: "Every 4–6 weeks"           },
        { feature: "Avg. duration",     aligners: "12–18 months",         braces: "18–24 months"              },
        { feature: "Adult preference",  aligners: "Strongly preferred",   braces: "Less preferred"            },
      ],
    },

    pricing: {
      label:    "Investment",
      headline: "Transparent pricing. No surprises.",
      subtext:  "Straightforward plans that fit your case and budget — zero hidden charges.",
      emiNote:  "No-cost EMI available  ·  Flexible payment plans  ·  Speak to us for details",

      /*
       * 3 PRICING TIERS
       * featured: true  → middle card — highlighted as "Most Popular"
       * premium: true   → right card  — highlighted as "Premium"
       * To change prices: update price: "₹XX,000" below
       */
      plans: [
        {
          name:      "Essentials",
          price:     "₹50,000",
          priceNote: "starting from",
          featured:  false,
          premium:   false,
          badge:     "",
          tagline:   "Perfect for mild cases",
          features: [
            "Digital 3D scan + consultation",
            "Custom aligner sets",
            "Specialist monitoring",
            "1 set of refiners included",
            "Retainers at completion",
          ],
          cta:       "Get Started",
        },
        {
          name:      "Advanced",
          price:     "₹75,000",
          priceNote: "starting from",
          featured:  true,      // ← MIDDLE CARD — "Most Popular" badge
          premium:   false,
          badge:     "Most Popular",
          tagline:   "Best for moderate corrections",
          features: [
            "Everything in Essentials",
            "Comprehensive treatment plan",
            "3 sets of refiners included",
            "Priority appointments",
            "Retainers included",
            "Mid-treatment progress tracking",
          ],
          cta:       "Get Started",
        },
        {
          name:      "Premium",
          price:     "₹90,000",
          priceNote: "starting from",
          featured:  false,
          premium:   true,      // ← RIGHT CARD — "Premium" badge
          badge:     "Premium",
          tagline:   "Complete smile transformation",
          features: [
            "Everything in Advanced",
            "Unlimited refiners",
            "Invisalign or SureSmile system",
            "Direct WhatsApp specialist access",
            "Complimentary whitening session",
            "Lifetime retainer guarantee",
          ],
          cta:       "Get Started",
        },
      ],

      brandPlans: [
        { brand: "Invisalign", priceFrom: "₹80,000", note: "Certified provider — authentic Invisalign aligners" },
        { brand: "Toothsi",    priceFrom: "₹50,000", note: "Official partner clinic — Toothsi system"           },
        { brand: "SureSmile",  priceFrom: "₹70,000", note: "SureSmile precision aligner system"                 },
      ],
    },

    /*
     * INVISALIGN SMILEVIEW
     * Lets patients see themselves in Invisalign aligners virtually
     * Appears as a CTA button/section on the aligners page
     */
    invisalignSmileView: {
      visible:   true,
      label:     "Try It Virtually",
      headline:  "See yourself",
      headlineItalic: "with a new smile.",
      subtext:   "Use Invisalign's SmileView tool to see what your smile could look like — in under 60 seconds.",
      cta:       "Try Invisalign SmileView™",
      url:       "https://providerbio-apac.invisalign.com/sv/1729297#start",
      note:      "Powered by Invisalign® — opens in a new tab",
    },

    faqs: [
      {
        q: "Are clear aligners painful?",
        a: "Most patients feel mild pressure for 1–2 days when switching to a new set. This is normal and means the aligners are working. There are no sharp wires to cause irritation.",
      },
      {
        q: "How long does aligner treatment take?",
        a: "Most cases at Flosswork™ are completed in 12–18 months. Mild cases can be done in as little as 6 months. Your specialist will give a precise timeline after your free 3D scan.",
      },
      {
        q: "Can I eat with aligners on?",
        a: "You should remove aligners before eating or drinking anything other than water. Put them back in after brushing. This keeps them clear and odour-free.",
      },
      {
        q: "How many hours a day do I wear them?",
        a: "22 hours per day for best results. You only remove them to eat, drink, and clean your teeth.",
      },
      {
        q: "Am I a good candidate for aligners?",
        a: "Most adults and teenagers with crowding, spacing, or mild-to-moderate bite issues are excellent candidates. The best way to know is a free 3D scan — we'll tell you in one visit.",
      },
      {
        q: "What happens after treatment?",
        a: "You receive custom retainers to maintain your new smile. We recommend nightly wear. Retainers are included in our Premium plan.",
      },
      {
        q: "What is the cost of clear aligners in Raipur?",
        a: "At Flosswork™, plans start from ₹50,000 (Essentials), ₹75,000 (Advanced), and ₹90,000 (Premium with unlimited refiners). No-cost EMI is available. We give a full cost breakdown after your scan — no surprises.",
      },
      {
        q: "Do aligners work as well as braces?",
        a: "For mild to moderate cases, aligners achieve equivalent or better results — with far greater comfort and discretion. Severe cases may still require braces.",
      },
      {
        q: "Is Flosswork a certified Invisalign provider?",
        a: "Yes. Flosswork™ Dental Clinic is a certified Invisalign provider and official Toothsi partner clinic in Raipur, Chhattisgarh.",
      },
      {
        q: "Can I switch from braces to aligners mid-treatment?",
        a: "In many cases, yes. Bring your current treatment records to a consultation — our specialist will assess if switching is appropriate for your case.",
      },
    ],

  },


  /* =========================================================
     ⑥ ABOUT PAGE
     ========================================================= */

  about: {

    seo: {
      title:       "About Us | Specialist Dentists in Raipur — Flosswork™ Dental",
      description: "Meet the specialist team at Flosswork Dental Clinic, Choubey Colony, Raipur. Dr. Priyesh Gupta & team. International-grade equipment, 3D digital scanning, and personalised dental care since 2023.",
      keywords:    "orthodontist raipur, dentist choubey colony, dr priyesh gupta raipur, dental specialist raipur, implantologist raipur",
      ogImage:     "images/seo/og-about.jpg",
    },

    story: {
      label:           "Our Story",
      headline:        "Built on one belief.",
      headlineItalic:  "Every patient deserves specialist care.",
      paragraphs: [
        "Flosswork™ Dental Clinic was founded in 2023 with a simple but powerful mission — to bring specialist-grade dental care to Raipur, without the cold, clinical experience most patients dread.",
        "We built Flosswork™ around technology, transparency, and genuine human care. From our 3D intraoral scanner to our no-surprise pricing, every decision is made to ensure our patients feel informed, comfortable, and confident.",
        "Today, we are Raipur's certified Invisalign provider and official Toothsi partner — trusted by 5,000+ patients across Chhattisgarh.",
      ],
    },

    stats: [
      { number: "5,000+", label: "Patients Treated"       },
      { number: "2+",     label: "Years of Excellence"    },
      { number: "4.9",    label: "Patient Rating"         },
      { number: "7",      label: "Days Open Every Week"   },
    ],

    /* ─────────────────────────────────────────────────────
       DOCTORS — 8 slots
       ─────────────────────────────────────────────────────
       active: true  → shown on website
       active: false → hidden (placeholder for future doctor)

       TO ADD A DOCTOR:
       1. Set active: true on any placeholder slot
       2. Fill in all the details
       3. Add photo to images/doctors/ folder
       4. Update photo path
       5. Save and refresh
       ───────────────────────────────────────────────────── */
    doctors: [

      {
        id:            1,
        active:        true,
        name:          "Dr. Priyesh Gupta",
        qualification: "BDS, MDS",
        speciality:    "Maxillofacial Prosthodontist & Implantologist",
        experience:    "10+ years",
        bio:           "Dr. Priyesh Gupta is a highly experienced Maxillofacial Prosthodontist and Implantologist with over 10 years of clinical practice. Specialising in dental implants, clear aligner therapy, and complex prosthetic rehabilitations, he founded Flosswork™ to bring specialist-grade dental care to Raipur. Known for his precision, patience, and patient-first approach.",
        photo:         "images/doctors/dr-priyesh-gupta.jpg",
        photoAlt:      "Dr. Priyesh Gupta — Implantologist & Founder, Flosswork Dental Clinic Raipur",
        expertise:     ["Dental Implants", "Clear Aligners", "Maxillofacial Prosthetics", "Smile Design"],
      },

      {
        id:            2,
        active:        true,
        name:          "Dr. Nehal [Surname]",        // ← replace
        qualification: "[BDS / MDS]",                // ← replace
        speciality:    "[Speciality]",               // ← e.g. Orthodontist
        experience:    "[X]+ years",
        bio:           "[Dr. Nehal's bio — 3–4 sentences about their background, training institution, speciality, and patient care approach.]",
        photo:         "images/doctors/dr-nehal-placeholder.jpg",
        photoAlt:      "Dr. Nehal — Specialist, Flosswork Dental Clinic Raipur",
        expertise:     ["[Expertise 1]", "[Expertise 2]", "[Expertise 3]", "[Expertise 4]"],
      },

      /* Slots 3–8: set active: true when a new doctor joins */
      {
        id: 3, active: false,
        name: "Dr. [Full Name]", qualification: "[BDS / MDS]",
        speciality: "[Speciality]", experience: "[X]+ years",
        bio: "[Doctor bio.]",
        photo: "images/doctors/doctor-placeholder.jpg",
        photoAlt: "Doctor at Flosswork Dental Clinic Raipur",
        expertise: ["[Expertise 1]", "[Expertise 2]", "[Expertise 3]"],
      },
      {
        id: 4, active: false,
        name: "Dr. [Full Name]", qualification: "[BDS / MDS]",
        speciality: "[Speciality]", experience: "[X]+ years",
        bio: "[Doctor bio.]",
        photo: "images/doctors/doctor-placeholder.jpg",
        photoAlt: "Doctor at Flosswork Dental Clinic Raipur",
        expertise: ["[Expertise 1]", "[Expertise 2]", "[Expertise 3]"],
      },
      {
        id: 5, active: false,
        name: "Dr. [Full Name]", qualification: "[BDS / MDS]",
        speciality: "[Speciality]", experience: "[X]+ years",
        bio: "[Doctor bio.]",
        photo: "images/doctors/doctor-placeholder.jpg",
        photoAlt: "Doctor at Flosswork Dental Clinic Raipur",
        expertise: ["[Expertise 1]", "[Expertise 2]", "[Expertise 3]"],
      },
      {
        id: 6, active: false,
        name: "Dr. [Full Name]", qualification: "[BDS / MDS]",
        speciality: "[Speciality]", experience: "[X]+ years",
        bio: "[Doctor bio.]",
        photo: "images/doctors/doctor-placeholder.jpg",
        photoAlt: "Doctor at Flosswork Dental Clinic Raipur",
        expertise: ["[Expertise 1]", "[Expertise 2]", "[Expertise 3]"],
      },
      {
        id: 7, active: false,
        name: "Dr. [Full Name]", qualification: "[BDS / MDS]",
        speciality: "[Speciality]", experience: "[X]+ years",
        bio: "[Doctor bio.]",
        photo: "images/doctors/doctor-placeholder.jpg",
        photoAlt: "Doctor at Flosswork Dental Clinic Raipur",
        expertise: ["[Expertise 1]", "[Expertise 2]", "[Expertise 3]"],
      },
      {
        id: 8, active: false,
        name: "Dr. [Full Name]", qualification: "[BDS / MDS]",
        speciality: "[Speciality]", experience: "[X]+ years",
        bio: "[Doctor bio.]",
        photo: "images/doctors/doctor-placeholder.jpg",
        photoAlt: "Doctor at Flosswork Dental Clinic Raipur",
        expertise: ["[Expertise 1]", "[Expertise 2]", "[Expertise 3]"],
      },

    ],

    partners: [
      {
        name:   "Invisalign",
        logo:   "images/partners/invisalign.svg",
        alt:    "Certified Invisalign Provider",
        desc:   "Certified providers of authentic Invisalign treatment — trained and authorised to deliver Invisalign in Raipur.",
      },
      {
        name:   "Toothsi",
        logo:   "images/partners/toothsi.svg",
        alt:    "Official Toothsi Partner Clinic",
        desc:   "Official Toothsi partner clinic in Choubey Colony, Raipur. Precision aligner system with 3D scanning.",
      },
      {
        name:   "SureSmile",
        logo:   "images/partners/suresmile.svg",
        alt:    "SureSmile Partner Clinic",
        desc:   "SureSmile partner — wire-free, digitally customised orthodontic treatment.",
      },
      {
        name:   "Smile",
        logo:   "images/partners/smile.svg",
        alt:    "Smile Partner Clinic",
        desc:   "Partner clinic for the Smile aligner system — precise, affordable, specialist-monitored.",
      },
    ],

    clinicPhotos: [
      { image: "images/clinic/reception.jpg",       alt: "Reception at Flosswork Dental Clinic, Raipur"      },
      { image: "images/clinic/treatment-room.jpg",  alt: "Treatment room at Flosswork Dental Clinic"          },
      { image: "images/clinic/waiting-area.jpg",    alt: "Waiting area at Flosswork Dental Clinic, Raipur"    },
      { image: "images/clinic/scanner.jpg",         alt: "3D intraoral scanner at Flosswork, Raipur"          },
      { image: "images/clinic/equipment.jpg",       alt: "Advanced dental equipment at Flosswork"             },
      { image: "images/clinic/exterior.jpg",        alt: "Flosswork Dental Clinic, Choubey Colony, Raipur"    },
    ],

    equipment: [
      {
        icon:    "scanner",
        name:    "3D Intraoral Scanner",
        benefit: "No messy impressions. Teeth mapped in precise 3D in under 3 minutes.",
        image:   "images/equipment/scanner.jpg",
        imageAlt:"3D intraoral scanner at Flosswork Raipur",
      },
      {
        icon:    "xray",
        name:    "Digital X-Ray",
        benefit: "Lower radiation than traditional X-rays. Instant results for faster, safer diagnosis.",
        image:   "images/equipment/xray.jpg",
        imageAlt:"Digital X-ray at Flosswork Raipur",
      },
      {
        icon:    "whitening",
        name:    "Professional Whitening System",
        benefit: "Clinical-grade whitening with results that last significantly longer than at-home kits.",
        image:   "images/equipment/whitening.jpg",
        imageAlt:"Teeth whitening system at Flosswork",
      },
      {
        icon:    "software",
        name:    "Smile Design Software",
        benefit: "See your new smile digitally before any treatment begins. Plan your result with confidence.",
        image:   "images/equipment/software.jpg",
        imageAlt:"Smile design software at Flosswork",
      },
      {
        icon:    "sterilisation",
        name:    "Autoclave Sterilisation",
        benefit: "Hospital-grade sterilisation for every instrument, every procedure, every patient.",
        image:   "images/equipment/sterilisation.jpg",
        imageAlt:"Sterilisation protocols at Flosswork",
      },
    ],

  },


  /* =========================================================
     ⑦ CONTACT PAGE
     ========================================================= */

  contact: {

    seo: {
      title:       "Contact Flosswork™ | Dentist in Choubey Colony, Raipur",
      description: "Visit Flosswork Dental Clinic at 6 South Avenue, Choubey Colony, Raipur. Call +91 83540 88822. Open Mon–Sun 8am–8pm. Book your free 3D scan consultation.",
      keywords:    "contact flosswork raipur, dentist choubey colony, dental clinic near me raipur, book dental appointment raipur",
      ogImage:     "images/seo/og-contact.jpg",
    },

    headline:      "We're easy to reach.",
    headlineItalic:"Come say hello.",
    subtext:       "Visit us in Choubey Colony, Raipur — or WhatsApp us and we'll respond the same day.",

  },


  /* =========================================================
     ⑧ FOOTER
     ========================================================= */

  footer: {
    tagline:    "Premium dental care in Raipur, Chhattisgarh.\nClear aligners · Implants · Smile Design · Modern Dentistry.",
    copyright:  "© 2025 Flosswork™ Dental Clinic. All rights reserved.",
    disclaimer: "Results may vary. Consult your specialist for a personalised assessment.",

    /* Contact details shown in footer */
    showEmail:     true,
    showInstagram: true,
    showPhone:     true,
    showWhatsApp:  true,

    col1Label:  "Treatments",
    col1Links: [
      { label: "Clear Aligners",  href: "aligners.html"              },
      { label: "Dental Implants", href: "services.html#implants"     },
      { label: "Teeth Whitening", href: "services.html#whitening"    },
      { label: "Root Canal",      href: "services.html#rootcanal"    },
      { label: "Smile Design",    href: "services.html#smiledesign"  },
    ],

    col2Label:  "Clinic",
    col2Links: [
      { label: "About Us",        href: "about.html"                 },
      { label: "Our Doctors",     href: "about.html#doctors"         },
      { label: "Technology",      href: "about.html#equipment"       },
      { label: "Pricing & EMI",   href: "aligners.html#pricing"      },
      { label: "Contact",         href: "contact.html"               },
    ],
  },


  /* =========================================================
     ⑨ FLOATING ACTION BUTTONS
     WhatsApp and Call buttons that appear on every page.
     showCallButton: true  → shows the phone FAB above WhatsApp
     showCallButton: false → WhatsApp only
     ========================================================= */

  floating: {
    showCallButton:  true,
    callTooltip:     "Call Us",
    whatsappTooltip: "Chat on WhatsApp",
  },


  /* =========================================================
     ⑩ ICONS
     SVG path data used throughout the site.
     Each value is the inner <path> element(s) for a 24×24 SVG.
     Stroke icons use stroke="currentColor"; others use fill.
     ========================================================= */

  icons: {
    phone:
      '<path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>',

    whatsapp:
      '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>',

    check:
      '<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>',

    arrow:
      '<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>',

    scanner:
      '<path stroke-linecap="round" stroke-linejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/>',

    specialist:
      '<path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>',

    patients:
      '<path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>',

    emi:
      '<path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>',

    equipment:
      '<path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>',

    plan:
      '<path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>',

    map:
      '<path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>',

    calendar:
      '<path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>',

    xray:
      '<path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>',

    whitening:
      '<path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>',

    software:
      '<path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>',

    sterilisation:
      '<path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>',
  },


  /* =========================================================
     ⑪ GLOBAL SCHEMA (Google structured data)
     Do not change unless you move clinic location
     ========================================================= */

  schema: {
    type:          "Dentist",
    priceRange:    "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted:    "Cash, Credit Card, Debit Card, UPI, EMI",
    areaServed:    "Raipur, Chhattisgarh",
  },

};
