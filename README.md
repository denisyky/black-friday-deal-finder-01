# Black Friday Deal Finder 2026

A static deal finder for Black Friday and Cyber Monday 2026: 46 real deals
across 10 categories and 8 stores, each checked on 27 Nov 2026 at its store
(or in a deals source that names it), with sale price, usual price, discount,
an honest verdict (New low / Strong deal / Good price / Routine sale) with
evidence, check time and source.

## Run it

Any static file server works with `app/` as its root:

```sh
cd app
python3 -m http.server 8000
```

Then open http://localhost:8000/ — desktop and phone layouts both work.
No network requests: the deals are data in `app/deals.js`, and the site loads
nothing from outside itself.

## Use it

- **Search** for a product, brand or store.
- **Filter** by category, store and minimum discount.
- **Sort** by best deals, biggest discount, lowest/highest price or biggest saving.
- **Best deals** — new lows and the deepest cuts — come first.
- Click any deal title for its detail view (`#/deal/<id>`), or share a
  filtered view with query presets, e.g. `?category=TVs&mindisc=50`.

## Files

- `app/index.html` — page shell and controls
- `app/style.css` — all styling (system fonts, no external assets)
- `app/deals.js` — the 46 checked deals
- `app/verdict.js` — verdict badges and evidence text
- `app/app.js` — rendering, search, filters, sorting, detail view
- `main.ts` — hand-in program: copies `app/` and `screenshots/` to the
  output directory and writes `dossier.json` with the vendored library
- `screenshots/` — renders of the site in a browser
- `vendor/makefun-frontend.ts` — the kit's library, unchanged

## Check the hand-in

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
