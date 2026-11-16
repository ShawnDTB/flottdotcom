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
          <p className="ranks-hero-copy">Everyone plays by the same survival rules. Community and supporter ranks offer cosmetic perks.</p>
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
              <h2>THE SAME CLAIM RULES FOR EVERY RANK.</h2>
              <p>Use claim blocks to protect your builds. Earn more through active play.</p>
            </div>
            <dl className="claim-rank-stats">
              <div><dt>Starting balance</dt><dd>{SITE.claimBlocks.starting.toLocaleString()} blocks</dd></div>
              <div><dt>Per active hour</dt><dd>+{SITE.claimBlocks.perHour} blocks</dd></div>
              <div><dt>Accrual limit</dt><dd>{SITE.claimBlocks.maxAccrued.toLocaleString()} blocks</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section paid-promise-section">
        <div className="shell rank-split">
          <div>
            <div className="section-label">03 // THE LINE WE DON'T CROSS</div>
            <h2>NO PAY-TO-WIN.</h2>
            <p>FINE, FINER, and FINEST recognize Twitch supporters with cosmetic options such as nicknames and colors.</p>
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
          <div><strong>FINE / FINER / FINEST</strong><p>These cosmetic ranks recognize Flott’s Twitch supporters.</p></div>
          <a className="btn btn-solid" href={SITE.twitch} target="_blank" rel="noreferrer">OPEN TWITCH</a>
        </div>
      </section>
    </main>
  );
}
