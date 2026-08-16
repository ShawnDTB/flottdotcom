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
} from "lucide-react";
import { Link } from "react-router-dom";
import FloMark from "../components/FloMark.jsx";
import { creatorSocials, SITE, supporterRanks } from "../site.js";
import "./Home.css";

const socialIcons = {
  twitch: Radio,
  youtube: Play,
  tiktok: Video,
  discord: MessageCircle,
};

export default function HomePage() {
  const [copyState, setCopyState] = useState("idle");
  const twitchEmbedSrc = useMemo(() => {
    const parent = typeof window !== "undefined" ? window.location.hostname : "localhost";
    return `https://player.twitch.tv/?channel=${SITE.handle}&parent=${parent}&muted=true`;
  }, []);

  async function copyIp() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(SITE.serverIp);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = SITE.serverIp;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
      }

      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }

    window.setTimeout(() => setCopyState("idle"), 2200);
  }

  const copyLabel = copyState === "copied" ? "IP COPIED" : copyState === "failed" ? "COPY FAILED" : "COPY SERVER IP";

  return (
    <main className="page-main">
      <section className="home-hero">
        <div className="shell home-hero-grid">
          <div className="home-hero-copy">
            <div className="hero-kicker"><span className="live-dot" /> {SITE.brandName} // {SITE.serverName}</div>
            <FloMark />
            <h1>VANILLA SURVIVAL.<br />FLOTT ENERGY.</h1>
            <p>
              Flott's creator hub and the home of a community-built Minecraft SMP that keeps progression vanilla, convenience sensible, and the community connected between streams.
            </p>
            <div className="hero-actions">
              <button className="btn btn-solid" type="button" onClick={copyIp}>
                {copyState === "copied" ? <Check size={16} /> : <Clipboard size={16} />}
                {copyLabel}
              </button>
              <a className="btn" href={SITE.twitch} target="_blank" rel="noreferrer">
                <Radio size={16} /> WATCH FLOTT LIVE
              </a>
            </div>
            <span className="sr-only" aria-live="polite">
              {copyState === "copied" ? `Server address copied: ${SITE.serverIp}` : copyState === "failed" ? `Could not copy the server address. The address is ${SITE.serverIp}.` : ""}
            </span>
            <div className="server-strip">
              <span>JAVA</span>
              <strong>{SITE.serverIp}</strong>
              <span>BEDROCK // {SITE.serverHost}:{SITE.bedrockPort}</span>
              <span>VANILLA-FIRST</span>
            </div>
          </div>

          <div className="broadcast-card">
            <div className="broadcast-card-top"><span>CHANNEL // {SITE.handle}</span><span>LIVE FEED</span></div>
            <div className="broadcast-screen">
              <iframe
                title="flottdotcom Twitch player"
                src={twitchEmbedSrc}
                width="100%"
                height="100%"
                loading="lazy"
                allow="autoplay; fullscreen; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
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
              Different handles, same creator. Flott streams, makes content, and keeps a community moving across Twitch, Discord, and {SITE.serverName}. This site is the shared home for all of it.
            </p>
            <div className="creator-socials">
              {creatorSocials.map((social) => {
                const Icon = socialIcons[social.key] || ExternalLink;
                return <a key={social.key} href={social.href} target="_blank" rel="noreferrer"><Icon size={15} /> {social.label.toUpperCase()}</a>;
              })}
            </div>
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
