# SSCS Website — Product Requirements Document

**Organization:** Second Step Community Services (SSCS)  
**Location:** Markham, Ontario (Greater Toronto Area)  
**Stack:** Next.js (App Router), React, Tailwind CSS  
**Facebook:** https://www.facebook.com/profile.php?id=61572465541465  

---

## 1. Project Overview

Build a public-facing marketing website for Second Step Community Services, a non-profit organization serving seniors, youth, and newcomers in the Markham/GTA area. The site must be welcoming, bilingual-ready (English primary; Chinese secondary where noted), accessible to older users (larger touch targets, legible text), and easy to update as events and content grow.

---

## 2. Design System

### 2.1 Color Palette

```css
--color-primary:       #C0272D;   /* Brand red — from logo */
--color-primary-dark:  #8B1A1E;   /* Hover / hero gradient dark end */
--color-primary-light: #F5E8E8;   /* Red tint backgrounds */
--color-charcoal:      #2C2C2A;   /* Headings, dark sections */
--color-mid:           #5F5E5A;   /* Body text, muted labels */
--color-cream:         #FAF8F4;   /* Page background */
--color-border:        #E0DDD6;   /* Card borders, dividers */
--color-white:         #FFFFFF;
```

### 2.2 Typography

- **Display / Headings:** `Playfair Display` (Google Fonts) — weights 400, 600, 700
- **Body / UI:** `Source Sans 3` (Google Fonts) — weights 300, 400, 500, 600
- **Base font size:** 16px; line-height 1.7 for body copy
- **Minimum font size:** 14px (accessibility for seniors)

### 2.3 Logo

- File: `SSCS_logo.png` (convert from provided `SSCS_logo.heic`)
- Place in `public/images/logo.png`
- Tagline on logo: *"Journey of a thousand miles starts with the first step"*
- Use as `<Image>` in the nav; display at ~44px height on desktop

### 2.4 Component Aesthetic

- Border radius: `8px` (inputs, tags), `10–12px` (cards)
- Cards: white background, `0.5px solid var(--color-border)`, subtle radius
- Accent cards: `border-top: 3px solid var(--color-primary)`
- Buttons: solid red primary, outline ghost secondary
- No heavy drop shadows; clean flat surfaces
- Red hero sections use a subtle CSS `linear-gradient` from `--color-primary-dark` to `--color-primary`

---

## 3. Site Structure — 6 Pages

```
/              → Home
/events        → Events
/services      → Services
/about         → About
/donate        → Donate
/contact       → Contact
```

---

## 4. Global Components

### 4.1 Navigation (`<Navbar />`)

- White background, `border-bottom: 2px solid var(--color-primary)`
- Left: SSCS logo (`public/images/logo.png`) + org name in Playfair Display
- Center/Right: Tab links — Home · Events · Services · About · Donate · Contact
- Active tab: red text + `border-bottom: 3px solid var(--color-primary)` indicator
- "Donate" tab styled as a filled red CTA button on the right end
- Mobile: hamburger menu with slide-down drawer
- Height: 64px desktop, 56px mobile

### 4.2 Footer (`<Footer />`)

- Dark charcoal background (`--color-charcoal`)
- Three columns:
  - **Col 1 — About:** SSCS logo (white version or just text), one-line tagline, Facebook + WeChat icons
  - **Col 2 — Quick Links:** Home, Events, Services, About, Donate, Contact
  - **Col 3 — Contact:** secondstepcs@gmail.com · WeChat: lilyliu_toronto · Markham, Ontario
- Bottom bar: `© 2025 Second Step Community Services. All rights reserved.` (centered, muted)
- Registered non-profit note (add once registration number is available — placeholder for now)

---

## 5. Page Specifications

---

### 5.1 Home Page (`/`)

#### Section 1 — Hero

