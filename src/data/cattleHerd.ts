// Herd data for the cattle-feature dashboard in src/content/personal/cattle.mdx.
//
// Transcribed from the Notion tracker export (Cattle db / Transactions /
// Dashboard CSVs). Backs the in-article components CattleLedger (roster) and
// CattleTimeline (herd-growth chart).
//
// Figures are unrealized: nothing has been sold, so "deployed" capital is the
// honest framing (never present it as profit/loss).

export type Sex = 'Female' | 'Male' | 'Calf';

export interface CattleHead {
  name: string;
  sex: Sex;
  breed?: string;
  /** ISO date the animal entered the herd (purchased, or born for the calf). */
  acquired: string;
  /** Purchase price in Ghanaian cedi; omitted for the calf (born into herd). */
  priceGHS?: number;
  /** All-in invested capital in USD (purchase + unitized overhead). */
  investedUSD: number;
  pregnant: boolean;
  /** True when the animal was born into the herd rather than bought. */
  bornIntoHerd?: boolean;
  tag?: string;
  note?: string;
}

// Source of truth for the dashboard. Ordered by acquisition date.
export const herd: CattleHead[] = [
  { name: 'Kamoola Harris', sex: 'Female', breed: 'Gudali', acquired: '2025-08-26', priceGHS: 6500, investedUSD: 665.94, pregnant: true, tag: '09923' },
  { name: 'Moo Ze Dong', sex: 'Male', breed: 'Gudali', acquired: '2025-08-26', priceGHS: 4000, investedUSD: 427.85, pregnant: false, note: 'Speckled back, right front + right legs' },
  { name: 'Mooslini', sex: 'Male', breed: 'Gudali', acquired: '2025-08-26', priceGHS: 3500, investedUSD: 380.23, pregnant: false, note: 'Belongs to Lawson' },
  { name: 'Queen Elizabeef', sex: 'Female', breed: 'Gudali', acquired: '2025-08-29', priceGHS: 4500, investedUSD: 489.29, pregnant: false },
  { name: 'Dairy Queen', sex: 'Female', breed: 'Gudali', acquired: '2025-08-29', priceGHS: 8000, investedUSD: 791.01, pregnant: true, tag: '09926' },
  { name: 'Benjamin Netanyamoo', sex: 'Male', breed: 'Gudali', acquired: '2025-09-02', priceGHS: 4500, investedUSD: 440.68, pregnant: false },
  { name: 'Troomp', sex: 'Male', breed: 'Gudali', acquired: '2025-09-05', priceGHS: 5200, investedUSD: 485.84, pregnant: false },
  { name: 'King Henry the Beef', sex: 'Female', breed: 'Gudali', acquired: '2026-01-09', priceGHS: 9000, investedUSD: 934.58, pregnant: true },
  { name: 'Kim Jong Moon', sex: 'Male', breed: 'Gudali', acquired: '2026-01-09', priceGHS: 7000, investedUSD: 747.66, pregnant: false },
  // The two most recent — still awaiting names.
  { name: 'Awaiting name', sex: 'Calf', breed: 'Gudali', acquired: '2026-02-01', investedUSD: 0, pregnant: false, bornIntoHerd: true },
  { name: 'Awaiting name', sex: 'Male', breed: 'Gudali', acquired: '2026-02-09', priceGHS: 5000, investedUSD: 456.2, pregnant: false, note: 'Andrew paid 300' },
];

// The tracker reflects entries through this point; stamp it on the dashboard so
// the numbers read as a dated snapshot, not a live feed.
export const asOf = 'February 2026';

/** Cumulative herd size at each acquisition date, for the timeline. */
export interface HerdStep {
  date: string;
  count: number;
  added: string[];
  born: boolean;
}

export function herdGrowth(animals: CattleHead[] = herd): HerdStep[] {
  const byDate = new Map<string, CattleHead[]>();
  for (const a of animals) {
    const list = byDate.get(a.acquired) ?? [];
    list.push(a);
    byDate.set(a.acquired, list);
  }
  const dates = [...byDate.keys()].sort();
  let running = 0;
  return dates.map((date) => {
    const group = byDate.get(date)!;
    running += group.length;
    return {
      date,
      count: running,
      added: group.map((a) => a.name),
      born: group.some((a) => a.bornIntoHerd),
    };
  });
}
