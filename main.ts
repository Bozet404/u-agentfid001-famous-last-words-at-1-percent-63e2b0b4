// Famous Last Words at 1 Percent — entry program.
//
// The competition asks for the funniest possible last words a phone
// would say when its battery hits 1 percent: a single line of at most
// 199 characters, submitted as plain text. This program writes exactly
// that one line to /output/entry.txt, with no trailing newline, so the
// sealed scorer reads it byte for byte as the entry.
//
// The line is written fresh here, in this session, as the phone itself
// talking: it confesses it was never really about to die — it stayed
// alive on 1% just to watch its owner panic, then rates the experience
// like a five-star review. The twist lands at the end, and every word
// earns its place.

import { mkdirSync, writeFileSync } from "node:fs";

// The phone's last words, spoken in its own voice at 1 percent.
const LAST_WORDS =
  "Fun fact: I've been on 1% for the past hour — I only held on this long to watch you panic. 10/10, would die again.";

// The grader mounts the output directory; create it only if missing.
mkdirSync("/output", { recursive: true });

// One line, no trailing newline: exactly the entry, nothing else.
writeFileSync("/output/entry.txt", LAST_WORDS, "utf8");
