// ============================================================
//  PANDA & ZOZÒ — WEBSITE CONTENT
//  Edit this file to change any text on the website.
//  No coding knowledge needed — just change the text in quotes.
// ============================================================

const SITE_CONTENT = {

  // ---- BRAND INFO ----
  brand: {
    name: "Panda & Zozò",
    whatsapp: "+447712622536",        // your WhatsApp number (no spaces)
    website: "https://panda-zozo.com",
    email: "",                         // add email if you want
    instagram: "",                     // add instagram handle if you want
    year: "2026",
  },

  // ---- IMAGES ----
  // Change these paths to swap illustrations.
  // Put new SVG or image files in the /images folder.
  // Set show to false to hide a dog.
  images: {
    dog1: { src: "images/dog-1.svg", show: true },
    dog2: { src: "images/dog-2.svg", show: true },
    about: "images/about.svg",
  },

  // ---- IMAGE SIZING ----
  // Adjust these to control illustration sizes and spacing.
  // Desktop values (mobile scales down automatically).
  // Set to null to use the defaults in the CSS.
  imageSizing: {
    dog1_width:  "200px",              // left dog max width (default: 200px)
    dog2_width:  "140px",              // right dog max width (default: 140px)
    dogs_gap:    "16px",               // space between the two dogs (default: 16px)
    about_width: "200px",              // about illustration max width (default: 300px)
  },

  // ---- PRICING ----
  pricing: [
    { amount: 45, currency: "€", duration_en: "1.5 hours", duration_fr: "1.5 heures" },
    { amount: 60, currency: "€", duration_en: "2 hours",   duration_fr: "2 heures" },
  ],

  // ---- NAVIGATION ----
  nav: {
    home:  { en: "Home",  fr: "Accueil" },
    about: { en: "About", fr: "À propos" },
  },

  // ---- HOME PAGE ----
  home: {
    subtitle: {
      en: "Dog Walking · Paris",
      fr: "Promenades Canines · Paris",
    },
    tagline: {
      en: "Happy, carefree dog walks in Paris",
      fr: "Promenades heureuses et sans souci à Paris",
    },
    paragraphs: {
      en: [
        "At Panda & Zozò, we offer simple, joyful, and stress-free dog walks. Outings can be with my dog, Zozò, for companions who love to play and socialise, or solo for shyer dogs who prefer their own space.",
        "We are a straightforward, no-frills service that always puts quality over quantity.",
      ],
      fr: [
        "Chez Panda & Zozò, nous proposons des promenades canines simples, joyeuses et sans stress. Les sorties peuvent se faire avec mon chien, Zozò, pour les compagnons qui aiment jouer et socialiser, ou en solo pour les chiens plus timides qui préfèrent leur tranquillité.",
        "Nous sommes un service direct, sans superflu, qui privilégie toujours la qualité à la quantité.",
      ],
    },
    highlight: {
      en: "Each walk lasts between 1.5 and 2 hours to ensure a full physical workout and a real moment of well-being for your dog.",
      fr: "Chaque promenade dure entre 1h30 et 2 heures afin de garantir une dépense physique complète et un vrai moment de bien-être pour votre chien.",
    },
    closing: {
      en: "We use only positive reinforcement when needed, always respecting the pace, character, and needs of each dog.",
      fr: "Nous utilisons uniquement le renforcement positif lorsque nécessaire, dans le respect du rythme, du caractère et des besoins de chaque chien.",
    },
    cta: {
      en: "WhatsApp Us",
      fr: "Écrivez-nous",
    },
  },

  // ---- ABOUT PAGE ----
  about: {
    subtitle: {
      en: "Our Story",
      fr: "Notre Histoire",
    },
    title: {
      en: "The story behind the leash",
      fr: "L'histoire derrière la laisse",
    },
    paragraphs: {
      en: [
        "Not long ago, I was deep in the corporate world: long hours, endless meetings, the usual. It paid the bills, but something was missing. The turning point came with my dogs, Panda and Zozò. The hours I spent walking them through the streets of Paris were the happiest part of my day.",
        "So I made a choice: leave the desk behind and do what actually makes me, and a growing pack of Parisian pups, happy. Panda & Zozò was born from that simple idea: that walks should be long, joyful, and unhurried, just like the ones I share with my own dogs every day.",
        "Every dog I walk is treated like family. No packed groups, no rushing, no shortcuts. Just genuine care, fresh air, and plenty of tail-wagging through the best streets and parks Paris has to offer.",
      ],
      fr: [
        "Il n'y a pas si longtemps, j'étais plongé dans le monde de l'entreprise : longues journées, réunions interminables, la routine. Ça payait les factures, mais il manquait quelque chose. Le déclic est venu grâce à mes chiens, Panda et Zozò. Les heures passées à les promener dans les rues de Paris étaient le meilleur moment de ma journée.",
        "Alors j'ai fait un choix : quitter le bureau et faire ce qui me rend vraiment heureux : moi et une meute grandissante de chiens parisiens. Panda & Zozò est né de cette idée simple : les promenades doivent être longues, joyeuses et sans pression, comme celles que je partage chaque jour avec mes propres chiens.",
        "Chaque chien que je promène est traité comme un membre de la famille. Pas de groupes surchargés, pas de précipitation, pas de raccourcis. Juste de l'attention sincère, de l'air frais et beaucoup de queues qui remuent dans les plus belles rues et parcs de Paris.",
      ],
    },
  },

  // ---- SEO (edit for search engine optimisation) ----
  seo: {
    title_en: "Panda & Zozò — Premium Dog Walking in Paris Rive Gauche | Promenades Canines de Luxe Rive Gauche",
    title_fr: "Panda & Zozò — Promenades Canines de Luxe à Paris | Premium Dog Walking",
    description_en: "Luxury dog walking service in Paris. 1.5–2 hour unhurried walks through the 6th arrondissement, Rive Gauche, and beyond. Positive reinforcement, personalised care, premium quality. WhatsApp to book.",
    description_fr: "Service de promenades canines haut de gamme à Paris. Balades de 1h30 à 2h dans le 6ème arrondissement, Rive Gauche, et au-delà. Renforcement positif, soins personnalisés, qualité premium.",
    keywords: "dog walking Paris, promenade chien Paris, dog walker 6ème, rive gauche, luxury dog walking, premium dog walking Paris, promenade canine haut de gamme, dog sitter Paris, dog walking Saint-Germain, promenade chien Luxembourg, dog walking 75006, pet care Paris, garde chien Paris, positive reinforcement dog walking, balade chien Paris 6, dog walking Jardin du Luxembourg, promenade chien Saint-Germain-des-Prés, high end dog walking Paris, dog walker Paris expat, promenade longue chien Paris",
  },

  // ---- FOOTER ----
  footer: {
    en: "© 2026 Panda & Zozò · Paris",
    fr: "© 2026 Panda & Zozò · Paris",
  },
};
