# Evaluation — Attempt 1

## Overall Verdict: NEEDS REVISION

## Overall Assessment
The pages have a coherent PECS identity, and the restored image areas make the layouts feel much more complete. The responsive structure holds together without horizontal overflow, but several prominent desktop crops cut off faces, so the photo restoration does not yet feel deliberate across viewports.

## Scores
| Criterion | Score | Status | Weight | Notes |
|-----------|-------|--------|--------|-------|
| Design Quality | 1/3 | FAIL | HIGH | The navy/blue and orange system, typography, and hierarchy are consistent, but the about-page hero and consultancy photos have conspicuously poor desktop crops that undermine the visual finish. |
| Originality | 2/3 | PASS | HIGH | The media page's split editorial opening, numbered index, and asymmetrical feature/card composition show deliberate choices beyond a generic template. |
| Craft | 1/3 | PASS | MEDIUM | At 1440, 768, and 375px, content stacks and image boxes remain within the viewport. Most images load and use cover, but some focal points are lost at desktop sizes. |
| Functionality | 2/3 | PASS | MEDIUM | Main navigation, section links, calls to action, and page content remain readable and usable. No horizontal overflow or missing restored images was observed. |

## What's Working Well
- The empty history, consultancy, and media-card image areas are filled with local scholar photos; the checked image requests loaded successfully.
- The about history photo is a strong fit: the subject remains legible in its framed composition, and the orange offset border gives the area a purposeful edge.
- The media advisory feature is well balanced, and the cards stack cleanly on mobile. The opening section retains a clear text/image hierarchy at desktop and mobile widths.
- No horizontal overflow was observed at the tested 1440px, 768px, or 375px viewport widths.

## Issues Found
### Issue 1: About hero loses the subject on desktop
- **What**: The about banner's cover crop shows mainly a woman's mouth, neck, and clothing at desktop width; the full face is visible at mobile width.
- **Where**: `about.html`, `.about-banner` (`img/scholar-3.jpg`).
- **Why it matters**: This is the first and largest image on the page, and the severe crop makes the restoration look accidental rather than like a purposeful photographic composition.
- **Suggested fix**: Adjust the banner's object position for desktop, or use a more landscape-compatible image from the allowed scholar set. Check the face and subject framing at desktop, tablet, and mobile widths.

### Issue 2: Consultancy background crops faces at its top edge
- **What**: In the wide consultancy feature, the people are clipped near the top of the image; the overlaid panel also obscures most of the photograph on mobile.
- **Where**: `about.html`, `.consultancy-feature > img` (`img/scholar-9.jpg`).
- **Why it matters**: The background is intended to provide a prominent photographic setting, but the current focal point is difficult to read and feels cramped behind the copy.
- **Suggested fix**: Reposition the cover crop upward enough to preserve recognizable faces, and verify that the mobile crop leaves a meaningful portion of the photo visible around the panel. If the image cannot support both compositions, choose another suitable supplied photo.

### Issue 3: Third media card cuts off the portrait on desktop
- **What**: The third compact card's desktop image shows the subject from roughly the neck down, with the head cropped out; the face becomes visible again on mobile.
- **Where**: `blog.html`, third `.media-pathway--compact` card (`img/scholar-10.jpg`).
- **Why it matters**: The card caption is about people and transformation, so hiding the person's face weakens the image's relevance and makes the crop look unintentional.
- **Suggested fix**: Use a desktop-specific focal position that keeps the face in frame, or select a more landscape-friendly supplied image. Recheck the card at desktop and mobile widths.

## Priority Fixes for Next Attempt
1. Correct the about hero crop so the subject's face is clearly framed at desktop width.
2. Reposition or replace the consultancy background photo so faces and a useful photographic area remain visible around the panel.
3. Keep the third media-card portrait's face visible in its desktop crop.

## Should the next attempt REFINE or PIVOT?
**REFINE.** The page structure, brand treatment, and responsive layout are sound; the remaining work is focused on choosing and positioning the photos so their subjects remain clear at each aspect ratio.
