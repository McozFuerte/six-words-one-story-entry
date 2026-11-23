import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "Parrot still echoes her last goodbye.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(ENTRY);