- Full-width red gradient banner (`linear-gradient(135deg, #8B1A1E, #C0272D)`)
- Badge pill (top-left): `"Serving Markham & GTA"` — white border, semi-transparent fill
- H1 (Playfair Display, 42px desktop / 28px mobile, white): *"Building bridges between generations"*
- Subtitle (16px, 85% opacity, white): *"Bilingual programs, mental wellness advocacy, and community connection for seniors, youth, and newcomers in the Markham area."*
- Two CTA buttons:
  - Primary (white bg, red text): **"Upcoming Events"** → links to `/events`
  - Ghost (white outline): **"Support Us"** → links to `/donate`
- Decorative: subtle large semi-transparent circle(s) in top-right corner (CSS `::before`/`::after`)

#### Section 2 — Image Carousel

- Sits between the Hero and the "What We Do" section
- Auto-playing carousel of event photos / event banners
- Transition: smooth horizontal slide, auto-advances every 4 seconds, pauses on hover
- Navigation: left/right arrow buttons + dot indicators below
- Images sourced from: Facebook group and WeChat event flyers (added manually to `public/images/carousel/`)
- Use placeholder gradient tiles (red/charcoal themed) with text labels until real photos are added — e.g. `"Add your event photos here"`
- Component: `<ImageCarousel images={carouselImages} />`
- `carouselImages` array defined in `src/data/carousel.ts` — each item: `{ src: string, alt: string, caption?: string }`
- Image aspect ratio: `16:9` on desktop, `4:3` on mobile; `object-fit: cover`
- Max height: `460px` desktop, `240px` mobile
- Slight padding/margin on either side on desktop (not full-bleed) — contained within `max-w-5xl` centered layout; full-bleed on mobile

#### Section 3 — What We Do (Core Pillars)

- Section label (small caps, red): `"WHAT WE DO"`
- H2 (Playfair Display, charcoal): `"Our core pillars"`
- 2×2 grid of pillar cards:

| Card | Icon (Lucide/Tabler) | Title | Description |
|------|---------------------|-------|-------------|
| 1 | `heart-handshake` | Mental Wellness & Advocacy | Workshops on coping strategies, youth mental health resources, and fraud prevention seminars for seniors. |
| 2 | `activity` | Health & Lifelong Learning | Daily Tai Chi sessions, chronic condition management education, digital literacy training, and our seniors' choir. |
| 3 | `users` | Community & Social Integration | Intergenerational projects, cultural celebrations (Lunar New Year, Canada Day), and community field trips. |
| 4 | `languages` | Bilingual Outreach | All programs delivered in both English and Chinese, ensuring newcomers and language-minority members feel at home. |

- Each card: white bg, border-top accent (red), icon in red-light circle, h3 + p

#### Section 4 — Stats Bar

- Full-width charcoal background strip
- 3 stats in a row:
  - `4+` Programs
  - `2` Languages
  - `3` Target Groups
- Numbers in Playfair Display 32px white; labels in 12px muted white

#### Section 5 — Call to Action Strip (optional, before footer)

- Red background
- Text: *"Ready to get involved?"*
- Two buttons: **"View Events"** (white) + **"Contact Us"** (ghost outline)

---

### 5.2 Events Page (`/events`)

#### Data Model

Define events in `src/data/events.ts`:

```typescript
interface Event {
  id: string;
  title: string;
  date: string;             // ISO 8601: "2025-07-01"
  description: string;      // 1–2 sentences
  image: string;            // path to image in public/images/events/
  category: 'Health & Fitness' | 'Cultural' | 'Education' | 'Advocacy' | 'Social';
  status: 'upcoming' | 'past';
}
```

#### Layout

- Dark charcoal page header with page title and subtitle
- **Upcoming Events** section (labelled divider)
- **Past Events** section (labelled divider)
- Each event rendered as a horizontal card (`<EventCard />`)

#### `<EventCard />` Component

