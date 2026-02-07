# Claude Context

## Project Overview

SJSU Robotics team website built with Next.js 14 (App Router).

## Key Files

- `src/app/page.tsx` - Home page (hero, URC section, divisions, sponsors, FAQ)
- `src/app/board/page.tsx` - Leadership page with `executiveBoard` and `divisions` arrays
- `src/app/layout.tsx` - Root layout, nav, footer (logo at `/images/transparent_logo.png`)
- `src/app/favicon.ico` - Favicon (generated from team logo, replaces default Vercel icon)
- `src/app/globals.css` - All styles (team photos are circular via `.team-photo`)
- `public/images/leads/` - Leadership photos (PNG format, named `firstname-lastname.png`)
- `public/images/transparent_logo.png` - Team logo (also used as favicon source)

## Competition

- **University Rover Challenge (URC)** — Spring 2027
- URC section is on the home page (`src/app/page.tsx`, `#urc` section)

## Leadership Updates (Each Semester)

1. Get photos from old website repo: `SJSURoboticsTeam/website` under `assets/img/leads/`
2. For new people without existing photos, save their LinkedIn photos as `firstname-lastname.png`
3. Update `src/app/board/page.tsx` arrays with current leadership
4. Each member needs: `name`, `role`, `linkedin` (full URL), `image`
5. Images display as circles automatically

## Current Leadership (Spring 2026)

**Executive:**
- Kirthika Ashokkumar - President
- Ashley Marie Mercurio - VP, Safety Officer, Science Lead, Business Lead
- Ashley Hernandez Mora - Treasurer
- Mukund Kunapareddy - Co-Business Lead

**Division Leads:**
- Kate Oxley - Mechanical Lead
- Diego Oliva - Mechanical Co-Lead
- Shin Umeda - Electrical Lead
- Sara Berarducci - Electrical Co-Lead
- Michael Kersey - Firmware Lead
- Nina Wang - Mission Control Lead
- Braden Wagner - Mission Control Co-Lead
- Ahmad Kaddoura - Intelligent Systems Lead

## Old Website Repo

`https://github.com/SJSURoboticsTeam/website` - Source for archived lead photos
