import {
  AlertTriangle,
  Check,
  ExternalLink,
  Gamepad2,
  Link as LinkIcon,
  MapPinned,
  MessageSquareText,
  Server,
  ShieldCheck,
  Shovel,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SITE, staffRanks } from "../site.js";
import "./PlayerGuide.css";

const quickStart = [
  ["01", "JOIN", "Choose Java or Bedrock below and connect to the same world."],
  ["02", "SET HOME", "Use /sethome once you find your base. Everyone gets one home."],
  ["03", "CLAIM", "Protect bases, storage, farms, and builds with GriefPrevention."],
  ["04", "LINK", "Use /discord link when you want your Minecraft account connected to your Discord account."],
];

const commandGroups = [
  {
    title: "HOME & TRAVEL",
    commands: [
      ["/sethome", "Set your one home."],
      ["/home", "Return to your home."],
      ["/delhome", "Remove your current home."],
      ["/tpa <player>", "Request to teleport to another player."],
      ["/tpahere <player>", "Ask another player to teleport to you."],
      ["/tpaccept", "Accept a teleport request."],
      ["/tpdeny", "Decline a teleport request."],
      ["/warp", "View and use public server warps."],
    ],
  },
  {
    title: "COMMUNITY",
    commands: [
      ["/msg <player> <message>", "Send a private message."],
      ["/reply <message>", "Reply to your most recent private message."],
      ["/ignore <player>", "Ignore another player."],
      ["/discord", "View the server Discord information."],
      ["/discord link", "Connect your Minecraft account to Discord."],
    ],
  },
  {
    title: "CLAIMS",
    commands: [
      ["Golden Shovel", "Right-click opposite corners to create or resize a claim."],
      ["/claimslist", "See your claim-block balance and claims."],
      ["/trust <player>", "Allow a player to build in your claim."],
      ["/containertrust <player>", "Allow container access without full build trust."],
      ["/accesstrust <player>", "Allow basic interaction access."],
      ["/untrust <player>", "Remove trust from a claim."],
      ["/abandonclaim", "Delete the claim you are standing in."],
    ],
  },
];

