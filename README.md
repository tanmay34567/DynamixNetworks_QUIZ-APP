# Quiz App

A small **React + Vite + TypeScript** quiz application created for an assessment task. The app provides a clean quiz flow: **Start → Loading → Quiz → Results**, and uses a local question bank defined in `services/questions.ts`.

---

## 🚀 Features

* Lightweight React + Vite setup
* Local question bank (no external API calls)
* Smooth state transitions (start, loading, quiz, results)
* Fully typed with TypeScript
* Tailwind CSS styling (CDN-based setup)

---

## 📦 Tech Stack

* **React 18**
* **TypeScript**
* **Vite**
* **Tailwind CSS via CDN**

---

## 📁 Project Structure

```
├── index.html          # Main HTML file (loads Tailwind CDN)
├── index.tsx           # React entry point
├── App.tsx             # Main app with quiz state machine
├── components/         # Start, Quiz, Loading, Result screens
│   ├── StartScreen.tsx
│   ├── QuizScreen.tsx
│   ├── ResultScreen.tsx
│   └── LoadingScreen.tsx
├── services/
│   └── questions.ts    # Local question bank & getQuestions() mock async fetch
├── vite.config.ts      # Vite configuration
└── package.json        # Scripts and dependencies
```

---

## 🔧 Prerequisites

* **Node.js 18+** (recommended)
* **npm** (comes with Node)

Check versions:

```powershell
node -v
npm -v
```

---

## 🏁 Getting Started

### 1️⃣ Install dependencies

```powershell
cd <project-folder>
npm install
```

### 2️⃣ (Optional) Set environment variable used in `vite.config.ts`

```powershell
$env:GEMINI_API_KEY='your_key_here'; npm run dev
```

### 3️⃣ Start the development server

```powershell
npm run dev
```

Open in browser: **[http://localhost:3000](http://localhost:3000)**

### 4️⃣ Build for production

```powershell
npm run build
```

Output will be in the `dist/` directory.

### 5️⃣ Preview production build

```powershell
npm run preview
```

---

## 🎨 Tailwind CSS Notes

This project uses Tailwind via CDN in `index.html`:

```html
<script src="https://cdn.tailwindcss.com"></script>
```

You may see a console warning:

> "cdn.tailwindcss.com should not be used in production..."

This is only a recommendation. The app works fine for development.

### Recommended production setup (optional):

```powershell
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Add the Tailwind directives to your CSS entry file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Then import the CSS in `index.tsx`.

---

## 🛠️ Troubleshooting

### ❗ Blank screen

* Ensure dev server is running.
* Check browser console for errors.
* Confirm `index.html` has:

```html
<script type="module" src="/index.tsx"></script>
```

### ❗ Dependency issues

Reinstall node modules:

```powershell
Remove-Item -Recurse -Force node_modules
npm install
```

---

## 📄 License

This project is provided for assessment/learning purposes. Add your license if needed.

---

## 🤝 Contributions

Feel free to fork and enhance the UI, questions, or functionality.

---

## 💡 Maintainer Notes

If you need help setting up Tailwind locally, adding `.env.example`, or improving structure—just ask!

---