- Left: date block (red-tinted bg on upcoming, gray on past) showing abbreviated month + day number (Playfair Display)
- Right: event title (h3), description (p), category tag pill
- Past events: muted opacity (~70%), gray date block
- On hover: slight lift / border color deepens
- Clicking a card can expand inline or link to `/events/[id]` (see below)

#### Event Detail Page (`/events/[id]`)

- Header image (full-width, 16:9, `object-fit: cover`, max 400px height)
- Overlaid title + date on a dark gradient overlay
- Body: description, category tag, date
- Back button: `← Back to Events`

#### Content Notes

Seed the `events.ts` file with these placeholder events:

**Upcoming:**
- "Summer Tai Chi Morning" — Jun 14, 2025 — Health & Fitness
- "Canada Day Community Celebration" — Jul 1, 2025 — Cultural
- "Digital Literacy Workshop" — Jul 19, 2025 — Education

**Past:**
- "Lunar New Year Celebration 2025" — Feb 10, 2025 — Cultural
- "Fraud Prevention Seminar" — Mar 22, 2025 — Advocacy

Real event images will be added to `public/images/events/` manually.

---

### 5.3 Services Page (`/services`)

#### Intro Section

- Page header (charcoal): title "Services", subtitle "Programs and supports for our community"
- Below the header, a short overview paragraph (16px, max-w-2xl centered):

> *"Second Step Community Services offers a range of free and low-cost bilingual programs designed to support seniors, youth, and newcomers in the Markham area. From mental wellness workshops and Tai Chi to digital literacy training and cultural celebrations, our programs are built around the belief that strong communities grow when generations connect."*

#### Program Cards

2×2 grid of program area cards (`<ServiceCard />`):

| Card | Title | Description | Bullet Items |
|------|-------|-------------|--------------|
| 1 | Mental Wellness | Workshops and peer support for emotional well-being at every age. | Senior emotional health workshops · Youth mental health resources · Fraud & abuse prevention seminars |
| 2 | Health & Active Living | Physical wellness programs to keep our community moving and thriving. | Daily Tai Chi sessions · Chronic condition management · Seniors' choir & arts programs |
| 3 | Digital Literacy | Technology training so no one gets left behind in a connected world. | Mobile device training · Zoom & video calling · Online safety basics |
| 4 | Community & Cultural Programs | Events and activities that celebrate who we are and bring us together. | Intergenerational meetups · Lunar New Year & Canada Day celebrations · Field trips & social outings |

#### Registration CTA

- Below the grid: a full-width light red (`--color-primary-light`) banner
- Text: *"Interested in joining a program? Get in touch and we'll help you find the right fit."*
- Button: **"Contact Us"** → `/contact`

---

### 5.4 About Page (`/about`)

#### Intro Blurb

- Short paragraph introducing SSCS (pulled from the About document):
  *"Second Step Community Services is a non-profit based in Markham, Ontario. We are dedicated to improving the quality of life for seniors, youth, and newcomers through bilingual programming and meaningful community connection."*

#### Vision & Mission Cards (side by side)

Two equal cards, each with a red label (`VISION` / `MISSION`) above the content:

- **Vision:** *"To create a safe, inclusive, and multi-generational environment where both seniors and youth can learn, connect, and thrive, ensuring a resilient and socially connected community in the Markham area."*
- **Mission:** *"To improve the quality of life for residents—specifically seniors, youth, and newcomers—by providing bilingual educational programs, mental wellness advocacy, and social activities that bridge generational gaps and encourage active community participation."*

#### Values (optional — add if space permits)

Three values derived from the About doc, shown as icon + label + one-liner:
- **Inclusivity** — Every voice belongs, in English and Chinese.
- **Connection** — We believe community is built one relationship at a time.
- **Empowerment** — We equip people with skills to lead and contribute.

#### Board of Directors

Section title: *"Board of Directors"* (Playfair Display)

