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
    where: { en: "Where", fr: "Où" },
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
        "Il n'y a pas si longtemps, j'étais plongé dans le monde de l'entreprise: longues journées, réunions interminables, la routine. Ça payait les factures, mais il manquait quelque chose. Le déclic est venu grâce à mes chiens, Panda et Zozò. Les heures passées à les promener dans les rues de Paris étaient le meilleur moment de ma journée.",
        "Alors j'ai fait un choix: quitter le bureau et faire ce qui me rend vraiment heureux: moi et une meute grandissante de chiens parisiens. Panda & Zozò est né de cette idée simple: les promenades doivent être longues, joyeuses et sans pression, comme celles que je partage chaque jour avec mes propres chiens.",
        "Chaque chien que je promène est traité comme un membre de la famille. Pas de groupes surchargés, pas de précipitation, pas de raccourcis. Juste de l'attention sincère, de l'air frais et beaucoup de queues qui remuent dans les plus belles rues et parcs de Paris.",
      ],
    },
  },

  // ---- REVIEWS ----
  reviews: {
    title: {
      en: "What dog parents say",
      fr: "Ce que disent les maîtres",
    },
    googleLink: "https://www.google.com/maps/place/Panda+and+Zoz%C3%B2+-+Dog+Walking+Service/",
    googleLinkText: {
      en: "See all reviews on Google →",
      fr: "Voir tous les avis sur Google →",
    },
    items: [
      {
        name: "Sophie M.",
        stars: 5,
        text: {
          en: "We needed a premium dog walker in the 6th arrondissement who truly understands anxious dogs. From the very first walk through Saint-Germain-des-Pr\u00e9s, our rescue came back calm and happy. The quality of care is on another level.",
          fr: "Nous avions besoin d'un promeneur canin premium dans le 6\u00e8me qui comprend vraiment les chiens anxieux. D\u00e8s la premi\u00e8re balade \u00e0 Saint-Germain-des-Pr\u00e9s, notre chien est rentr\u00e9 calme et heureux. La qualit\u00e9 du service est exceptionnelle.",
        },
      },
      {
        name: "Thomas L.",
        stars: 5,
        text: {
          en: "This is luxury dog walking done right. Two full hours through the Jardin du Luxembourg, no rushing, no packed groups. Our beagle sleeps the entire evening after. The best dog walking service in Paris 6\u00e8me, without question.",
          fr: "C'est la promenade canine de luxe bien faite. Deux heures compl\u00e8tes au Jardin du Luxembourg, sans pression, pas de groupe surcharg\u00e9. Notre beagle dort toute la soir\u00e9e. Le meilleur service de promenade du 6\u00e8me, sans h\u00e9siter.",
        },
      },
      {
        name: "Claire & Antoine",
        stars: 5,
        text: {
          en: "Positive reinforcement made a real difference with our reactive dog. She used to pull and bark on every walk near Invalides. Now she strolls calmly through the 7th arrondissement. Personalised, high quality dog care in Paris.",
          fr: "Le renforcement positif a fait toute la diff\u00e9rence avec notre chienne r\u00e9active. Elle tirait et aboyait pr\u00e8s des Invalides. Maintenant elle se prom\u00e8ne calmement dans le 7\u00e8me arrondissement. Un service canin personnalis\u00e9 et haut de gamme \u00e0 Paris.",
        },
      },
      {
        name: "James W.",
        stars: 5,
        text: {
          en: "With long work hours, finding a reliable English speaking dog walker in central Paris felt impossible. The 1.5 hour premium walks through the 5th and 6th arrondissements are exactly what our pup needs. Photos during the walk are a lovely touch.",
          fr: "Avec de longues journ\u00e9es de travail, trouver un dog walker fiable et anglophone dans le centre de Paris semblait impossible. Les balades premium d'1h30 dans le 5\u00e8me et le 6\u00e8me sont exactement ce qu'il faut. Les photos pendant la promenade, c'est un plus adorable.",
        },
      },
    ],
  },

  // ---- WHERE PAGE ----
  where: {
    subtitle: {
      en: "Our Territory",
      fr: "Notre Territoire",
    },
    tagline: {
      en: "Where we walk in Paris",
      fr: "Où nous promenons à Paris",
    },
    areasLabel: {
      en: "Our Arrondissements",
      fr: "Nos Arrondissements",
    },
    areas: [
      {
        arrond: "6ème",
        name: { en: "Saint-Germain-des-Prés", fr: "Saint-Germain-des-Prés" },
        desc: {
          en: "Our home base. Quiet residential streets, leafy squares, and the magnificent Jardin du Luxembourg, the crown jewel of every walk.",
          fr: "Notre quartier. Rues résidentielles calmes, places verdoyantes, et le magnifique Jardin du Luxembourg, le joyau de chaque promenade.",
        },
        tags: ["Jardin du Luxembourg", "Rue de Fleurus", "Place Saint-Sulpice", "Rue de Vaugirard"],
      },
      {
        arrond: "7ème",
        name: { en: "Invalides & Champ de Mars", fr: "Invalides & Champ de Mars" },
        desc: {
          en: "Wide boulevards, quiet side streets along the Esplanade des Invalides, and peaceful walks towards the Champ de Mars.",
          fr: "Larges boulevards, rues calmes le long de l'Esplanade des Invalides, et promenades paisibles vers le Champ de Mars.",
        },
        tags: ["Esplanade des Invalides", "Rue Cler", "Rue de Grenelle", "Champ de Mars"],
      },
      {
        arrond: "5ème",
        name: { en: "Latin Quarter", fr: "Quartier Latin" },
        desc: {
          en: "Charming cobblestone streets, the Jardin des Plantes for nature lovers, and calm paths along the Seine. Perfect for curious dogs.",
          fr: "Rues pavées charmantes, le Jardin des Plantes pour les amoureux de la nature, et des chemins calmes le long de la Seine. Parfait pour les chiens curieux.",
        },
        tags: ["Jardin des Plantes", "Rue Mouffetard", "Arènes de Lutèce", "Square René Viviani"],
      },
    ],
    details: {
      title: {
        en: "Every walk, an adventure",
        fr: "Chaque promenade, une aventure",
      },
      text: {
        en: "Our walks are never rushed. Each one lasts 1.5 to 2 hours, giving your dog time to explore, sniff, socialise, and simply enjoy being a dog in one of the world's most beautiful cities.",
        fr: "Nos promenades ne sont jamais pressées. Chacune dure 1h30 à 2 heures, laissant à votre chien le temps d'explorer, renifler, socialiser, et simplement profiter d'être un chien dans l'une des plus belles villes du monde.",
      },
      items: [
        { label: { en: "Duration", fr: "Durée" }, value: { en: "1.5 to 2 hours", fr: "1h30 à 2 heures" } },
        { label: { en: "Starting from", fr: "À partir de" }, value: { en: "45 €", fr: "45 €" } },
        { label: { en: "Method", fr: "Méthode" }, value: { en: "Positive only", fr: "Renforcement positif" } },
        { label: { en: "Coverage", fr: "Zone" }, value: { en: "5e · 6e · 7e", fr: "5e · 6e · 7e" } },
      ],
    },
  },

  // ---- SEO (edit for search engine optimisation) ----
  seo: {
    title_en: "Panda & Zozò: Premium Dog Walking in Paris Rive Gauche | Promenades Canines de Luxe Rive Gauche",
    title_fr: "Panda & Zozò: Promenades Canines de Luxe à Paris | Premium Dog Walking",
    description_en: "Premium dog walking in Paris 6th, 7th and 5th arrondissement. 1.5 to 2 hour walks with positive reinforcement. Personalised care. Expat friendly. WhatsApp to book.",
    description_fr: "Promenade canine haut de gamme à Paris 6ème, 7ème et 5ème arrondissement. Balades de 1h30 à 2h. Renforcement positif, soins personnalisés. WhatsApp pour réserver.",
    keywords: "premium dog walking Paris, luxury dog walking Paris, dog walking Paris 6ème, dog walking Paris 7ème, promenade canine haut de gamme Paris, dog walker Saint-Germain-des-Prés, promenade chien Paris 6ème, dog walking Jardin du Luxembourg, promenade chien Luxembourg, dog walking 75006, English speaking dog walker Paris, dog walker Paris 7th arrondissement, dog walking Paris 5ème, positive reinforcement dog walking Paris, promenade longue chien Paris, promenade chien haut de gamme, pet care Paris, garde chien Paris 6ème, balade chien Paris 6",
  },

  // ---- FOOTER ----
  footer: {
    en: "© 2026 Panda & Zozò · Paris",
    fr: "© 2026 Panda & Zozò · Paris",
  },
};
