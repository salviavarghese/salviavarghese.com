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
    when: "Oct 2026",
    summary:
      "Property compliance product for landlords. Freelance. Started as a front-end restyle, mockup first and applied as a CSS-only reskin; I'm now building out the rest of the product's front end the same way.",
    stack: "Mockup-first design, CSS reskin, then new front-end work on the client's codebase",
    live: "https://supportcomply.co.uk",
    image: { src: "/work/supportcomply-desktop.jpg", alt: "SupportComply homepage: white page, dark green logo, headline Property evidence, kept in order, with a plan panel on the right", width: 1600, height: 1000 },
    caseStudy: {
      lead: "A visual restyle of an existing product site, done as a reskin: same pages, wording and features, only the look changed.",
      client: "SupportComply",
      year: "2026",
      role: "Front-end design and build, ongoing",
      stackShort: "Existing codebase, CSS first",
      brief:
        "SupportComply keeps property records, evidence and day-to-day work in one place for landlords and property managers in England. The product worked, but it looked template-made, and the client did not want any risk to the logic, data or backend while it was being restyled. The job was to make it look properly designed while changing nothing about how it behaves.",
      whatIDid: [
        "Read every page and workspace first and wrote down what could not change: selectors, IDs, form field names, routes, component names. That list became the rules for the whole job.",
        "Wrote a small design system before any page: brand green kept, a neutral palette, two fonts with a type scale, spacing scale, one radius, one shadow, one easing.",
        "Built the new look as a standalone HTML mockup of every page at phone and laptop width, plus a style guide, and got it approved before touching the codebase.",
        "Applied the approved design as a CSS-only reskin in a single pull request on the client's repository: about a thousand lines changed, all presentation, no logic.",
        "Took before and after screenshots of every page and compared them so behaviour was identical and the look matched the mockup.",
      ],
      outcome: "The restyle went in as one reviewed pull request with no regressions, and the client kept me on: I'm now building out the rest of the product's front end, each piece mocked up and approved before it's built. The process from this job is now how I start every front-end project.", // TODO Salvia: name what you're building next when it's public
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

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const nextProject = (slug: string) => {
  const withCase = projects.filter((p) => p.caseStudy);
  const i = withCase.findIndex((p) => p.slug === slug);
  return withCase[(i + 1) % withCase.length];
};
