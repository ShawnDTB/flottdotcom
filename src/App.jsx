import { ExternalLink, Menu, Radio, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home.jsx";
import PlayerGuidePage from "./pages/PlayerGuide.jsx";
import RanksPage from "./pages/Ranks.jsx";
import MapPage from "./pages/Map.jsx";
import { SITE } from "./site.js";
import "./App.css";

function FloMark({ compact = false }) {
  return (
    <span className={`flo-mark ${compact ? "flo-mark-compact" : ""}`} aria-label="FLO">
      <span>[</span>
      <strong>FLO</strong>
      <span>]</span>
    </span>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link to="/" className="brand-link" onClick={close}>
          <FloMark compact />
          <span className="brand-copy">
            <strong>FLOTTY'S WORLD 2.0</strong>
            <small>flottdotcom // minecraft survival</small>
          </span>
        </Link>

        <button
          className="menu-button"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className={`site-nav ${open ? "site-nav-open" : ""}`}>
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
          <p>Flott's creator hub and the home of Flotty's World 2.0.</p>
        </div>
        <div className="footer-links">
          <a href={SITE.twitch} target="_blank" rel="noreferrer">Twitch</a>
          <a href={SITE.youtube} target="_blank" rel="noreferrer">YouTube</a>
          <a href={SITE.tiktok} target="_blank" rel="noreferrer">TikTok</a>
          <a href={SITE.discord} target="_blank" rel="noreferrer">Discord</a>
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
        <span>[FLO]</span><span>FLOTTY'S WORLD 2.0</span><span>{SITE.serverIp}</span><span>VANILLA-FIRST</span><span>NO PAY-TO-WIN</span>
        <span>[FLO]</span><span>FLOTTY'S WORLD 2.0</span><span>{SITE.serverIp}</span><span>VANILLA-FIRST</span><span>NO PAY-TO-WIN</span>
      </div>
    </div>
  );
}

export { FloMark };

export default function App() {
  return (
    <div className="site-shell">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/player-guide" element={<PlayerGuidePage />} />
        <Route path="/ranks" element={<RanksPage />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
      <Footer />
      <StatusTicker />
    </div>
  );
}
