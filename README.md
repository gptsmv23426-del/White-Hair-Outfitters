# White Hair Outfitters — Landing Page

Premium single-page landing page for Eric Painter's South Texas hunting guide operation. Built to establish credibility and drive contact inquiries.

**Live site:** https://white-hair-outfitters.vercel.app
**GitHub:** https://github.com/gptsmv23426-del/White-Hair-Outfitters

---

## Tech Stack

- **Next.js 16** (App Router, static export)
- **Tailwind CSS v4** with custom theme variables
- **Framer Motion** — parallax, scroll animations, transitions
- **TypeScript**
- **Deployed on Vercel**, connected to GitHub (auto-deploys on push)

---

## Running Locally

```bash
cd white-hair-outfitters
npm install
npm run dev
```

Then open http://localhost:3000

---

## How to Make Changes

### Changing contact info (phone, email, Facebook)
Edit `src/lib/constants.ts` — the `CONTACT` object at the top.

### Adding or editing a species card
Edit the `SPECIES` array in `src/lib/constants.ts`. Each entry looks like:

```ts
{
  name: "Species Name",
  image: "/images/your-photo.jpg",
  description: "Short description shown on hover.",
  bgPosition: "center",  // optional: "top", "bottom", etc.
  bgSize: "cover",       // optional: "contain" to show full image uncropped
}
```

Place the photo in `public/images/` first.

### Adding photos to the gallery
Edit the `GALLERY_IMAGES` array in `src/lib/constants.ts`. Place the photo in `public/images/` and add an entry:

```ts
{ src: "/images/your-photo.jpg", alt: "Description of photo" }
```

### Swapping the hero video
Replace `public/video/blindtodeer.mp4` with a new `.mp4` file of the same name, or update the path in `src/components/HeroVideo.tsx`.

### Editing the About section bio text
Edit `src/components/AboutSection.tsx`.

### Editing the Experience section text
Edit `src/components/ExperienceSection.tsx`.

---

## Deploying Updates

Any time you push changes to the `main` branch on GitHub, Vercel automatically rebuilds and redeploys the live site. No manual steps needed.

To push changes after editing locally:

```bash
git add .
git commit -m "describe what you changed"
git push
```

---

## Project Structure

```
src/
  app/
    layout.tsx       # Root layout, fonts, metadata
    page.tsx         # Assembles all sections in order
    globals.css      # Tailwind theme, global styles
  components/
    Navbar.tsx       # Sticky nav, transparent → dark on scroll
    HeroVideo.tsx    # Full-screen video with parallax
    AboutSection.tsx # Eric's photo + bio
    HuntGrid.tsx     # Species card grid section
    HuntCard.tsx     # Individual species card
    ExperienceSection.tsx  # Alternating image/text blocks
    Gallery.tsx      # Auto-scrolling carousel + lightbox
    ContactForm.tsx  # Phone, email, Facebook contact cards
    Footer.tsx       # Footer with links and contact info
  lib/
    constants.ts     # All editable content: contact, species, gallery
public/
  images/            # All photos
  video/             # Hero video (blindtodeer.mp4)
```

---

## Colors

| Role | Hex |
|------|-----|
| Primary background | `#141210` |
| Alt background | `#1e1a16` |
| Gold accent | `#c4922a` |
| Body text | `#f5f0e8` |
| Secondary text | `#a89880` |
| CTA button | `#2a3a2e` |
