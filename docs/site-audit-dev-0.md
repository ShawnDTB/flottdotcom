# flottdotcom Site Audit — dev-0

## Scope

This pass reviews the current `main` implementation as a product, not just as a codebase. The target is a creator-first `flottdotcom` home that keeps **Flotty's World 2.0** as the flagship community experience while preserving the late-night `[FLO]` broadcast language that already works.

## What already works

- Distinct visual identity: black/off-white, hard borders, broadcast labels, mono metadata, and the `[FLO]` mark are memorable and intentionally different from the VanillaBeamsTV site.
- Strong information architecture: Home → Player Guide → Ranks → Map is easy to understand and matches the way a community member actually moves through the site.
- Clear server philosophy: vanilla-first, convenience over power, and no pay-to-win messaging are repeated consistently.
- Central configuration: server, social, claim, and rank data already live in `src/site.js`.
- Responsive foundations: every page has explicit tablet/mobile breakpoints and grids already collapse cleanly.

## Priority findings

### 1. Brand hierarchy is slightly split

The URL/project is `flottdotcom`, but the header currently presents **Flotty's World 2.0** as the primary name. Other areas call the site Flott's creator hub. That creates a small identity conflict: is this Flott's website, or only the Minecraft website?

**Direction:** make `FLOTTDOTCOM` the top-level brand and treat Flotty's World 2.0 as the featured Minecraft/community product. Keep `[FLO]` as the shared visual mark.

### 2. Some implementation language leaks into public copy

The Map page tells visitors to set `VITE_MAP_URL`. That is useful to developers but not to players. Public-facing pages should only describe user actions and current availability.

**Direction:** replace internal configuration language with a clean “live map coming soon / check Discord for updates” state.

### 3. Guessed social URLs can become broken brand links

Twitch and Discord are known. YouTube/TikTok currently fall back to assumed `@flottdotcom` URLs. If those are not the live handles, the site confidently sends users to the wrong destination.

**Direction:** only render optional socials when explicitly configured. Keep them environment-configurable.

### 4. Initial-load performance can improve

All route modules are imported eagerly even though most visitors only open Home. Google Fonts are loaded through CSS `@import`, which delays stylesheet processing. The Twitch iframe is also a heavy third-party resource.

**Direction:** lazy-load secondary routes, move font loading to document-level preconnect/stylesheet hints, and mark the Twitch player for lazy loading.

### 5. Accessibility needs a dedicated pass

The visual system is strong, but keyboard/focus UX is incomplete. There is no skip link, no global `:focus-visible` treatment, no reduced-motion behavior for the ticker, and the mobile nav lacks `aria-controls`/Escape handling.

**Direction:** add keyboard-first navigation support, focus states, reduced motion, an accessible copy-IP status announcement, and better nav semantics.

### 6. Mobile information density can be clearer

The rank comparison table removes its headings on small screens, which leaves three stacked values without context. Some small social/action controls also fall below an ideal touch-target size. Heavy offset shadows can crowd narrow screens.

**Direction:** preserve labels in the mobile claim table, enforce ~44px interactive targets, and reduce decorative offset/shadow pressure on small viewports.

### 7. Invalid routes currently fail quietly

React Router has no catch-all route. A bad URL can render the global shell with no useful page content.

**Direction:** add an on-brand 404 with links back to Home and the Player Guide.

### 8. Page-level SEO/browser context is too generic

Every route uses the same document title and description. The site has no Open Graph/Twitter baseline metadata.

**Direction:** update title/description by route and add lightweight social-sharing metadata in `index.html` without inventing an image/canonical URL.

## dev-0 implementation plan

1. Reframe global brand hierarchy around `FLOTTDOTCOM` while preserving Flotty's World messaging.
2. Add route-level titles/descriptions and a 404 route.
3. Add lazy route loading and improve external font loading.
4. Harden navigation accessibility, focus states, reduced motion, and clipboard feedback.
5. Clean public-facing Map content and optional social-link handling.
6. Improve mobile claim-table clarity, action sizes, and decorative overflow behavior.
7. Keep all existing rank philosophy and Minecraft progression rules intact unless a server configuration change explicitly says otherwise.
