import { ExternalLink, Gamepad2, MapPinned, MessageCircle, ShieldCheck, Sparkles, TimerReset, Users } from "lucide-react";
import { Link } from "react-router-dom";
import ConnectionField from "../components/ConnectionField.jsx";
import { SITE, supporterRanks } from "../site.js";
import "./Home.css";

export default function CommunityPage() {
  return (
    <main className="page-main community-page">
      <section className="section community-hero">
        <div className="shell">
          <div className="section-label">[FLO] // COMMUNITY</div>
          <h1 className="display-title">GOOD COMPANY.<br />SAME FLO.</h1>
          <p className="community-intro">The music brings you here. The conversations keep going. Hang out in Discord, catch up between streams, or build something together in {SITE.serverName}.</p>
          <div className="hero-actions">
            <a className="btn btn-solid" href={SITE.discord} target="_blank" rel="noreferrer"><MessageCircle size={16} /> JOIN DISCORD</a>
            <a className="btn" href="#minecraft"><Gamepad2 size={16} /> PLAY MINECRAFT</a>
          </div>
          <nav className="community-nav" aria-label="Minecraft resources">
            <Link to="/player-guide">Player Guide <ExternalLink size={13} /></Link>
            <Link to="/ranks">Ranks &amp; Perks <ExternalLink size={13} /></Link>
            <Link to="/map">World Map <ExternalLink size={13} /></Link>
          </nav>
        </div>
      </section>
      <section className="section minecraft-intro" id="minecraft" tabIndex="-1">
        <div className="shell join-grid">
          <div>
            <div className="section-label">{SITE.serverName}</div>
            <h2>VANILLA SURVIVAL.<br />FLOTT ENERGY.</h2>
            <p>Play survival together in one shared world on Java and Bedrock. Find a place to build, set a home, and protect your base with a land claim.</p>
            <div className="hero-actions">
              <Link className="btn btn-solid" to="/player-guide#join">JOIN INSTRUCTIONS</Link>
              <Link className="btn" to="/player-guide#first-session">FIRST SESSION</Link>
            </div>
          </div>
          <div className="community-join">
            <div className="community-join-edition">
              <h3>Java Edition</h3>
              <ConnectionField label="Java address" value={SITE.serverIp} />
            </div>
            <div className="community-join-edition">
              <h3>Bedrock Edition</h3>
              <ConnectionField label="Bedrock address" value={SITE.serverHost} />
              <ConnectionField label="Bedrock port" value={SITE.bedrockPort} />
            </div>
            <Link className="text-link" to="/player-guide#console">PlayStation, Xbox, or Switch? <ExternalLink size={14} /></Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <div className="section-label">THE SERVER</div>
          <div className="home-heading-row">
            <h2>KEEP MINECRAFT<br />FEELING LIKE MINECRAFT.</h2>
            <p>Plugins protect the community and cut unnecessary friction. They do not replace progression, hand out power, or turn survival into a kit server.</p>
          </div>
          <div className="grid-three philosophy-grid">
            <article className="panel philosophy-card"><ShieldCheck /><h3>VANILLA FIRST</h3><p>No paid fly, free gear, god mode, damage boosts, or progression shortcuts.</p></article>
            <article className="panel philosophy-card"><Users /><h3>COMMUNITY BUILT</h3><p>Start a shared build, protect your work with claims, and keep up with the community on Discord.</p></article>
            <article className="panel philosophy-card"><TimerReset /><h3>PLAY = PROGRESS</h3><p>Start with {SITE.claimBlocks.starting.toLocaleString()} claim blocks and earn +{SITE.claimBlocks.perHour} more for each active hour.</p></article>
          </div>
        </div>
      </section>

      <section className="section ranks-preview-section">
        <div className="shell">
          <div className="section-label">HOW FINE ARE YOU?</div>
          <div className="home-heading-row">
            <h2>RANKS THAT REWARD<br />WITHOUT BREAKING SURVIVAL.</h2>
            <p>Everyone gets the same survival tools. Community regulars and Twitch supporters can personalize how they appear in game.</p>
          </div>
          <div className="rank-preview-grid">
            {supporterRanks.map((rank) => (
              <article key={rank.key} className={`rank-preview-card rank-${rank.accent}`}>
                <small>{rank.label}</small>
                <strong>{rank.name}</strong>
              </article>
            ))}
          </div>
          <div className="section-action"><Link className="btn btn-solid" to="/ranks"><Sparkles size={16} /> COMPARE ALL RANKS</Link></div>
        </div>
      </section>

      <section className="section claim-feature">
        <div className="shell claim-feature-grid">
          <div>
            <div className="section-label">YOUR LAND. YOUR TIME.</div>
            <h2>CLAIM MORE BY<br />ACTUALLY PLAYING.</h2>
            <p>Every rank starts with the same claim balance and earns claim blocks at the same rate through active play.</p>
          </div>
          <div className="claim-numbers">
            <div><span>START</span><strong>{SITE.claimBlocks.starting.toLocaleString()}</strong><small>claim blocks</small></div>
            <div><span>ACTIVE PLAY</span><strong>+{SITE.claimBlocks.perHour}/HR</strong><small>earned naturally</small></div>
            <div><span>ACCRUAL LIMIT</span><strong>{SITE.claimBlocks.maxAccrued.toLocaleString()}</strong><small>earned claim blocks</small></div>
          </div>
        </div>
      </section>

      <section className="section quick-links-section">
        <div className="shell">
          <div className="quick-link-grid">
            <Link to="/player-guide" className="quick-link"><Gamepad2 /><strong>PLAYER GUIDE</strong><span>Java, Bedrock, console join help, commands, claims, homes, and linking.</span></Link>
            <Link to="/map" className="quick-link"><MapPinned /><strong>WORLD MAP</strong><span>{SITE.mapUrl ? "Explore builds and terrain on the world map." : "Check map availability and get help finding your way around."}</span></Link>
            <a href={SITE.discord} target="_blank" rel="noreferrer" className="quick-link"><MessageCircle /><strong>DISCORD</strong><span>Community chat, server updates, roles, and support.</span></a>
          </div>
        </div>
      </section>
    </main>
  );
}

