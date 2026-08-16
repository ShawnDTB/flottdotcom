export default function FloMark({ compact = false }) {
  return (
    <span className={`flo-mark ${compact ? "flo-mark-compact" : ""}`} aria-label="FLO">
      <span>[</span>
      <strong>FLO</strong>
      <span>]</span>
    </span>
  );
}
