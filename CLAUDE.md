# stand-website

## WHY
Marketing landing page for Stand. Pure React JSX — no TypeScript, no routing, no auth.
Deployed via AWS Amplify from the `main` branch (auto-deploys on push).

## WHAT
**Commands:** `npm run dev` | `npm run build`
**Deploy:** Push to `main` → Amplify auto-deploys to playstand.app

**Branches:** `main` (default). PRs → squash merge only. CI: `.github/workflows/ci.yml` (`npm run build` on PRs). Workflow: [stand-backend/docs/DEVELOPMENT_WORKFLOW.md](https://github.com/adrisanpu/stand-backend/blob/dev/docs/DEVELOPMENT_WORKFLOW.md).

**Section order (fixed):** Navbar → Hero → About → ClientLogos → Catalog → Pricing → Contact → Footer

**Brand (see repo root DESIGN.md):**
- Hex source of truth: `src/constants/brandColors.js` — imported by `tailwind.config.js` as `brand.dark`, `brand.orange`, `brand.orange-dark`, `brand.orange-light`
- In JSX prefer Tailwind: `bg-brand-dark`, `text-brand-orange`, `hover:bg-brand-orange-dark`; radius tokens `rounded-card` (16px), `rounded-control` (8px), `rounded-pill`
- Logo: `/public/images/stand-logo.png`
- CTA link: `https://playstand.app/login` (always opens in new tab)
- Custom utilities: `bg-glass`, `text-gradient`, `card-hover` in `src/index.css`

**Tech:** Tailwind CSS 3.4.4 | Lucide React (icons) | React 18 JSX

## HOW
- **No TypeScript** — all files are .jsx, never .tsx
- **No React Router** — single-page, all sections in App.jsx via scroll
- **No auth** — website has zero authentication code
- Use Lucide icons (`import { IconName } from 'lucide-react'`), not emoji or custom SVGs
- Section components live in `src/components/` — one file per section
- Tailwind only for styling — no CSS modules, no styled-components
- Keep bundle small: no heavy libs, no state management
