import { ExternalLink, Menu, Radio, X } from "lucide-react";
import { lazy, Suspense, useEffect, useState } from "react";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import FloMark from "./components/FloMark.jsx";
import HomePage from "./pages/Home.jsx";
import { creatorSocials, SITE } from "./site.js";
import "./App.css";

const PlayerGuidePage = lazy(() => import("./pages/PlayerGuide.jsx"));
const RanksPage = lazy(() => import("./pages/Ranks.jsx"));
const MapPage = lazy(() => import("./pages/Map.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFound.jsx"));

const ROUTE_META = {
  "/": {
    title: "flottdotcom // Flotty's World 2.0",
    description: "Flott / flottdotcom - live content, community, and Flotty's World 2.0 vanilla-first Minecraft survival.",
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

    window.scrollTo(0, 0);
    window.requestAnimationFrame(() => {
      document.getElementById("main-content")?.focus({ preventScroll: true });
    });
  }, [location.pathname]);

  return null;
}

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

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
              <small>{SITE.serverName} // creator + community</small>
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
          <NavLink to="/" onClick={close}>Home</NavLink>
          <NavLink to="/player-guide" onClick={close}>Player Guide</NavLink>
          <NavLink to="/ranks" onClick={close}>Ranks</NavLink>
          <NavLink to="/map" onClick={close}>Map</NavLink>
          <a href={SITE.discord} target="_blank" rel="noreferrer">Discord</a>
          <a className="watch-link" href={SITE.twitch} target="_blank" rel="noreferrer">
            <Radio size={14} /> Watch Live <ExternalLink size={12} />
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
          <p>{SITE.brandName} is Flott's creator hub and the home of {SITE.serverName}.</p>
        </div>
        <div className="footer-links" aria-label="Creator links">
          {creatorSocials.map((social) => (
            <a key={social.key} href={social.href} target="_blank" rel="noreferrer">{social.label}</a>
          ))}
        </div>
        <div className="footer-meta">
          <span>SERVER // {SITE.serverIp}</span>
          <span>VANILLA-FIRST // COMMUNITY-BUILT</span>
        </div>
      </div>
    </footer>
  );
}

function StatusTicker() {
  return (
    <div className="status-ticker" aria-hidden="true">
      <div className="ticker-track">
        <span>[FLO]</span><span>{SITE.brandName}</span><span>{SITE.serverName}</span><span>{SITE.serverIp}</span><span>VANILLA-FIRST</span><span>NO PAY-TO-WIN</span>
        <span>[FLO]</span><span>{SITE.brandName}</span><span>{SITE.serverName}</span><span>{SITE.serverIp}</span><span>VANILLA-FIRST</span><span>NO PAY-TO-WIN</span>
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
