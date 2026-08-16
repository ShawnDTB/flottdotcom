import { ExternalLink, MapPinned, Server } from "lucide-react";
import { SITE } from "../site.js";
import "./Map.css";

export default function MapPage() {
  const configured = Boolean(SITE.mapUrl);

  return (
    <main className="page-main map-page">
      <section className="section map-hero">
        <div className="shell map-hero-grid">
          <div>
            <div className="section-label">WORLD MAP // FLOTTY'S WORLD 2.0</div>
            <h1 className="display-title">SEE WHAT<br />EVERYONE'S<br />BUILDING.</h1>
            <p className="map-copy">BlueMap is the live view of the SMP: terrain, builds, travel planning, and the shape of the world as the community keeps moving outward.</p>
            {configured ? (
              <a className="btn btn-solid" href={SITE.mapUrl} target="_blank" rel="noreferrer"><MapPinned size={16} /> OPEN LIVE MAP <ExternalLink size={14} /></a>
            ) : (
              <div className="map-pending"><Server size={16} /><span>The public BlueMap URL is ready to be plugged in through <code>VITE_MAP_URL</code>.</span></div>
            )}
          </div>

          <div className="map-terminal">
            <div className="map-terminal-top">MAP.STATUS // {configured ? "CONNECTED" : "WAITING_FOR_PUBLIC_ENDPOINT"}</div>
            <div className="map-terminal-body">
              <MapPinned size={52} />
              <strong>FLOTTY'S WORLD 2.0</strong>
              <span>{SITE.serverIp}</span>
              <p>{configured ? "Live BlueMap routing is configured." : "The website route is finished. Set VITE_MAP_URL during deployment once the public BlueMap address is finalized."}</p>
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