3-column grid of board member cards. Each card:
- Square photo (`object-fit: cover`, rounded-full or rounded-lg)
- Name (h4, bold)
- Title / Role

**Placeholder data (replace with real names/photos):**

```typescript
const boardMembers = [
  { name: "Director Name", role: "Board Chair", image: "/images/board/placeholder.jpg" },
  { name: "Director Name", role: "Treasurer",   image: "/images/board/placeholder.jpg" },
  { name: "Director Name", role: "Secretary",   image: "/images/board/placeholder.jpg" },
];
```

Real photos go in `public/images/board/`.

---

### 5.5 Donate Page (`/donate`)

#### Hero Donation Section

- Charcoal background card, centered text
- H2 (Playfair Display, white): *"Help us take the next step"*
- Paragraph (white, 75% opacity): *"Every dollar supports bilingual programs, mental wellness workshops, and activities that connect seniors, youth, and newcomers across Markham."*
- **Donate Now** button — prominent red, large (padding 14px 40px)
  - Button links to Zeffy donation page: **`https://www.zeffy.com/`** (placeholder URL — update once the Zeffy account is set up)
  - Opens in a new tab (`target="_blank"`)

#### Suggested Amounts (visual only — for context)

Row of four pill buttons (non-functional UI, for context only): $25 · $50 · $100 · Other  
These are decorative/informational. The actual donation is handled by Zeffy.

#### Impact Section

- Section label: `"YOUR IMPACT"`
- 2-column grid of impact cards (icon + bold amount + description):
  - `$25` — Sponsors one senior's Tai Chi session for a month.
  - `$50` — Funds one digital literacy workshop for newcomers.
  - `$100` — Covers materials for a mental wellness workshop.
  - `$200` — Helps underwrite a full community cultural celebration.

#### Tax Receipt Note

- Small muted text below the hero: *"Second Step Community Services is a registered non-profit. Tax receipts are issued for eligible donations."*
- (Update once CRA charity registration is confirmed)

---

### 5.6 Contact Page (`/contact`)

#### Layout

Two-column layout (desktop): left info panel + right form card. Stacks vertically on mobile.

#### Left Panel — Contact Info

- H3: *"Get in touch"*
- Three detail rows (icon + label + value):
  - 📍 **Location** — Markham, Ontario, Greater Toronto Area
  - ✉️ **Email** — secondstepcs@gmail.com
  - 💬 **WeChat** — lilyliu_toronto
- **Follow Us** label + two icon buttons: Facebook → `https://www.facebook.com/profile.php?id=61572465541465` (opens new tab), WeChat (static icon, no link)

#### Right Panel — Inquiry Form

White card with form fields:

```
First name    [text input]     Last name     [text input]
Email         [email input, full width]
Topic         [select dropdown]
  - General inquiry
  - Program registration
  - Volunteer interest
  - Donation
  - Partnership
Message       [textarea, ~5 rows]

[Send Message]  ← red submit button, full width
```

#### Form Behavior

- Client-side validation: required fields, valid email format
- On submit: send form data via **EmailJS** (or equivalent client-side email service) to `secondstepcs@gmail.com`
- Alternatively, use a `mailto:` fallback if EmailJS is not configured
- Show a success message after submission: *"Thank you! We'll be in touch soon."*
- Show an error message on failure: *"Something went wrong. Please email us directly at secondstepcs@gmail.com."*

---

## 6. Content & Asset Management

### 6.1 Data Files (update these to add content)

```
src/data/
  events.ts         ← add/edit events here
  carousel.ts       ← carousel image list
  boardMembers.ts   ← board of directors
```

### 6.2 Image Folders

```
public/images/
  logo.png                  ← converted from SSCS_logo.heic
  carousel/                 ← event banners and photos for homepage carousel
  events/                   ← header images for event pages (named by event id)
  board/                    ← board member headshots
```

All images should be optimized (WebP preferred) and use Next.js `<Image />` component.

---

