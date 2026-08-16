import { ExternalLink, MapPinned, MessageCircle, MonitorUp, Server } from "lucide-react";
import { SITE } from "../site.js";
import "./Map.css";

export default function MapPage() {
  const configured = Boolean(SITE.mapUrl);
  const mapLabel = SITE.mapUrl.replace(/^https?:\/\//, "").replace(/\/$/, "");
  const mixedContentBlocked = typeof window !== "undefined"
    && window.location.protocol === "https:"
    && SITE.mapUrl.startsWith("http://");
  const canEmbed = configured && !mixedContentBlocked;

  return (
    <main className="page-main map-page">
      <section className="section map-hero">
        <div className="shell map-hero-grid">
          <div>
            <div className="section-label">WORLD MAP // {SITE.serverName}</div>
            <h1 className="display-title">SEE WHAT<br />EVERYONE'S<br />BUILDING.</h1>
            <p className="map-copy">BlueMap is the live view of the SMP: terrain, builds, travel planning, and the shape of the world as the community keeps moving outward.</p>
            {configured ? (
              <div className="map-actions">
                <a className="btn btn-solid" href={SITE.mapUrl} target="_blank" rel="noreferrer"><MapPinned size={16} /> OPEN FULL MAP <ExternalLink size={14} /></a>
                <a className="btn" href="#live-map"><MonitorUp size={16} /> VIEW BELOW</a>
              </div>
            ) : (
              <div className="map-actions">
                <div className="map-pending"><Server size={16} /><span>The public world map is not online yet.</span></div>
                <a className="btn" href={SITE.discord} target="_blank" rel="noreferrer"><MessageCircle size={16} /> CHECK DISCORD</a>
              </div>
            )}
          </div>

          <div className="map-terminal">
            <div className="map-terminal-top">MAP.STATUS // {configured ? "CONNECTED" : "COMING_SOON"}</div>
            <div className="map-terminal-body">
              <MapPinned size={52} />
              <strong>{SITE.serverName.toUpperCase()}</strong>
              <span>{configured ? mapLabel : SITE.serverIp}</span>
              <p>{configured ? "The live world map is connected below. Pan around the world here or open BlueMap in a full tab when you want the full-screen view." : "The world is live; the public browser map is still being prepared. Server and launch updates will be posted through Discord."}</p>
            </div>
          </div>
        </div>
      </section>

      {configured && (
        <section id="live-map" className="section map-embed-section">
          <div className="shell">
            <div className="map-embed-header">
              <div>
                <div className="section-label">LIVE // BLUE MAP</div>
                <h2>EXPLORE THE WORLD.</h2>
              </div>
              <a className="btn" href={SITE.mapUrl} target="_blank" rel="noreferrer">OPEN FULLSCREEN <ExternalLink size={14} /></a>
            </div>

            {canEmbed ? (
              <div className="map-frame-shell">
                <div className="map-frame-toolbar">
                  <span><i className="map-live-dot" /> LIVE WORLD VIEW</span>
                  <span>{mapLabel}</span>
                </div>
                <iframe
                  className="map-frame"
                  title={`${SITE.serverName} live BlueMap`}
                  src={SITE.mapUrl}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="map-embed-fallback">
                <Server size={34} />
                <div>
                  <strong>THE MAP IS LIVE, BUT THIS PAGE CAN'T FRAME IT YET.</strong>
                  <p>The temporary BlueMap address uses HTTP. Browsers block an HTTP iframe when this website is served over HTTPS. Open the map directly for now; once BlueMap gets an HTTPS domain, this embed will begin working automatically.</p>
                </div>
                <a className="btn btn-solid" href={SITE.mapUrl} target="_blank" rel="noreferrer">OPEN LIVE MAP <ExternalLink size={14} /></a>
              </div>
            )}
          </div>
        </section>
      )}

      <section className="section section-tight map-notes-section">
        <div className="shell map-notes">
          <div><span>01</span><strong>FIND BUILDS</strong><p>Use the map to orient yourself without adding teleport powers that undermine travel.</p></div>
          <div><span>02</span><strong>PLAN TRAVEL</strong><p>Coordinate roads, Nether routes, community areas, and long-distance projects.</p></div>
          <div><span>03</span><strong>WATCH IT GROW</strong><p>The map becomes a visual history of what the community actually builds over time.</p></div>
        </div>
      </section>
    </main>
  );
}
