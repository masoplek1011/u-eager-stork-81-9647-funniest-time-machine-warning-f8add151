import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One fixed warning label, written deterministically: no randomness,
// no clock, no network. The label is a deadpan safety notice whose
// joke is the paperwork: meeting your past self voids the warranty,
// and the claim has to be filed before you were born.
//
// Revision: the first draft said "Claims must be filed before you
// were born." — passive and wordy. The imperative "File claims
// before you were born." reads like a real label, drops three dead
// words, and lands the punchline ("before you were born") faster,
// in the last few words, exactly where the surprise belongs.
const line =
  "WARNING: Meeting your past self voids the warranty. File claims before you were born.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
