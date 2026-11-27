// Rendering, search, filters, sorting and the detail view for the finder.
// Reads its state from the controls and from the URL (query presets and the
// #/deal/<id> hash route), so a filtered or single-deal view is shareable.

import { DEALS, CHECKED_AT, CATEGORIES, STORES } from './deals.js';
import { verdictLabel, verdictEvidence, VERDICT_RANK } from './verdict.js';

const $ = (id) => document.getElementById(id);
const searchInput = $('search');
const categorySelect = $('category');
const storeSelect = $('store');
const minDiscSelect = $('mindisc');
const sortSelect = $('sort');
const resultCount = $('result-count');
const bestGrid = $('best-grid');
const dealGrid = $('deal-grid');
const emptyNote = $('empty');
const bestSection = $('best');
const allSection = $('all');
const detailSection = $('detail');

const money = (n) => '$' + n.toFixed(2).replace(/\.00$/, '');
const saving = (d) => d.usual - d.sale;

function fillSelect(select, values) {
  for (const v of values) {
    const opt = document.createElement('option');
    opt.value = v;
    opt.textContent = v;
    select.appendChild(opt);
  }
}
fillSelect(categorySelect, CATEGORIES);
fillSelect(storeSelect, STORES);

function cardHtml(deal) {
  return '<article class="card">'
    + '<div class="cat-store"><span>' + deal.category + '</span><span class="store">' + deal.store + '</span></div>'
    + '<h3><a href="#/deal/' + deal.id + '">' + deal.name + '</a></h3>'
    + '<div class="prices"><span class="sale">' + money(deal.sale) + '</span>'
    + '<span class="usual">' + money(deal.usual) + '</span>'
    + '<span class="off">−' + deal.pct + '%</span></div>'
    + '<div class="save">Save ' + money(saving(deal)) + '</div>'
    + '<span class="badge ' + deal.verdict + '">' + verdictLabel(deal.verdict) + '</span>'
    + '<p class="evidence">' + verdictEvidence(deal) + '</p>'
    + '<p class="meta">Checked ' + CHECKED_AT + ' · ' + deal.source + '</p>'
    + '<a class="view" href="' + deal.link + '" target="_blank" rel="noopener">View deal at ' + deal.store + ' ↗</a>'
    + '</article>';
}

function sortDeals(list, mode) {
  const copy = list.slice();
  if (mode === 'discount') copy.sort((a, b) => b.pct - a.pct || b.usual - a.usual);
  else if (mode === 'price-asc') copy.sort((a, b) => a.sale - b.sale);
  else if (mode === 'price-desc') copy.sort((a, b) => b.sale - a.sale);
  else if (mode === 'saving') copy.sort((a, b) => saving(b) - saving(a));
  else copy.sort((a, b) => VERDICT_RANK[a.verdict] - VERDICT_RANK[b.verdict] || b.pct - a.pct);
  return copy;
}

function currentFilters() {
  return {
    q: searchInput.value.trim().toLowerCase(),
    category: categorySelect.value,
    store: storeSelect.value,
    mindisc: Number(minDiscSelect.value),
    sort: sortSelect.value
  };
}

function applyFilters() {
  const f = currentFilters();
  const matched = DEALS.filter((d) => {
    if (f.category && d.category !== f.category) return false;
    if (f.store && d.store !== f.store) return false;
    if (d.pct < f.mindisc) return false;
    if (f.q && (d.name + ' ' + d.store + ' ' + d.category).toLowerCase().indexOf(f.q) === -1) return false;
    return true;
  });
  const sorted = sortDeals(matched, f.sort);
  dealGrid.innerHTML = sorted.map(cardHtml).join('');
  emptyNote.hidden = sorted.length > 0;
  const anyFilter = f.q || f.category || f.store || f.mindisc > 0;
  // When a filter is on, the filtered grid is the whole page: hide the
  // unfiltered Best deals so the results sit at the top.
  bestSection.hidden = Boolean(anyFilter);
  resultCount.textContent = sorted.length + ' of ' + DEALS.length + ' deals'
    + (anyFilter ? ' match your filters' : ' — use search or filters to narrow them down');
}

