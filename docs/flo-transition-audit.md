# FLO website: current review and transition direction

Reviewed September 27, 2026.

## Review scope

This review covers the local `dev-0` checkout at `421d7e1`, its source, and its rendered homepage at narrow and desktop widths. GitHub confirms that this matches the remote `dev-0` tip. That branch is 66 commits ahead of `main`, with no commits behind. Preserve this work when implementing the transition.

The production URL and deployed revision were not verified. Findings describe the current development site, not a confirmed production deployment. Server availability, social-account ownership, full accessibility compliance, and real-device performance were not independently tested.

Both `npm run lint` and `npm run build` pass. The initial build and preview attempts hit an environment process restriction; rerunning with the required execution permission succeeded. No application code was changed during this review. The pre-existing untracked `package-lock.json` was left intact.

## Confirmed direction and release

The owner's brief puts music and content creation first, followed by Minecraft and Discord/community. FLO represents the culmination of everything Flott: his work, personality, values, and beliefs. It does not need a newly invented acronym, manifesto, or set of brand values. Let his own work and words communicate those things.

The supplied Spotify page confirms:

- Track: **21 Days**
- Artist: **Flott**
- Release date displayed: August 27, 2026
- Duration: 3:50
- [Listen on Spotify](https://open.spotify.com/track/78zWy7lhrq4XXQusQhB2kp)
- [Spotify artist profile](https://open.spotify.com/artist/2nsBFSU8cvM1ZgdhqsfHoW)

The owner describes this as his first song and says an album is on the way. Album title, artwork, release date, and any pre-save destination remain unconfirmed. Do not infer those from the single's album-container URL on Spotify.

## Current assessment

The visual identity is ready for a broader artist and creator website. The content hierarchy still presents a Minecraft server.

| Area | Current evidence | Effect on a new visitor |
| --- | --- | --- |
| Opening | “VANILLA SURVIVAL. FLOTT ENERGY.” with Copy Server IP as the primary action | Establishes Minecraft as the main reason to visit |
| Navigation | Home, Player Guide, Ranks, Map, Discord, Watch Live | Three dedicated Minecraft destinations; no music destination |
| Homepage | After the introduction, five numbered sections cover server philosophy, joining, ranks, claims, and community tools | Most of the page serves existing or prospective players |
| Creator introduction | Lists Flotto, Itsflott, and Flottdotcom and explains the handles | Helps recognition, but says little about Sage or his music |
| Music | No release data, artwork, listening links, or music section | A listener cannot find the new song through the site |
| Content | Twitch player and links, without a curated video or clip selection | Shows the live channel but little of the work available between streams |
| YouTube/TikTok | Optional links default to empty and are absent in the local preview | Two important parts of his output are invisible here; deployment configuration is unverified |
| Global identity | Footer, ticker, and homepage metadata repeatedly name the server, IP, vanilla-first play, and no pay-to-win | Minecraft remains the identity even outside server-specific content |

### Preserve

- The `[FLO]` mark and black/off-white palette.
- Oversized typography, thin borders, mono labels, numbered sections, and restrained color accents.
- The late-night broadcast feel, including the framed media card and ticker.
- Direct, personal language and the existing quality of the Minecraft explanations.
- The complete Player Guide, Ranks, and Map destinations and their existing URLs.
- Existing improvements: lazy-loaded secondary routes, visible keyboard focus, skip link, reduced-motion handling, route metadata, mobile navigation controls, and a 404 page.

The earlier `site-audit-dev-0.md` records an older baseline. Several of its technical findings have already been addressed and should not be reported as new defects.

### Address alongside the transition

- The site has no local artist photography or cover-art assets beyond its favicon. Official release artwork and a chosen portrait would make the site feel more personal while preserving the typography and layout.
- The Twitch frame is structurally prominent even when no stream is available. Give the content section a useful offline presentation, such as a selected video or channel destination. The surrounding “LIVE FEED” label is static; it does not check stream status.
- Map “LIVE” status is based on having a configured URL, not a health check. Its HTTP default also prevents embedding on HTTPS pages, for which the code already provides an external-link fallback. Keep that concern within the Minecraft area and simplify the technical fallback copy.
- Initial HTML sharing metadata remains Minecraft-led, with no share image. Update the baseline metadata as well as client-side route metadata, and verify actual link previews after deployment.
- Mobile stacking makes the opening Minecraft pitch occupy most of the initial view. The new release and listening action should appear early on phones too.

## Recommended identity structure

- **Flott:** the artist and creator visitors follow. Spotify uses this name, so keep that connection clear.
- **Sage:** the person behind Flott; introduce naturally in the about copy, without inventing a second artist identity.
- **FLO:** the umbrella for everything he creates and the people who connect with it.
- **Flottdotcom:** the website and established online handle.
- **Flotty's World 2.0:** the Minecraft experience within FLO.

Visitors should be able to enjoy the music or videos without needing to play Minecraft or join Discord. Community becomes an invitation to participate more deeply.

## Proposed homepage sequence

1. **Flott and the current release.** Keep the large FLO mark and bold type. Feature official 21 Days artwork in the current framed-media position, with the track title and “Out now.” Make “Listen to 21 Days” the primary action and “Watch on Twitch” the secondary action. Album anticipation can be one short line based on the owner's confirmation; no invented date or pre-save button.
2. **Watch Flott.** Give Twitch, YouTube, and TikTok a clear home. Use a selected video and a small number of clips with useful labels and verified destinations. Keep the Twitch player here with a sensible offline state. Start with a curated selection rather than promising an automatically updating feed.
3. **Meet Sage / This is FLO.** Introduce the person in a short paragraph using his own language, with a portrait if available. Explain that the music, streams, videos, and community all come from him. Avoid listing supposed values that he has not expressed.
4. **Be part of it.** Introduce Discord as the place to stay connected and Flotty's World as the place to play together. Keep an obvious Minecraft entry point and a concise server summary.
5. **Footer and ticker.** Lead with music and creator platforms. Use the ticker for the current release, content, and FLO identity. Keep the server address and detailed game promises in the Minecraft area.

This gives a visitor a simple progression: discover Flott, listen or watch, learn about him, then join in.

## Navigation and destination plan

Recommended primary navigation: **Music / Watch / About / Community**, with the FLO mark returning home and a prominent listening action while 21 Days is the featured release.

Music, Watch, and About can initially be homepage sections. A focused Community destination can offer Discord and a clearly named Minecraft area containing server information, the Player Guide, Ranks, and Map. Existing player links must remain valid. Do not hide Minecraft behind a vague icon or several levels of menus.

With one released single, a large music catalog would create empty space. A strong release feature is enough now. Make its data reusable so a dedicated Music page can grow naturally when the album arrives.

## Practical implementation sequence

### First pass: the visible transition

- Rework the homepage opening around Flott and 21 Days, keeping the established visual system.
- Add music configuration and the confirmed Spotify destinations.
- Reorganize navigation, footer, ticker, titles, descriptions, and sharing assets consistently.
- Move detailed server philosophy, joining, and rank previews into the Community/Minecraft journey while retaining existing guide, ranks, and map URLs.
- Use confirmed social destinations only; add selected content when the URLs are supplied.

### Second pass: personality and content

- Add the official artwork, an approved portrait, a short personal introduction, and selected videos/clips.
- Make the watch section useful both during and between streams.
- Check mobile ordering, keyboard navigation, listening and viewing links, and existing player journeys.

### Album release update

- Replace the featured-release data when the album is ready.
- Add the title, artwork, date, and pre-save/listening links only when confirmed.
- Retain 21 Days in a small release history instead of rebuilding the homepage.

## Remaining content inputs

- Official artwork file for 21 Days and any chosen artist photography.
- Confirmed YouTube and TikTok profile URLs and two or three representative videos/clips.
- A short introduction in Sage's own words; no formal mission statement required.
- Album details as they become public.
- Production URL and hosting/deployed-branch details before evaluating or publishing the live-site transition.

The intended outcome is that a first-time visitor immediately recognizes Flott as an artist and creator, can listen to his current release or watch his work, and can still easily find the community and Minecraft server.
