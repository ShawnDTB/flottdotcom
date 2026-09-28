import { ExternalLink, Headphones, Menu, X } from "lucide-react";
import { lazy, Suspense, useEffect, useState } from "react";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import FloMark from "./components/FloMark.jsx";
import HomePage from "./pages/Home.jsx";
import { creatorSocials, FEATURED_RELEASE, SITE } from "./site.js";
import "./App.css";

const PlayerGuidePage = lazy(() => import("./pages/PlayerGuide.jsx"));
const CommunityPage = lazy(() => import("./pages/Community.jsx"));
const RanksPage = lazy(() => import("./pages/Ranks.jsx"));
const MapPage = lazy(() => import("./pages/Map.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFound.jsx"));

const ROUTE_META = {
  "/": {
    title: "Flott // Music, Streams & Everything FLO",
    description: "Listen to 21 Days by Flott. Discover the music, Twitch streams, YouTube videos, TikTok clips, and community behind FLO. An album is on the way.",
  },
  "/community": {
    title: "Community // FLO",
    description: "Hang out with Flott's community on Discord and explore Flotty's World 2.0, our vanilla-first Minecraft survival server for Java and Bedrock.",
  },
  "/player-guide": {
    title: "Player Guide // Flotty's World 2.0",
    description: "Join Flotty's World 2.0 from Java or Bedrock, then learn homes, TPA, claims, public warps, Discord linking, and core commands.",
  },
  "/ranks": {
    title: "Ranks & Perks // Flotty's World 2.0",
    description: "Compare [FLO], UNFINE, FINE, FINER, and FINEST perks while keeping Flotty's World 2.0 vanilla-first and fair.",
  },
  "/map": {
    title: "Live World Map // Flotty's World 2.0",
    description: "Open the live BlueMap for Flotty's World 2.0 and follow how the community builds outward.",
  },
};

const TICKER_ITEMS = ["[FLO]", `${FEATURED_RELEASE.title} — OUT NOW`, "MUSIC + CONTENT", SITE.brandName, "AN ALBUM ON THE WAY", "TWITCH / YOUTUBE / TIKTOK"];
const TICKER_CYCLES = 8;

function RouteEffects() {
  const location = useLocation();

  useEffect(() => {
    const meta = ROUTE_META[location.pathname] || {
      title: `Page Not Found // ${SITE.brandName.toLowerCase()}`,
      description: `Return to ${SITE.brandName}, Flott's creator hub and the home of ${SITE.serverName}.`,
    };

    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", meta.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", meta.description);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", meta.title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", meta.description);

    let targetId = "main-content";
    try { targetId = decodeURIComponent(location.hash.slice(1)) || targetId; } catch { /* Malformed hashes return to the page start. */ }
    const revealTarget = () => {
      const target = document.getElementById(targetId);
      if (!target) return false;
      target.focus({ preventScroll: true });
      if (targetId === "main-content") window.scrollTo(0, 0);
      else target.scrollIntoView({ block: "start" });
      return true;
    };
    // A section on a lazy route may mount after the route effect runs.
    const observer = new MutationObserver(() => { if (revealTarget()) observer.disconnect(); });
    const frame = window.requestAnimationFrame(() => {
      if (!revealTarget()) observer.observe(document.getElementById("main-content"), { childList: true, subtree: true });
    });
    const timeout = window.setTimeout(() => observer.disconnect(), 5000);
    return () => { window.cancelAnimationFrame(frame); observer.disconnect(); window.clearTimeout(timeout); };
  }, [location.pathname, location.hash, location.key]);

  return null;
}

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.classList.add("nav-open");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("nav-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`site-header ${isHome ? "site-header-home" : ""}`}>
      <div className="shell header-inner">
        <Link to="/" className="brand-link" onClick={close} aria-label={`${SITE.brandName} home`}>
          <FloMark compact />
          {!isHome && (
            <span className="brand-copy">
              <strong>{SITE.brandName}</strong>
              <small>Music / Content / Community</small>
            </span>
          )}
        </Link>

        <button
          className="menu-button"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="primary-navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav id="primary-navigation" className={`site-nav ${open ? "site-nav-open" : ""}`} aria-label="Primary navigation">
          {[['music', 'Music'], ['watch', 'Watch'], ['about', 'About']].map(([id, label]) => (
            <Link key={id} to={`/#${id}`} onClick={close} className={isHome && (location.hash === `#${id}` || (!location.hash && id === 'music')) ? 'active' : undefined}>{label}</Link>
          ))}
          <NavLink to="/community" onClick={close}>Community</NavLink>
          <a className="watch-link" href={FEATURED_RELEASE.url} target="_blank" rel="noreferrer">
            <Headphones size={14} /> Listen <ExternalLink size={12} />
          </a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <FloMark compact />
          <p>The music. The content. The person behind it all. This is FLO.</p>
        </div>
        <div className="footer-links" aria-label="Creator links">
          {creatorSocials.map((social) => (
            <a key={social.key} href={social.href} target="_blank" rel="noreferrer">{social.label}</a>
          ))}
          <a href={SITE.links} target="_blank" rel="noreferrer">All links</a>
        </div>
        <div className="footer-meta">
          <span>FLOTT // MUSIC + CONTENT</span>
          <Link to="/community">Community</Link>
          <Link to="/community#minecraft">Minecraft / Flotty's World</Link>
          <Link to="/player-guide">Player Guide</Link>
          <Link to="/ranks">Ranks &amp; Perks</Link>
          <Link to="/map">World Map</Link>
        </div>
      </div>
    </footer>
  );
}

function TickerGroup() {
  return (
    <div className="ticker-group">
      {Array.from({ length: TICKER_CYCLES }, (_, cycle) => (
        TICKER_ITEMS.map((item, itemIndex) => (
          <span key={`${cycle}-${itemIndex}`}>{item}</span>
        ))
      ))}
    </div>
  );
}

function StatusTicker() {
  return (
    <div className="status-ticker" aria-hidden="true">
      <div className="ticker-track">
        <TickerGroup />
        <TickerGroup />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <RouteEffects />
      <Header />
      <div id="main-content" tabIndex="-1">
        <Suspense fallback={<div className="shell route-loading" role="status">Loading channel...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/player-guide" element={<PlayerGuidePage />} />
            <Route path="/ranks" element={<RanksPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
      <StatusTicker />
    </div>
  );
}
