// All copy and project data for the site. Edit here; components only render it.
// Images live in /public/work. Replace a file to swap a screenshot; set image to null to show the text frame.

export type Project = {
  slug: string;
  title: string;
  when: string;
  summary: string;
  stack: string;
  live: string | null;
  external?: string; // when the title should link off-site instead of to a case study
  image: { src: string; alt: string; width: number; height: number } | null;
  placeholder?: string; // shown in the frame when image is null
  phones?: { src: string; alt: string; width: number; height: number }[];
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
      "I graduate in summer 2027 and I'm looking for a graduate role in web development, in the UK or abroad.",
    ],
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
    image: null,
    placeholder: "Screenshots to follow when the site launches",
    caseStudy: {
      lead: "A full website for a used-car dealership, where the owner manages stock, enquiries and page content without a developer.",
      client: "NJ Motors, through Ara Solutions",
      year: "2026",
      role: "Design, build, launch",
      stackShort: "Next.js, Payload, Neon, Vercel",
      brief:
        "The dealership needed a site that looked like a modern showroom and that the owner could update daily: add a car, change a price, mark one sold. No developer in the loop for day-to-day changes.",
      whatIDid: [
        "Built the site from scratch in Next.js with Payload CMS, so vehicles, enquiries and page content are all editable from an admin panel.",
        "Vehicle listing and detail pages driven by the CMS, with images stored on Vercel Blob.",
        "Enquiry form sending email through Resend, with the sending domain verified.",
        "A scroll-animation layer on top of the CMS-driven pages, kept separate from the data layer.",
        "Pre-launch audit: fixed a database schema issue in Neon, set up environment config and the Vercel deploy pipeline.",
      ],
      outcome: "Launching soon. Screenshots and the live link will be added here.", // TODO Salvia: update at launch
    },
  },
  {
    slug: "supportcomply",
    title: "SupportComply",
    when: "Oct 2026",
    summary:
      "Front-end restyle for a property compliance product for landlords. Freelance. I designed a visual mockup first, got it approved, then applied it as a reskin without touching any logic or backend.",
    stack: "CSS-only reskin of an existing site, mockup-first process, pull request on the client's repo",
    live: "https://supportcomply.co.uk",
    image: { src: "/work/supportcomply-desktop.jpg", alt: "SupportComply homepage: white page, dark green logo, headline Property evidence, kept in order, with a plan panel on the right", width: 800, height: 500 },
    caseStudy: {
      lead: "A visual restyle of an existing product site, done as a reskin: same pages, wording and features, only the look changed.",
      client: "SupportComply",
      year: "2026",
      role: "Front-end design and restyle",
      stackShort: "CSS, existing codebase",
      brief:
        "The product worked but looked template-made. The client wanted it to look properly designed without any risk to the logic, data or backend.",
      whatIDid: [
        "Audited every page and listed what could not change: selectors, field names, routes.",
        "Built a standalone HTML mockup of the new look and got it approved before touching the codebase.",
        "Applied the approved design as a CSS-only reskin, one page at a time, in a pull request on the client's repository.",
        "Checked every page at phone and laptop widths against the mockup before handing over.",
      ],
      outcome: "Shipped as a single reviewed pull request. This mockup-first process is now how I start every front-end job.", // TODO Salvia: expand
    },
  },
  {
    slug: "nilara",
    title: "Nilara",
    when: "Aug 2026",
    summary:
      "Catalogue site for a saree business, launched for the Onam 2026 collection. Customers reach the catalogue, Instagram and WhatsApp ordering in one tap.",
    stack: "HTML, CSS, JavaScript, Vercel, custom domain, DNS and SSL",
    live: "https://nilara.online",
    image: { src: "/work/nilara-desktop.jpg", alt: "Nilara homepage: a deep red page with a gold moon logo and the headline Sarees handpicked for you", width: 800, height: 500 },
    phones: [
      { src: "/work/nilara-phone.jpg", alt: "Nilara homepage on a phone", width: 750, height: 1624 },
      { src: "/work/aabhara-phone.jpg", alt: "Aabhara homepage on a phone, built on the same structure", width: 375, height: 812 },
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
    image: { src: "/work/aabhara-desktop.jpg", alt: "Aabhara homepage: cream page, gold logo, headline Adornments for Onam, catalogue cover on the right", width: 800, height: 500 },
    phones: [{ src: "/work/aabhara-phone.jpg", alt: "Aabhara homepage on a phone", width: 375, height: 812 }],
    caseStudy: {
      lead: "A one-page catalogue site for a jewellery business, built on the same structure as Nilara with its own brand.",
      client: "Aabhara",
      year: "2026",
      role: "Design, build, launch",
      stackShort: "HTML, CSS, JavaScript, Vercel",
      brief:
        "Aabhara sells necklaces, earrings and sets for the Onam season and needed the same thing as Nilara: one link that gets a customer to the catalogue and to WhatsApp ordering on a phone.",
      whatIDid: [
        "Reused the one-page structure from Nilara and gave it Aabhara's own palette, type and logo.",
        "Open Graph tags for clean link previews on WhatsApp and Instagram.",
        "Deployed on Vercel with a custom domain, DNS and SSL.",
      ],
      outcome: "Live for the Onam 2026 collection at aabhara.shop.", // TODO Salvia: expand
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
    image: { src: "/work/smarttouch-desktop.jpg", alt: "Smart Touch Renovations homepage: navy header, headline Kitchen and Bathroom Renovators in Peterborough and Cambridgeshire, a row of kitchen photos", width: 800, height: 500 },
    phones: [{ src: "/work/smarttouch-phone.jpg", alt: "Smart Touch Renovations homepage on a phone", width: 375, height: 812 }],
    caseStudy: {
      lead: "Brand identity and website front end for a kitchen and bathroom renovation company in Peterborough.",
      client: "Smart Touch Renovations, through Ara Solutions",
      year: "2026",
      role: "Brand identity, front end",
      stackShort: "Next.js, Tailwind, shadcn/ui",
      brief:
        "A renovation company with good work and no brand. They needed a logo, a consistent look, and a site that gets homeowners to book a free consultation.",
      whatIDid: [
        "Designed the brand identity: logo, typography, colour palette and brand guidelines.",
        "Planned the site map, the lead form and the SEO strategy.",
        "Built the front end in Next.js with Tailwind CSS and shadcn/ui.",
      ],
      outcome: "Live at smart-touch.uk.", // TODO Salvia: expand
    },
  },
  {
    slug: "glowguide",
    title: "GlowGuide",
    when: "2026, ongoing",
    summary:
      "Skincare recommendation app. Started as a placement brief for a CMS-backed Next.js site; I used it to prototype a product of my own, now being rebuilt.",
    stack: "Next.js, Tailwind CSS, shadcn/ui, Zod, Payload CMS, Neon Postgres",
    live: "https://glowguide-next-blue.vercel.app",
    image: { src: "/work/glowguide-desktop.jpg", alt: "GlowGuide homepage: light page with the headline Your skin knows what it needs and two buttons", width: 800, height: 500 },
    caseStudy: {
      lead: "A skincare recommendation app for people who don't know how to look after their skin.",
      client: "Own product",
      year: "2026",
      role: "Design, build",
      stackShort: "Next.js, Payload, Neon, Zod",
      brief:
        "The placement brief was a Next.js site with a CMS and a database. Instead of a generic form I used it to prototype GlowGuide: a short quiz that builds a skin profile and recommends products.",
      whatIDid: [
        "Built and deployed a Next.js site with shadcn/ui, Tailwind CSS and Zod validation, connected to Payload CMS and a Neon PostgreSQL database.",
        "Worked through the deployment and configuration problems to get it live on Vercel.",
      ],
      outcome: "Prototype live. Being rebuilt with rule-based recommendations and a product database.", // TODO Salvia: expand
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

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const nextProject = (slug: string) => {
  const withCase = projects.filter((p) => p.caseStudy);
  const i = withCase.findIndex((p) => p.slug === slug);
  return withCase[(i + 1) % withCase.length];
};
