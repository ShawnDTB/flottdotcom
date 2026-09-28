import { useState } from "react";
import { ArrowUpRight, ExternalLink, Gamepad2, Headphones, MessageCircle, Play, Radio, Video } from "lucide-react";
import { Link } from "react-router-dom";
import FloMark from "../components/FloMark.jsx";
import { creatorSocials, FEATURED_RELEASE, SITE } from "../site.js";
import "./Home.css";

const socialIcons = { spotify: Headphones, twitch: Radio, youtube: Play, tiktok: Video, discord: MessageCircle };

export default function HomePage() {
  const [showPlayer, setShowPlayer] = useState(false);
  const [showStream, setShowStream] = useState(false);
  const twitchEmbedSrc = `https://player.twitch.tv/?channel=${SITE.handle}&parent=${window.location.hostname}&muted=true&autoplay=false`;

  return (
    <main className="page-main">
      <section className="home-hero" id="music" tabIndex="-1" aria-labelledby="home-title">
        <div className="shell home-hero-grid">
          <div className="home-hero-copy">
            <div className="hero-kicker"><span className="live-dot" /> FLOTT // MUSIC + CONTENT</div>
            <FloMark />
            <h1 id="home-title">MUSIC. STREAMS.<br />EVERYTHING FLOTT.</h1>
            <p>The music, the videos, the moments in between. Welcome to FLO — everything Flott, all in one place.</p>
            <div className="hero-actions">
              <a className="btn btn-solid" href={FEATURED_RELEASE.url} target="_blank" rel="noreferrer"><Headphones size={16} /> LISTEN TO {FEATURED_RELEASE.title.toUpperCase()}</a>
              <a className="btn" href={SITE.twitch} target="_blank" rel="noreferrer"><Radio size={16} /> WATCH ON TWITCH</a>
            </div>
            <div className="release-note"><span>OUT NOW</span><strong>{FEATURED_RELEASE.title}</strong><span>THE FIRST SINGLE. AN ALBUM ON THE WAY.</span></div>
          </div>

          <article className="broadcast-card release-card" aria-label={`${FEATURED_RELEASE.title}, ${FEATURED_RELEASE.type}`}>
            <div className="broadcast-card-top"><span>01 // {FEATURED_RELEASE.type}</span><span className="release-status">OUT NOW</span></div>
            <a className="release-art" href={FEATURED_RELEASE.url} target="_blank" rel="noreferrer" aria-label={`Listen to ${FEATURED_RELEASE.title} by Flott on Spotify`}>
              <img src={FEATURED_RELEASE.artwork} alt={FEATURED_RELEASE.artworkAlt} width="640" height="640" fetchPriority="high" />
              <span className="art-listen"><Play size={15} fill="currentColor" /> LISTEN ON SPOTIFY <ArrowUpRight size={16} /></span>
            </a>
            <div className="release-title"><div><span>FLOTT</span><h2>{FEATURED_RELEASE.title}</h2></div><span className="mono">{FEATURED_RELEASE.released.slice(0, 4)} / {FEATURED_RELEASE.type.toUpperCase()}</span></div>
            <div className="broadcast-card-bottom"><a href={FEATURED_RELEASE.url} target="_blank" rel="noreferrer">OPEN SPOTIFY <ArrowUpRight size={15} /></a><button type="button" onClick={() => setShowPlayer((shown) => !shown)} aria-expanded={showPlayer} aria-controls="release-player"><Play size={15} /> {showPlayer ? "CLOSE PLAYER" : "PLAY HERE"}</button></div>
            <div id="release-player" hidden={!showPlayer}>
              {showPlayer && <iframe className="spotify-player" src={FEATURED_RELEASE.embedUrl} title="Listen to 21 Days by Flott on Spotify" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowFullScreen />}
            </div>
          </article>
        </div>
      </section>

      <section className="section watch-section" id="watch" tabIndex="-1" aria-labelledby="watch-title">
        <div className="shell">
          <div className="section-label">02 // ON YOUR SCREEN</div>
          <div className="home-heading-row"><h2 id="watch-title">PRESS PLAY.<br />STAY A WHILE.</h2><p>Live on Twitch. Videos on YouTube. Clips on TikTok. Wherever you watch, it’s Flott.</p></div>
          <div className="watch-grid">
            <div className="broadcast-card twitch-card">
              <div className="broadcast-card-top"><span>CHANNEL // {SITE.handle}</span><span>TWITCH</span></div>
              <div className="broadcast-screen">
                {showStream ? <iframe title="flottdotcom Twitch player" src={twitchEmbedSrc} width="100%" height="100%" allow="autoplay; fullscreen; picture-in-picture" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /> : <button className="stream-cover" type="button" onClick={() => setShowStream(true)}><Radio size={30} /><strong>HANG OUT<br />WITH FLOTT.</strong><span><Play size={15} /> LOAD TWITCH PLAYER</span></button>}
              </div>
              <div className="broadcast-card-bottom"><a href={SITE.twitch} target="_blank" rel="noreferrer">OPEN CHANNEL <ArrowUpRight size={15} /></a><span>BETWEEN STREAMS? CATCH UP ON YOUTUBE.</span></div>
            </div>
            <div className="watch-platforms">
              <a className="platform-link" href={SITE.youtube} target="_blank" rel="noreferrer"><div className="platform-link-top"><Play size={24} /><span>YOUTUBE</span><ArrowUpRight size={20} /></div><h3>MORE FLOTT.<br />ON YOUR TIME.</h3><p>Find the videos and catch up whenever you want.</p><span className="platform-action">WATCH ON YOUTUBE <ArrowUpRight size={14} /></span></a>
              <a className="platform-link" href={SITE.tiktok} target="_blank" rel="noreferrer"><div className="platform-link-top"><Video size={24} /><span>TIKTOK</span><ArrowUpRight size={20} /></div><h3>A LITTLE FLOTT.<br />KEEP SCROLLING.</h3><p>Short clips. More moments. Follow along on TikTok.</p><span className="platform-action">FIND FLOTT ON TIKTOK <ArrowUpRight size={14} /></span></a>
            </div>
          </div>
        </div>
      </section>

      <section className="section creator-section" id="about" tabIndex="-1" aria-labelledby="about-title">
        <div className="shell creator-grid">
          <div><div className="section-label">03 // THE PERSON BEHIND IT</div><h2 id="about-title">SAGE.<br />FLOTT.<br /><span className="muted-title">SAME PERSON.</span></h2></div>
          <div className="creator-copy"><p>Sage is Flott. FLO is everything he brings to the world: the music he makes, the content he creates, what he believes in, and the people who become part of it.</p><p>From the first single to the next stream, it all lives here. Come for a song, stay for a video, or hang out with the community.</p><div className="creator-socials">{creatorSocials.map((social) => { const Icon = socialIcons[social.key] || ExternalLink; return <a key={social.key} href={social.href} target="_blank" rel="noreferrer"><Icon size={15} /> {social.label.toUpperCase()}</a>; })}<a href={SITE.links} target="_blank" rel="noreferrer">ALL LINKS <ArrowUpRight size={15} /></a></div></div>
        </div>
      </section>

      <section className="section home-community" aria-labelledby="community-title">
        <div className="shell">
          <div className="section-label">04 // YOU’RE PART OF IT</div>
          <div className="home-heading-row"><h2 id="community-title">BEYOND THE<br />PLAY BUTTON.</h2><p>Keep the conversation going in Discord, or find your place in Flotty’s World. There’s room for you here.</p></div>
          <div className="community-preview-grid">
            <a className="quick-link" href={SITE.discord} target="_blank" rel="noreferrer"><MessageCircle /><strong>COME HANG OUT.</strong><span>Connect with the community between songs, videos, and streams.</span><span className="platform-action">JOIN DISCORD <ArrowUpRight size={14} /></span></a>
            <Link className="quick-link" to="/community#minecraft"><Gamepad2 /><strong>FLOTTY’S WORLD 2.0</strong><span>Our shared Minecraft world. Vanilla survival, familiar faces, and something to build together.</span><span className="platform-action">EXPLORE THE SERVER <ArrowUpRight size={14} /></span></Link>
          </div>
          <div className="section-action"><Link className="text-link" to="/community">MORE FROM THE COMMUNITY <ArrowUpRight size={16} /></Link></div>
        </div>
      </section>
    </main>
  );
}
