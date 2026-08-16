# flottdotcom

Official web home for **Flott / flottdotcom** and **Flotty's World 2.0**.

This project intentionally reuses the proven information architecture from the VanillaBeamsTV site—creator-first homepage, player guide, ranks/perks, map, Discord, and live Twitch access—while using a completely different visual system built around the `[FLO]` identity.

## Direction

- Black / off-white late-night broadcast aesthetic
- `[FLO]` as the primary identity mark
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

## Build

```bash
npm run build
```

## Important configuration

Site-wide links and server values live in `src/site.js` so they can be changed without hunting through page components.

`VITE_MAP_URL` can be supplied at build time to point `/map` visitors at the live BlueMap endpoint once its public URL is finalized.
