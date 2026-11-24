// V1 — sudut: membangunkan bayi (andalan, rekomendasi penasihat tafsir).
// Baris 1: minta maaf atas SATU kesalahan spesifik. Baris 2: pelajaran yang
// mengikuti kesalahan itu persis (cek monitor + mode senyap sebelum bicara).
import { writeFileSync, mkdirSync } from "node:fs";

const lines = [
  "I'm sorry I read the weather forecast aloud at full volume and woke the baby you'd just spent two hours getting to sleep.",
  "I've learned to check the nursery monitor and stay on silent mode before I speak.",
];

const out = process.env.OUTPUT_PATH || "/output/entry.txt";
mkdirSync(out.slice(0, out.lastIndexOf("/")) || ".", { recursive: true });
writeFileSync(out, lines.join("\n") + "\n", "utf8");
