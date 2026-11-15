# Somewhere in Somerdale campaign

Implemented November 15, 2026. Production deployment has not been verified.

## Confirmed content

- The owner confirmed Somewhere in Somerdale is Flott's album, with c.will appearing as a guest performer at the release party.
- Supplied flyer: Saturday November 28, 8–11 PM, Midtown Atlanta, free entry, Partiful RSVP with limited spots; guest names c.will, winnie black, and Tre.present. The upcoming November 28 falls on Saturday in 2026. Atlanta uses Eastern Time.
- Official video confirmed by the owner and YouTube metadata: https://www.youtube.com/watch?v=oCTEwEzW6f4 — Flott – 21 Days (Official Music Video), on the @itsflotto artist channel.
- The existing @flottdotcom YouTube destination remains the creator/content channel.

## Implementation

- Album-led hero with the established FLO typography, dark background, mono labels, borders, and ticker.
- Green/pink accents reference the supplied flyer; a typographic event pass highlights the party without treating the guest artist's portrait as Flott or the flyer as album artwork.
- Featured music video with the official YouTube thumbnail, an on-demand privacy-enhanced embed, and a persistent direct YouTube link. Spotify listening remains immediately below.
- Party details, guest lineup, time-zone-aware countdown, and downloadable calendar event. The countdown changes during the event; attendance prompts and calendar download disappear when it ends.
- Updated primary navigation, ticker, homepage title, and sharing descriptions. Creator and Minecraft/community content remains accessible.

## Remaining inputs

The direct Partiful URL has not been supplied. The page has a clearly labeled Discord party-updates link and directs visitors to the Partiful invite on Flott's socials. Set `VITE_PARTY_RSVP_URL` to the verified event URL to enable the RSVP button. No RSVP link or venue address was guessed.

No streaming release date, album cover, album listening URL, or pre-save link has been confirmed. The copy says the album is on the way; it does not equate the party date with a confirmed streaming release date.

## Validation

- Lint, production build, and Git whitespace checks pass.
- Four tests cover the countdown, exact start/end boundaries, and the calendar's UTC conversion from Atlanta time.
- Inspected desktop and mobile layouts; verified no horizontal overflow at 320, 390, 768, and 1440 pixel viewports.
- Checked video and party anchor navigation/focus, mobile menu closure, and embedded YouTube player loading. Full media playback is provider/browser dependent and was not verified.
- Successfully downloaded the calendar through the page; its dates match November 28, 8–11 PM Eastern Time.

Campaign settings: `src/campaign.js`. Component/styles: `src/components/ReleaseCampaign.*`. Calendar: `public/somewhere-in-somerdale-party.ics`. Update the calendar and visible date labels together if the event changes.
