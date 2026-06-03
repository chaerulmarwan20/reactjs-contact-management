# AGENTS.md

## Commands

- `npm run dev` — Vite dev server (port 5173 default)
- `npm run build` — production build
- `npm run lint` — ESLint flat config on `**/*.{js,jsx}`, ignores `dist`. Rule: `no-unused-vars` allows PascalCase/underscore prefixed names
- `npm run preview` — preview production build

No test framework installed.

## API

- Base: `VITE_API_PATH` from `.env` → `http://localhost:3000/api`
- All API modules in `src/lib/api/` — plain `fetch`, no Axios/React Query
- Auth: JWT stored in localStorage key `"token"`. Sent as `Authorization: token` header (no `"Bearer "` prefix)
- Response shape: `{ data, errors, paging }`. Check `response.status === 200` for success

## Routing

- All routes defined in `src/main.jsx` using `react-router` v7
- Public: `/register`, `/login` (under `<Layout/>`)
- Dashboard (under `<DashboardLayout/>`): users/profile, users/logout, contacts (list, create, `:id` detail, `:id/edit`), addresses (`:id/addresses/create`, `:id/addresses/:addressId/edit`)

## Architecture

- **No TypeScript** — plain JSX
- **State**: local `useState` + `useLocalStorage` (from `react-use`) for token. No Redux/Zustand/Context
- **Data fetching**: `useEffectOnce` from `react-use` (not raw `useEffect([])`). ContactList uses a `reload` toggle to trigger `useEffect` re-fetch
- **Alerts**: SweetAlert2 via `src/lib/alert.js` (`alertSuccess`, `alertError`, `alertConfirm`)
- **Icons**: Font Awesome 6 via CDN (`<i className="fas fa-...">`)
- **Styles**: Tailwind v4 — imported as `@import "tailwindcss"` in `src/style.css`. Uses v4 syntax (`bg-linear-to-br`, not `bg-gradient-to-br`). Custom font (Poppins) and `shadow-custom` from `tailwind.config.js` (works as config file alongside v4)
- **Forms**: controlled inputs (`value` + `onChange`), optional chaining (`?.`) on response data, `confirmPassword` validated client-side

## Response

- Setiap jawaban berikan emoticon, saya suka emoticon