## 7. Technical Requirements

### 7.1 Framework & Libraries

| Dependency | Purpose |
|---|---|
| Next.js 14+ (App Router) | Framework |
| React 18+ | UI |
| Tailwind CSS | Styling |
| Playfair Display + Source Sans 3 | Fonts via `next/font/google` |
| Lucide React | Icons |
| Embla Carousel (or Swiper) | Image carousel on homepage |
| EmailJS (optional) | Contact form email delivery |

### 7.2 Tailwind Config

Extend `tailwind.config.ts` to register SSCS brand colors:

```js
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#C0272D',
        dark:    '#8B1A1E',
        light:   '#F5E8E8',
      },
      charcoal: '#2C2C2A',
      cream:    '#FAF8F4',
      mid:      '#5F5E5A',
      border:   '#E0DDD6',
    },
    fontFamily: {
      display: ['Playfair Display', 'serif'],
      body:    ['Source Sans 3', 'sans-serif'],
    },
  },
}
```

### 7.3 Folder Structure

```
sscs-website/
├── public/
│   └── images/
│       ├── logo.png
│       ├── carousel/
│       ├── events/
│       └── board/
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← root layout with Navbar + Footer
│   │   ├── page.tsx            ← Home
│   │   ├── events/
│   │   │   ├── page.tsx        ← Events list
│   │   │   └── [id]/page.tsx   ← Event detail
│   │   ├── services/page.tsx
│   │   ├── about/page.tsx
│   │   ├── donate/page.tsx
│   │   └── contact/page.tsx
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ImageCarousel.tsx
│   │   ├── EventCard.tsx
│   │   ├── PillarCard.tsx
│   │   ├── ServiceCard.tsx
│   │   └── BoardMemberCard.tsx
│   └── data/
│       ├── events.ts
│       ├── carousel.ts
│       └── boardMembers.ts
├── tailwind.config.ts
└── next.config.ts
```

### 7.4 Accessibility

- All images must have descriptive `alt` text
- Color contrast ratio ≥ 4.5:1 for all text
- Form inputs must have associated `<label>` elements
- Keyboard-navigable navbar and carousel
- Font sizes ≥ 14px throughout (seniors audience)
- `aria-label` on icon-only buttons (social icons, carousel arrows)

### 7.5 SEO & Metadata

Each page must have its own `metadata` export:

```ts
// Example for Home
export const metadata: Metadata = {
  title: 'Second Step Community Services | Markham, Ontario',
  description: 'Bilingual community programs for seniors, youth, and newcomers in the Markham and GTA area.',
  openGraph: {
    title: 'Second Step Community Services',
    description: '...',
    url: 'https://sscs.ca',
    images: ['/images/og-image.png'],
  },
};
```

### 7.6 Responsiveness

- Mobile-first Tailwind breakpoints
- Navbar collapses to hamburger at `md` breakpoint
- All grids (pillars, services, board) collapse to single column on mobile
- Carousel height adjusts per breakpoint
- Touch-friendly tap targets ≥ 44×44px

---

## 8. Content Placeholders (to fill in later)

| Location | Placeholder | What's needed |
|----------|-------------|---------------|
| About → Board | "Director Name" × 3 | Real names, roles, headshots |
| Events | Seeded with 5 events | Real event photos from Facebook/WeChat |
| Carousel | Gradient tiles | Event banners / photos |
| Donate → Zeffy URL | `https://www.zeffy.com/` | SSCS Zeffy donation page URL once account is created |
| Footer | Charity registration # | CRA registration number once confirmed |
| Contact | EmailJS keys | EmailJS service ID + template ID + public key |

---

## 9. Out of Scope (v1)

- User accounts or member portal
- Chinese-language toggle / i18n routing (future v2)
- Online event registration (future — may integrate Eventbrite or Zeffy)
- Blog or news section
- Admin CMS (content is managed via data files and PRs for now)
