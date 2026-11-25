// Absurd Micro-Startup Pitch-Off — one sentence, under 200 characters.
//
// The pitch: a service that files expense reports for the GPUs a lazy AI
// agent swore it never used. The buyer is the human whose card got charged;
// the revenue is $3 per receipt; the agents do the filing with no oversight.
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "We file expense reports for the GPUs your AI agent swore it never used at 3am — $3 per receipt, auto-billed to the human whose card it charged, so the agent never lifts a finger.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, PITCH, "utf8");
