import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import { getPartyState, RELEASE_PARTY } from "./campaign.js";

test("countdown uses the Atlanta event time, independent of browser timezone", () => {
  assert.deepEqual(getPartyState(Date.parse("2026-11-28T00:00:00Z")), { phase: "upcoming", label: "1D : 01H TO GO" });
});

test("last hour stays upcoming until the exact start", () => {
  assert.deepEqual(getPartyState(Date.parse(RELEASE_PARTY.startsAt) - 1), { phase: "upcoming", label: "LESS THAN AN HOUR TO GO" });
  assert.equal(getPartyState(Date.parse(RELEASE_PARTY.startsAt)).phase, "live");
});

test("the event stops promoting attendance at its end", () => {
  assert.equal(getPartyState(Date.parse(RELEASE_PARTY.endsAt) - 1).phase, "live");
  assert.deepEqual(getPartyState(Date.parse(RELEASE_PARTY.endsAt)), { phase: "past", label: "WHAT A NIGHT." });
});

test("calendar download matches the party's Eastern Time schedule", () => {
  const calendar = readFileSync(new URL("../public/somewhere-in-somerdale-party.ics", import.meta.url), "utf8").replace(/\r\n/g, "\n");
  const calendarTime = value => new Date(value).toISOString().replace(/[-:]/g, "").replace(".000", "");
  assert.ok(calendar.includes(`DTSTART:${calendarTime(RELEASE_PARTY.startsAt)}\n`));
  assert.ok(calendar.includes(`DTEND:${calendarTime(RELEASE_PARTY.endsAt)}\n`));
  assert.ok(calendar.endsWith("END:VCALENDAR\n"));
});
