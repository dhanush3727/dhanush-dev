# Dhanush S — Developer Portfolio

Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Structure

```
app/                 # App Router pages, layout, global styles
components/
  sections/           # Page sections (hero, about, skills, experience, projects, contact, footer, navbar)
  projects/           # Project card component
  ui/                 # Shared primitives (button, badge, card, section heading, reveal)
lib/
  data.ts             # All portfolio content (profile, projects, skills, etc.)
  utils.ts            # cn() class merge helper
public/
  resume/             # Resume PDF served at /resume/Dhanush_S_Resume.pdf
```

## Notes

### Contact form

The form in `components/sections/contact.tsx` collects the fields and manages
its own loading / success / error states, but **does not send anything yet**.

To connect an email service, replace the body of `sendContactMessage()` near the
top of that file. Throw on failure and the error state shows automatically — no
other changes needed.

- Add your photo at `public/profile/photo.jpg` (square headshot, ~800x800px) — the hero section
  picks it up automatically and shows initials as a fallback until then.
- Update `lib/data.ts` to change any content — project details, skills, experience, links.
- Replace `public/icon.png` and `public/og-image.png` with real brand/OG assets.
- Fonts (Inter, JetBrains Mono) load from Google Fonts via a `<link>` tag in `app/layout.tsx`
  so the app doesn't require network access to Google Fonts at build time.