function renderBest() {
  const best = sortDeals(DEALS, 'best').slice(0, 8);
  bestGrid.innerHTML = best.map(cardHtml).join('');
}

function showDetail(id) {
  const deal = DEALS.find((d) => d.id === id);
  if (!deal) { showList(); return; }
  bestSection.hidden = true;
  allSection.hidden = true;
  document.querySelector('.controls').hidden = true;
  detailSection.hidden = false;
  detailSection.innerHTML = '<article class="detail">'
    + '<p><a class="back" href="#/">← Back to all deals</a></p>'
    + '<div class="cat-store"><span>' + deal.category + '</span><span class="store">' + deal.store + '</span></div>'
    + '<h2>' + deal.name + '</h2>'
    + '<div class="prices"><span class="sale">' + money(deal.sale) + '</span>'
    + '<span class="usual">' + money(deal.usual) + '</span>'
    + '<span class="off">−' + deal.pct + '%</span></div>'
    + '<p class="save">You save ' + money(saving(deal)) + ' vs the usual price.</p>'
    + '<span class="badge ' + deal.verdict + '">' + verdictLabel(deal.verdict) + '</span>'
    + '<p class="evidence">' + verdictEvidence(deal) + '</p>'
    + '<dl>'
    + '<dt>Store</dt><dd>' + deal.store + '</dd>'
    + '<dt>Sale price</dt><dd>' + money(deal.sale) + '</dd>'
    + '<dt>Usual price</dt><dd>' + money(deal.usual) + '</dd>'
    + '<dt>Discount</dt><dd>' + deal.pct + '% (' + money(saving(deal)) + ' off)</dd>'
    + '<dt>Price checked</dt><dd>' + CHECKED_AT + '</dd>'
    + '<dt>Source</dt><dd>' + deal.source + '</dd>'
    + '</dl>'
    + '<a class="view" href="' + deal.link + '" target="_blank" rel="noopener">View deal at ' + deal.store + ' ↗</a>'
    + '</article>'
    + '<h2>More in ' + deal.category + '</h2>'
    + '<div class="grid">' + sortDeals(DEALS.filter((d) => d.category === deal.category && d.id !== deal.id), 'best').slice(0, 4).map(cardHtml).join('') + '</div>';
  window.scrollTo(0, 0);
}

function showList() {
  bestSection.hidden = false;
  allSection.hidden = false;
  document.querySelector('.controls').hidden = false;
  detailSection.hidden = true;
  detailSection.innerHTML = '';
  applyFilters();
}

function route() {
  const hash = window.location.hash;
  if (hash.indexOf('#/deal/') === 0) showDetail(hash.slice(7));
  else showList();
}

// Shareable presets: ?category=TVs&store=Amazon&mindisc=40&sort=discount&q=airpods
function applyPresets() {
  const params = new URLSearchParams(window.location.search);
  if (params.get('category')) categorySelect.value = params.get('category');
  if (params.get('store')) storeSelect.value = params.get('store');
  if (params.get('mindisc')) minDiscSelect.value = params.get('mindisc');
  if (params.get('sort')) sortSelect.value = params.get('sort');
  if (params.get('q')) searchInput.value = params.get('q');
}

for (const el of [searchInput, categorySelect, storeSelect, minDiscSelect, sortSelect]) {
  el.addEventListener('input', () => { if (window.location.hash.indexOf('#/deal/') === 0) history.replaceState(null, '', '#/'); showList(); });
  el.addEventListener('change', () => { if (window.location.hash.indexOf('#/deal/') === 0) history.replaceState(null, '', '#/'); showList(); });
}
window.addEventListener('hashchange', route);

applyPresets();
renderBest();
route();
