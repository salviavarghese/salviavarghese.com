# Salvia Varghese portfolio — design system

Every page in the mockup and the final build uses only these tokens.

## Colour
| Token | Hex | Use |
|---|---|---|
| paper | #F2EEEE | page background (faint rose-grey; never pure white) |
| ink | #000000 | display type, primary buttons |
| body | #2A2628 | paragraph text |
| muted | #6E6568 | meta, captions, secondary nav |
| line | #D9D2D3 | hairlines, table rules |
| raspberry | #B5235F | the one accent: links, selected nav, contact panel |
| raspberry-deep | #8E1B4B | hover/active on accent |
| success | #2F6B3A | form success only |
| warning | #9A6700 | |
| error | #B3261E | form errors |

Contrast: body on paper 12.1:1, muted on paper 4.9:1, paper on raspberry 6.0:1. All AA.

## Type
Two families, clearly distinct.
- **Bricolage Grotesque** (Google Fonts, variable 200–800, opsz) — name, headings, nav, meta, buttons.
- **Newsreader** (Google Fonts, variable, opsz) — paragraph text only.

Scale (desktop / phone):
| Step | Size | Family / weight | Use |
|---|---|---|---|
| display | clamp(64px, 13vw, 184px) | Bricolage 800, lh 0.88, ls -0.03em | hero name, contact email |
| h1 | clamp(40px, 6vw, 72px) | Bricolage 700, lh 1.0, ls -0.02em | page titles, project titles |
| h2 | clamp(28px, 3.6vw, 40px) | Bricolage 600, lh 1.1 | section headings |
| h3 | 22px | Bricolage 600 | sub-headings |
| lead | clamp(20px, 2vw, 26px) | Newsreader 400, lh 1.35 | intro paragraphs |
| body | 18px | Newsreader 400, lh 1.55 | prose, max 65ch |
| meta | 15px | Bricolage 500, lh 1.4 | captions, table cells, nav |
| small | 13px | Bricolage 500 | footer |

Sentence case everywhere. No tracked-out uppercase labels.

## Spacing
8px base. Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192.
Section gap: 128px desktop, 80px phone. Gutter: 24px phone, 48px tablet, 64px desktop. Content max-width 1400px; prose max-width 65ch.

## Shape
Radius: 2px (buttons, inputs, images). Nothing else is rounded.
Shadow: none anywhere.
Borders: 1px line colour, used only where they separate rows of content.

## Motion
Easing: cubic-bezier(0.2, 0.7, 0.2, 1). Durations: 160ms (hover), 600ms (reveal).
One page-load moment: hero name rises in. No per-section fades, no hover-lift on cards.
Link hover: colour to raspberry-deep plus underline. Image hover on work rows: none (images are the content).
prefers-reduced-motion: all transitions and the reveal are disabled.

## Components
- Button primary: ink background, paper text, 14px 22px padding, radius 2. Hover: raspberry. Focus-visible: 2px raspberry outline, 3px offset.
- Button secondary: 1px ink border, transparent. Hover: ink fill.
- Nav: text links, meta size. Current page: raspberry text, no underline.
- Work row: title + year on a 1px top rule; image 16:10 beneath; caption line in meta.
- Table: 1px rules between rows, no vertical rules, no zebra.
- Photo slot: 120×120 square at radius 2, line border, empty until a photo exists.
