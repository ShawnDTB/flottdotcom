# flottdotcom

Official web home for **Flott / flottdotcom** and the community behind **Flotty's World 2.0**.

The project keeps the proven information architecture from the VanillaBeamsTV site—creator-first homepage, player guide, ranks/perks, map, Discord, and live Twitch access—while using a separate visual system built around the `[FLO]` identity.

## Direction

- `FLOTTDOTCOM` is the top-level creator brand
- Flotty's World 2.0 is the flagship Minecraft/community experience
- Black / off-white late-night broadcast aesthetic
- `[FLO]` as the shared identity mark
- Vanilla-first Minecraft survival messaging
- Quality-of-life supporter perks, never pay-to-win power
- Clear separation between supporter ranks and staff authority
- Twitch-first creator presentation for `flottdotcom`

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

Site-wide links, rank data, server values, and claim settings live in `src/site.js`.

Optional build-time environment variables:

```bash
VITE_SERVER_IP=play.example.com
VITE_MAP_URL=https://map.example.com
VITE_YOUTUBE_URL=https://www.youtube.com/@yourhandle
VITE_TIKTOK_URL=https://www.tiktok.com/@yourhandle
```

The Twitch and Discord URLs are known defaults. YouTube and TikTok are intentionally hidden until their URLs are explicitly configured so the public site never guesses at a creator handle.

## dev-0 audit

The product/UX audit that initiated the `dev-0` pass is documented in `docs/site-audit-dev-0.md`.
