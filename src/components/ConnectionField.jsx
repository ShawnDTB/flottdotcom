import { Check, Clipboard } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import "./ConnectionField.css";

export default function ConnectionField({ label, value }) {
  const [copyState, setCopyState] = useState("idle");
  const resetTimer = useRef(null);
  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  async function copyValue() {
    window.clearTimeout(resetTimer.current);
    try {
      await navigator.clipboard.writeText(String(value));
      setCopyState("copied");
      resetTimer.current = window.setTimeout(() => setCopyState("idle"), 2200);
    } catch {
      setCopyState("failed");
    }
  }

  return (
    <div className="connection-field">
      <div>
        <span className="connection-field-label">{label}</span>
        <code>{value}</code>
      </div>
      <button className="btn btn-dark" type="button" onClick={copyValue} aria-label={`Copy ${label.toLowerCase()}`}>
        {copyState === "copied" ? <Check size={14} /> : <Clipboard size={14} />}
        {copyState === "copied" ? "Copied" : "Copy"}
      </button>
      <span className={copyState === "failed" ? "connection-copy-error" : "sr-only"} role="status">
        {copyState === "copied" && `${label} copied.`}
        {copyState === "failed" && "Select and copy the value above."}
      </span>
    </div>
  );
}
