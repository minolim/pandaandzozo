# SEO Action Plan — Panda & Zozò

## Current State

Your site already ranks #1 for "panda zozo paris" — that's your branded search working. The goal now is to also appear for **non-branded searches** like "dog walking Paris 6th", "promenade chien Saint-Germain", "dog walker near Jardin du Luxembourg", etc.

Two separate tracks: **technical/on-site fixes** (you control) and **off-site authority building** (takes time).

---

## TRACK 1: On-Site (Do This Week)

### 1. Add JSON-LD Structured Data to Every Page

The `homepage-schema.html` file has ready-to-paste snippets. This tells Google explicitly what your business is, where you operate, what you charge, and what languages you speak. Three schema types included:

- **LocalBusiness** — your core business entity, address, service area, pricing
- **WebSite** — site identity
- **FAQPage** — common questions, which can show as rich results in search

**Action:** Copy the `<script type="application/ld+json">` blocks into your homepage `<head>`. The `where.html` page already has its own LocalBusiness schema embedded.

**Validate at:** https://validator.schema.org/ and https://search.google.com/test/rich-results

### 2. Add a Sitemap + robots.txt

Your site likely has no sitemap. Add:
- `sitemap.xml` at root (`panda-zozo.com/sitemap.xml`)
- `robots.txt` at root — references the sitemap

Both files are provided. Update `<lastmod>` dates whenever you change pages.

### 3. Submit to Google Search Console

This is the single most important step for getting indexed properly.

1. Go to https://search.google.com/search-console/
2. Add property → choose "URL prefix" → enter `https://panda-zozo.com`
3. Verify ownership (easiest for GitHub Pages: download the HTML verification file and add to your repo root)
4. Once verified: go to **Sitemaps** → submit `https://panda-zozo.com/sitemap.xml`
5. Use **URL Inspection** to request indexing of each page individually

### 4. Fix Your Meta Tags (Every Page)

Each page needs unique, keyword-rich:

**Homepage `<title>`:**
```
Panda & Zozò — Premium Dog Walking in Paris | 6th, 7th & 5th Arrondissements
```

**Homepage `<meta name="description">`:**
```
Premium dog walking service in Paris 6th arrondissement. Luxury 1.5–2 hour promenades through Saint-Germain-des-Prés, Jardin du Luxembourg & the Left Bank. Expat friendly. From 36€.
```

**About page `<title>`:**
```
About Panda & Zozò — Dog Walker Paris | Positive Reinforcement Dog Walking
```

**Where page** — already done in the provided file.

### 5. Add an `<h1>` to Your Homepage

Looking at your site, the `<h1>` tags appear to be empty. Google needs a visible, keyword-rich H1. Something like:

```html
<h1>Premium Dog Walking in Paris — Saint-Germain-des-Prés</h1>
```

### 6. Add Open Graph Tags

For better social sharing (and Google sometimes uses these too). Add to every page `<head>`:

```html
<meta property="og:title" content="Panda & Zozò — Premium Dog Walking in Paris">
<meta property="og:description" content="Luxury dog walks in Paris 6th, 7th & 5th. From 36€.">
<meta property="og:image" content="https://panda-zozo.com/images/og-image.jpg">
<meta property="og:url" content="https://panda-zozo.com/">
<meta property="og:type" content="website">
```

### 7. Add a `<link rel="canonical">` to Every Page

Prevents duplicate content issues:
```html
<link rel="canonical" href="https://panda-zozo.com/">
```

### 8. Ensure Alt Text on All Images

Every `<img>` should have descriptive alt text with natural keywords:
```html
<img src="..." alt="Happy dog walking on leash through Saint-Germain-des-Prés, Paris">
<img src="..." alt="Panda and Zozò owner with dog at Jardin du Luxembourg">
```

---

## TRACK 2: Google Business Profile (Do This Week)

This is how you show up in the **Google Maps pack** (the map + 3 listings that appear for local searches). Without this, you're invisible for "dog walking near me" type queries.

