import { ExternalLink, MapPinned, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { SITE } from "../site.js";
import "./Map.css";

export default function MapPage() {
  const { mapUrl } = SITE;
  const canEmbed = mapUrl.startsWith("https://");

  return (
    <main className="page-main map-page">
      <section className="map-primary">
        <div className="shell map-primary-header">
          <div className="map-primary-copy">
            <div className="section-label">{SITE.serverName}</div>
            <h1 className="display-title">WORLD MAP</h1>
            {mapUrl && <p>Explore the terrain and get your bearings before heading out in survival.</p>}
          </div>
          {mapUrl && (
            <a className="btn" href={mapUrl} target="_blank" rel="noreferrer">
              OPEN WORLD MAP <ExternalLink size={14} />
            </a>
          )}
        </div>

        {canEmbed && (
          <div className="map-frame-shell">
            <iframe
              className="map-frame"
              title={`${SITE.serverName} world map`}
              src={mapUrl}
              loading="eager"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        )}

        {!mapUrl && (
          <div className="shell">
            <div className="map-embed-fallback">
              <MapPinned size={34} />
              <div>
                <strong>The public map is currently unavailable.</strong>
                <p>Ask the community on Discord for directions and server updates.</p>
                <div className="hero-actions">
                  <Link className="btn btn-solid" to="/player-guide#join">JOIN THE SERVER</Link>
                  <a className="btn" href={SITE.discord} target="_blank" rel="noreferrer">
                    <MessageCircle size={15} /> ASK ON DISCORD
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
