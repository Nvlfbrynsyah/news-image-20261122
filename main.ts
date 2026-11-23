import { copyFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
const out = process.env.MAKEFUN_OUTPUT_DIR || "/output";

await mkdir(out, { recursive: true });
await copyFile(src, join(out, "entry.png"));
console.log(`copied entry.png -> ${out}`);
