import { useState } from "react";
import { ArrowDown, ArrowUpRight, CalendarDays, Headphones, MapPin, Play, Ticket } from "lucide-react";
import { Link } from "react-router-dom";
import { ALBUM, MUSIC_VIDEO, RELEASE_PARTY } from "../campaign.js";
import { FEATURED_RELEASE, SITE } from "../site.js";
import usePartyState from "../usePartyState.js";
import FloMark from "./FloMark.jsx";
import "./ReleaseCampaign.css";

export default function ReleaseCampaign() {
  const [showVideo, setShowVideo] = useState(false);
  const party = usePartyState();
  const partyEnded = party.phase === "past";

  return (
    <>
      <section className="home-hero campaign-hero" id="music" tabIndex="-1" aria-labelledby="home-title">
        <div className="shell">
          <div className="campaign-eyebrow"><span><span className="live-dot" /> FLOTT // THE NEXT CHAPTER</span><span>{ALBUM.status}</span></div>
          <div className="campaign-grid">
            <div className="campaign-copy">
              <FloMark />
              <h1 id="home-title">SOMEWHERE<br /><span className="title-connector">IN</span> SOMERDALE<span className="campaign-period">.</span></h1>
              <p className="campaign-lead">A whole new chapter. Same FLO.</p>
              <p>Flott’s album is on the way. The “21 Days” music video is out now. {partyEnded ? "Keep the night on repeat." : "Turn it up. Then pull up."}</p>
              <div className="hero-actions">
                <Link className="btn btn-solid campaign-primary" to="/#video"><Play size={16} fill="currentColor" /> WATCH 21 DAYS</Link>
                <Link className="btn" to="/#party"><Ticket size={16} /> {partyEnded ? "THE RELEASE PARTY" : "RELEASE PARTY DETAILS"}</Link>
              </div>
              <div className="campaign-index"><span>01 / THE ALBUM</span><span>02 / THE VIDEO</span><span>03 / THE NIGHT</span></div>
            </div>

            <Link to="/#party" className="party-pass" aria-label={`${partyEnded ? "Explore" : "See details for"} Flott’s ${ALBUM.title} release party, November 28`}>
              <div className="pass-top"><span>[FLO] PRESENTS</span><ArrowUpRight size={22} /></div>
              <div className="pass-tag">{partyEnded ? "THE RELEASE PARTY" : "YOU’RE INVITED"}</div>
              <div className="pass-date"><span>NOV</span><strong>28</strong><span>SATURDAY / 2026</span></div>
              <div className="pass-rule" />
              <div className="pass-bottom"><strong>SOMEWHERE<br />IN SOMERDALE</strong><span>ALBUM RELEASE PARTY</span><div><span>8–11 PM ET</span><span>MIDTOWN ATL</span></div><span className="pass-admission">FREE ENTRY <span aria-hidden="true">✳</span> LIVE PERFORMANCES</span></div>
              <div className="pass-countdown">{party.label}<ArrowDown size={16} /></div>
            </Link>
          </div>
          <div className="campaign-strip"><span>NEW VISUALS.</span><span>NEW MUSIC ON THE WAY.</span><span>SAME FLOTT.</span></div>
        </div>
      </section>

      <section className="section music-video-section" id="video" tabIndex="-1" aria-labelledby="video-title">
        <div className="shell">
          <div className="section-label">01 // THE OFFICIAL VIDEO</div>
          <div className="home-heading-row"><h2 id="video-title">21 DAYS.<br /><span className="muted-title">NOW IN MOTION.</span></h2><div><p>The song you know. A new way to feel it. Watch Flott’s official music video, then run it back.</p><a className="text-link" href={MUSIC_VIDEO.url} target="_blank" rel="noreferrer">WATCH ON YOUTUBE <ArrowUpRight size={16} /></a></div></div>
          <div className="video-premiere">
            <div className="broadcast-card-top"><span>FLOTT — {MUSIC_VIDEO.title}</span><span>OFFICIAL MUSIC VIDEO / OUT NOW</span></div>
            <div className="video-stage">
              {showVideo ? (
                <iframe src={MUSIC_VIDEO.embedUrl} title="Flott – 21 Days (Official Music Video)" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
              ) : (
                <button className="video-poster" type="button" onClick={() => setShowVideo(true)} aria-label="Play the 21 Days official music video">
                  <img src={MUSIC_VIDEO.thumbnail} alt="Scene from Flott’s 21 Days official music video" width="480" height="360" loading="lazy" />
                  <span className="video-play"><Play size={28} fill="currentColor" /></span><span className="video-poster-label">21 DAYS <span>THE OFFICIAL MUSIC VIDEO</span></span>
                </button>
              )}
            </div>
            <div className="broadcast-card-bottom"><a href={MUSIC_VIDEO.url} target="_blank" rel="noreferrer">OPEN ON YOUTUBE <ArrowUpRight size={15} /></a><span>FLOTT / {MUSIC_VIDEO.label}</span></div>
          </div>
          <div className="single-listening-bar"><img src={FEATURED_RELEASE.artwork} alt={FEATURED_RELEASE.artworkAlt} width="64" height="64" loading="lazy" /><div><span>KEEP IT ON REPEAT</span><strong>{FEATURED_RELEASE.title} <span>— Flott</span></strong></div><a className="btn" href={FEATURED_RELEASE.url} target="_blank" rel="noreferrer"><Headphones size={16} /> LISTEN ON SPOTIFY <ArrowUpRight size={14} /></a></div>
        </div>
      </section>

      <section className="section party-section" id="party" tabIndex="-1" aria-labelledby="party-title">
        <div className="shell party-layout">
          <div className="party-copy"><div className="section-label">02 // {partyEnded ? "THE NIGHT IN ATL" : "SAVE THE NIGHT"}</div><h2 id="party-title">{partyEnded ? <>THAT WAS<br /><span>A NIGHT.</span></> : <>ATLANTA.<br /><span>PULL UP.</span></>}</h2><p className="party-album-title">{ALBUM.title}</p><p>Flott’s album release party. {partyEnded ? "A night of music and community, with special guest performances." : "One night to bring the music off your screen and into the room. Flott and special guests, live in Midtown Atlanta."}</p><div className="party-countdown"><span className="live-dot" />{party.label}</div></div>
          <div className="party-details">
            <div className="party-detail"><CalendarDays size={22} /><div><span>THE DATE</span><strong><time dateTime={RELEASE_PARTY.startsAt}>{RELEASE_PARTY.dateLabel}</time></strong><p>{RELEASE_PARTY.timeLabel}</p></div></div>
            <div className="party-detail"><MapPin size={22} /><div><span>THE PLACE</span><strong>{RELEASE_PARTY.location}</strong><p>Full venue details on the event invite.</p></div></div>
            <div className="party-detail"><Ticket size={22} /><div><span>THE INVITE</span><strong>Free entry</strong><p>{partyEnded ? "Thanks for being part of it." : "RSVP on Partiful · limited spots."}</p></div></div>
            <div className="party-lineup"><span>SPECIAL GUEST PERFORMANCES</span><div>{RELEASE_PARTY.guests.map(guest => <strong key={guest}>{guest}</strong>)}</div></div>
            <div className="hero-actions">
              {!partyEnded && RELEASE_PARTY.rsvpUrl ? <a className="btn btn-solid" href={RELEASE_PARTY.rsvpUrl} target="_blank" rel="noreferrer"><Ticket size={16} /> RSVP ON PARTIFUL <ArrowUpRight size={14} /></a> : <a className="btn btn-solid" href={SITE.discord} target="_blank" rel="noreferrer">{partyEnded ? "JOIN THE COMMUNITY" : "PARTY UPDATES ON DISCORD"} <ArrowUpRight size={14} /></a>}
              {!partyEnded && <a className="btn" href={RELEASE_PARTY.calendarUrl} download><CalendarDays size={16} /> ADD TO CALENDAR</a>}
            </div>
            {!partyEnded && !RELEASE_PARTY.rsvpUrl && <p className="party-rsvp-note">Look for the Partiful invite on Flott’s socials. Adding the date to your calendar does not reserve a spot.</p>}
          </div>
        </div>
      </section>
    </>
  );
}
