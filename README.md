# salviavarghese.com

Personal portfolio. Next.js 15 (App Router), Tailwind CSS v4, TypeScript. No CMS, no database.

## Run locally
```
npm install
npm run dev
```
Open http://localhost:3000.

## Edit content
Everything you read on the site is in `content/site.ts`. Components only render it.
- Change wording, dates, stack lists, the About section: edit the strings there.
- Add a project: add an object to the `projects` array. Give it `caseStudy` to get a `/work/<slug>` page, or `caseStudy: null` and an `external` link to send the title off-site.
- Swap a screenshot: replace the file in `public/work/` with one of the same name, or point `image.src` at a new file and set its real `width` and `height`.
- Add your photo: put `photo.jpg` in `public/`, then set `hero.photo` to `{ src: "/photo.jpg", alt: "Salvia Varghese" }`.
- Lines marked `// TODO Salvia` are placeholders written from the summary only; expand them.

## Design
`DESIGN.md` holds the tokens. They are set once at the top of `app/globals.css` and exposed to Tailwind via `@theme`.
Scroll animation is deliberately not in yet. Add GSAP/Lenis later as a client component wrapped around `<main>`.

## Deploy
Push to GitHub, import the repo on Vercel, add `salviavarghese.com` under the project's Domains tab and set the DNS records Vercel shows you at your registrar.
