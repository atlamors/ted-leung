# Ted Leung website design decisions

Agreed direction as of October 29, 2026. Use this brief when designing and
implementing the personal website. The art direction is agreed; exact visual
values and photography choices are being evaluated in the first composition.

## Purpose and audience

Build Ted's public image and credibility, primarily for networking and business
relationships. Small business owners and contractors are relevant audiences.
The site should feel established, personable, thoughtful, and welcoming, with
Ted's personality and perspective leading the experience.

Public image is the primary purpose. Keep the scope to a responsive personal
website; reference sites do not imply a need for their service catalogues,
publishing systems, or other functionality.

## Narrative and content

The agreed narrative is:

1. Meet Ted.
2. Understand his outlook.
3. Learn about his work.
4. Connect.

"Insurance as Hope" is the central positioning phrase. Weave business
relationships into this narrative. Confirm Ted's specific services and
credentials before using them in published copy; another advisor's offering
does not establish Ted's own.

## Reference roles

| Reference | What it informs |
| --- | --- |
| [AI Hero](https://www.aihero.dev/) | Composition, strong hierarchy, typography, spacing, and the relationship between text and photography. |
| Susan David | Professional presentation, warmth, confidence, and personal credibility. |
| [Stripe](https://stripe.com/) | The subtlety of the recurring line motif: fine, low-contrast guides integrated into the layout. |
| [Vercel](https://vercel.com/pricing) | How vertical and horizontal divisions can work together. Stripe's quieter treatment governs Ted's execution. |
| [Jenny Holly Hansen](https://www.jennyhollyhansen.ca/) | Content and positioning, including practical advisor value and business relationships. Do not use the site's visual design as a reference. |

## Typography

Use **Hanken Grotesk and Newsreader**, both available through Google Fonts.
Fonts must be free to use; both selected families use the SIL Open Font License.

- [Hanken Grotesk](https://fonts.google.com/specimen/Hanken+Grotesk) provides
  structure for navigation, body copy, buttons, and strong supporting headings.
  Its role is professional and approachable.
- [Newsreader](https://fonts.google.com/specimen/Newsreader) brings editorial
  character to selected headlines and personal statements.

The composition uses "Insurance as Hope" in Newsreader with Ted's name and
supporting text in Hanken Grotesk. Ted's name and affiliation appear together
above the headline, establishing whose perspective the visitor is reading.

License references: [Hanken Grotesk](https://raw.githubusercontent.com/google/fonts/main/ofl/hankengrotesk/OFL.txt)
and [Newsreader](https://github.com/productiontype/Newsreader#license).

## Colour

Use the existing agreed colour scheme. Derive the line colours from that palette
so they sit close to the surrounding background. The exact palette values are
now sampled from the supplied Group 7 signature logo for the first pass:
green `#304840` and gold `#e8c020`, with a warm off-white background `#f8f8f4`.
These are raster-logo samples, not confirmed values from the original brand
handoff. Compare them with that handoff when it becomes available.

## Geometry and composition

Use predominantly rectangular geometry, strong alignment, generous space, and
substantial photo areas. Apply restrained, consistent corner rounding to
selected elements. Balanced asymmetry can give the composition interest while
preserving clear alignment between text and photography.

Let spacing, typography, and occasional rules organise the content. Photography
and typography should remain the most prominent elements.

## Recurring line motif

Use a quietly visible layout grid, with **vertical continuity as the dominant
element**. Stripe is the preferred reference for its subtlety.

- Fine, low-contrast vertical guides establish consistent content boundaries
  and continue through multiple sections.
- Occasional horizontal rules mark meaningful transitions in the narrative.
- Headings, text, and photographs share deliberate alignments with the guides.
- Keep generous space around content and a consistent line weight and treatment.

The repetition and alignment create continuity. Decorative offset outlines,
corner brackets, and the previously proposed open-frame motif are not part of
the agreed direction.

## Pocket-square filigree study

Andrew proposed drawing the recurring brand motif from the pattern in Ted's
pocket square and authorised one swatch and one hero application on October 29,
2026. Andrew subsequently said the subtle pattern looks great and requested
full-colour 3D companions for intermittent use. The page composition remains
subject to review.

- The visible nested curves and coloured bands in `G7Insurance_Branding-91.jpg`
  inform an original vector interpretation. The photograph only reveals part
  of the fabric, so the drawing does not claim to reproduce the whole pattern.
- Two alternating flourishes form a repeat in
  `public/images/pocket-square-filigree.svg`. Fine green strokes use the existing
  palette; no additional colours or animation are introduced.
- The hero uses this tile at 18% maximum opacity, fading toward the reading
  area. Its scale and crop adjust on mobile. The CSS background is decorative
  and cannot intercept pointer input.
- The existing guides retain their structural role. Typography, photography,
  copy, and section composition are held constant to isolate the motif test.
- `/design/pocket-square-swatch.html` shows the drawing at full contrast and
  its tonal repeat. It is a review artifact, not a new section in the website.

Review whether the curved detail feels connected to Ted's pocket square while
leaving his portrait and words as the primary focus. The earlier composition
critique remains open; this study does not claim to resolve it.

Verification: WSL production build (including TypeScript), SVG parsing, and
`git diff --check` passed. Reviewed the production hero at 1440 × 900,
768 × 1024, 390 × 844, and 320 × 740; checked line scale, text legibility,
image loading, overflow, anchor navigation, skip-link focus transfer, CTA
keyboard focus, and hover. The swatch was reviewed at desktop, tablet, and
mobile sizes. Captures are saved in `.local/review/pocket-square-*.jpg`.

## Full-colour 3D accents

Andrew approved three image studies in the separate artwork chat: an open curl,
a horizontal S-curve, and an unfurling fan. Their direction is rounded, matte,
warm, and gently playful, with teal and sage, creamy ivory, and gold through
apricot to coral gradients. Earlier sharp/glossy studies are not approved.
The three original transparent PNGs, prompts, and approval handoff are preserved
in `.local/motif-3d/` as studies 04–06.

Andrew found the initial S-curve placement out of place and requested the
**fan at the top-right corner, facing down**. The supplied fan is copied
unchanged to `public/images/pocket-square-fan.png`; Next/Image provides
responsive optimisation while preserving transparency.

Following review of the tightly cropped corner test, Andrew authorised a
gentler rotation and a more visible fan silhouette. He then requested exact
alignment of the gathered end with the divider, allowing the coral tip to
cross above it. The visible crest at source pixel (588, 1050) anchors to the
centre of the 1 px horizontal divider, using a 46.89% / 83.73% transform origin.
The anchor is inset 16% of image width from the right. The clipping container
extends upward by 25% of image width so the coral tip can cross the divider;
the right guide still crops the outer ribbon. Rotation remains 195 degrees.
The source image is unchanged. Image widths are 156 px on desktop, 144 px on
tablet, and 112 px on mobile.

Andrew clarified that the motif needs more breathing room above and below it
and asked to reverse the compressed desktop test. The subsequent divider
alignment preserves that roomier content layout. Above 900 px, outlook text
starts at 104 px; the photograph column has an additional 112 px top inset.
At a 1440 px viewport, the photograph gap remains 249 px, compared with 121 px
in the compressed test and approximately 176 px before that. The fan now sits
at the divider instead of being centred between the photographs.
Tablet top padding remains 72 px; mobile remains 64 px.
The stacked layouts have no extra inset above the photograph.
The accent is decorative, hidden from assistive technology, cannot intercept
pointer events, and has no animation. The subtle hero pattern remains.

Previous breathing-room placement verification: WSL production build including TypeScript and
`git diff --check` passed. The public PNG matches the approved source byte for
byte. Rendered review covered 1440 × 900, 1024 × 768, 768 × 1024,
390 × 844, and 320 × 740. Checked visible scale, spacing, transparent edges on
the warm background, image loading, overflow, anchor navigation, skip-link
focus transfer, visible CTA focus, and hover. Captures:
`.local/review/fan-breathing-room-desktop.jpg` and `.local/review/fan-breathing-room-mobile.jpg`.
The artwork is approved; the revised placement remains for Andrew's review.

Divider-alignment verification: WSL production build (including TypeScript)
and `git diff --check` passed. Visually reviewed 1440 × 900 desktop,
768 × 1024 tablet, 390 × 844 mobile, and 320 × 740 narrow mobile. The anchor
and divider centre resolve to the same CSS y-coordinate at desktop, tablet,
and mobile sizes. Checked the crossing tip, right-edge crop, clear text and
photography, and absence of horizontal overflow. The rebuilt production
preview was reviewed at desktop/mobile sizes; outlook and return-to-top
navigation, skip-link transfer, and visible CTA keyboard focus still work.
Updated captures: `.local/review/fan-divider-desktop.jpg` and
`.local/review/fan-divider-mobile.jpg`.

## Responsive treatment

On mobile, preserve subtle vertical continuity and simplify internal column
divisions. Maintain comfortable space for text and photography. On larger
screens, the same alignments can support wider, asymmetrical compositions.

Exact line placement, insets, and breakpoint behaviour should be resolved in the
rendered composition rather than assumed from desktop layouts.

## Navigation

Navigation reflects the full first-pass page. The desktop menu's visual design
remains undecided; its existing link now uses the consistent label My approach.

Andrew approved a large, modern mobile menu referencing OpenAI's primary site:
its compact panel icon, open/closed treatment, and quick vertical reveal, adapted
to large Newsreader links and a contact footer in Hanken Grotesk. The prototype
uses the site's warm off-white, deep green, outside guides, and header alignment.
No additional filigree or 3D accent is added inside the menu.

The menu is available at widths up to 900 px. It fills the viewport, keeps the
wordmark and close control at the top, and lets the contents scroll on short
screens. The contact footer rests at the bottom when space permits. A native
modal dialog isolates background content; keyboard focus wraps inside, Escape
closes, and focus and page scrolling are restored on dismissal. Reduced-motion
preferences remove the transitions. Resizing to desktop closes the modal and
restores the existing desktop navigation.

Use first-person navigation and copy: Andrew chose **About me** over
**About Ted** to keep the voice personal and consistent with **My approach**
and **My work**.

The first full content pass replaces the prototype placeholders with five
section destinations: **About me, My approach, My work, Connections, and Let's
connect**. Selection closes the menu, restores scrolling, updates the hash,
and transfers focus to the selected section. Scroll-lock cleanup finishes
before navigating, so it cannot overwrite the destination. The contact footer
uses Ted's email and phone, with native mailto/tel links shared with the page.

Initial prototype verification: WSL lint, production build (including TypeScript), and
`git diff --check` passed. Rendered review covered 390 × 844 and 320 × 740 mobile,
768 × 1024 tablet, 844 × 390 landscape, and the unchanged 1440 × 900 desktop.
Checked open/close motion, preview-link feedback, forward/reverse keyboard focus
wrapping, Escape and focus return, background scroll locking and restoration,
short-screen footer access, reduced motion, and desktop resize cleanup. The
production menu also opened and closed through Cloudflare, with no browser
warnings/errors. Capture: `.local/review/mobile-menu-preview.png`.

## First full content pass

Andrew approved the complete content plan, selecting a dedicated Connections
section, email as the primary contact action, and an audience overview for
My work. The implemented order is hero, My approach, About me, My work,
Connections, Let's connect, and footer. The three audience entries are
individuals and families, business owners, and contractors.

Before extending the page, Andrew requested that the hero eyebrow match the
second section. All section labels and Ted's name now use one shared Eyebrow
component: 11 px uppercase Hanken Grotesk, 1.3 px tracking, muted green, and a
6 px gold square. Hero affiliation details remain separate supporting text.
The contact section adapts the same eyebrow to light text on deep green.

The new sections extend the established guides, Newsreader headings, and
Hanken body copy. My work uses three divided rows; the email-first contact
section closes the page in the existing deep green. Original photography and
the divider-aligned fan remain unchanged. No extra image assets are introduced.

The [content pass](content-pass.md) records the exact destinations and content
boundaries. The supporting prose remains draft copy for Ted's review. Private
review questions are held in Notion and `.local/content-review.md`.

## Photography

Use Ted's supplied photography to establish his presence and inform the layout.
All nine supplied photographs and the two signature-logo images in
`photography/` were visually reviewed on October 29, 2026.

- **Hero:** `G7Insurance_Branding-91.jpg`, the light-suit portrait by the window.
  Its relaxed expression and simple background support a professional opening.
  Served as `public/images/ted-leung-portrait.jpg`, with responsive CSS cropping
  that preserves Ted's face and pocket square.
- **Outlook:** `G7Insurance_Branding-1.jpg`, the informal conversation over
  coffee. Served as `public/images/ted-leung-conversation.jpg` at its natural
  aspect ratio, preserving all three people.
- **Alternative:** `G7Insurance_Branding-49.jpg` is the strongest direct-camera
  portrait if that presence is preferred in review.
- The remaining solo, team, and on-location photographs are available for later
  sections. They are not needed for this first pass.

Originals are preserved locally and excluded from Git. Only the two chosen
website photographs are copied into `public/images/`. Next/Image provides
responsive optimisation; no retouching or generated photography was used.

## First visual test

Build the opening screen and its transition into Ted's outlook before extending
the design across the page. Evaluate the approved font pairing, existing
palette, subtle line motif, spacing, and photography together.

Review the actual result at desktop, tablet, and mobile sizes. Resolve type
scale, line contrast, corner radii, spacing, and image crops in this test.

## Implementation foundation

The project uses Next.js App Router, React, TypeScript, and Tailwind CSS. The
public repository and temporary Cloudflare preview are already established.
The original implementation contained the header, hero, and outlook section.
The first full content pass now adds About me, My work, Connections, contact,
and the footer. The wordmark returns to the top, and a keyboard skip link leads
to the main content. Existing #outlook links remain valid.

The opening phrase, name, role, and affiliation are grounded in the project
record. The supporting first-person copy remains a draft for review. The
generic photo caption has been removed. Specific services, additional
credentials, and testimonials await confirmation. Email-first contact with
phone secondary is implemented from the approved plan. The three original
brief files remain unavailable; final copy
and exact brand values must be reconciled with them before launch.

The preview is marked `noindex, nofollow`. It is a complete first content draft
for review, not a production domain launch. Notion remains the primary project
record; this file is the repository's implementation reference.

### First-pass verification — October 29, 2026

WSL lint, type checking, and the production build passed. Rendered browser
reviews covered 1440 × 900 desktop, 768 × 1024 tablet, 390 × 844 mobile, and
320 × 740 narrow mobile. Checked composition, type, photo crops, spacing, guide
contrast, and overflow. The production preview was checked through the existing
Cloudflare tunnel: images and fonts loaded, anchor navigation and the skip link
worked, and keyboard focus and button hover states were visible. No browser
warnings or errors were returned. Screenshots are local in `.local/review/`.

### Refinements following visual review — October 29, 2026

Andrew approved the review findings and requested these changes:

- Move Ted's name, role, and affiliation above the headline. Remove the generic
  three-word introductory line.
- Crop the portrait closer to give his expression more presence. On mobile,
  show the portrait immediately after the introduction and before the supporting
  copy and button. Keep the original photograph intact.
- Keep the outlook heading and paragraphs together. Place a smaller conversation
  photograph beside the text on desktop and stack it below on tablet/mobile.
- Use the same 52/48 column division in both desktop sections, with one continuous
  faint guide and consistent content insets. Preserve outside guides on mobile.
- Replace vague supporting language with draft copy about families, small
  businesses, contractors, and the responsibilities they carry. Remove the
  expendable portrait caption. The outlook heading is now “A conversation comes
  first,” and the hero anchor is “My approach.”

The selected fonts, palette, source photographs, and first-pass scope remain
the agreed foundation. This refinement does not represent final content approval
or completion of the full website.

Verification of this refinement: WSL lint, type checking, and production build
passed. Reviewed the rendered page at 1440 × 900, 1024 × 768, 768 × 1024,
390 × 844, and 320 × 740. Verified the final tablet crop and the production
desktop/mobile views through Cloudflare, including header and CTA anchors,
return-to-top navigation, skip-link focus transfer, visible keyboard focus,
and button hover. Images loaded, no horizontal overflow was found in the
checked layouts, and the production browser reported no warnings/errors.
At 390 px, the portrait container now starts at approximately 343 px,
compared with 600 px in the first pass. Updated captures:
`.local/review/refined-desktop.jpg` and `.local/review/refined-mobile.jpg`.

### Contact card geometry test — October 29, 2026

Andrew requested a first test of rounded surfaces extending beyond the page
guides, then asked for a stronger overhang and proportionally larger corners,
followed by a 25% reduction to both. The contact panel now extends 12 px beyond
the guides at 390 px viewport width, increasing to 36 px on desktop. The overhang
is limited by the page inset to retain an outer gutter. Its radius scales from
12 px to 18 px. Matching internal
padding preserves both text-column alignments. Outer vertical margins are
24 px on mobile and 32 px on larger screens; the solid surface covers the
guides. The work entries use the separate inset treatment described below.
The section retains anchor focus without a panel-sized outline; its links
retain visible keyboard focus rings.
This rule now covers every page-section destination, the main skip-link
destination, and the page's return-to-top destination. The earlier Contact-only
exception left large outlines on sections reached through the menu. Focus
transfer remains intact; links and buttons keep visible keyboard rings.
Verified menu/anchor navigation at 1440 × 900, 768 × 1024, and 390 × 844,
including skip-link, return-to-top, and contact focus. WSL production build
passed. Review captures: `.local/review/section-focus-*`.
Andrew approved these proportions. The horizontal divider after Connections
has been removed so the contact card is separated by open space.

### Closing CTA filigree pattern — October 29, 2026

Andrew liked the single pocket-square fragment and requested two more to
complete a larger pattern. Three responsive crops now reuse the original
curves: the retained lower-right flourish, a lower-left fragment, and an
upper-right companion turned 180 degrees. Sage #d9e1cd at 11% opacity and
rounded decorative clipping keep the treatment quiet. Content, card geometry,
and keyboard focus remain unchanged. This remains a first pass for Andrew's
review, not final client approval.

The first repeat cropped the new tablet/mobile fragments too tightly. A bounded
correction turned the upper-right form and exposed more of both additions.
Rendered review passed at 1440 × 900, 768 × 1024, 390 × 844, and 320 × 740:
three related flourishes read as one larger pattern while text and contact
details remain clear, with clean rounded crops and no horizontal overflow.
Contact anchor navigation and Email me keyboard focus passed at 320 px,
including the complete ivory focus ring; the decoration ignores pointer events.
Captures: `.local/review/cta-pattern-{desktop,tablet,mobile,narrow,keyboard-focus}.png`.

### Inset work cards — October 29, 2026

At Andrew's request, the three My work entries now sit inside the page guides,
using the same content inset and 4 px rounding as the hero photograph. Each has
a subtle pastel surface: sage (#e9eee7), warm ivory (#f2eddf), and pale green
(#e6eeeb). Cards have 20 px gaps on desktop/tablet and 16 px on mobile,
with comfortable internal padding.
The existing two-column desktop rows stack their
headings above the copy on tablet and mobile. Horizontal row dividers and the
border after My work have been removed; the guides remain visible in the gaps.
Copy, photography, and the approved contact card remain unchanged.
The work cards now use an 8 px corner radius, increased from 4 px; other geometry is preserved.

Reviewed at 1440 × 900 desktop, 768 × 1024 tablet, 390 × 844 mobile, and
320 × 740 narrow mobile. Verified the mobile inset against the hero photo,
text wrapping, menu navigation to My work, focus transfer, and overflow. Body
text contrast is at least 4.73:1 across the three backgrounds. WSL lint and
production build (including TypeScript) passed. Review captures are stored in
`.local/review/inset-work-*`.

### Subject icons inside the work cards

Andrew approved the revised inline icon/title geometry, now applied to all
three cards. Following Andrew's size and alignment refinement, the artwork is
20% larger (approximately 77/67 px) and shifted right by 15% of its original
width (9.6/8.4 px). The layout now reserves the full enlarged icon width plus
its perspective overhang, preserving approximately 24 px of visible space
before the heading. The earlier transform-only enlargement consumed that gap.
Headings trim surplus font space above and below the letters; each icon has
its own measured optical offset, including the briefcase's pale handle. Wrapped
headings center against the complete text block. Image loading sizes account
for the larger artwork. Andrew clarified that depth should come from perspective: the left edge
recedes and looks smaller, while the right edge comes forward. The flat tilt
is replaced by a -28 degree Y rotation with perspective at 2.5 times the icon
size and 1.1 horizontal compensation for foreshortening. Above 900 px, the heading row uses the card's normal inset without a negative margin.
At 900 px and below, the existing outset preserves the icon's rightward nudge and extension beyond the card's left edge; longer titles wrap beside them on narrow screens. This replaces the stacked-heading and absolute-corner experiments.
Card padding and inter-card gaps remain unchanged. Reviewed at 1440 × 900,
768 × 1024, 390 × 844, and 320 × 740, including title wrapping, image loading,
overflow, keyboard focus and contact navigation. The gap and optical alignment correction
was visually reviewed in the live preview at those same sizes; diff checks
passed. Captures and individual heading close-ups: `.local/review/icon-centered-*`.
The desktop inset revision passed rendered review at 1440 × 900 and 901 × 1000,
with zero heading margins, icons inside cards, and clean wrapping. Review at
768 × 1024, 390 × 844, and 320 × 740 confirmed the existing -37.2 px outset,
icon treatment, approximately 24 px visible gap, and no overflow. Contractor-link
keyboard focus and Enter navigation to contact passed. Revision captures:
`.local/review/desktop-icon-inset-*`.

Andrew rejected the floating ribbon composition because it did not create the
intended flow. He approved replacing it with one soft 3D subject icon per card:
a welcoming home for Individuals and families, a rounded briefcase for Business
owners, and a hard hat for Contractors. The earlier ribbon studies remain
privately archived in `.local/motif-3d/flow-assets/` as rejected experiments.

The initial pass placed each icon above its heading, replacing the ordinal number. Shared matte
materials, soft lighting, jade and ivory, and restrained warm accents connect
the three subjects. Visible artwork is approximately 64 px wide on desktop and
56 px on tablet/mobile, with source-padding compensation and natural aspect
ratios. Cards return to 20 px desktop/tablet and 16 px mobile gaps. The desktop
heading/copy columns, pastel surfaces, 4 px radii, content, Business owners link,
and approved motif treatments elsewhere remain intact.

Transparent PNGs are in `public/images/card-icons/`; Next/Image serves small
optimized copies. Source prompts, alpha measurements, and image handoff notes
are private in `.local/motif-3d/card-icons/`. Icons are decorative, hidden from
assistive technology, and ignore pointer input. No animation or dependencies
were added. The old ribbon components and their public image copies were
removed after verifying the private originals.

Visually reviewed in the actual page at 1440 × 900 desktop, 768 × 1024 tablet,
390 × 844 mobile, and 320 × 740 narrow mobile. Checked subject recognition,
consistent visual weight, transparent edges, card rhythm, heading hierarchy,
wrapping, image loading, and overflow. Keyboard focus and contact navigation
transfer correctly. The link's underline/arrow hover treatment also passed.
WSL lint, typecheck, and production build passed. Captures are in
`.local/review/card-icons-*`.

### Contact links on every work card

All three cards now end with the same arrow-link treatment, leading to Contact:
“Let’s talk about your future,” “Let’s talk about your business,” and “Let’s talk
about your work.” The shared 44 px target, underline/arrow feedback, and visible
keyboard focus remain. Contact receives focus without a section-sized outline.
Reviewed at 1440 × 900 desktop, 768 × 1024 tablet, and 390 × 844 mobile,
including keyboard activation and pointer navigation. WSL lint and typecheck
passed. Captures:
`.local/review/card-links-*`.

Follow the repository's WSL-only Node tooling and visual review requirements in
[AGENTS.md](../AGENTS.md).

### Four supporting routes — October 29, 2026

Andrew confirmed /about-me (including #my-approach), /my-work, /connections,
and /contact. The homepage remains the approved overview with all five existing
section anchors intact. Supporting pages extend the same Newsreader/Hanken,
green/gold/offwhite, inset imagery, and side guides without repeating the home
hero fan. About uses the supplied seated portrait; Connections uses the supplied
group photograph without identifying other people. My work expands the three
existing audience cards using their approved icons and geometry. Contact reuses
the accepted three-fragment filigree and email-first invitation.

A simple four-link desktop row makes the routes discoverable; elaborate desktop
menu design remains deferred. The established full-screen mobile menu retains
its icon animation, contacts footer, focus trap, Escape return, and scroll unlock.
Route links use Next Link, active pages use aria-current, wordmarks return to /,
and same-page anchors remain native for keyboard focus transfer. The documented
html data-scroll-behavior attribute lets Next handle route transitions while
preserving smooth in-page scrolling. Home copy remains in page.tsx; supporting
copy is in supporting-pages.tsx. Copy is a first draft for Ted, not a production
launch or final client approval.

Root rendered acceptance covered 1440 × 900 desktop, 768 × 1024 tablet,
390 × 844 mobile, and 320 × 740 narrow. A bounded repair removed the unwanted
editorial divider before the CTA and restored native anchor focus. Checked clear
imagery/type, clean layout, anchor focus without section outlines, menu forward
and backward focus wrap, Escape return/unlock, cross-route navigation and Back,
reduced motion, metadata, and the visible ivory Email me focus ring. Final browser
warnings/errors were empty. Captures: `.local/review/supporting-*-final.png`.
The initial route candidate production build passed; final repairs passed lint
and type checking. Final public-preview smoke passed desktop route navigation, mobile menu unlock,
home return, homepage visual comparison, and hero anchor focus; no browser warnings/errors.
### Shared contact pair, footer and editorial contact page — October 30, 2026

Andrew requested clearer mobile contact details and a more intentional footer
and contact page, then explicitly approved the reviewed copy cleanup. One
shared ContactDetails pair now renders labeled Email and Phone in equal columns
at up to 360 px total width, including 320 px screens. Values are 16 px desktop
and 15 px mobile with no forced wrapping and at least 44 px hit areas. Labels
retain full secondary-text contrast; opacity was removed after source review.
Footer navigation uses matching equal columns for mobile alignment.

Home and supporting pages share the accepted green CTA rather than duplicate
its markup. Its overhang, rounded silhouette and quiet three-fragment motif are
retained. The shorter invitation leads to Email me and the paired details.
The shared footer has identity/affiliation, a four-route navigation area, paired
contacts and a lower copyright row. Mobile order is identity, 2x2 navigation,
contacts and copyright, with a subtle top guide.

/contact is now a distinct light editorial page: “Let’s get in touch,” short
invitation, primary email action, paired details and helper copy, plus the
existing warm portrait at right on desktop. Actions precede a modest landscape
crop on mobile. There is no duplicate closing CTA or form. Header/menu, fonts,
colors, approved hero/photographs/work cards and native contact behavior remain.
Copy was shortened using the approved first-person brief, without new service,
credential or geographic claims. New contextual links connect home to the
existing supporting routes. No additional pages or assets were introduced.

Final root rendered review covered 1440 × 900, 768 × 1024 and 390 × 844 across
the five routes/relevant sections; 320 px contact/CTA details/footer pairing,
15 px values, full-opacity labels and 44 px hit targets also passed. Homepage
card wrapping, contextual/footer navigation, Back, mobile menu, in-page focus
and Email me focus passed. See `.local/review/site-review-*.png`; the clipped
narrow CTA image is not evidence of a complete CTA view. Initial final-copy
production build passed at 65a06ca; later bounded CSS/text refinements passed
focused lint/diff checks. Public-preview smoke passed on the final integrated source. Copy and design
remain a client draft, with production SEO/launch decisions deferred separately.
Loading-performance note for this review: a development LCP warning named the
below-fold conversation photo after anchor/Back/deep-page inspection. The hero
already preloads; no eager-loading change was made to the below-fold photo.
No JavaScript errors were reported, but browser warnings are not globally empty.
Production loading performance and field Core Web Vitals remain unmeasured.