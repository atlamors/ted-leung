# First full content pass

The landing-page account below records the October 29 initial pass. The current
four-route extension and its validation are recorded at the end of this file.

Implemented from Andrew's approved content plan on October 29, 2026.
This is one complete landing-page draft for client review. The rendered copy
is maintained in `src/app/page.tsx`.

| Section | Heading | Destination / action |
| --- | --- | --- |
| Opening | Insurance as Hope. | My approach → #outlook |
| My approach | A conversation comes first. | #outlook |
| About me | I'm Ted. | #about-me |
| My work | People, businesses, and what comes next. | #my-work |
| Connections | Good relationships create possibilities. | #connections; Let's connect → #contact |
| Let's connect | I'd be glad to hear from you. | #contact; email first, phone secondary |
| Footer | Ted Leung | Affiliation, email, phone, copyright; wordmark → #top |

Use first-person prose and the shared uppercase eyebrow with a gold marker.
Keep the existing hero/outlook photographs and fan placement. The new My work
section contains three audience entries: individuals and families, business
owners, and contractors. Connections has its own section rather than being
folded into contact.

Navigation and contact values are shared in `src/app/site-content.ts`. The
mobile menu has five working section links; it closes and transfers focus
after the page scroll lock is released. Preserve #outlook for existing links.
Native mailto/tel links are used; there is no form, booking service, or backend.

The preview remains noindex/nofollow. The role and contact values come from
Ted's supplied correspondence; personal statements and audience descriptions
are proposed wording for his review. No invented career dates, services,
testimonials, outcomes, networking affiliations, or credentials are included.
Keep detailed source material and review questions in private Notion or the
ignored `.local/` folder. Client copy approval and production launch remain
separate steps.

## Verification

WSL lint, type checking, production build, and `git diff --check` passed.
Visually reviewed the full page at 1440 × 900 desktop, 768 × 1024 tablet,
390 × 844 mobile, and 320 × 740 narrow mobile, plus the menu at 844 × 390
landscape. Checked all five menu destinations, hash and keyboard focus transfer,
focus wrapping, Escape, scroll restoration, desktop resize cleanup, reduced
motion, and contact hrefs without sending mail or initiating a call. The
browser returned no warnings/errors. Captures are in `.local/review/full-pass-*`.

## Four supporting pages — October 29, 2026

Andrew confirmed four supporting pages, combining About me and My approach.
The homepage remains an overview; its approved composition and #outlook,
#about-me, #my-work, #connections, and #contact anchors remain intact.
Current rendered copy lives in `src/app/page.tsx` for the homepage and
`src/app/supporting-pages.tsx` for the supporting pages. Shared route navigation
and contact values remain in `src/app/site-content.ts`.

| Route | Heading | Content |
| --- | --- | --- |
| /about-me | I’m Ted. Let’s start there. | Confirmed identity, seated portrait, conversation-first approach at #my-approach |
| /my-work | Your priorities. Our starting point. | Individuals/families, business owners, contractors; practical conversation questions |
| /connections | Good relationships. New possibilities. | Group photo, exchanging ideas, introductions, exploring collaboration |
| /contact | I’d be glad to hear from you. | Email first, phone secondary, native mailto/tel, existing quiet filigree |

The shared desktop navigation is a simple row of four route links. The mobile
menu retains its full-screen serif composition, animated icon, contact footer,
Escape, focus wrapping, and scroll-unlock behavior while navigating between
routes. Current pages are identified with aria-current. Wordmarks, including
the footer, return to /. About and My work use native in-page anchors so
keyboard activation transfers focus to their section targets.

This is a first copy draft for Ted’s review. No invented products, credentials,
career timeline, testimonials, or other people’s identities are asserted.
The preview remains noindex/nofollow; client approval and production launch
are separate steps. No form, booking service, analytics, or backend was added.

### Supporting-page verification

The initial four-route candidate passed WSL lint, type checking, and production
build. Final bounded repairs removed the divider before the CTA, corrected
native anchor focus, and added the documented Next route scroll-handling
attribute; focused lint and full type checking passed afterward. The production
build was not rerun after those final repairs.

