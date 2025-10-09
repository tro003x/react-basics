## Tailwind React Pricing (Vite + React)

A small React + Vite demo that uses Tailwind CSS (with DaisyUI), Recharts, and Axios to demonstrate a pricing UI and small charts. It includes:

- Responsive Navbar components
- A Pricing options grid (cards) populated from `public/PricingData.json`
- A Book reservations Bar chart populated from `public/booksData.json` (fetched with Axios)
- A Result Line chart (Recharts) example

This README explains how to run the project locally, where the main files are, and a few troubleshooting tips.

---

## Prerequisites

- Node.js (v16+ recommended)
- npm (or yarn)

## Setup & Run

1. Open a terminal and change into the project folder (this folder contains package.json):

```powershell
cd "E:\Practice Project\React\tailwind-react-pricing"
```

2. Install dependencies (if you haven't already):

```powershell
npm install
```

3. Start the dev server:

```powershell
npm run dev
```

4. Open the URL Vite prints (usually http://localhost:5173) in your browser.

Build for production:

```powershell
npm run build
```

Preview the production build locally:

```powershell
npm run preview
```

---

## What I changed / Key files

- `src/components/Navbar/Navbar.jsx` — responsive navbar and link handling (keys added for list items; hover area improved).
- `src/components/PricingOptions/PricingOption.jsx` — fetches `PricingData.json`, renders pricing cards, shows features with Lucide icons, and includes Subscribe buttons.
- `src/components/BookData/BookData.jsx` — fetches `booksData.json` with Axios and renders a responsive Recharts BarChart for member/book data.
- `src/components/Charts/ResultCharts.jsx` — responsive Recharts LineChart example with smooth (`type="monotone"`) curves.
- `tailwind.config.js` — Tailwind config (ES module) set up to scan the project and enable DaisyUI plugin.
- `public/PricingData.json` and `public/booksData.json` — demo JSON data used by the components (files in `public/` are served at project root, e.g. `/booksData.json`).

---

## Working with data files (public)

Place static JSON files in `public/` so they are served at the root of the dev server. Example:

- `public/booksData.json` → available at `http://localhost:5173/booksData.json`
- `public/PricingData.json` → available at `http://localhost:5173/PricingData.json`

Notes:
- The BookData component accepts either a single object or an array in `booksData.json`. If you want multiple chart bars as groups, make `booksData.json` an array of objects.

---

## Recharts (charts)

- Recharts components are imported from `recharts`. If your editor auto-imports a wrong symbol (for example Lucide icons with similar names), manually add the `recharts` import line. Examples are in `src/components/Charts/ResultCharts.jsx` and `src/components/BookData/BookData.jsx`.
- To make lines smooth use `type="monotone"` (or `basis`/`natural`) on `<Line />`.

---

## Tailwind / DaisyUI notes

- Tailwind utilities are included via `src/App.css` and `tailwind.config.js`. If you add new content files or change the `content` globs, restart the dev server so Tailwind picks up new classes.

---

## Troubleshooting

- Blank page after starting dev server: ensure you ran `npm run dev` from `e:\Practice Project\React\tailwind-react-pricing` (the folder with package.json). Running it from the parent folder will show `Missing script: "dev"`.
- `booksData.json` not found (404): confirm the file exists in `public/` and fetch path is `/booksData.json`.
- Auto-import in VS Code suggests wrong symbol: accept the suggestion that includes `from "recharts"` or add the import manually.
- If you see runtime errors from `use()` or Suspense: that pattern is for Server Components — this project uses client-side fetching (useEffect/axios). Do not call `use()` in client components.

---

## Contributing

1. Create a feature branch
2. Make edits, run and test locally
3. Commit and open a PR


