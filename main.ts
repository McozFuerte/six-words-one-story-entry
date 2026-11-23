import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "The parrot repeats her dying words.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(ENTRY);