Root reviewed the rendered candidate at 1440 × 900, 768 × 1024, 390 × 844, and
320 × 740 across the new pages. Checked imagery, typography, contact clearances,
overflow, native anchor focus, menu focus wrapping, Escape and focus return,
cross-route unlock, Back, reduced motion, inherited metadata, and Email me
focus. Final browser warnings/errors were empty. Back returned to
/my-work#contractors with menu closed/body unlocked; prior contractor scroll
position restoration was not specifically established. Review captures are
`.local/review/supporting-*-final.png`. Final public-preview smoke acceptance passed: desktop route navigation, mobile
menu cross-route unlock, home return, unchanged homepage composition, and hero
anchor keyboard focus; browser warnings/errors remained empty.
## Copy review and contact refinement — October 30, 2026

Andrew explicitly approved applying the copy cleanup as well as improving the
contact/footer experience. The homepage hero and “Insurance as Hope” approach
remain intact. About, audience and Connections summaries now use more direct
first-person language, with More about me and Explore my work contextual links.
The supporting About, My work and Connections copy removes redundant abstract
phrases while retaining confirmed identity, practical questions and existing
roles/contact values. The home coffee-photo alt describes two people without
asserting they are colleagues. No products, credentials, geography, outcomes,
career history or other affiliations were invented.

Current copy remains in `src/app/page.tsx` and `src/app/supporting-pages.tsx`.
The shared invitation/footer/contact details are in `src/app/site-sections.tsx`.
CTA copy is “Have an insurance question or an introduction in mind? Email or
call me.” The contact page now has its own light editorial introduction,
“Let’s get in touch,” direct actions, a brief helper and existing portrait.
It has no repeated closing CTA. A shared labeled Email/Phone pair stays in two
columns through narrow mobile; native contact values remain unchanged.

The shared footer now provides identity/affiliation, four route links, paired
contacts and copyright. Header/mobile menu behavior, home anchors, photography,
work-card icon geometry and the accepted three-fragment CTA motif are retained.
About/Work/Contact descriptions were made more specific; route titles and
preview noindex/nofollow remain accurate and distinct.

### Review evidence and launch follow-ups

Source review and root rendered acceptance passed for final candidate
b126eff56075c991f97002aaf61cdd3b682499d4. Reviewed 1440 × 900 desktop,
768 × 1024 tablet and 390 × 844 mobile across all routes/relevant updated
sections; 320 px contact/CTA details/footer pairs fit without overflow, with
15 px mobile values, 44 px targets and full-opacity labels. Final homepage card
copy wraps well and original hero/icon treatment remains intact. Contextual and
footer links, Back, mobile-menu focus/Escape/navigation, in-page target focus
without section outlines and Email me focus passed. Captures are in
`.local/review/site-review-*.png`; the narrow CTA crop does not show the entire
CTA because its top was clipped, while other mobile captures show the full CTA.

Full WSL lint, type checking and production build passed on the settled copy/UI
candidate 65a06ca. Subsequent label contrast, contact-column sizing and final
home card text edits passed focused lint/diff checks; no final build rerun is
claimed. Five routes returned 200 with unique H1/title/description, inherited
preview robots, valid internal links/anchors and no duplicate IDs. Favicon,
robots.txt and sitemap.xml return 404 as documented deferred launch/presentation
items. Canonical domain, indexing/robots/sitemap launch policy, structured data
and social preview assets remain separate decisions; no production-domain or
service assumptions were added. Next Image retains reserved dimensions/sizes;
no field Core Web Vitals or performance score is claimed.

Exact reviewed app files integrated locally with before/after hash guards.
Public-preview browser smoke acceptance passed on the final integrated source.
This remains draft client copy, not a production launch.
Loading-performance note for this review: a development LCP warning named the
below-fold conversation photo after anchor/Back/deep-page inspection. The hero
already preloads; no eager-loading change was made to the below-fold photo.
No JavaScript errors were reported, but browser warnings are not globally empty.
Production loading performance and field Core Web Vitals remain unmeasured.