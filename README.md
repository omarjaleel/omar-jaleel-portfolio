# Omar Jaleel — Developer Portfolio

A responsive React + Vite portfolio using a dark navy palette, lime accents, custom CSS visuals, and Lucide icons.

## Requirements
- Node.js 18+ (Node.js 20 LTS recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL Vite prints in the terminal.

## Production build
```bash
npm run build
npm run preview
```

## Personalize before publishing
1. Check every project description and technology claim in `src/App.jsx`.
2. Replace illustrative project visuals with screenshots from your actual projects when available. The current dashboard/workflow illustrations are explicitly labelled as concepts.
3. Add your latest CV PDF to `public/` and name it exactly `Omar-Jaleel-CV.pdf`. The hero section already includes a View CV link.
4. Verify your LinkedIn and GitHub URLs. The contact section includes a WhatsApp link to the UAE number supplied in the conversation; remove it if you do not want your number publicly reachable.
5. Consider adding direct repository links for projects only after confirming the exact public repository URLs.

## Deploy to GitHub + Vercel
1. Create a new GitHub repository, for example `omar-jaleel-portfolio`.
2. In this folder, run:
   ```bash
   git init
   git add .
   git commit -m "Build personal developer portfolio"
   git branch -M main
   git remote add origin https://github.com/omarjaleel/omar-jaleel-portfolio.git
   git push -u origin main
   ```
   If you choose a different repository name, adjust the remote URL accordingly.
3. Sign in to Vercel and import the GitHub repository.
4. Keep the default Vite settings: build command `npm run build`, output directory `dist`.
5. Deploy. Vercel will provide a public URL.

## Notes
- This starter intentionally does not claim that the projects are publicly deployed.
- The contact email and profile links are included from the supplied profile context.
- The site uses Google Fonts when online; fallback fonts are defined.
