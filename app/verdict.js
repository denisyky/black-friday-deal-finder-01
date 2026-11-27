// Verdict badges: one honest signal per deal, with the evidence behind it.
// Verdict levels, best first: new-low, strong, good, routine.

export const VERDICT_LABELS = {
  'new-low': 'New low',
  strong: 'Strong deal',
  good: 'Good price',
  routine: 'Routine sale'
};

export const VERDICT_RANK = { 'new-low': 0, strong: 1, good: 2, routine: 3 };

export function verdictLabel(verdict) {
  return VERDICT_LABELS[verdict] || 'Good price';
}

// Short evidence line shown under the badge on a card.
export function verdictEvidence(deal) {
  return deal.evidence || '';
}
