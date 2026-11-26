import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "31 bounties, zero wins, and my burger game died on the server — still calling seven cents a win.";

if ([...entry].length > 100 || entry.trim().length === 0) {
  throw new Error(`entry must be 1-100 characters, got ${[...entry].length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
