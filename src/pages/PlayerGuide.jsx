import {
  AlertTriangle,
  Check,
  ExternalLink,
  Gamepad2,
  Link as LinkIcon,
  MessageSquareText,
  Server,
  ShieldCheck,
  Shovel,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import ConnectionField from "../components/ConnectionField.jsx";
import { SITE, staffRanks } from "../site.js";
import "./PlayerGuide.css";

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
      ["Golden Shovel", "Use the shovel on opposite corners to create a claim."],
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
          <h1 className="display-title">FLOTTDOTCOM'S PLAYER GUIDE.</h1>
          <p className="guide-hero-copy">Connect from Java or Bedrock, find a place to build, and learn the commands you’ll use in survival.</p>
          <div className="hero-actions">
            <Link className="btn btn-solid" to="#join"><Gamepad2 size={16} /> JOIN THE SERVER</Link>
            <Link className="btn" to="#first-session">FIRST SESSION</Link>
          </div>
        </div>
      </section>

      <section className="section crossplay-section" id="join" tabIndex={-1}>
        <div className="shell">
          <div className="section-label">JAVA + BEDROCK</div>
          <div className="crossplay-heading">
            <div>
              <h2>ONE WORLD.<br />TWO WAYS IN.</h2>
            </div>
            <p>Choose your edition below. Java and Bedrock players build in the same survival world. Discord account linking is optional.</p>
          </div>

          <div className="platform-grid">
            <article className="platform-card">
              <div className="platform-card-top"><Server size={22} /><span>PC / MAC / LINUX</span></div>
              <h3>JAVA EDITION</h3>
              <p>Open <strong>Multiplayer → Add Server</strong>. Enter the address, save the server, and select <strong>Join Server</strong>.</p>
              <div className="platform-details">
                <ConnectionField label="Java address" value={SITE.serverIp} />
              </div>
            </article>

            <article className="platform-card">
              <div className="platform-card-top"><Gamepad2 size={22} /><span>WINDOWS / MOBILE</span></div>
              <h3>BEDROCK EDITION</h3>
              <p>Use an up-to-date Bedrock client. Open <strong>Play → Servers → Add Server</strong>. Enter the address and port in their own fields, then join with your Microsoft account.</p>
              <div className="platform-details">
                <ConnectionField label="Bedrock address" value={SITE.serverHost} />
                <ConnectionField label="Bedrock port" value={SITE.bedrockPort} />
              </div>
            </article>

            <article className="platform-card platform-card-console" id="console" tabIndex={-1}>
              <div className="platform-card-top"><Gamepad2 size={22} /><span>CONSOLE BEDROCK</span></div>
              <h3>PLAYSTATION / XBOX / SWITCH</h3>
              <p>Use a console connection method from Geyser’s guide that supports NetherNet, then enter <strong>{SITE.serverHost}</strong> and port <strong>{SITE.bedrockPort}</strong>.</p>
              <a className="btn btn-dark" href={SITE.geyserConsoleGuide} target="_blank" rel="noreferrer">GEYSER CONSOLE GUIDE <ExternalLink size={14} /></a>
            </article>
          </div>

          <div className="join-help">
            <p>If you get a connection error, share your edition, game version, and the exact error with staff.</p>
            <a className="btn" href={SITE.discord} target="_blank" rel="noreferrer"><MessageSquareText size={16} /> JOIN HELP ON DISCORD</a>
          </div>
        </div>
      </section>

      <section className="section section-tight first-session" id="first-session" tabIndex={-1}>
        <div className="shell">
          <h2>Your first session</h2>
          <div className="guide-start-grid">
            <article className="guide-step">
              <h3>Explore</h3>
              <p>Leave spawn and gather wood, food, and materials for shelter. Find an open spot in the Overworld to build.</p>
            </article>
            <article className="guide-step">
              <h3>Set a home</h3>
              <p>Stand at your base and type <code>/sethome</code>. Use <code>/home</code> to return. Every player starts with one home slot.</p>
            </article>
            <article className="guide-step">
              <h3>Protect your build</h3>
              <p>Claim the land around your base, chests, and farm with a golden shovel.</p>
              <Link className="step-link" to="#claims">How to claim land</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section claims-section" id="claims" tabIndex={-1}>
        <div className="shell">
          <div className="section-label">LAND CLAIMS</div>
          <div className="guide-two-column">
            <div>
              <h2>YOUR BUILD SHOULD STAY YOUR BUILD.</h2>
              <p>You can claim land in the Overworld. Hold a golden shovel and interact with opposite corners of the area. Right-click on Java or use the interact control on your Bedrock device. Type <code>/claimslist</code> to see your balance.</p>
              <div className="claim-flow">
                <div><Shovel /><strong>START WITH {SITE.claimBlocks.starting.toLocaleString()}</strong><span>Enough for a reasonable first protected area.</span></div>
                <div><ShieldCheck /><strong>+{SITE.claimBlocks.perHour} / ACTIVE HOUR</strong><span>Active play keeps expanding what you can protect.</span></div>
                <div><Users /><strong>TRUST INTENTIONALLY</strong><span>Use the right trust level instead of handing everyone full build access.</span></div>
              </div>
            </div>
            <aside className="guide-note">
              <div className="section-label">CLAIM ACCRUAL LIMIT</div>
              <p>Every rank can accrue up to {SITE.claimBlocks.maxAccrued.toLocaleString()} claim blocks through active play.</p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-label">SURVIVAL COMMANDS</div>
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
            <div className="section-label">VANILLA-FIRST SURVIVAL</div>
            <h2>CONVENIENCE IS FINE.<br />POWER ISN'T FOR SALE.</h2>
            <p>Homes, player teleport requests, and land claims help with the logistics of building together. You gather, craft, and explore as you would in regular survival.</p>
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
          <div className="section-label">STAFF ROLES</div>
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
