# Mohammed Shoaib's Portfolio Website

Welcome to my personal portfolio built using **React + Tailwind CSS**, designed to showcase my professional experience, skills, certifications, and projects in a modern, visually engaging, and performant manner.

---

## 📌 Features

- 🌙 **Dark/Light Theme Toggle**  
  - Swipe-friendly toggle (mobile support)
  - Flip animation & icon glow  
  - Theme state preserved on reload

- 🌐 **Responsive Design**  
  - Mobile-first layout using Tailwind CSS  
  - Navbar collapse on scroll, expands on scroll-up  
  - Fully responsive across all device widths

- 🧠 **Hero Section**  
  - Gradient animated name (Gemini-style)  
  - Dynamic typewriter text using `react-type-animation`  
  - "Hire Me" CTA with smooth scroll

- 🧰 **Skills Section**  
  - Categorized with filter tabs (Programming, DevOps, DB, Tools)  
  - SVG logos with tooltips  
  - Hover effects & animations

- 📁 **Projects Section**  
  - Expandable cards with detailed bullet points  
  - Logos of tech stack used per project  
  - Live demo & GitHub buttons (with logos)

- 🏅 **Certifications Section**  
  - Logos + certification name  
  - Click to view badge or credential link

- 🎓 **Education & Volunteering**  
  - Styled and spaced for clear visual hierarchy

- 📬 **Contact Section**  
  - Contact info with icons  
  - Optional form (placeholder for Firebase/email integration)

- 🧭 **Navigation Bar**
  - Floating translucent glass effect  
  - Gradient border + blur  
  - Full-width top navbar with scroll visibility logic  
  - Theme toggle beside Resume button  
  - Mobile hamburger menu

---

## 🖼️ Tech Stack

| Category         | Tools |
|------------------|-------|
| Frontend         | React, Tailwind CSS |
| Icons            | React Icons, Custom SVGs |
| Animations       | `react-type-animation`, Tailwind animations |
| Hosting          | Vercel |
| Image Assets     | `/public/logos/` folder with optimized `.svg` icons |

---

## 📂 Folder Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Certifications.jsx
│   ├── Education.jsx
│   ├── Volunteering.jsx
│   ├── Contact.jsx
│   └── SwipeThemeToggle.jsx
├── utils/
│   └── useScrollFadeIn.js
├── App.jsx
├── index.jsx
public/
├── logos/             # All tech stack SVGs
├── certified_logos/   # Certification badges
├── Profile.jpg        # Profile image
└── favicon.ico
```

---

## 🌍 Live Demo

**🔗 [madycloud.vercel.app](https://madycloud.vercel.app)**  
> Hosted on Vercel with CDN optimization and HTTPS

---

## 📥 Installation & Setup

```bash
# Clone the repo
git clone https://github.com/MaDycloud-MD/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run locally
npm start
```

---

## ✨ Customization Tips

- Add your profile picture to `/public/Profile.jpg`
- Replace resume link in `Navbar.jsx` (`/resume.pdf`)
- Add more projects, skills, or certifications in their respective component arrays

---

## 🧠 Credits

- Gradient inspiration: Gemini UI + Dribbble
- Logo icons: [SimpleIcons.org](https://simpleicons.org/)
- Built with 💛 by [Mohammed Shoaib. M](https://linkedin.com/in/myselfmd)

---

## 🛡️ License

This project is open source and available under the [MIT License](LICENSE).
