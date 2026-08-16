const configuredJavaAddress = import.meta.env.VITE_SERVER_IP || "74.112.77.32";
const javaAddress = configuredJavaAddress.replace(/:25565$/, "");

export const SITE = {
  brandName: "FLOTTDOTCOM",
  creator: "Flott",
  handle: "flottdotcom",
  aliases: ["Flotto", "itsflott", "flott", "flottdotcom"],
  serverName: "Flotty's World 2.0",
  serverHost: import.meta.env.VITE_SERVER_HOST || "74.112.77.32",
  serverIp: javaAddress,
  bedrockPort: Number(import.meta.env.VITE_BEDROCK_PORT || 19132),
  discord: "https://discord.gg/yJBHueFU6x",
  twitch: "https://www.twitch.tv/flottdotcom",
  youtube: import.meta.env.VITE_YOUTUBE_URL || "",
  tiktok: import.meta.env.VITE_TIKTOK_URL || "",
  mapUrl: import.meta.env.VITE_MAP_URL || "http://74.112.77.32:8100",
  geyserConsoleGuide: "https://geysermc.org/wiki/geyser/using-geyser-with-consoles/",
  claimBlocks: {
    starting: 1000,
    perHour: 150,
    maxAccrued: 40000,
  },
};

export const creatorSocials = [
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
    bonus: 0,
    totalBonus: 0,
    perks: [
      "1 home",
      "TPA requests and responses",
      "Use public server warps",
      "Land claims",
      "1,000 starting claim blocks",
      "+150 claim blocks per active hour",
    ],
  },
  {
    key: "unfine",
    name: "UNFINE",
    label: "Community Regular",
    accent: "red",
    bonus: 1000,
    totalBonus: 1000,
    perks: [
      "Everything from [FLO]",
      "/hat",
      "/afk",
      "/me",
      "+1,000 rank claim-block bonus",
      "Earned community recognition",
    ],
  },
  {
    key: "fine",
    name: "FINE",
    label: "Twitch Tier 1",
    accent: "orange",
    bonus: 2000,
    totalBonus: 3000,
    perks: [
      "Everything from UNFINE",
      "/workbench",
      "/nick",
      "+2,000 additional rank claim blocks",
      "3,000 cumulative rank claim-block bonus",
    ],
  },
  {
    key: "finer",
    name: "FINER",
    label: "Twitch Tier 2",
    accent: "gold",
    bonus: 3000,
    totalBonus: 6000,
    perks: [
      "Everything from FINE",
      "/enderchest",
      "Player-head utility",
      "Nickname colors",
      "+3,000 additional rank claim blocks",
      "6,000 cumulative rank claim-block bonus",
    ],
  },
  {
    key: "finest",
    name: "FINEST",
    label: "Twitch Tier 3",
    accent: "lime",
    bonus: 4000,
    totalBonus: 10000,
    perks: [
      "Everything from FINER",
      "Formatted nicknames",
      "RGB nickname options",
      "+4,000 additional rank claim blocks",
      "10,000 cumulative rank claim-block bonus",
      "Highest supporter identity",
    ],
  },
];

export const staffRanks = [
  ["Sidekick", "Trusted community helper"],
  ["Mod", "Moderation tools while keeping normal survival play intact"],
  ["Event Manager", "Moderator access plus event-specific tools when required"],
  ["Admin", "High-level server management without relying on /op"],
  ["Developer", "Technical, plugin, integration, and permissions administration"],
  ["Owner", "Full Minecraft server authority"],
];
