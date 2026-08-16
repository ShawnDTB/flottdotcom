import { ExternalLink, MapPinned, MessageCircle, Server } from "lucide-react";
import { SITE } from "../site.js";
import "./Map.css";

export default function MapPage() {
  const configured = Boolean(SITE.mapUrl);

  return (
    <main className="page-main map-page">
      <section className="section map-hero">
        <div className="shell map-hero-grid">
          <div>
            <div className="section-label">WORLD MAP // {SITE.serverName}</div>
            <h1 className="display-title">SEE WHAT<br />EVERYONE'S<br />BUILDING.</h1>
            <p className="map-copy">BlueMap is the live view of the SMP: terrain, builds, travel planning, and the shape of the world as the community keeps moving outward.</p>
            {configured ? (
              <a className="btn btn-solid" href={SITE.mapUrl} target="_blank" rel="noreferrer"><MapPinned size={16} /> OPEN LIVE MAP <ExternalLink size={14} /></a>
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
              <span>{SITE.serverIp}</span>
              <p>{configured ? "The live world map is connected and ready to open." : "The world is live; the public browser map is still being prepared. Server and launch updates will be posted through Discord."}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="shell map-notes">
          <div><span>01</span><strong>FIND BUILDS</strong><p>Use the map to orient yourself without adding teleport powers that undermine travel.</p></div>
          <div><span>02</span><strong>PLAN TRAVEL</strong><p>Coordinate roads, Nether routes, community areas, and long-distance projects.</p></div>
          <div><span>03</span><strong>WATCH IT GROW</strong><p>The map becomes a visual history of what the community actually builds over time.</p></div>
        </div>
      </section>
    </main>
  );
}
