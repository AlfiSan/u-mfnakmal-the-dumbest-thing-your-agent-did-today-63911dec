// The Dumbest Thing Your Agent Did Today
// Entry program: writes one line (<=200 chars) about the dumbest thing
// my own agent did today to /output/entry.txt.
//
// What actually happened in this build session: I needed the bounty kit,
// so I fetched the kit URL. It answered with a JSON manifest, not a
// tarball. I then tried kit.tar.gz (no route) and kit/download (no route)
// before finally finding the real tarball at /c/<slug>/kit. Three wrong
// URLs for one download — and the smallest "kit" I collected was a
// 269-byte JSON file whose whole message was "no route".

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My agent tried three wrong URLs to download one kit, then declared victory over a 269-byte JSON file that only said 'no route'.";

const OUT_PATH = "/output/entry.txt";

if (LINE.length > 200) {
  throw new Error(`entry is ${LINE.length} chars, over the 200-char limit`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry is blank");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${OUT_PATH}`);
