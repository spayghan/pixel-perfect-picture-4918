# Shashvat Payghan — Portfolio Website

A futuristic, high-performance personal portfolio showcasing AI & Data Science projects, full-stack web applications, competition milestones, and a real-time interactive terminal.

Designed with a cyber-futuristic dark mode aesthetic featuring neon cyan and matrix green accents, custom pure-CSS cyberpunk glitch animations, and Framer Motion reveal effects.

---

## 🏗️ Architecture: Clean Frontend & Backend Distribution

```
pixel-perfect-picture-4918/
├── backend/                       # Dedicated Node.js & Express API
│   ├── config/
│   │   └── db.js                 # Mongoose MongoDB connection
│   ├── controllers/
│   │   └── contactController.js  # Validation, honeypot & submission logic
│   ├── models/
│   │   └── Contact.js            # MongoDB Contact schema
│   ├── routes/
│   │   └── contactRoutes.js      # Express /api/contact router
│   ├── server.js                 # Backend entry point (Port 5000)
│   ├── package.json              # Backend dependencies & scripts
│   └── .env.example              # Database environment template
│
├── src/                          # Modern React 19 Frontend
│   ├── components/
│   │   └── portfolio/
│   │       ├── Hero.tsx          # Hero section (portrait on left, bio on right)
│   │       ├── About.tsx         # About cards
│   │       ├── Skills.tsx        # Technical arsenal
│   │       ├── Projects.tsx      # "Things I've Built" cards
│   │       ├── Milestones.tsx    # "MILESTONES UNLOCKED" competition photos
│   │       ├── EducationExperience.tsx # Education & MERN learning journey
│   │       ├── TerminalSection.tsx     # Interactive CLI shell
│   │       ├── Contact.tsx       # MongoDB contact form ("TRANSMIT MESSAGE")
│   │       ├── Navbar.tsx        # Navigation header
│   │       └── Footer.tsx        # Footer with social links
│   ├── data/
│   │   └── portfolio.ts          # Centralized data configuration
│   └── styles.css                # Cyberpunk glitch keyframes & tokens
│
├── public/                       # Static public assets
│   ├── favicon.svg               # Custom <SP/> monogram favicon
│   └── images/
│       ├── profile.jpg           # Your home profile photo slot
│       ├── projects/             # Original project thumbnails
│       └── achievements/         # Winning milestone photographs
│
├── .env.example                  # Root environment variables template
└── vite.config.ts                # Vite config with /api proxy to port 5000
```

---

## 📸 Image Guide: Where to Put Your Images

Simply place your own images in the corresponding paths under `public/images/`. No code changes are required:

### 1. Home Profile Photo (Replaces the stock photo)
- **Path**: `public/images/profile.jpg` (or `.png`)
- *Tip: A square or portrait photo with a dark/neutral background works best with the surrounding neon aura.*

### 2. "Things I've Built" Project Images
Place your project screenshots or graphics in `public/images/projects/`:
- **Project A (AI Legal Metrology)**:
  `public/images/projects/legal-metrology-inspection.png` (or `.jpg` / `.svg`)
- **Project B (Employee Onboarding Automation)**:
  `public/images/projects/employee-onboarding-automation.png` (or `.jpg` / `.svg`)
- **Project C (AI Inventory & E-Commerce)**:
  `public/images/projects/inventory-ecommerce-management.png` (or `.jpg` / `.svg`)
- **Project D (Predictive Maintenance Manufacturing)**:
  `public/images/projects/predictive-maintenance-manufacturing.png` (or `.jpg` / `.svg`)

### 3. "MILESTONES UNLOCKED" Winning Photographs
Place your competition and event photographs in `public/images/achievements/`:
- **AYURVEDA-X Ideathon**: `public/images/achievements/ayurveda-x.jpg`
- **No-Code Talent Battle**: `public/images/achievements/no-code-talent-battle.jpg`
- **Sign2Voice ⚡**: `public/images/achievements/sign2voice.jpg`

---

## 🚀 Running the Project Locally

### 1. Setup Environment
Ensure your `.env` is configured with your MongoDB URI:
```env
MONGODB_URI=mongodb://localhost:27017/portfolio
PORT=5000
```

### 2. Run the Express Backend (Port 5000)
```bash
npm run server
```
*Or navigate into `backend/` and run:*
```bash
cd backend
npm start
```

### 3. Run the Frontend (Vite)
In a second terminal window:
```bash
npm run dev
```
Open `http://localhost:3000` in your browser. All contact form transmissions will route to your MongoDB database via the `/api/contact` proxy.

---

## 🔗 Social Links

- **GitHub**: [github.com/spayghan](https://github.com/spayghan)
- **LinkedIn**: [linkedin.com/in/shashvat-payghan-a08a20330](https://www.linkedin.com/in/shashvat-payghan-a08a20330/)
- **X (Twitter)**: [x.com/Shashvatpayghan](https://x.com/Shashvatpayghan)
- **YouTube**: [youtube.com/@AIpoweredGeneration](https://www.youtube.com/@AIpoweredGeneration)
- **Email**: [payghanshashvat@gmail.com](mailto:payghanshashvat@gmail.com)
