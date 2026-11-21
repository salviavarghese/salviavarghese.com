// Posts for /writing. Plain paragraphs; a line starting with "## " is a sub-heading.

export type Post = {
  slug: string;
  title: string;
  date: string; // ISO
  summary: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "restyling-a-live-product-without-touching-its-code",
    title: "Restyling a live product without touching its code",
    date: "2026-10-23",
    summary:
      "How I redesigned the front end of SupportComply as a single CSS pull request, and why I now start every front-end job with a mockup the client approves before I open the codebase.",
    body: [
      "Earlier this month I finished a restyle of SupportComply, a product that keeps property records and evidence in order for landlords in England. The product worked. It just looked like it had been generated from a template, and the client wanted it to look designed. The catch was that nothing about how it behaved could change. Same pages, same wording, same forms, same routes. Only the look.",
      "That constraint turned out to be the most useful thing about the job, because it forced a process I now use on everything.",
      "## Read first, write nothing",
      "The first day I didn't open a stylesheet. I went through every page and workspace, including the logged-in ones, and wrote down everything the code depended on: element IDs, data attributes, form field names, component names, routes. That list became the rules. Anything on it could not be renamed, moved or removed, and before I changed any class I searched the whole project for it.",
      "I also wrote down what looked generated. Three identical cards in a row. A gradient on the hero. Pill badges above every heading. Shadows on everything. The same border radius on every element regardless of what it was. Naming these made it much easier to avoid putting them straight back in a different colour.",
      "## A design system before a single page",
      "The second thing I did was write a one-page design system: the brand green kept, a small set of neutrals, success, warning and error colours, two fonts with a fixed type scale, a spacing scale, one border radius, one shadow, one easing curve. Every page in the mockup and the final build had to use only those values.",
      "This sounds like overhead for a restyle. It is the opposite. Without it, every page becomes a fresh set of decisions and the site drifts. With it, most decisions are already made and the pages come out consistent without trying.",
      "## The mockup is the contract",
      "Then I built the new look as a standalone HTML and CSS mockup in a folder outside the app, not imported anywhere, so it could not affect the site. Every page at phone and laptop width, plus a style guide page showing the colours, type, buttons, inputs and states. Real content, real screenshots, not placeholder text.",
      "The client reviewed that and asked for changes, and I changed the mockup, not the codebase. Only when they said approved did I touch the real code. This is the part I would not skip again. It means the review happens on something cheap to change, and by the time I'm editing real files, every visual decision has already been agreed.",
      "## A reskin, not a rebuild",
      "The actual change went in as one pull request on the client's repository: about a thousand lines added and seven hundred removed, all of it CSS and purely visual markup. No business logic, no state, no API calls, no backend. Where something needed new behaviour, like a mobile menu toggle, I put it on a list for the client instead of building it.",
      "Before opening the pull request I screenshotted every page again at every width and put them next to the before shots and the mockup. Behaviour had to be identical. Look had to match the mockup. If either failed, it wasn't done.",
      "## What I'd tell someone doing this for the first time",
      "Don't start in the codebase. Start by reading it and listing what you can't touch. Write the design system before the first page, even if it's a page long. Build the mockup somewhere it can't break anything, and don't open the real files until someone has said yes to it. Keep the change as small as gets the result. And take the before screenshots before you change anything, because you will want them.",
      "The client kept me on after the restyle, and I'm now taking SupportComply through to launch the same way: each screen mocked up, approved, then built, with staging, payments and backups around it. I used the same process a week later to build my own site, and I'm using it on a dealership site for another client. It takes a day longer at the start and saves a week at the end.",
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
