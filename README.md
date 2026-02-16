# Christopher Solis — Portfolio

A modern, responsive personal portfolio web application built with **React**, **Tailwind CSS**, and **Framer Motion**.

---

## Tech Stack

| Layer      | Technology                          |
| ---------- | ----------------------------------- |
| Framework  | React 18 + Vite 6                   |
| Styling    | Tailwind CSS 3                      |
| Animations | Framer Motion 11                    |
| Icons      | React Icons                         |
| Navigation | React Scroll (smooth scroll)        |

---

## Project Structure

```
portfolio webapp/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Fixed header with mobile drawer
│   │   ├── Hero.jsx         # Landing section with CTA buttons
│   │   ├── About.jsx        # Bio, stats, highlight cards
│   │   ├── Skills.jsx       # Skill categories with progress bars
│   │   ├── Projects.jsx     # Filterable project grid with overlays
│   │   ├── Experience.jsx   # Timeline (work + education)
│   │   ├── Contact.jsx      # Contact form + social links
│   │   └── Footer.jsx       # Copyright & quick nav
│   ├── App.jsx              # Root component
│   ├── main.jsx             # Entry point
│   └── index.css            # Tailwind directives + custom utilities
├── index.html               # HTML shell with SEO meta tags
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9 (or yarn / pnpm)

### Install & Run

```bash
# 1. Install dependencies
npm install

# 2. Start development server (opens http://localhost:3000)
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

---

## Deployment

### Option A — Vercel (recommended)

1. Push this project to a GitHub / GitLab repository.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import your repo.
3. Vercel auto-detects Vite. Keep defaults and click **Deploy**.
4. Done — your site is live at `https://<project>.vercel.app`.

### Option B — Firebase Hosting

```bash
# Install Firebase CLI (once)
npm install -g firebase-tools

# Login & initialise
firebase login
firebase init hosting
# → public directory: dist
# → single-page app: Yes
# → overwrite dist/index.html: No

# Build then deploy
npm run build
firebase deploy --only hosting
```

---

## Customisation Checklist

- [ ] Replace profile image placeholder in `Hero.jsx` with a real photo
- [ ] Update social links in `Hero.jsx`, `Contact.jsx`, and `Footer.jsx`
- [ ] Add a real `resume.pdf` to the `public/` folder for the Download CV button
- [ ] Replace placeholder project data in `Projects.jsx` with your actual work
- [ ] Connect the contact form to a service like **EmailJS**, **Formspree**, or your own API
- [ ] Update `contactInfo` values in `Contact.jsx` (email, phone)
- [ ] Swap experience & education entries in `Experience.jsx` with your real timeline

---

## License

This project is free for personal and commercial use.

© 2026 Christopher Solis
