import { ArrowLeft, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { SITE } from "../site.js";

export default function NotFoundPage() {
  return (
    <main className="page-main not-found-page">
      <section className="section">
        <div className="shell not-found-inner">
          <div className="section-label">404 // SIGNAL LOST</div>
          <h1 className="display-title">WRONG<br />CHANNEL.</h1>
          <p>
            That page is not part of {SITE.brandName}. Head back home or jump straight into the {SITE.serverName} player guide.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-solid" to="/"><ArrowLeft size={16} /> BACK HOME</Link>
            <Link className="btn" to="/player-guide"><BookOpen size={16} /> PLAYER GUIDE</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
