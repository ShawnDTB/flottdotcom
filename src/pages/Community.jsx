import { useEffect, useRef, useState } from "react";
import { Check, Clipboard, ExternalLink, Gamepad2, MapPinned, MessageCircle, ShieldCheck, Sparkles, TimerReset, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { SITE, supporterRanks } from "../site.js";
import "./Home.css";

export default function CommunityPage() {
  const [copyState, setCopyState] = useState("idle");
  const resetTimer = useRef(null);
  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  async function copyIp() {
    try {
      await navigator.clipboard.writeText(SITE.serverIp);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
    window.clearTimeout(resetTimer.current);
    resetTimer.current = window.setTimeout(() => setCopyState("idle"), 2200);
  }

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
            <div className="section-label">01 // FLOTTY'S WORLD 2.0</div>
            <h2>VANILLA SURVIVAL.<br />FLOTT ENERGY.</h2>
            <p>A community-built Minecraft SMP that keeps progression vanilla, convenience sensible, and everyone connected between streams.</p>
          </div>
          <div>
            <div className="server-strip"><span>JAVA</span><strong>{SITE.serverIp}</strong><span>BEDROCK // {SITE.serverHost}:{SITE.bedrockPort}</span></div>
            <div className="hero-actions">
              <button className="btn btn-solid" type="button" onClick={copyIp}>{copyState === "copied" ? <Check size={16} /> : <Clipboard size={16} />}{copyState === "copied" ? "IP COPIED" : copyState === "failed" ? "TRY COPYING AGAIN" : "COPY SERVER IP"}</button>
              <Link className="btn" to="/player-guide">HOW TO JOIN</Link>
            </div>
            <p className="copy-feedback" role="status">{copyState === "copied" ? "Server address copied." : copyState === "failed" ? `Copy unavailable. Select the address above: ${SITE.serverIp}` : "Java + Bedrock. One shared world."}</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <div className="section-label">02 // THE SERVER</div>
          <div className="home-heading-row">
            <h2>KEEP MINECRAFT<br />FEELING LIKE MINECRAFT.</h2>
            <p>Plugins protect the community and cut unnecessary friction. They do not replace progression, hand out power, or turn survival into a kit server.</p>
          </div>
          <div className="grid-three philosophy-grid">
            <article className="panel philosophy-card"><ShieldCheck /><h3>VANILLA FIRST</h3><p>No paid fly, free gear, god mode, damage boosts, or progression shortcuts.</p></article>
            <article className="panel philosophy-card"><Users /><h3>COMMUNITY BUILT</h3><p>Claims, public warps, events, Discord integration, and a world that grows around the people playing it.</p></article>
            <article className="panel philosophy-card"><TimerReset /><h3>PLAY = PROGRESS</h3><p>Start with {SITE.claimBlocks.starting.toLocaleString()} claim blocks and earn +{SITE.claimBlocks.perHour} more for each active hour.</p></article>
          </div>
        </div>
      </section>

      <section className="section join-section">
        <div className="shell">
          <div className="section-label">03 // GET IN</div>
          <div className="join-grid">
            <div>
              <h2>JOIN THE WORLD.</h2>
              <p>Java players can connect directly. Bedrock players join the same world through Geyser, with a console workaround when their version does not expose an Add Server field.</p>
              <Link className="btn" to="/player-guide">READ THE PLAYER GUIDE <ExternalLink size={14} /></Link>
            </div>
            <ol className="join-steps">
              <li><span>01</span><div><strong>CHOOSE YOUR EDITION</strong><small>Java or Bedrock</small></div></li>
              <li><span>02</span><div><strong>JAVA EDITION</strong><small>{SITE.serverIp}</small></div></li>
              <li><span>03</span><div><strong>BEDROCK EDITION</strong><small>{SITE.serverHost}:{SITE.bedrockPort}</small></div></li>
              <li><span>04</span><div><strong>CLAIM YOUR BUILD</strong><small>Protect your base with GriefPrevention</small></div></li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section ranks-preview-section">
        <div className="shell">
          <div className="section-label">04 // HOW FINE ARE YOU?</div>
          <div className="home-heading-row">
            <h2>RANKS THAT REWARD<br />WITHOUT BREAKING SURVIVAL.</h2>
            <p>Everyone gets the core server. Community regulars and Twitch supporters gain identity, cosmetic options, utility, and more room to protect what they build.</p>
          </div>
          <div className="rank-preview-grid">
            {supporterRanks.map((rank) => (
              <article key={rank.key} className={`rank-preview-card rank-${rank.accent}`}>
                <small>{rank.label}</small>
                <strong>{rank.name}</strong>
                <span>{rank.totalBonus ? `+${rank.totalBonus.toLocaleString()} rank claim blocks` : "core survival rank"}</span>
              </article>
            ))}
          </div>
          <div className="section-action"><Link className="btn btn-solid" to="/ranks"><Sparkles size={16} /> COMPARE ALL RANKS</Link></div>
        </div>
      </section>

      <section className="section claim-feature">
        <div className="shell claim-feature-grid">
          <div>
            <div className="section-label">05 // YOUR LAND. YOUR TIME.</div>
            <h2>CLAIM MORE BY<br />ACTUALLY PLAYING.</h2>
            <p>Claim blocks protect builds; they do not make anyone stronger. Everyone earns them naturally, while community and supporter ranks add more room without selling combat advantages.</p>
          </div>
          <div className="claim-numbers">
            <div><span>START</span><strong>{SITE.claimBlocks.starting.toLocaleString()}</strong><small>claim blocks</small></div>
            <div><span>ACTIVE PLAY</span><strong>+{SITE.claimBlocks.perHour}/HR</strong><small>earned naturally</small></div>
            <div><span>FINEST</span><strong>+10K</strong><small>cumulative rank bonus</small></div>
          </div>
        </div>
      </section>

      <section className="section quick-links-section">
        <div className="shell">
          <div className="section-label">06 // KEEP MOVING</div>
          <div className="quick-link-grid">
            <Link to="/player-guide" className="quick-link"><Gamepad2 /><strong>PLAYER GUIDE</strong><span>Java, Bedrock, console join help, commands, claims, homes, and linking.</span></Link>
            <Link to="/map" className="quick-link"><MapPinned /><strong>WORLD MAP</strong><span>Open the live BlueMap and see what the community is building.</span></Link>
            <a href={SITE.discord} target="_blank" rel="noreferrer" className="quick-link"><MessageCircle /><strong>DISCORD</strong><span>Community chat, server updates, roles, and support.</span></a>
          </div>
        </div>
      </section>
    </main>
  );
}

