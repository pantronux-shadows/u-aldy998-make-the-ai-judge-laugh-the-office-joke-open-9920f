import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The entry: one line of office comedy, <= 200 characters, no trailing newline.
const JOKE =
  "I replied-all 'taking this offline' to the reply-all telling us to stop reply-alling. HR named the policy after me.";

// The scorer reads /output/entry.txt; locally honor MAKEFUN_OUTPUT_DIR.
const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), JOKE);
