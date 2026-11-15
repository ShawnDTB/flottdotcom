import { copyFile, mkdir, writeFile } from "node:fs/promises";
import { build } from "vite";

// Pages hosts this preview under the repository name. The regular build still
// targets the domain root for Cloudflare.
await build({ base: "/flottdotcom/" });

// Pages has no SPA rewrites. Give each route an entry point for direct links
// and refreshes, plus an application-rendered fallback for unknown routes.
for (const route of ["community", "player-guide", "ranks", "map"]) {
  await mkdir(`dist/${route}`, { recursive: true });
  await copyFile("dist/index.html", `dist/${route}/index.html`);
}
await copyFile("dist/index.html", "dist/404.html");
await writeFile("dist/.nojekyll", "");
