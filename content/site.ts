// All copy and project data for the site. Edit here; components only render it.
// Images live in /public/work. Replace a file to swap a screenshot; set image to null to show the text frame.

export type Project = {
  slug: string;
  title: string;
  when: string;
  summary: string;
  stack: string;
  live: string | null;
  liveNote?: string; // shown in place of the live link when live is null (e.g. "Launching soon")
  external?: string; // when the title should link off-site instead of to a case study
  image: { src: string; alt: string; width: number; height: number } | null;
  placeholder?: string; // shown in the frame when image is null
  phones?: { src: string; alt: string; width: number; height: number }[];
  heroImage?: { src: string; alt: string; width: number; height: number }; // case-study hero if different from the card image
  gallery?: { src: string; alt: string; width: number; height: number; caption: string }[];
  sections?: { heading: string; body: string[] }[]; // extra case-study sections after Outcome
  caseStudy: {
    lead: string;
    client: string;
    year: string;
    role: string;
    stackShort: string;
    brief: string;
    whatIDid: string[];
    outcome: string;
  } | null;
};

export const site = {
  name: "Salvia Varghese",
  domain: "https://salviavarghese.com",
  email: "salviav25@gmail.com",
  linkedin: "https://www.linkedin.com/in/salviavarghese/",
  github: "https://github.com/salviavarghese",
  location: "Newcastle-under-Lyme, UK",
  description:
    "Salvia Varghese is a web developer and designer who builds websites for real businesses. Final-year Computer Science at Keele.",

  hero: {
    first: "Salvia",
    last: "Varghese",
    lead: "Web developer and designer. I build websites for real businesses, from the brand and the design to the code and the launch. Final year of Computer Science at Keele, based in Staffordshire.",
    photo: null as { src: string; alt: string } | null, // set to { src: "/photo.jpg", alt: "Salvia Varghese" } when there is one
  },

  about: {
    lead: "I didn't start in tech. I studied psychology for two years, then switched to Computer Science in 2024 because I wanted to build things instead of reading about them.",
    paragraphs: [
      "Since then I've done a placement with Ara Solutions, a web agency, and kept working with them on client projects, most recently a dealership site built from scratch. On my own I've launched two catalogue sites for small businesses and restyled a property compliance product as a freelance job. I care about how a site looks as much as how it works, so I usually do the brand and the front end together.",
      "Outside client work I build things for myself, most recently a native Mac app that runs my whole day. I graduate in summer 2027 and I'm looking for a graduate role in web development, in the UK or abroad.",
    ],
    howIWork: {
      heading: "How I work",
      paragraphs: [
        "Design first, then code. Before I touch a codebase I build a standalone mockup of the new look, in plain HTML and CSS, and get it approved. Only then do I apply it. On a live product that means the restyle is presentation only: same pages, same wording, same features, and nothing in the logic, data or backend changes.",
        "Every project gets a short design system before the first page: colour tokens, two fonts with a type scale, a spacing scale, one radius, one easing. Every page is held to it. That is what stops a site drifting into a different look on every screen.",
        "I check the work at phone and laptop widths before I call it done, and I keep a list of what a real site needs that the brief forgot: favicon, 404, link previews, a correct copyright year.",
      ],
    },
    facts: [
      ["Studying", "BSc Computer Science (Cyber Security), Keele University, 2024 to 2027"],
      ["Based", "Newcastle-under-Lyme, Staffordshire"],
      ["Available", "Graduate roles from July 2027"],
      ["Code", "github.com/salviavarghese"],
    ] as [string, string][],
    experience: [
      ["Frontend developer and website designer", "Ara Solutions, remote. Placement, then client projects", "Jan 2026 to now"],
      ["President", "Keele Malayali Society", "2023 to 2024"],
      ["Final year project", "Keele University", "Sep 2026 to May 2027"],
    ] as [string, string, string][],
    capabilities: [
      { title: "Design", items: ["Brand identity", "Logo and typography", "Figma mockups", "Site maps"] },
      { title: "Front end", items: ["Next.js and React", "Tailwind CSS, shadcn/ui", "GSAP scroll animation", "Responsive layout"] },
      { title: "Back end and launch", items: ["Payload and Sanity CMS", "PostgreSQL on Neon", "Vercel, domains, DNS, SSL", "Python, Docker"] },
    ],
  },

  contact: {
    heading: "Hiring graduates for 2027, or need a website built?",
  },
};

