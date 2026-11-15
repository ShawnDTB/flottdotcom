# flottdotcom

Official web home for **Flott / flottdotcom**: music, streams, videos, and everything FLO.

The homepage leads with **Somewhere in Somerdale**, the **21 Days official music video**, and the **November 28, 2026 album release party**. Twitch, YouTube, TikTok, an introduction to Sage, and the community follow. The `/community` page houses Discord and Flotty's World 2.0, with the existing `/player-guide`, `/ranks`, and `/map` URLs preserved.

## Direction

- FLO brings together everything Flott creates and represents
- Music and content creation come first; community and Minecraft follow
- Flotty's World 2.0 is the flagship Minecraft/community experience
- Black / off-white late-night broadcast aesthetic
- `[FLO]` as the shared identity mark
- Vanilla-first Minecraft survival messaging
- Quality-of-life supporter perks, never pay-to-win power
- Clear separation between supporter ranks and staff authority
- Official release artwork and listening links, with an album on the way

## Stack

- React
- Vite
- React Router
- Lucide icons
- Cloudflare / Wrangler ready

## Local development

```bash
npm install
npm run dev
```

## Validate

```bash
npm run lint
npm run build
node --test src/campaign.test.js
```

## GitHub Pages preview

The preview is published at https://shawndtb.github.io/flottdotcom/ by
`.github/workflows/pages.yml` on pushes to `main`. Repository Settings → Pages →
Source must be **GitHub Actions**, since the React source needs to be built first.
`npm run build:pages` builds with the `/flottdotcom/` prefix and creates entry
points for the community pages so direct links and refreshes work. The regular
`npm run build` keeps root paths for the Cloudflare site.

## Configuration

Site-wide links, `FEATURED_RELEASE`, rank data, server values, Bedrock connection details, and claim settings live in `src/site.js`. Update the featured release there when the album arrives. The official 21 Days cover is saved in `public/21-days.jpg` from Spotify's release metadata. Baseline social-sharing metadata lives in `index.html`; update it alongside a future release change.

Album, video, and party information lives in `src/campaign.js`. The event time is explicitly set to Eastern Time (Atlanta), and its countdown and attendance prompts change when the event starts and ends. The album remains “on the way” until its release is confirmed; the party date is not automatically treated as its streaming release date.

YouTube and Twitch players load only after a visitor chooses to open them. Direct Spotify, YouTube, and Twitch links remain available independently of the embeds. The music video is on Flott's artist channel (`@itsflotto`); the existing creator channel (`@flottdotcom`) is retained for other videos.

Set `VITE_PARTY_RSVP_URL` to the confirmed Partiful event URL to enable the RSVP button. Until then, the site shows a clearly labeled Discord updates link and points to the invite on Flott's socials. It does not use a guessed RSVP address. The calendar download is `public/somewhere-in-somerdale-party.ics`; update it alongside event date/time changes. A calendar download does not reserve a place.

Current defaults:

- Java: `74.112.77.32:25565`
- Bedrock/Geyser: `74.112.77.32:19132`
- BlueMap: `http://74.112.77.32:8100`

The BlueMap IP endpoint is temporary and can be replaced with a domain later without changing page components.

Optional build-time environment variables:

```bash
VITE_SERVER_HOST=play.example.com
VITE_SERVER_IP=play.example.com:25565
VITE_BEDROCK_PORT=19132
VITE_MAP_URL=https://map.example.com
VITE_YOUTUBE_URL=https://www.youtube.com/@yourhandle
VITE_TIKTOK_URL=https://www.tiktok.com/@yourhandle
```

Spotify, Twitch, YouTube (`@flottdotcom`), TikTok (`@flott.com`), Discord, and the Seemless link hub use confirmed destinations. YouTube and TikTok can still be overridden with the environment variables above.

## dev-0 audit

The product/UX audit that initiated the `dev-0` pass is documented in `docs/site-audit-dev-0.md`.

The music and creator transition is described in `docs/flo-transition-audit.md`.
