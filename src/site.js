const configuredJavaAddress = import.meta.env.VITE_SERVER_IP || "74.112.77.32";
const javaAddress = configuredJavaAddress.replace(/:25565$/, "");

export const SITE = {
  brandName: "FLOTTDOTCOM",
  creator: "Flott",
  name: "Sage",
  handle: "flottdotcom",
  aliases: ["Flotto", "itsflott", "flott", "flottdotcom"],
  serverName: "Flotty's World 2.0",
  serverHost: import.meta.env.VITE_SERVER_HOST || "74.112.77.32",
  serverIp: javaAddress,
  bedrockPort: Number(import.meta.env.VITE_BEDROCK_PORT || 19132),
  discord: "https://discord.gg/yJBHueFU6x",
  twitch: "https://www.twitch.tv/flottdotcom",
  youtube: import.meta.env.VITE_YOUTUBE_URL || "https://www.youtube.com/@flottdotcom",
  tiktok: import.meta.env.VITE_TIKTOK_URL || "https://www.tiktok.com/@flott.com",
  links: "https://seemless.link/@Flottdotcom",
  spotify: "https://open.spotify.com/artist/2nsBFSU8cvM1ZgdhqsfHoW",
  mapUrl: import.meta.env.VITE_MC_MAP_URL || import.meta.env.VITE_MAP_URL || "",
  geyserConsoleGuide: "https://geysermc.org/wiki/geyser/using-geyser-with-consoles/",
  claimBlocks: {
    starting: 1000,
    perHour: 100,
    maxAccrued: 10000,
  },
};

export const FEATURED_RELEASE = {
  title: "21 Days",
  type: "Debut single",
  artist: "Flott",
  artwork: `${import.meta.env.BASE_URL}21-days.jpg`,
  artworkAlt: "21 Days cover: handwritten FLO marks on a black background",
  released: "2026-08-27",
  url: "https://open.spotify.com/track/78zWy7lhrq4XXQusQhB2kp",
  embedUrl: "https://open.spotify.com/embed/track/78zWy7lhrq4XXQusQhB2kp?utm_source=oembed",
};

export const creatorSocials = [
  { key: "spotify", label: "Spotify", href: SITE.spotify },
  { key: "twitch", label: "Twitch", href: SITE.twitch },
  { key: "youtube", label: "YouTube", href: SITE.youtube },
  { key: "tiktok", label: "TikTok", href: SITE.tiktok },
  { key: "discord", label: "Discord", href: SITE.discord },
].filter((social) => Boolean(social.href));

export const supporterRanks = [
  {
    key: "default",
    name: "[FLO]",
    label: "Core Player",
    accent: "mono",
    perks: [
      "1 home",
      "TPA requests and responses",
      "Land claims",
      `${SITE.claimBlocks.starting.toLocaleString()} starting claim blocks`,
      `+${SITE.claimBlocks.perHour} claim blocks per active hour`,
    ],
  },
  {
    key: "unfine",
    name: "UNFINE",
    label: "Community Regular",
    accent: "red",
    perks: [
      "Everything from [FLO]",
      "/hat",
      "/afk",
      "/me",
      "Earned community recognition",
    ],
  },
  {
    key: "fine",
    name: "FINE",
    label: "Twitch Tier 1",
    accent: "orange",
    perks: [
      "Everything from UNFINE",
      "/nick",
    ],
  },
  {
    key: "finer",
    name: "FINER",
    label: "Twitch Tier 2",
    accent: "gold",
    perks: [
      "Everything from FINE",
      "Nickname colors",
    ],
  },
  {
    key: "finest",
    name: "FINEST",
    label: "Twitch Tier 3",
    accent: "lime",
    perks: [
      "Everything from FINER",
      "Formatted nicknames",
      "RGB nickname options",
      "Highest supporter identity",
    ],
  },
];

export const staffRanks = [
  ["Sidekick", "Welcomes new players and answers community questions"],
  ["Mod", "Handles player conduct and investigates reports"],
  ["Event Manager", "Organizes community events"],
  ["Admin", "Handles escalated moderation and claim management"],
  ["Developer", "Maintains plugins and integrations and diagnoses server issues"],
  ["Owner", "Oversees the server and controls rank permissions"],
];
