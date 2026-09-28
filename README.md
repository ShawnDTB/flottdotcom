# flottdotcom

Official web home for **Flott / flottdotcom**: music, streams, videos, and everything FLO.

The homepage leads with **21 Days**, followed by Twitch, YouTube, TikTok, an introduction to Sage, and the community. The `/community` page houses Discord and Flotty's World 2.0, with the existing `/player-guide`, `/ranks`, and `/map` URLs preserved.

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
```

## Configuration

Site-wide links, `FEATURED_RELEASE`, rank data, server values, Bedrock connection details, and claim settings live in `src/site.js`. Update the featured release there when the album arrives. The official 21 Days cover is saved in `public/21-days.jpg` from Spotify's release metadata. Baseline social-sharing metadata lives in `index.html`; update it alongside a future release change.

Spotify and Twitch players load only after a visitor chooses to open them. Direct listening and channel links remain available independently of the embeds.

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
