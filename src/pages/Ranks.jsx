import { Check, Crown, ExternalLink, ShieldCheck, Sparkles } from "lucide-react";
import { SITE, staffRanks, supporterRanks } from "../site.js";
import "./Ranks.css";

function RankCard({ rank }) {
  return (
    <article className={`rank-card rank-card-${rank.accent}`}>
      <div className="rank-card-top">
        <span>{rank.label}</span>
        <strong>{rank.name}</strong>
      </div>
      <div className="rank-card-perks">
        {rank.perks.map((perk) => (
          <div key={perk}><Check size={14} /><span>{perk}</span></div>
        ))}
      </div>
      <div className="rank-card-bottom">
        <span>RANK CLAIM BONUS</span>
        <strong>{rank.totalBonus ? `+${rank.totalBonus.toLocaleString()}` : "BASE"}</strong>
      </div>
    </article>
  );
}

export default function RanksPage() {
  return (
    <main className="page-main ranks-page">
      <section className="section ranks-hero">
        <div className="shell">
          <div className="section-label">RANKS & PERKS // {SITE.serverName}</div>
          <h1 className="display-title">HOW FINE ARE YOU?</h1>
          <p className="ranks-hero-copy">A shared core game for everyone, earned community identity for regulars, and supporter perks that never become survival power.</p>
          <div className="hero-actions">
            <a className="btn btn-solid" href={SITE.twitch} target="_blank" rel="noreferrer"><Crown size={16} /> SUPPORT FLOTT ON TWITCH</a>
            <a className="btn" href={SITE.discord} target="_blank" rel="noreferrer">JOIN DISCORD <ExternalLink size={14} /></a>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="shell">
          <div className="section-label">01 // COMMUNITY + SUPPORTER LADDER</div>
          <div className="rank-card-grid">
            {supporterRanks.map((rank) => <RankCard rank={rank} key={rank.key} />)}
          </div>
        </div>
      </section>

      <section className="section claim-rank-section">
        <div className="shell">
          <div className="section-label">02 // CLAIM BLOCKS</div>
          <div className="rank-split">
            <div>
              <h2>MORE ROOM TO PROTECT.<br />NOT MORE POWER TO WIN.</h2>
              <p>Everyone begins with {SITE.claimBlocks.starting.toLocaleString()} claim blocks and earns +{SITE.claimBlocks.perHour} per active hour. Rank bonuses stack through the ladder, so higher tiers inherit the lower-tier claim bonuses.</p>
            </div>
            <div className="claim-rank-table-wrap">
              <table className="claim-rank-table">
                <caption className="sr-only">Claim block bonuses by rank</caption>
                <thead>
                  <tr><th scope="col">Rank</th><th scope="col">Rank bonus</th><th scope="col">With starting blocks</th></tr>
                </thead>
                <tbody>
                  {supporterRanks.map((rank) => (
                    <tr key={rank.key}>
                      <th scope="row" data-label="Rank">{rank.name}</th>
                      <td data-label="Rank bonus">{rank.totalBonus ? `+${rank.totalBonus.toLocaleString()}` : "BASE"}</td>
                      <td data-label="With starting blocks">{(SITE.claimBlocks.starting + rank.totalBonus).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="section paid-promise-section">
        <div className="shell rank-split">
          <div>
            <div className="section-label">03 // THE LINE WE DON'T CROSS</div>
            <h2>NO PAY-TO-WIN.</h2>
            <p>FINE, FINER, and FINEST are thank-you perks for Twitch supporters. A subscription should make your identity and convenience feel better, not make you stronger than somebody playing for free.</p>
          </div>
          <div className="no-power-grid">
            {["No /fly", "No /god", "No /heal or /feed", "No kits", "No free diamonds or gear", "No XP multipliers", "No better drops", "No creative tools", "No staff commands"].map((item) => (
              <div key={item}><ShieldCheck size={15} /><span>{item}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section staff-ranks-section">
        <div className="shell">
          <div className="section-label">04 // STAFF ROLES</div>
          <div className="rank-split">
            <div>
              <h2>STAFF IS A JOB.<br />NOT A SUPPORTER TIER.</h2>
              <p>Staff ranks follow Minecraft responsibilities. Discord roles can be different, and supporter ranks can coexist with staff without changing staff authority.</p>
            </div>
            <div className="staff-rank-stack">
              {staffRanks.map(([name, description], index) => (
                <div key={name}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{name}</strong>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight ranks-cta">
        <div className="shell ranks-cta-inner">
          <Sparkles />
          <div><strong>FINE / FINER / FINEST</strong><p>Support Flott because you like the content. The server perks are the thank-you, not the reason survival works.</p></div>
          <a className="btn btn-solid" href={SITE.twitch} target="_blank" rel="noreferrer">OPEN TWITCH</a>
        </div>
      </section>
    </main>
  );
}
