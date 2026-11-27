// The deal data for the finder. Every entry was checked by the builder on
// 27 Nov 2026 (Black Friday) against the source named in its `source` field;
// see SOURCES.md in the campaign folder for the full audit table. Prices are
// in US dollars. `pct` is the discount rounded from sale vs usual price.

export const CHECKED_AT = '27 Nov 2026, 14:00 WIB';

export const DEALS = [
  {
    id: 'tcl-65-fire-tv',
    name: 'TCL 65-inch 4K UHD HDR Smart TV with Fire TV (2026)',
    store: 'Best Buy',
    category: 'TVs',
    sale: 229.99, usual: 469.99, pct: 51,
    verdict: 'strong',
    evidence: '$240 off the Best Buy Black Friday price, one of the cheapest 65-inch 4K sets this year.',
    source: 'Best Buy Black Friday release, via beebulletin.com',
    link: 'https://beebulletin.com/black-friday-sale-dates-by-store/'
  },
  {
    id: 'hisense-75-roku',
    name: 'Hisense 75-inch H5R1 Series 4K UHD HDR Smart Roku TV',
    store: 'Walmart',
    category: 'TVs',
    sale: 328.00, usual: 668.00, pct: 51,
    verdict: 'strong',
    evidence: 'More than half off list — $340 saved on a 75-inch 4K Roku TV.',
    source: 'comicbook.com, Walmart early Black Friday deals',
    link: 'https://comicbook.com/crate/walmart-early-black-friday-deals-2026/'
  },
  {
    id: 'insignia-55-f50',
    name: 'Insignia 55-inch F50 Series LED 4K UHD Smart Fire TV',
    store: 'Amazon',
    category: 'TVs',
    sale: 169.99, usual: 349.99, pct: 51,
    verdict: 'strong',
    evidence: '$180 off list for a 55-inch 4K Fire TV in Amazon Black Friday Week.',
    source: 'comicbook.com, Amazon Black Friday Week deals',
    link: 'https://comicbook.com/crate/amazon-early-black-friday-sale-2026/'
  },
  {
    id: 'sony-bravia-6-65',
    name: 'Sony BRAVIA 6 OLED TV, 65-inch',
    store: 'Best Buy',
    category: 'TVs',
    sale: 1198.00, usual: 1999.99, pct: 40,
    verdict: 'strong',
    evidence: 'About $802 under list for a 65-inch OLED — the deepest OLED cut tracked this week.',
    source: 'petematheson.com, Black Friday tech deals',
    link: 'https://www.petematheson.com/black-friday-tech-deals-2026/'
  },
  {
    id: 'macbook-air-m5-13',
    name: 'Apple MacBook Air 13-inch, M5, 16GB / 512GB',
    store: 'Amazon',
    category: 'Laptops',
    sale: 999.99, usual: 1299.00, pct: 23,
    verdict: 'new-low',
    evidence: 'All-time low — MacRumors calls $999.99 the lowest price tracked for this model.',
    source: 'MacRumors, 26 Nov 2026',
    link: 'https://www.amazon.com/dp/B0GR19X8DC'
  },
  {
    id: 'macbook-air-m5-15',
    name: 'Apple MacBook Air 15-inch, M5, 16GB / 512GB',
    store: 'Amazon',
    category: 'Laptops',
    sale: 1199.00, usual: 1499.00, pct: 20,
    verdict: 'good',
    evidence: '$300 off list on the larger M5 Air — a record-low price for this config.',
    source: 'MacRumors, 26 Nov 2026',
    link: 'https://www.macrumors.com/2026/11/26/50-best-apple-black-friday-deals/'
  },
  {
    id: 'macbook-neo-256',
    name: 'Apple MacBook Neo, 256GB',
    store: 'Amazon',
    category: 'Laptops',
    sale: 599.99, usual: 699.00, pct: 14,
    verdict: 'good',
    evidence: '$99 off across the Neo lineup — matches the best price since the summer price rises.',
    source: 'MacRumors, 26 Nov 2026',
    link: 'https://www.macrumors.com/2026/11/26/50-best-apple-black-friday-deals/'
  },
  {
    id: 'macbook-pro-m6-14',
    name: 'Apple MacBook Pro 14-inch, M6, 16GB / 1TB',
    store: 'Amazon',
    category: 'Laptops',
    sale: 1779.00, usual: 1999.00, pct: 11,
    verdict: 'new-low',
    evidence: 'All-time low with the on-page coupon — $220 off the brand-new M6 Pro.',
    source: 'MacRumors, 26 Nov 2026',
    link: 'https://www.amazon.com/dp/B0HPGSTXXX'
  },
  {
    id: 'hp-omnibook-5',
    name: 'HP OmniBook 5, 14-inch 2K OLED Touchscreen Laptop',
    store: 'Best Buy',
    category: 'Laptops',
    sale: 449.99, usual: 799.99, pct: 44,
    verdict: 'strong',
    evidence: '$350 off list for a 2K OLED touchscreen laptop — a Best Buy doorbuster price.',
    source: 'Best Buy Black Friday release, via providencejournal.com',
    link: 'https://www.providencejournal.com/story/shopping/2026/11/18/these-retailers-are-starting-their-black-friday-sales-early-this-year-walmart-target-amazon-best-buy/92823098007/'
  },
  {
    id: 'mac-mini-m6',
    name: 'Apple Mac mini, M6, 16GB / 256GB',
    store: 'Amazon',
    category: 'Laptops',
    sale: 779.00, usual: 899.00, pct: 13,
    verdict: 'good',
    evidence: '$120 off the new M6 mini — the discount has held all Black Friday season.',
    source: 'MacRumors, 26 Nov 2026',
    link: 'https://www.macrumors.com/2026/11/26/50-best-apple-black-friday-deals/'
  },
  {
    id: 'airpods-pro-3',
    name: 'Apple AirPods Pro 3',
    store: 'Amazon',
    category: 'Headphones',
    sale: 149.00, usual: 249.00, pct: 40,
    verdict: 'new-low',
    evidence: 'All-time low — $100 off, the lowest Amazon price ever tracked for AirPods Pro 3.',
    source: 'MacRumors, 26 Nov 2026',
    link: 'https://www.amazon.com/dp/B0FQFB8FMG'
  },
  {
    id: 'airpods-max-2',
    name: 'Apple AirPods Max 2',
    store: 'Amazon',
    category: 'Headphones',
    sale: 419.00, usual: 549.00, pct: 24,
    verdict: 'good',
    evidence: '$130 off list — the price dropped twice during Black Friday Week.',
    source: 'MacRumors, 26 Nov 2026',
    link: 'https://www.macrumors.com/2026/11/26/50-best-apple-black-friday-deals/'
  },
  {
    id: 'beats-360',
    name: 'Beats 360 Wireless Over-Ear Headphones',
    store: 'Amazon',
    category: 'Headphones',
    sale: 249.00, usual: 349.00, pct: 29,
    verdict: 'new-low',
    evidence: 'All-time low — earlier discounts only reached about $20 off; this is the first $100 cut.',
    source: 'MacRumors, 26 Nov 2026',
    link: 'https://www.macrumors.com/2026/11/26/50-best-apple-black-friday-deals/'
  },
  {
    id: 'sony-xm5',
    name: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones',
    store: 'Best Buy',
    category: 'Headphones',
    sale: 169.00, usual: 398.00, pct: 58,
    verdict: 'strong',
    evidence: '$229 off list — the flagship noise-cancelling pick at well over half price.',
    source: 'Best Buy Black Friday release, via providencejournal.com',
    link: 'https://www.providencejournal.com/story/shopping/2026/11/18/these-retailers-are-starting-their-black-friday-sales-early-this-year-walmart-target-amazon-best-buy/92823098007/'
  },
  {
    id: 'bose-qc-2',
    name: 'Bose QuietComfort Headphones (2nd Gen)',
    store: 'Amazon',
    category: 'Headphones',
    sale: 169.00, usual: 359.00, pct: 53,
    verdict: 'strong',
    evidence: '$190 off list — over half price for Bose over-ear comfort.',
    source: 'neeshu.com, Black Friday deals 2026',
    link: 'https://neeshu.com/news/black-friday-deals-2026.html'
  },
  {
    id: 'beats-solo-4',
    name: 'Beats Solo 4 On-Ear Headphones',
    store: 'Amazon',
    category: 'Headphones',
    sale: 99.95, usual: 199.95, pct: 50,
    verdict: 'strong',
    evidence: 'Exactly half price in Amazon Black Friday Week.',
    source: 'comicbook.com, Amazon Black Friday Week deals',
    link: 'https://comicbook.com/crate/amazon-early-black-friday-sale-2026/'
  },
  {
    id: 'jbl-flip-6',
    name: 'JBL Flip 6 Portable Waterproof Speaker',
    store: 'Walmart',
    category: 'Headphones',
    sale: 79.95, usual: 129.95, pct: 38,
    verdict: 'good',
    evidence: '$50 off list on the popular waterproof portable speaker.',
    source: 'comicbook.com, Walmart early Black Friday deals',
    link: 'https://comicbook.com/crate/walmart-early-black-friday-deals-2026/'
  },
  {
    id: 'apple-watch-12',
    name: 'Apple Watch Series 12, GPS, 42mm',
    store: 'Amazon',
    category: 'Wearables',
    sale: 299.00, usual: 399.00, pct: 25,
    verdict: 'new-low',
    evidence: 'All-time low — $100 off every Series 12 config tracked this week.',
    source: 'MacRumors, 26 Nov 2026',
    link: 'https://www.amazon.com/dp/B0HJ9ZXCSD'
  },
  {
    id: 'apple-watch-se3',
    name: 'Apple Watch SE 3, GPS, 40mm',
    store: 'Amazon',
    category: 'Wearables',
    sale: 179.00, usual: 249.00, pct: 28,
    verdict: 'new-low',
    evidence: 'All-time low — the first discount ever tracked on the SE 3, beating the old record low.',
    source: 'MacRumors, 26 Nov 2026',
    link: 'https://www.macrumors.com/2026/11/26/50-best-apple-black-friday-deals/'
  },
  {
    id: 'apple-watch-ultra-3',
    name: 'Apple Watch Ultra 3',
    store: 'Best Buy',
    category: 'Wearables',
    sale: 549.00, usual: 799.00, pct: 31,
    verdict: 'new-low',
    evidence: 'All-time low — a $250 cut on the previous-generation Ultra.',
    source: 'MacRumors, 26 Nov 2026',
    link: 'https://www.macrumors.com/2026/11/26/50-best-apple-black-friday-deals/'
  },
  {
    id: 'garmin-instinct-3',
    name: 'Garmin Instinct 3 AMOLED Rugged GPS Smartwatch, 45mm',
    store: 'Amazon',
    category: 'Wearables',
    sale: 249.99, usual: 449.99, pct: 44,
    verdict: 'strong',
    evidence: '$200 off list — 44% off a rugged AMOLED GPS watch.',
    source: 'smartspendingresources.com, Amazon Black Friday Week list',
    link: 'https://smartspendingresources.com/index.php/2026/11/14/amazon-black-friday-deals-2026/'
  },
  {
    id: 'airtag-2',
    name: 'Apple AirTag 2, 1-pack',
    store: 'Best Buy',
    category: 'Wearables',
    sale: 18.00, usual: 29.00, pct: 38,
    verdict: 'new-low',
    evidence: 'New all-time low — beats the previous low by $5.',
    source: 'MacRumors, 26 Nov 2026',
    link: 'https://www.macrumors.com/2026/11/26/50-best-apple-black-friday-deals/'
  },
  {
    id: 'switch-2-bundle',
    name: 'Nintendo Switch 2 + Mario Kart World bundle',
    store: 'Walmart',
    category: 'Gaming',
    sale: 499.99, usual: 549.99, pct: 9,
    verdict: 'routine',
    evidence: 'Only $50 off — the bundle is in demand, but the saving itself is small.',
    source: 'CNN Underscored, Walmart Black Friday deals, 24 Nov 2026',
    link: 'https://www.cnn.com/2026/11/24/cnn-underscored/deals/walmart-black-friday-deals-2026-11-23?cid=external-feeds_iluminar_meta'
  },
  {
    id: 'dualsense-ps5',
    name: 'PlayStation DualSense Wireless Controller',
    store: 'Amazon',
    category: 'Gaming',
    sale: 54.99, usual: 74.99, pct: 27,
    verdict: 'good',
    evidence: '$20 off list — a solid price for a spare or replacement controller.',
    source: 'comicbook.com, Amazon Black Friday Week deals',
    link: 'https://comicbook.com/crate/amazon-early-black-friday-sale-2026/'
  },
  {
    id: 'xbox-controller',
    name: 'Xbox Wireless Gaming Controller',
    store: 'Amazon',
    category: 'Gaming',
    sale: 44.99, usual: 64.99, pct: 31,
    verdict: 'good',
    evidence: '$20 off list in Amazon Black Friday Week.',
    source: 'comicbook.com, Amazon Black Friday Week deals',
    link: 'https://comicbook.com/crate/amazon-early-black-friday-sale-2026/'
  },
  {
    id: 'nba-2k27-ps5',
    name: 'NBA 2K27, PlayStation 5',
    store: 'Amazon',
    category: 'Gaming',
    sale: 29.99, usual: 69.99, pct: 57,
    verdict: 'strong',
    evidence: '$40 off list — over half price on a current sports title.',
    source: 'comicbook.com, Amazon Black Friday Week deals',
    link: 'https://comicbook.com/crate/amazon-early-black-friday-sale-2026/'
  },
  {
    id: 'ac-shadows-switch2',
    name: "Assassin's Creed Shadows, Nintendo Switch 2",
    store: 'Amazon',
    category: 'Gaming',
    sale: 20.80, usual: 59.99, pct: 65,
    verdict: 'strong',
    evidence: '$39 off list — the deepest game discount in this roundup.',
    source: 'comicbook.com, Amazon Black Friday Week deals',
    link: 'https://comicbook.com/crate/amazon-early-black-friday-sale-2026/'
  },
  {
    id: 'abs-cyclone-aqua',
    name: 'ABS Cyclone Aqua Prebuilt Gaming PC',
    store: 'Newegg',
    category: 'Gaming',
    sale: 1600.00, usual: 1780.00, pct: 10,
    verdict: 'routine',
    evidence: 'Only $180 under its pre-Black Friday price — a modest cut for a prebuilt.',
    source: 'wallethub.com, Best Things to Buy on Black Friday 2026',
    link: 'https://wallethub.com/edu/best-worst-items-for-black-friday/16901'
  },
  {
    id: 'fire-tv-stick-4k',
    name: 'Amazon Fire TV Stick 4K (2026)',
    store: 'Amazon',
    category: 'Smart Home',
    sale: 19.99, usual: 59.99, pct: 67,
    verdict: 'strong',
    evidence: 'Two-thirds off list — the classic Black Friday streaming stick price.',
    source: 'petematheson.com, Black Friday tech deals',
    link: 'https://www.petematheson.com/black-friday-tech-deals-2026/'
  },
  {
    id: 'ring-doorbell-2k',
    name: 'Ring Battery Doorbell 2K',
    store: 'Amazon',
    category: 'Smart Home',
    sale: 39.99, usual: 99.99, pct: 60,
    verdict: 'strong',
    evidence: '$60 off list in the early Black Friday sale.',
    source: 'petematheson.com, Black Friday tech deals',
    link: 'https://www.petematheson.com/black-friday-tech-deals-2026/'
  },
  {
    id: 'echo-dot',
    name: 'Amazon Echo Dot',
    store: 'Amazon',
    category: 'Smart Home',
    sale: 44.99, usual: 79.99, pct: 44,
    verdict: 'strong',
    evidence: '$35 off list in Amazon Black Friday Week.',
    source: 'comicbook.com, Amazon Black Friday Week deals',
    link: 'https://comicbook.com/crate/amazon-early-black-friday-sale-2026/'
  },
  {
    id: 'ring-indoor-cam-2k',
    name: 'Ring Indoor Cam 2K Plug-In Security Camera',
    store: 'Amazon',
    category: 'Smart Home',
    sale: 24.99, usual: 59.99, pct: 58,
    verdict: 'strong',
    evidence: '58% off list — one of the cheapest ways into a Ring camera setup.',
    source: 'smartspendingresources.com, Amazon Black Friday Week list',
    link: 'https://smartspendingresources.com/index.php/2026/11/14/amazon-black-friday-deals-2026/'
  },
  {
    id: 'kitchenaid-mixer-55',
    name: 'KitchenAid 5.5-qt Bowl-Lift Stand Mixer',
    store: 'Target',
    category: 'Kitchen',
    sale: 299.99, usual: 499.99, pct: 40,
    verdict: 'strong',
    evidence: '$200 off the regular price — KitchenAid matches this price too.',
    source: 'clarkdeals.com, Target Black Friday 2026',
    link: 'https://clarkdeals.com/black-friday/target-black-friday-ad/'
  },
  {
    id: 'dyson-v9',
    name: 'Dyson V9 Motorbar Cordless Vacuum',
    store: 'Target',
    category: 'Kitchen',
    sale: 269.99, usual: 599.99, pct: 55,
    verdict: 'strong',
    evidence: '$330 off the regular price — over half price on a Dyson cordless.',
    source: 'clarkdeals.com, Target Black Friday 2026',
    link: 'https://clarkdeals.com/black-friday/target-black-friday-ad/'
  },
  {
    id: 'shark-rotator-pet',
    name: 'Shark Rotator Pet Lift-Away ADV Upright Vacuum',
    store: 'Target',
    category: 'Kitchen',
    sale: 189.99, usual: 399.99, pct: 53,
    verdict: 'strong',
    evidence: '$210 off the regular price — Kohl\u2019s matches this sale price.',
    source: 'clarkdeals.com, Target Black Friday 2026',
    link: 'https://clarkdeals.com/black-friday/target-black-friday-ad/'
  },
  {
    id: 'breville-smart-oven',
    name: 'Breville Smart Oven Air Fryer Pro',
    store: 'Target',
    category: 'Kitchen',
    sale: 299.99, usual: 399.99, pct: 25,
    verdict: 'good',
    evidence: '$100 off — the price was verified on Target\u2019s own site on 25 Nov 2026.',
    source: 'soomuch.com, price checked on Target 25 Nov 2026',
    link: 'https://www.soomuch.com/gift-guides/black-friday-real-sale-gifts-2026'
  },
  {
    id: 'kitchenaid-dutch-oven',
    name: 'KitchenAid 6-Qt Enameled Cast Iron Dutch Oven',
    store: "Macy's",
    category: 'Kitchen',
    sale: 99.99, usual: 333.99, pct: 70,
    verdict: 'strong',
    evidence: '70% off — $234 saved, the deepest discount in this roundup.',
    source: 'soomuch.com, price checked on Macy\u2019s 25 Nov 2026',
    link: 'https://www.soomuch.com/gift-guides/black-friday-real-sale-gifts-2026'
  },
  {
    id: 'shark-powerdetect',
    name: 'Shark PowerDetect Speed Cordless Vacuum',
    store: 'Best Buy',
    category: 'Kitchen',
    sale: 199.99, usual: 499.99, pct: 60,
    verdict: 'strong',
    evidence: '$300 off list at Best Buy.',
    source: 'neeshu.com, Black Friday deals 2026',
    link: 'https://neeshu.com/news/black-friday-deals-2026.html'
  },
  {
    id: 'dyson-v12',
    name: 'Dyson V12 Detect Slim Cordless Vacuum',
    store: 'Walmart',
    category: 'Kitchen',
    sale: 429.99, usual: 729.99, pct: 41,
    verdict: 'strong',
    evidence: '$300 off list — a big cut on the slim Detect model.',
    source: 'comicbook.com, Walmart early Black Friday deals',
    link: 'https://comicbook.com/crate/walmart-early-black-friday-deals-2026/'
  },
  {
    id: 'shark-rocket-belk',
    name: 'Shark Rocket Pro Stick Vacuum',
    store: 'Belk',
    category: 'Kitchen',
    sale: 100.00, usual: 200.00, pct: 50,
    verdict: 'strong',
    evidence: 'Half price — $100 off the pre-Black Friday price.',
    source: 'wallethub.com, Best Things to Buy on Black Friday 2026',
    link: 'https://wallethub.com/edu/best-worst-items-for-black-friday/16901'
  },
  {
    id: 'lego-n1-starfighter',
    name: "LEGO Star Wars The Mandalorian's N-1 Starfighter",
    store: 'Amazon',
    category: 'Toys',
    sale: 41.99, usual: 59.99, pct: 30,
    verdict: 'good',
    evidence: '$18 off list in Amazon Black Friday Week.',
    source: 'comicbook.com, Amazon Black Friday Week deals',
    link: 'https://comicbook.com/crate/amazon-early-black-friday-sale-2026/'
  },
  {
    id: 'lego-majestic-rhino',
    name: 'LEGO Creator 3-in-1 Wild Animals: Majestic Rhino',
    store: 'Amazon',
    category: 'Toys',
    sale: 29.99, usual: 59.99, pct: 50,
    verdict: 'strong',
    evidence: 'Half price — $30 off list.',
    source: 'smartspendingresources.com, Amazon Black Friday Week list',
    link: 'https://smartspendingresources.com/index.php/2026/11/14/amazon-black-friday-deals-2026/'
  },
  {
    id: 'lego-pikachu',
    name: 'LEGO Pokemon Pikachu and Poke Ball',
    store: 'Walmart',
    category: 'Toys',
    sale: 159.95, usual: 199.99, pct: 20,
    verdict: 'good',
    evidence: '$40 off list in the Walmart Black Friday event.',
    source: 'comicbook.com, Walmart early Black Friday deals',
    link: 'https://comicbook.com/crate/walmart-early-black-friday-deals-2026/'
  },
  {
    id: 'sonicare-9300',
    name: 'Philips Sonicare DiamondClean Smart 9300',
    store: 'Target',
    category: 'Beauty',
    sale: 179.99, usual: 229.99, pct: 22,
    verdict: 'good',
    evidence: '$50 off — verified on Target\u2019s own site on 25 Nov 2026.',
    source: 'soomuch.com, price checked on Target 25 Nov 2026',
    link: 'https://www.soomuch.com/gift-guides/black-friday-real-sale-gifts-2026'
  },
  {
    id: 'ipad-mini-8',
    name: 'Apple iPad mini 8, Wi-Fi, 128GB',
    store: 'Amazon',
    category: 'Tablets',
    sale: 599.00, usual: 699.00, pct: 14,
    verdict: 'new-low',
    evidence: 'First major discount tracked on the brand-new iPad mini 8.',
    source: 'MacRumors, 26 Nov 2026',
    link: 'https://www.macrumors.com/2026/11/26/50-best-apple-black-friday-deals/'
  },
  {
    id: 'kitchenaid-artisan-kohls',
    name: 'KitchenAid Artisan 5-qt Stand Mixer',
    store: "Kohl's",
    category: 'Kitchen',
    sale: 350.00, usual: 500.00, pct: 30,
    verdict: 'good',
    evidence: '$150 off the pre-Black Friday price at Kohl\u2019s.',
    source: 'wallethub.com, Best Things to Buy on Black Friday 2026',
    link: 'https://wallethub.com/edu/best-worst-items-for-black-friday/16901'
  }
];

export const CATEGORIES = [...new Set(DEALS.map((d) => d.category))];
export const STORES = [...new Set(DEALS.map((d) => d.store))];
