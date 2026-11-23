import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "The parrot echoes her last goodbye.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(ENTRY);
