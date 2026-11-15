export const ALBUM = {
  title: "Somewhere in Somerdale",
  status: "Album on the way",
};

export const MUSIC_VIDEO = {
  title: "21 Days",
  label: "Official music video",
  url: "https://www.youtube.com/watch?v=oCTEwEzW6f4",
  embedUrl: "https://www.youtube-nocookie.com/embed/oCTEwEzW6f4",
  thumbnail: "/21-days-video.jpg",
  channel: "https://www.youtube.com/@itsflotto",
};

export const RELEASE_PARTY = {
  startsAt: "2026-11-28T20:00:00-05:00",
  endsAt: "2026-11-28T23:00:00-05:00",
  dateLabel: "Saturday, November 28, 2026",
  timeLabel: "8–11 PM ET",
  location: "Midtown Atlanta",
  guests: ["c.will", "winnie black", "Tre.present"],
  rsvpUrl: import.meta.env?.VITE_PARTY_RSVP_URL || "",
  calendarUrl: "/somewhere-in-somerdale-party.ics",
};

export function getPartyState(now = Date.now()) {
  const starts = Date.parse(RELEASE_PARTY.startsAt);
  const ends = Date.parse(RELEASE_PARTY.endsAt);
  if (now >= ends) return { phase: "past", label: "WHAT A NIGHT." };
  if (now >= starts) return { phase: "live", label: "TONIGHT IN ATL." };
  const hours = Math.floor((starts - now) / 3600000);
  return {
    phase: "upcoming",
    label: hours < 1 ? "LESS THAN AN HOUR TO GO" : `${Math.floor(hours / 24)}D : ${String(hours % 24).padStart(2, "0")}H TO GO`,
  };
}