export default function PlayerGuidePage() {
  return (
    <main className="page-main guide-page">
      <section className="section guide-hero">
        <div className="shell">
          <div className="section-label">{SITE.serverName} // START HERE</div>
          <h1 className="display-title">FLOTTDOTCOM'S<br />PLAYER GUIDE.</h1>
          <p className="guide-hero-copy">Java, Bedrock, claims, homes, travel, Discord, and the commands worth remembering. Everything you need to get into the world without digging through plugin documentation.</p>
          <div className="hero-actions">
            <a className="btn btn-solid" href={SITE.discord} target="_blank" rel="noreferrer"><MessageSquareText size={16} /> JOIN DISCORD</a>
            <Link className="btn" to="/map"><MapPinned size={16} /> WORLD MAP</Link>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="shell">
          <div className="section-label">01 // QUICK START</div>
          <div className="guide-start-grid">
            {quickStart.map(([number, title, text]) => (
              <article className="guide-step" key={title}>
                <span>{number}</span>
                <strong>{title}</strong>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section crossplay-section">
        <div className="shell">
          <div className="section-label">02 // JAVA + BEDROCK</div>
          <div className="crossplay-heading">
            <div>
              <h2>ONE WORLD.<br />TWO WAYS IN.</h2>
            </div>
            <p>{SITE.serverName} accepts normal Java connections and Bedrock players through Geyser. Use the connection method that matches the version of Minecraft you own.</p>
          </div>

          <div className="platform-grid">
            <article className="platform-card">
              <div className="platform-card-top"><Server size={22} /><span>PC / MAC / LINUX</span></div>
              <h3>JAVA EDITION</h3>
              <p>Open Multiplayer → Add Server and enter the full Java address.</p>
              <div className="platform-details">
                <div><span>ADDRESS</span><code>{SITE.serverIp}</code></div>
              </div>
            </article>

            <article className="platform-card">
              <div className="platform-card-top"><Gamepad2 size={22} /><span>BEDROCK DIRECT</span></div>
              <h3>WINDOWS + MOBILE</h3>
              <p>If your Bedrock edition has an Add Server button, enter the server IP and the Bedrock port below.</p>
              <div className="platform-details">
                <div><span>ADDRESS</span><code>{SITE.serverHost}</code></div>
                <div><span>PORT</span><code>{SITE.bedrockPort}</code></div>
              </div>
            </article>

            <article className="platform-card platform-card-console">
              <div className="platform-card-top"><Gamepad2 size={22} /><span>CONSOLE BEDROCK</span></div>
              <h3>PLAYSTATION / XBOX / SWITCH</h3>
              <p>Consoles can join third-party Geyser servers, but many console editions do not expose a normal Add Server field. Use Geyser's current console guide for the supported workaround on your device, then connect to <strong>{SITE.serverHost}</strong> on port <strong>{SITE.bedrockPort}</strong>.</p>
              <a className="btn btn-dark" href={SITE.geyserConsoleGuide} target="_blank" rel="noreferrer">CONSOLE JOIN METHODS <ExternalLink size={14} /></a>
            </article>
          </div>

          <div className="crossplay-note">
            <strong>ON CONSOLE?</strong>
            <span>Use the current Geyser instructions instead of copying an old DNS address from a random video. Console workarounds and public connector addresses can change.</span>
          </div>
        </div>
      </section>

      <section className="section claims-section">
        <div className="shell">
          <div className="section-label">03 // CLAIM YOUR STUFF</div>
          <div className="guide-two-column">
            <div>
              <h2>YOUR BUILD SHOULD STAY YOUR BUILD.</h2>
              <p>{SITE.serverName} uses GriefPrevention. Hold a golden shovel, right-click one corner of the area you want, then the opposite corner. Expand it later as you earn more claim blocks.</p>
              <div className="claim-flow">
                <div><Shovel /><strong>START WITH {SITE.claimBlocks.starting.toLocaleString()}</strong><span>Enough for a reasonable first protected area.</span></div>
                <div><ShieldCheck /><strong>+{SITE.claimBlocks.perHour} / ACTIVE HOUR</strong><span>Active play keeps expanding what you can protect.</span></div>
                <div><Users /><strong>TRUST INTENTIONALLY</strong><span>Use the right trust level instead of handing everyone full build access.</span></div>
              </div>
            </div>
            <aside className="guide-note">
              <div className="section-label">IMPORTANT</div>
              <p>Supporter ranks can add claim-block capacity. Claim blocks protect land; they never change combat, loot, or survival progression.</p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-label">04 // COMMANDS YOU'LL ACTUALLY USE</div>
          <div className="command-group-grid">
            {commandGroups.map((group) => (
              <article className="command-group" key={group.title}>
                <h3>{group.title}</h3>
                <div className="command-list">
                  {group.commands.map(([command, description]) => (
                    <div className="command-row" key={command}>
                      <code>{command}</code>
                      <span>{description}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section vanilla-section">
        <div className="shell guide-two-column">
          <div>
            <div className="section-label">05 // WHAT VANILLA-FIRST MEANS</div>
            <h2>CONVENIENCE IS FINE.<br />POWER ISN'T FOR SALE.</h2>
            <p>Homes, TPA, public warps, claims, cosmetic identities, and supporter utility make community survival smoother. The actual Minecraft progression stays Minecraft.</p>
          </div>
          <div className="promise-list">
            {["No paid fly", "No kits or free gear", "No heal/feed/god mode", "No paid damage or drop bonuses", "No creative tools for supporters", "No staff commands sold as perks"].map((item) => (
              <div key={item}><Check size={15} /><span>{item}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-label">06 // STAFF IS SEPARATE</div>
          <div className="guide-two-column">
            <div>
              <h2>DISCORD ROLE ≠ MINECRAFT AUTHORITY.</h2>
              <p>Discord and Minecraft roles do not have to match. Staff access is assigned for the job someone performs on the server, while linked accounts let the roles that are meant to sync stay connected without importing unrelated Discord authority into Minecraft.</p>
            </div>
            <div className="staff-list">
              {staffRanks.map(([name, description]) => (
                <div key={name}><strong>{name}</strong><span>{description}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="shell guide-bottom-cta">
          <AlertTriangle />
          <div><strong>Something not syncing?</strong><p>Link with <code>/discord link</code> first. If a role or account still looks wrong, ask staff instead of repeatedly unlinking accounts.</p></div>
          <a className="btn" href={SITE.discord} target="_blank" rel="noreferrer"><LinkIcon size={15} /> GET HELP</a>
        </div>
      </section>
    </main>
  );
}
