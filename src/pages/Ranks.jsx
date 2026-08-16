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
          <div className="section-label">RANKS & PERKS // FLOTTY'S WORLD 2.0</div>
          <h1 className="display-title">HOW FINE<br />ARE YOU?</h1>
          <p className="ranks-hero-copy">Community identity first. Useful convenience second. Survival power never.</p>
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
              <p>Everyone begins with {SITE.claimBlocks.starting.toLocaleString()} claim blocks and earns +{SITE.claimBlocks.perHour} per active hour. Rank bonuses stack through the supporter ladder, so higher tiers inherit the lower-tier claim bonuses.</p>
            </div>
            <div className="claim-rank-table">
              <div className="claim-rank-row claim-rank-head"><span>RANK</span><span>RANK BONUS</span><span>WITH STARTING BLOCKS</span></div>
              {supporterRanks.map((rank) => (
                <div className="claim-rank-row" key={rank.key}>
                  <strong>{rank.name}</strong>
                  <span>{rank.totalBonus ? `+${rank.totalBonus.toLocaleString()}` : "—"}</span>
                  <span>{(SITE.claimBlocks.starting + rank.totalBonus).toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section paid-promise-section">
        <div className="shell rank-split">
          <div>
            <div className="section-label">03 // THE LINE WE DON'T CROSS</div>
            <h2>NO PAY-TO-WIN.</h2>
            <p>Fine, Finer, and Finest are meant to feel rewarding without turning a Twitch subscription into an advantage over somebody who just wants to play Minecraft.</p>
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
              <p>Staff ranks are assigned according to Minecraft responsibilities. A person can hold a different role on Discord, and supporter ranks can coexist with staff without changing staff authority.</p>
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
