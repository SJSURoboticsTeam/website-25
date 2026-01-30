# Claude Context

## Project Overview

SJSU Robotics team website built with Next.js 14 (App Router).

## Key Files

- `src/app/board/page.tsx` - Leadership page with `executiveBoard` and `divisions` arrays
- `src/app/globals.css` - All styles (team photos are circular via `.team-photo`)
- `public/images/leads/` - Leadership photos (PNG format, named `firstname-lastname.png`)

## Leadership Updates (Each Semester)

1. Get photos from old website repo: `SJSURoboticsTeam/website` under `assets/img/leads/`
2. For new people without existing photos, save their LinkedIn photos as `firstname-lastname.png`
3. Update `src/app/board/page.tsx` arrays with current leadership
4. Images display as circles automatically

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
- Ahmad Kaddoura - Intelligent Systems Lead

## Old Website Repo

`https://github.com/SJSURoboticsTeam/website` - Source for archived lead photos
