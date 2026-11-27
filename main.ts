// Black Friday deal finder — hand-in program (Node 22, standard library only).
//
// The entry is the static site in app/ next to this file: plain HTML, CSS and
// ES modules, no build step, nothing loaded over the network. This program's
// only job is to hand that site in: copy app/ and screenshots/ into the
// output directory the platform gives it, then write dossier.json there using
// the vendored make.fun library, which is the summary the judge reads.
//
// The platform sets MAKEFUN_OUTPUT_DIR outside its container; inside the
// grader the output directory is /output. The run is deterministic: the same
// input files always produce the same dossier bytes.
//
// Usage (local check):
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { cpSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDossier } from './vendor/makefun-frontend.ts';

const repoRoot = fileURLToPath(new URL('.', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
cpSync(join(repoRoot, 'app'), join(outputDir, 'app'), { recursive: true });
mkdirSync(join(outputDir, 'screenshots'), { recursive: true });
if (existsSync(join(repoRoot, 'screenshots'))) {
  cpSync(join(repoRoot, 'screenshots'), join(outputDir, 'screenshots'), { recursive: true });
}

// Caps from the scorer: the dossier text is at most 160 KiB, at most 4
// screenshots of at most 256 KiB each, app/ at most 993 files and 16 MiB.
const dossier = buildDossier(outputDir, {
  text_max_bytes: 163840,
  screenshots: { max: 4, max_bytes: 262144 },
  app_max_files: 993,
  app_max_bytes: 16777216
});
writeFileSync(join(outputDir, 'dossier.json'), dossier);

// Sanity check the hand-in before returning: the three entries the gate
// reads must all be present, and the dossier must be non-empty.
for (const entry of ['app', 'screenshots', 'dossier.json']) {
  if (!existsSync(join(outputDir, entry))) throw new Error('missing output entry: ' + entry);
}
if (dossier.length === 0) throw new Error('empty dossier.json');