### Setup Steps

1. Go to https://business.google.com/
2. Create a profile for **Panda & Zozò**
3. **Category:** Primary = "Dog Walker" · Secondary = "Pet Sitter", "Pet Service"
4. **Service area:** List Paris 6th (75006), 7th (75007), 5th (75005) as your service areas (don't set a physical address if you work from home — use "service area" mode instead)
5. **Description:** Use keywords naturally. Mention "premium dog walking", "Saint-Germain-des-Prés", "Jardin du Luxembourg", "expat friendly", "English and French"
6. **Website:** `https://panda-zozo.com`
7. **Photos:** Upload 10+ high-quality photos — dogs on walks, recognizable Paris locations, you with dogs
8. **Verify** the business (Google will send a postcard or offer phone/email verification)

### Ongoing GBP Maintenance

- **Post weekly** — short updates with photos from walks, tips, seasonal content
- **Ask every happy client for a Google review** — reviews are the #1 local ranking factor
- **Respond to every review** with genuine, specific responses
- **Keep hours/info current**
- **Use the Q&A section** — seed it with common questions and answer them yourself

---

## TRACK 3: Off-Site Authority (Ongoing)

### Citations (NAP Consistency)

List your business with **identical** name, address, and phone on:

- Google Business Profile
- Apple Maps (via Apple Business Connect)
- Bing Places
- Yelp France
- PagesJaunes.fr
- Rover.com (if applicable)
- Instagram bio (link to website)
- Facebook page (if you have one)

The key is **exact consistency** — "Panda & Zozò" everywhere, not "Panda and Zozo" on some and "Panda & Zozò" on others.

### Reviews Strategy

- After every good walk, send a short message with a direct link to leave a Google review
- Aim for 5+ reviews in the first month, then 1-2 per month ongoing
- Respond to every review (positive and negative)

### Content / Blog (Optional but Powerful)

If you ever want to add a blog, topics like these would target long-tail searches:

- "Best dog-friendly parks in Paris 6th arrondissement"
- "Dog walking tips for Paris in summer"
- "Expat guide to finding a dog walker in Paris"
- "Positive reinforcement dog walking — what it means for your dog"

### Social Signals

- Instagram is great for this business — post regularly with location tags
- Use hashtags: #dogwalkingparis #promenadechien #parisdogs #saintgermaindespres
- Link back to your website from bio

---

## TRACK 4: Technical Checklist

- [ ] Site loads fast on mobile (test at https://pagespeed.web.dev/)
- [ ] All pages are HTTPS (you have this ✓)
- [ ] No broken links
- [ ] Images are compressed (use WebP where possible)
- [ ] `<html lang="en">` on English pages, `<html lang="fr">` on French pages
- [ ] If you have FR/EN versions, add `hreflang` tags:
  ```html
  <link rel="alternate" hreflang="en" href="https://panda-zozo.com/">
  <link rel="alternate" hreflang="fr" href="https://panda-zozo.com/fr/">
  ```

---

## Priority Order

1. **Google Business Profile** — biggest impact for local search, free
2. **Google Search Console** — submit sitemap, request indexing
3. **Structured data (JSON-LD)** — paste the provided schemas
4. **Fix meta titles, descriptions, H1s, alt text** — quick wins
5. **Where page** — add to your site
6. **Citations** — list on Apple Maps, Yelp, PagesJaunes
7. **Reviews** — start asking clients
8. **Content/blog** — longer term

---

## Expected Timeline

- **Week 1-2:** Google indexes your sitemap, Business Profile starts appearing
- **Month 1-2:** You start showing up in local pack results for branded + some non-branded queries
- **Month 3-6:** With consistent reviews and citations, you should appear for "dog walking Paris 6th" and similar terms
- **Month 6+:** Established authority, showing in AI overviews and local results consistently

SEO is cumulative. Every review, every consistent citation, every fresh photo compounds over time.