export const projects: Project[] = [
  {
    slug: "nj-motors",
    title: "NJ Motors",
    when: "2026, launching soon",
    summary:
      "Used-car dealership website built from scratch for a client of Ara Solutions, with an admin panel so the owner manages stock without touching code.",
    stack: "Next.js, Payload CMS, Neon Postgres, Vercel, Resend, GSAP",
    live: null,
    image: { src: "/work/njmotors-desktop.jpg", alt: "NJ Motors homepage: dark header with red logo, headline The right car, the honest way, and a photo of a grey saloon in a car park", width: 1702, height: 832 },
    caseStudy: {
      lead: "A full website for a used-car dealership, where the owner manages stock, enquiries and page content without a developer.",
      client: "NJ Motors, through Ara Solutions",
      year: "2026",
      role: "Design, build, launch",
      stackShort: "Next.js, Payload, Neon, Vercel",
      brief:
        "A used-car dealership that needed a real website, not a listings page on someone else's platform. The owner had to be able to add a car, change a price or mark one as sold from their phone, without a developer in the loop. The site also had to look like a showroom: the client wanted an animated front end that felt premium, not a template.",
      whatIDid: [
        "Chose the stack for the owner, not for me: Next.js for the front end and Payload CMS for the admin panel, because Payload runs inside the same app with no monthly fee and gives the owner a proper editing screen for vehicles, enquiries and page content.",
        "Built the vehicle listing and detail pages from the CMS, with images in Vercel Blob storage and a Neon PostgreSQL database behind it.",
        "Wired the enquiry form to Resend so leads arrive as email, which meant verifying the dealership's sending domain.",
        "Prototyped the animated front end separately first, then took a hybrid approach: kept the pages already wired to Payload exactly as they were and added the animation layer on top, so a design change could never break the data.",
        "Wrote the site copy to the client's exact wording rather than my own.",
        "Ran a pre-launch audit and worked through the blockers: a database schema mismatch in Neon, creating the Blob store, environment variables for production, and the Resend domain verification.",
      ],
      outcome: "Launching soon. The owner manages stock from the admin panel; the front end is animated without touching the backend. The live link will be added at launch.", // TODO Salvia: update at launch
    },
  },
  {
    slug: "supportcomply",
    title: "SupportComply",
    when: "Oct 2026 to now",
    summary:
      "A compliance product for landlords and property managers. Freelance. Started as a front-end restyle; I'm now the developer taking it from a working prototype to a launched product: design, build, staging, payments, backups and the release itself.",
    stack: "Next.js, Supabase (Postgres, auth, edge functions), Stripe subscriptions, Vercel, Cloudflare R2, Resend, Twilio, Sentry, UptimeRobot, Figma",
    live: null,
    liveNote: "Launching soon",
    image: { src: "/work/supportcomply-desktop.jpg", alt: "SupportComply homepage: white page, dark green logo, headline Property evidence, kept in order, with a plan panel on the right", width: 1600, height: 1000 },
    caseStudy: {
      lead: "SupportComply keeps property records, evidence and day-to-day work in one place for landlords and property managers in England. I joined to restyle it and stayed to launch it.",
      client: "SupportComply",
      year: "2026",
      role: "Design, front end, launch engineering",
      stackShort: "Next.js, Supabase, Stripe, Vercel",
      brief:
        "The product existed and worked, but it looked template-made and it had only ever run as one live environment with no way to test changes safely, no payments, no sign-up, no backups and no monitoring. The owner wanted it to look designed, then wanted it ready for paying customers by a fixed date in November. The job became: restyle it without breaking it, then build everything a real product needs around it and run the release.",
      whatIDid: [
        "Restyle first, as a reskin: read every page and listed what could not change, built a standalone mockup of the new look and got it approved, then applied it as a single CSS-only pull request on the client's repository with no changes to logic or backend.",
        "Wrote a launch plan the owner and I could both follow: every step with a check to tick, a separate list of what I needed from him and when, and a day-by-day schedule. Kept it current as things slipped.",
        "Designed every launch screen in Figma at phone and desktop width from a shared design system, exported each one before building it, and ran a five-second test on the new homepage.",
        "Set up a proper staging environment so nothing is tested against live: a separate database project, preview deployments on their own branch, and a rule that live only changes on release day.",
        "Built self sign-up with a bot check, Stripe subscriptions with four plans and a 30-day card-up-front trial, transactional email, and the tenant-facing screens.",
        "Put the operations in place a product needs on day one: off-site file backups, a backup-and-restore practice run, error tracking, uptime monitoring, a scheduled data-deletion job, and a release sheet listing every setting live needs by name, never by value.",
        "Ran a tester programme ahead of launch and set the go/no-go with the owner, then the release.",
      ],
      outcome: "Launching to customers now, after about six weeks from restyle to release. The link goes here the day it's live.", // TODO Salvia: add the URL and the date it went live
    },
    sections: [
      {
        heading: "What it will be at launch",
        body: [
          "A landlord or property manager signs up, picks a plan and starts a 30-day trial with a card on file. Inside, their properties, documents and evidence live in one workspace, with day-to-day operations and checklists on the higher plans. Tenants get their own screens. Billing runs through Stripe; email through Resend; files are backed up off-site; errors and downtime are watched automatically.",
          "Four plans from Basic to Max, priced per portfolio, UK customers only. Early testers get full access before launch and a discount after it.",
        ],
      },
      {
        heading: "How I worked",
        body: [
          "Everything mocked up and approved before it was built, the same as the restyle. Every build task went through the same routine in Claude Code: plan, test-first implementation, code review, build fix, plus a security review for anything touching sign-in, payments, permissions, files or personal data.",
          "Rules I set for myself and kept: secrets never go into Git, a chat or a screenshot; live is never restored from a backup by hand; nothing deploys to live except on release day. Reading from live for a schema pull is fine; writing to it is not.",
          "Most of the hard part wasn't code. It was keeping a non-technical owner moving on the things only he could do (company registration, terms and privacy policy, payment provider verification, a developer account) while I built around the gaps, with a fallback decided in advance for each one: if the terms were late, launch with sign-ups closed; if the page-per-plan answer was late, every plan gets every page.",
        ],
      },
    ],
  },
  {
    slug: "nilara",
    title: "Nilara",
    when: "Aug 2026",
    summary:
      "Catalogue site for a saree business, launched for the Onam 2026 collection. Customers reach the catalogue, Instagram and WhatsApp ordering in one tap.",
    stack: "HTML, CSS, JavaScript, Vercel, custom domain, DNS and SSL",
    live: "https://nilara.online",
    image: { src: "/work/nilara-desktop.jpg", alt: "Nilara homepage: a deep red page with a gold moon logo and the headline Sarees handpicked for you", width: 1600, height: 1000 },
    phones: [
      { src: "/work/nilara-phone.jpg", alt: "Nilara homepage on a phone", width: 390, height: 844 },
      { src: "/work/aabhara-phone.jpg", alt: "Aabhara homepage on a phone, built on the same structure", width: 390, height: 844 },
    ],
    caseStudy: {
      lead: "A one-page catalogue site for a saree business, built and launched for the Onam 2026 collection.",
      client: "Nilara",
      year: "2026",
      role: "Design, build, launch",
      stackShort: "HTML, CSS, JavaScript, Vercel",
      brief:
        "Nilara sells mulmul cotton sarees, mostly through Instagram and WhatsApp. For Onam 2026 they had a PDF catalogue and needed somewhere to send people that worked on a phone, loaded fast, and got a customer from a shared link to an order in as few taps as possible.",
      whatIDid: [
        "Designed the page around the catalogue itself: one headline, two actions (open the catalogue, download the PDF), then the cover.",
        "Built it as a single static page so it loads instantly on mobile data.",
        "Set up Open Graph tags so the link previews properly when shared on WhatsApp and Instagram.",
        "Deployed on Vercel, bought and connected the custom domain, and set up DNS and SSL.",
        "Made changes from the client's feedback after launch.",
      ],
      outcome:
        "Live in time for the Onam collection. Nilara shares one link everywhere and customers land on the catalogue, Instagram or WhatsApp ordering in one tap. I built Aabhara, a jewellery business, on the same structure in the same month.",
    },
  },
  {
    slug: "aabhara",
    title: "Aabhara",
    when: "Aug 2026",
    summary:
      "Catalogue site for a jewellery business, built alongside Nilara for the same Onam season. Same one-tap structure, its own brand.",
    stack: "HTML, CSS, JavaScript, Vercel, custom domain, DNS and SSL",
    live: "https://aabhara.shop",
    image: { src: "/work/aabhara-desktop.jpg", alt: "Aabhara homepage: cream page, gold logo, headline Adornments for Onam, catalogue cover on the right", width: 1600, height: 1000 },
    phones: [{ src: "/work/aabhara-phone.jpg", alt: "Aabhara homepage on a phone", width: 390, height: 844 }],
    caseStudy: {
      lead: "A one-page catalogue site for a jewellery business, built on the same structure as Nilara with its own brand.",
      client: "Aabhara",
      year: "2026",
      role: "Design, build, launch",
      stackShort: "HTML, CSS, JavaScript, Vercel",
      brief:
        "Aabhara sells necklaces, earrings and sets for the Onam season, mostly through Instagram and WhatsApp. They had a 17 MB PDF catalogue and needed one link that gets a customer from a shared message to the catalogue and to ordering on a phone, fast.",
      whatIDid: [
        "Reused the one-page structure that worked for Nilara and gave it Aabhara's own identity: a cream page, gold logo, serif headline, deep plum buttons. Same bones, nothing shared visually.",
        "Put the catalogue cover on the page itself so the first screen shows the product, with two actions: view the catalogue, or download the PDF with its size stated so nobody is surprised on mobile data.",
        "Open Graph tags so the link previews with the right image and title on WhatsApp and Instagram.",
        "Deployed on Vercel, connected the custom domain, set up DNS and SSL, and made changes from the client's feedback after launch.",
      ],
      outcome: "Live at aabhara.shop for the Onam 2026 collection. Two client sites launched in the same month on one structure, each with its own brand.", // TODO Salvia: add any numbers (visits, orders) if the client has them
    },
  },
  {
    slug: "smart-touch",
    title: "Smart Touch Renovations",
    when: "Early 2026",
    summary:
      "Brand identity and website front end for a kitchen and bathroom company, built on placement with Ara Solutions. Logo, typography, colour palette and brand guidelines, then the site.",
    stack: "Next.js, Tailwind CSS, shadcn/ui, site map, lead form, SEO",
    live: "https://smart-touch.uk",
    image: { src: "/work/smarttouch-desktop.jpg", alt: "Smart Touch Renovations homepage: navy header, headline Kitchen and Bathroom Renovators in Peterborough and Cambridgeshire, a row of kitchen photos", width: 1600, height: 1000 },
    phones: [{ src: "/work/smarttouch-phone.jpg", alt: "Smart Touch Renovations homepage on a phone", width: 390, height: 844 }],
    caseStudy: {
      lead: "Brand identity and website front end for a kitchen and bathroom renovation company in Peterborough.",
      client: "Smart Touch Renovations, through Ara Solutions",
      year: "2026",
      role: "Brand identity, front end",
      stackShort: "Next.js, Tailwind, shadcn/ui",
      brief:
        "A kitchen and bathroom renovation company in Peterborough with good work and no brand: no logo, no consistent look, and nowhere to send homeowners. They needed an identity and a site whose one job is to get a homeowner to book a free consultation. This was my first project with Ara Solutions, so I was learning the agency's way of working as I went.",
      whatIDid: [
        "Designed the brand from scratch, starting with the logo, then the typography, colour palette and a short set of brand guidelines so the look holds everywhere, not just on the site.",
        "Planned the site map, the lead form and the SEO strategy before building anything.",
        "Built the front end in Next.js with Tailwind CSS and shadcn/ui, from briefs with feedback at regular check-ins.",
        "Took what I learned on this build straight into GlowGuide, which I built in the same placement from the next brief.",
      ],
      outcome: "Live at smart-touch.uk. My first client brand and front end, and the project that taught me the stack I now use everywhere.",
    },
  },
  {
    slug: "glowguide",
    title: "GlowGuide",
    when: "2026, ongoing",
    summary:
      "Skincare recommendation app for complete beginners. Six questions, two minutes, no account; it works out your skin type and builds a five-step routine. Started as a placement brief, now being rebuilt as my own product. Mockup shown, in progress.",
    stack: "Next.js, Tailwind CSS, shadcn/ui, Zod, Payload CMS, Neon Postgres",
    live: "https://glowguide-next-blue.vercel.app",
    image: { src: "/work/glowguide-mockup.jpg", alt: "GlowGuide rebuild mockup: headline Start with your skin, not the shelf, a Start the quiz button, and a quiz step asking what bothers you most about your skin", width: 1923, height: 955 },
    caseStudy: {
      lead: "A skincare recommendation app for people who don't know how to look after their skin. Six questions, two minutes, no account.",
      client: "Own product",
      year: "2026",
      role: "Design, build",
      stackShort: "Next.js, Payload, Neon, Zod",
      brief:
        "The placement brief was a Next.js site with a CMS and a database. Instead of a generic form I used it to start a product of my own: GlowGuide, for people who don't know how to look after their skin. A short quiz builds a skin profile and recommends a routine. No brand ties, no selfie, any age.",
      whatIDid: [
        "Built and deployed the first version: Next.js with shadcn/ui, Tailwind CSS and Zod form validation, Payload CMS for the product data and a Neon PostgreSQL database, on Vercel.",
        "Worked through the deployment and configuration problems to get it live, which is where most of the placement learning was.",
        "Now rebuilding it properly, mockup first: rule-based recommendation logic in code rather than guesswork, a researched product database, a five-step routine built from Korean skincare that's priced in pounds and sold in the UK, double cleansing built in, and dermatologist-backed information behind each step. Written for complete beginners, whatever their age.",
      ],
      outcome: "First prototype live. The rebuild is in progress; the image above is the current mockup and will be replaced by the real thing.",
    },
  },
  {
    slug: "api-access-control-tester",
    title: "API access control tester",
    when: "Sep 2026 to May 2027",
    summary:
      "A tool that reads an API's OpenAPI spec and a table of who may do what, then tests every role against every endpoint for broken access control, and again while dependencies are made to fail.",
    stack: "Python, Docker, Toxiproxy, pytest, OpenAPI",
    live: null,
    external: "https://github.com/salviavarghese/api-access-control-tester",
    image: null,
    placeholder: "Final year project, in progress on GitHub",
    caseStudy: null,
  },
];

