// Takes sharp screenshots of every project site and saves them into public/work.
// Run from the site folder:   npm run shots
// Edit the list below to add a site or change a URL (e.g. NJ Motors on localhost while it's unreleased).

import { chromium } from "playwright";

const sites = [
  ["nilara-desktop", "https://nilara.online"],
  ["aabhara-desktop", "https://aabhara.shop"],
  ["smarttouch-desktop", "https://smart-touch.uk"],
  ["supportcomply-desktop", "https://supportcomply.co.uk"],
  ["glowguide-desktop", "https://glowguide-next-blue.vercel.app"],
  // ["njmotors-desktop", "http://localhost:3001"],   // uncomment and set the port when NJ Motors is running locally
];
const phones = [
  ["nilara-phone", "https://nilara.online"],
  ["aabhara-phone", "https://aabhara.shop"],
  ["smarttouch-phone", "https://smart-touch.uk"],
];

const browser = await chromium.launch();

async function shoot(name, url, viewport, mobile) {
  const ctx = await browser.newContext({ viewport, deviceScaleFactor: 2, isMobile: mobile, hasTouch: mobile });
  const page = await ctx.newPage();
  await page.goto(url, { waitUntil: "networkidle" });
  // nudge scroll so entrance animations finish, then back to top
  await page.mouse.wheel(0, 300); await page.waitForTimeout(800);
  await page.mouse.wheel(0, -1000); await page.waitForTimeout(1500);
  await page.screenshot({ path: `public/work/${name}.jpg`, type: "jpeg", quality: 90 });
  console.log("saved", name);
  await ctx.close();
}

for (const [name, url] of sites) await shoot(name, url, { width: 1600, height: 1000 }, false);
for (const [name, url] of phones) await shoot(name, url, { width: 390, height: 844 }, true);
await browser.close();
