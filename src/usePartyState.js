import { useEffect, useState } from "react";
import { getPartyState } from "./campaign.js";

export default function usePartyState() {
  const [party, setParty] = useState(() => getPartyState());
  useEffect(() => {
    const timer = window.setInterval(() => setParty(getPartyState()), 30000);
    return () => window.clearInterval(timer);
  }, []);
  return party;
}
