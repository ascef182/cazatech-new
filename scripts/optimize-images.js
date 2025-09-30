/* eslint-disable @typescript-eslint/no-var-requires */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const IMAGE_DIR = path.resolve(process.cwd(), "public/images");

async function optimizeDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await optimizeDir(full);
      continue;
    }
    if (!/\.(jpe?g|png)$/i.test(entry.name)) continue;
    const out = full.replace(/\.(jpe?g|png)$/i, ".webp");
    if (fs.existsSync(out)) continue;
    await sharp(full).webp({ quality: 80 }).toFile(out);
    // Optional AVIF
    const outAvif = full.replace(/\.(jpe?g|png)$/i, ".avif");
    await sharp(full).avif({ quality: 60 }).toFile(outAvif);
    console.log("Optimized:", path.relative(process.cwd(), full));
  }
}

(async () => {
  if (!fs.existsSync(IMAGE_DIR)) {
    console.error("Directory not found:", IMAGE_DIR);
    process.exit(1);
  }
  await optimizeDir(IMAGE_DIR);
})();