export const funProjects: Project[] = [
  {
    slug: "trunkberry",
    title: "Trunkberry",
    when: "Nov 2026, in daily use",
    summary:
      "A native Mac app that keeps my whole life in one place: to-dos, deadlines, uni grades, focus sessions, cycle and money. Full retro pixel, pink, with a baby elephant who eats the fruit you earn by getting things done.",
    stack: "Swift, SwiftUI, Xcode, built with Claude Code. Mac now, iPhone later.",
    live: null,
    image: { src: "/work/trunkberry-card.jpg", alt: "Trunkberry dashboard: a pixel-art sunset forest with a baby elephant in the middle, a speech bubble reading One small thing at a time, fruit counts underneath and the top of the to-do panel", width: 1695, height: 1059 },
    heroImage: { src: "/work/trunkberry-forest.jpg", alt: "The full Trunkberry forest: sunset bands, small trees and flowers, and the elephant in the middle", width: 2949, height: 625 },
    gallery: [
      { src: "/work/trunkberry-grew.jpg", alt: "Trunkberry focus log panel showing a tree for each folder, fruit eaten, counters of tasks done, and the four fruit sizes a stopwatch session can earn", width: 1460, height: 1109, caption: "What you grew: one tree per folder, fruit for finished sessions, and what a session earns." },
    ],
    caseStudy: {
      lead: "A native Mac app that keeps everything I need in one place, straightforward enough to actually open every day. Built for me first; the plan is to publish it.",
      client: "Own project",
      year: "2026",
      role: "Design, pixel art, build",
      stackShort: "Swift, SwiftUI, Xcode",
      brief:
        "I had my to-dos in one app, deadlines in another, grades in a spreadsheet, my cycle in a third app and money nowhere. Nothing stuck. I wanted one window with all of it, in a look I'd want to look at, and a reason to come back each day that wasn't guilt. I also wanted the personal parts, my cycle and my money, kept on my own machine rather than in someone else's app. So: a retro pixel app, pink, with a baby elephant who gets fed when I finish things.",
      whatIDid: [
        "Designed the whole thing as pixel art first: a sunset forest for the dashboard, a palette of pinks and creams, a pixel typeface, chunky bordered panels, and no sound. The elephant is called Berry by default and can be renamed.",
        "Built it as a native Mac app in Swift and SwiftUI with Xcode, using Claude Code alongside, with keyboard shortcuts for every section (⌘1 to ⌘5).",
        "Wrote the reward loop: finish a task or a focus session and the elephant eats a fruit; each folder (University, Work, Home, Selfcare, General) has its own fruit and its own tree that grows with time spent on it. A streak counts the days you show up.",
        "Built five sections that each do one job properly: Dashboard, Uni, Cycle, Focus log and Finance. Every section is described below.",
        "Drew and animated the elephant and the trees. They move, but they're not where I want them yet; it's the part I keep coming back to.",
      ],
      outcome: "Running on my Mac and used every day since mid-November. Next: finish the animations, then an iPhone version that syncs, then the App Store.",
    },
    sections: [
      {
        heading: "Dashboard",
        body: [
          "The home screen. A heads-up strip at the top lists anything due in the next few days. Below it is the forest: Berry in the middle, the trees you've grown, the day's streak, and a one-line message. Under the forest, a count of each fruit you've earned.",
          "Then two panels side by side. To-do, filtered by folder, with tasks that roll over if you didn't finish them yesterday. Deadlines, filtered by folder (Work, University, Subscriptions, Payments, General, or your own), each with a due date and a chip that says tomorrow, in 2d, in 3w. You can add folders to either. A Focus button starts a stopwatch from anywhere.",
        ],
      },
      {
        heading: "Focus log",
        body: [
          "Start a stopwatch, pick a folder and a project or topic, work. Stop it after 15 minutes or more and the session is logged with its real length, grows that folder's tree, counts for the streak and earns one fruit of that folder's type. Under 15 minutes isn't logged. Longer sessions earn bigger fruit: small from 15 minutes, medium from 30, large from 60, extra large from 120.",
          "The log shows hours this week, a bar per week for the last eight, totals by folder and by project, every tree and how long it takes to grow, the fruit eaten, and counters of what you've finished: tasks, sessions, deadlines by folder.",
        ],
      },
      {
        heading: "Uni",
        body: [
          "Deadlines with the module they belong to and the percentage of the grade they're worth. A module list by year with each module's code, credits, final mark and attempt. A credit-weighted degree average that uses the course's own year weightings and leaves out years with no marks yet.",
          "The part I use most is the calculator: pick the year, and it tells you the average you need across the remaining modules for a First, a 2:1 and a 2:2.",
        ],
      },
      {
        heading: "Cycle",
        body: [
          "I built this section for two reasons. Period-tracking apps have been caught sharing users' data with advertisers, and I didn't want mine anywhere but my own Mac. And every app I'd used assumed a textbook 28-day cycle, which mine is nothing like, so their predictions were always wrong.",
          "So the estimates here come from my own history: the app averages the last six cycles and predicts the next period, ovulation and the fertile window from that, not from a fixed number. Because long cycles vary more, it also shows the honest version: the full range ovulation could actually fall in, not just a single date.",
          "The screen shows days since the last period, the current cycle day and phase, the estimates, and every past cycle with its length, average, shortest and longest. A calendar lets you tap a day to log or remove a period day, add a heart, or log a positive LH test. A fixed banner says what it is and isn't: estimates from dates are not reliable enough for contraception or to confirm ovulation.",
        ],
      },
      {
        heading: "Finance",
        body: [
          "This section locks. You unlock it with a passcode or Touch ID, and it locks again when you leave it, after a few idle minutes, or when you switch to another app. It never stores card numbers; the add-a-card form says so.",
          "Six tabs. Overview: net position (savings minus what you owe), split into debts, overdrafts and cards, with a line over time. Debts: add a debt or overdraft with a starting balance, log payments, see the percentage paid off, and keep a schedule of upcoming instalments with dates. Cards: nickname, balance and limit, with a bar showing how much of the limit is used. Savings: pots with a goal, an optional stretch goal, a note, add and take, and a history. Spending: log an amount against a category, see top categories, a weekly chart and every entry for the month. Budget: a monthly limit per category against expected income, with spent and left on each.",
        ],
      },
      {
        heading: "What was hard",
        body: [
          "The animations. The elephant and the trees move, and pixel animation at this size is unforgiving: a frame that's one pixel off reads as a glitch. They're good enough to ship to myself, not good enough to publish, so that's the current work.",
          "The other hard part was restraint. It's easy to keep adding sections. Every one of the five earns its place by doing one thing I actually check daily.",
        ],
      },
    ],
  },
];

export const getProject = (slug: string) => [...projects, ...funProjects].find((p) => p.slug === slug);
export const nextProject = (slug: string) => {
  const withCase = [...projects, ...funProjects].filter((p) => p.caseStudy);
  const i = withCase.findIndex((p) => p.slug === slug);
  return withCase[(i + 1) % withCase.length];
};
