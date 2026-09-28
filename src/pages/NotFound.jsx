import { ArrowLeft, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import { FEATURED_RELEASE, SITE } from "../site.js";

export default function NotFoundPage() {
  return (
    <main className="page-main not-found-page">
      <section className="section">
        <div className="shell not-found-inner">
          <div className="section-label">404 // SIGNAL LOST</div>
          <h1 className="display-title">WRONG CHANNEL.</h1>
          <p>
            That page is not part of {SITE.brandName}. Head back home for the music, streams, and everything FLO.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-solid" to="/"><ArrowLeft size={16} /> BACK HOME</Link>
            <a className="btn" href={FEATURED_RELEASE.url} target="_blank" rel="noreferrer"><Headphones size={16} /> LISTEN TO {FEATURED_RELEASE.title.toUpperCase()}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
