# Shashvat Payghan — Portfolio Website

A futuristic, high-performance personal portfolio showcasing AI & Data Science projects, full-stack web applications, competition milestones, and a real-time interactive terminal.

Designed with a cyber-futuristic dark mode aesthetic featuring neon cyan and matrix green accents, custom pure-CSS cyberpunk glitch animations, and Framer Motion reveal effects.

---

## 🏗️ Architecture: 2 Main Folders (Frontend & Backend)

```
pixel-perfect-picture-4918/
├── frontend/                     # Pure React + Vite Single Page Application
│   ├── public/                   # Static images, favicon, icons
│   │   ├── favicon.svg           # <SP/> Monogram favicon
│   │   └── images/
│   │       ├── profile.jpg       # Hero profile portrait photo
│   │       ├── projects/         # Project screenshots / thumbnails
│   │       └── achievements/     # Winning milestone photos
│   ├── src/
│   │   ├── components/portfolio/ # All 13 modular React UI components
│   │   ├── data/portfolio.ts     # Centralized content, projects, and milestones
│   │   ├── lib/utils.ts          # Tailwind styling helpers
│   │   ├── App.tsx               # Main React Application
│   │   ├── main.tsx              # React DOM entry
│   │   └── styles.css            # Cyberpunk glitch & theme styling
│   ├── index.html                # HTML entry point with fonts & meta tags
│   ├── package.json              # Frontend dependencies & scripts
│   ├── vite.config.ts            # Vite bundler & API proxy configuration
│   └── .env.example              # Frontend environment variables template
│
└── backend/                      # Node.js + Express + MongoDB API Server
    ├── config/db.js              # Mongoose MongoDB connection
    ├── controllers/              # Contact validation, rate limit & storage logic
    ├── models/Contact.js         # MongoDB Contact schema
    ├── routes/contactRoutes.js   # Express /api/contact router
    ├── server.js                 # Express server entry point (Port 5000)
    ├── package.json              # Backend dependencies & scripts
    └── .env.example              # Database connection string template
```

---

## 🚀 How to Deploy on Render

### 1. Deploy Backend (Express + MongoDB)
1. In Render Dashboard, click **New +** → **Web Service**.
2. Connect your GitHub repository.
3. Set the following settings:
   - **Name**: `pixel-perfect-picture-backend` (or your choice)
   - **Root Directory**: `backend`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
4. Under **Environment Variables**, add:
   - `MONGODB_URI`: *Your MongoDB Atlas connection string*
   - `PORT`: `5000`
   - `NODE_ENV`: `production`
5. Click **Create Web Service**. Once deployed, copy your backend URL (e.g. `https://pixel-perfect-picture-4918-1.onrender.com`).

---

### 2. Deploy Frontend (React SPA)
1. In Render Dashboard, click **New +** → **Static Site** (100% Free & Fast).
2. Connect your GitHub repository.
3. Set the following settings:
   - **Name**: `shashvat-payghan-portfolio`
   - **Root Directory**: `frontend`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
4. Under **Environment Variables**, add:
   - `VITE_API_URL`: `https://pixel-perfect-picture-4918-1.onrender.com/api/contact` (your backend URL + `/api/contact`)
5. Click **Create Static Site**.

---

## 💻 Local Development

### Run Both Together:
```bash
# Terminal 1: Run Backend API
npm run dev:backend

# Terminal 2: Run Frontend React App
npm run dev:frontend
```

Frontend will run at: `http://localhost:5173`  
Backend API will run at: `http://localhost:5000`
