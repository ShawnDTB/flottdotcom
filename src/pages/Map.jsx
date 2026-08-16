import { ExternalLink, MapPinned, MessageCircle, Server } from "lucide-react";
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
      <section className="map-primary">
        <div className="shell map-primary-header">
          <div className="map-primary-copy">
            <div className="section-label">WORLD MAP // {SITE.serverName}</div>
            <h1 className="display-title">EXPLORE THE WORLD.</h1>
            <p>BlueMap follows the real survival world as it grows — builds, roads, community areas, terrain, and everything in between.</p>
          </div>

          <div className="map-primary-meta">
            <div className="map-status-block">
              <span className="map-status-line"><i className="map-live-dot" /> {configured ? "LIVE" : "OFFLINE"}</span>
              <strong>{configured ? mapLabel : SITE.serverIp}</strong>
            </div>
            {configured ? (
              <a className="btn" href={SITE.mapUrl} target="_blank" rel="noreferrer">
                OPEN FULLSCREEN <ExternalLink size={14} />
              </a>
            ) : (
              <a className="btn" href={SITE.discord} target="_blank" rel="noreferrer">
                <MessageCircle size={15} /> CHECK DISCORD
              </a>
            )}
          </div>
        </div>

        {configured && canEmbed ? (
          <div className="map-wide map-frame-shell">
            <div className="map-frame-toolbar">
              <span><i className="map-live-dot" /> LIVE WORLD VIEW</span>
              <span className="map-frame-toolbar-right">
                <span>{mapLabel}</span>
                <a href={SITE.mapUrl} target="_blank" rel="noreferrer" aria-label="Open the live map fullscreen">
                  FULLSCREEN <ExternalLink size={12} />
                </a>
              </span>
            </div>
            <iframe
              className="map-frame"
              title={`${SITE.serverName} live BlueMap`}
              src={SITE.mapUrl}
              loading="eager"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        ) : configured ? (
          <div className="shell">
            <div className="map-embed-fallback">
              <Server size={34} />
              <div>
                <strong>THE MAP IS LIVE, BUT THIS PAGE CAN'T FRAME IT YET.</strong>
                <p>The temporary BlueMap address uses HTTP. Browsers block an HTTP iframe when this website is served over HTTPS. Open the map directly for now; once BlueMap gets an HTTPS domain, the embed will begin working automatically.</p>
              </div>
              <a className="btn btn-solid" href={SITE.mapUrl} target="_blank" rel="noreferrer">
                OPEN LIVE MAP <ExternalLink size={14} />
              </a>
            </div>
          </div>
        ) : (
          <div className="shell">
            <div className="map-embed-fallback">
              <MapPinned size={34} />
              <div>
                <strong>THE PUBLIC WORLD MAP ISN'T CONNECTED YET.</strong>
                <p>The server is still available at {SITE.serverIp}. Map and launch updates will be posted through Discord.</p>
              </div>
              <a className="btn" href={SITE.discord} target="_blank" rel="noreferrer">
                <MessageCircle size={15} /> CHECK DISCORD
              </a>
            </div>
          </div>
        )}
      </section>

      <section className="section section-tight map-notes-section">
        <div className="shell map-notes">
          <div><span>01</span><strong>FIND BUILDS</strong><p>See where the community is building and get your bearings without replacing survival travel.</p></div>
          <div><span>02</span><strong>PLAN TRAVEL</strong><p>Coordinate roads, Nether routes, community areas, and long-distance projects.</p></div>
          <div><span>03</span><strong>WATCH IT GROW</strong><p>The map becomes a visual history of what the community actually builds over time.</p></div>
        </div>
      </section>

      <section className="section map-about-section">
        <div className="shell map-about-grid">
          <div>
            <div className="section-label">ABOUT // BLUE MAP</div>
            <h2>THE WORLD, AS IT EXISTS.</h2>
          </div>
          <p>What you see here comes from the same vanilla-first survival world everyone plays in. BlueMap makes it easier to understand the scale of the server without adding teleportation or progression shortcuts to the game itself.</p>
        </div>
      </section>
    </main>
  );
}
