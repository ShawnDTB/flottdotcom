import { useMemo, useState } from "react";
import {
  Check,
  Clipboard,
  ExternalLink,
  Gamepad2,
  MapPinned,
  MessageCircle,
  Play,
  Radio,
  ShieldCheck,
  Sparkles,
  TimerReset,
  Users,
  Video,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";
import FloMark from "../components/FloMark.jsx";
import { SITE, supporterRanks } from "../site.js";
import "./Home.css";

export default function HomePage() {
  const [copied, setCopied] = useState(false);
  const twitchEmbedSrc = useMemo(() => {
    const parent = typeof window !== "undefined" ? window.location.hostname : "localhost";
    return `https://player.twitch.tv/?channel=${SITE.handle}&parent=${parent}&muted=true`;
  }, []);

  async function copyIp() {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(SITE.serverIp);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <main className="page-main">
      <section className="home-hero">
        <div className="shell home-hero-grid">
          <div className="home-hero-copy">
            <div className="hero-kicker"><span className="live-dot" /> FLOTTY'S WORLD 2.0</div>
            <FloMark />
            <h1>VANILLA SURVIVAL.<br />FLOTT ENERGY.</h1>
            <p>
              The creator hub for Flott and the home of a community-built Minecraft SMP that keeps progression vanilla and the convenience sensible.
            </p>
            <div className="hero-actions">
              <button className="btn btn-solid" type="button" onClick={copyIp}>
                {copied ? <Check size={16} /> : <Clipboard size={16} />}
                {copied ? "IP COPIED" : "COPY SERVER IP"}
              </button>
              <a className="btn" href={SITE.twitch} target="_blank" rel="noreferrer">
                <Radio size={16} /> WATCH FLOTT LIVE
              </a>
            </div>
            <div className="server-strip">
              <span>SERVER</span>
              <strong>{SITE.serverIp}</strong>
              <span>VANILLA-FIRST</span>
            </div>
          </div>

          <div className="broadcast-card">
            <div className="broadcast-card-top"><span>CHANNEL // FLOTTDOTCOM</span><span>LIVE FEED</span></div>
            <div className="broadcast-screen">
              <iframe title="flottdotcom Twitch player" src={twitchEmbedSrc} width="100%" height="100%" allowFullScreen />
            </div>
            <div className="broadcast-card-bottom">
              <a href={SITE.twitch} target="_blank" rel="noreferrer"><Play size={15} /> OPEN TWITCH</a>
              <a href={SITE.discord} target="_blank" rel="noreferrer"><Users size={15} /> JOIN DISCORD</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section creator-section">
        <div className="shell creator-grid">
          <div>
            <div className="section-label">01 // WHO IS FLOTT?</div>
            <h2>FLOTTO. ITSFLOTT.<br />FLOTTDOTCOM.</h2>
          </div>
          <div className="creator-copy">
            <p>
              Flott is a content creator, gamer, and one of the people behind the broader DTB operation. Different handle, same person: the streams, videos, Discord community, and Minecraft world all meet here.
            </p>
            <div className="creator-socials">
              <a href={SITE.twitch} target="_blank" rel="noreferrer"><Radio size={15} /> TWITCH</a>
              <a href={SITE.youtube} target="_blank" rel="noreferrer"><Youtube size={15} /> YOUTUBE</a>
              <a href={SITE.tiktok} target="_blank" rel="noreferrer"><Video size={15} /> TIKTOK</a>
              <a href={SITE.discord} target="_blank" rel="noreferrer"><MessageCircle size={15} /> DISCORD</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-label">02 // THE SERVER</div>
          <div className="home-heading-row">
            <h2>KEEP MINECRAFT<br />FEELING LIKE MINECRAFT.</h2>
            <p>Plugins protect the community and cut out unnecessary friction. They do not replace progression, hand out power, or turn survival into a kit server.</p>
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
              <p>No giant onboarding maze. Add the server, get in, claim what you build, and link Discord if you want your identities connected.</p>
              <Link className="btn" to="/player-guide">READ THE PLAYER GUIDE <ExternalLink size={14} /></Link>
            </div>
            <ol className="join-steps">
              <li><span>01</span><div><strong>OPEN MINECRAFT</strong><small>Multiplayer → Add Server</small></div></li>
              <li><span>02</span><div><strong>ADD THE ADDRESS</strong><small>{SITE.serverIp}</small></div></li>
              <li><span>03</span><div><strong>SET YOUR HOME</strong><small>/sethome once you find your spot</small></div></li>
              <li><span>04</span><div><strong>CLAIM YOUR BUILD</strong><small>Use GriefPrevention before you get too comfortable</small></div></li>
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
                <span>{rank.totalBonus ? `+${rank.totalBonus.toLocaleString()} rank claim blocks` : "base survival rank"}</span>
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
            <p>Claim blocks are protection, not power. Everyone earns them naturally. Supporter ranks add bonus capacity, and optional claim-block purchases can exist without selling combat advantages.</p>
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
            <Link to="/player-guide" className="quick-link"><Gamepad2 /><strong>PLAYER GUIDE</strong><span>Commands, claims, homes, linking, and the basics.</span></Link>
            <Link to="/map" className="quick-link"><MapPinned /><strong>WORLD MAP</strong><span>Open the BlueMap destination when the public endpoint is connected.</span></Link>
            <a href={SITE.discord} target="_blank" rel="noreferrer" className="quick-link"><MessageCircle /><strong>DISCORD</strong><span>Community chat, server updates, roles, and support.</span></a>
          </div>
        </div>
      </section>
    </main>
  );
}
