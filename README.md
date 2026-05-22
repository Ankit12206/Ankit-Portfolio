# ANKIT SHUKLA — Portfolio Website

> A high-fashion **Modern Brutalist** portfolio built with pure HTML, CSS & JavaScript. Inspired by the *Season 04* editorial design system — featuring massive typography, raw noise textures, asymmetric grids, and neon acid-green micro-interactions.

---

## 🖥️ Live Preview

<!-- Replace this URL once deployed -->
> 🔗 **[View Live Site](https://ankit-shukla-portfolio.netlify.app)**

---

## ✨ Features

- **Modern Brutalist Design** — Beige background (`#E3E2DE`), deep brownish-black (`#1B0E0D`), burnt red (`#C72A09`) accents
- **Persistent Noise Texture** — SVG `feTurbulence` fractalNoise overlay at 0.08 opacity with `mix-blend-mode: multiply`
- **Custom Cursor** — Smooth lag-behind cursor that scales and shifts colour on hover, hides the native OS cursor
- **Sticky Navigation** — Uses `mix-blend-mode: difference` to stay legible on any background
- **Asymmetric 12-Column Grid** — Alternating large/small project cards with vertical offsets
- **Scroll Reveal Animations** — `IntersectionObserver`-powered fade + slide-up on every section
- **Neon Green Hover States** — Underline scale animations on all links using `cubic-bezier(0.165, 0.84, 0.44, 1)`
- **Brutalist Contact Form** — Dark block input form with a custom neon toast notification on submit
- **Fully Data-Driven** — All content lives in one file (`data.js`) for easy updates
- **Responsive** — Collapses gracefully on mobile/tablet

---

## 📁 Project Structure

```
Portfolio Website/
│
├── index.html          # Main HTML structure & SVG noise filter
├── index.css           # Season 04 brutalist design system styles
├── app.js              # Dynamic rendering, cursor, scroll reveal, form logic
├── data.js             # ← Edit this file to update all site content
│
└── assets/
    ├── hero_bg.png           # Hero section background image
    ├── proj_neuromorph.png   # Project 1 image
    ├── proj_krypton.png      # Project 2 image
    ├── proj_aethelgard.png   # Project 3 image
    └── proj_vapor.png        # Project 4 image
```

---

## 🚀 Getting Started

### Run Locally

No build step required. Just serve the files over HTTP (ES Modules require a server, not a `file://` path):

```bash
# Using Node.js http-server
npx http-server -p 8000
```

Then open **[http://127.0.0.1:8000](http://127.0.0.1:8000)** in your browser.

### Deploy to Netlify (Drag & Drop)

1. Go to **[app.netlify.com](https://app.netlify.com)**
2. Drag the entire project folder into the deploy drop zone
3. Your site is live instantly ✅

---

## ✏️ How to Update Content

All text, projects, skills, education, and contact details are stored in **`data.js`**. You never need to touch the HTML.

### Change your bio / manifesto:
```js
profile: {
  name: "ANKIT SHUKLA",
  shortTitle: "DEVELOPER / AI ENTHUSIAST",
  manifestoText: "Your updated manifesto here...",
  ...
}
```

### Add a new project:
```js
projects: [
  {
    id: "proj-05",
    title: "MY NEW PROJECT",
    category: "WEB DEVELOPMENT",
    year: "2026",
    description: "Short description of what this project does.",
    image: "assets/my_project_image.png",  // Add image to assets/ folder
    link: "https://github.com/yourusername/repo",
    badge: "REACT/NODE"
  },
  // ... existing projects
]
```

### Add a new skill:
```js
skills: [
  { name: "YOUR NEW SKILL", category: "core" },
  ...
]
```

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| Background | `#E3E2DE` | Page background (beige) |
| Text Dark | `#1B0E0D` | Primary text & dark elements |
| Accent Burnt | `#C72A09` | CTAs, hover borders, hero subtitle |
| Accent Neon | `#31EF07` | Hover underlines, badges, form button |
| Border Gray | `#D9D9D9` | Section borders, dividers |
| Highlight Brown | `#61220F` | Manifesto highlights, divider titles |

| Font | Usage |
|---|---|
| [Clash Grotesk](https://www.fontshare.com/fonts/clash-grotesk) | Display headings, logo, CTAs |
| [General Sans](https://www.fontshare.com/fonts/general-sans) | Body text |
| [Space Mono](https://fonts.google.com/specimen/Space+Mono) | Technical metadata, badges, prices |

---

## 🛠️ Tech Stack

- **HTML5** — Semantic structure
- **Vanilla CSS** — Custom properties, 12-column grid, animations
- **Vanilla JavaScript (ES Modules)** — No frameworks, no dependencies
- **SVG Filters** — `feTurbulence` fractalNoise for grain texture
- **IntersectionObserver API** — Scroll-triggered reveal animations

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Designed & built by <strong>Ankit Shukla</strong> · Season 04 / Edition 2026</p>
