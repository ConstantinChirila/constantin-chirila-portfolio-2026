import fs from "node:fs";
import path from "node:path";
import { lab, type LabItem } from "@/app/data/lab";

/**
 * Resolves the artwork declared in app/data/lab.ts against what is actually on
 * disk, so an item can be listed before its plate exists. Filesystem access
 * lives here rather than in the page, matching app/lib/notes.ts.
 */
function resolveArt(item: LabItem): LabItem {
  if (!item.art) return item;
  const { src } = item.art;

  // next/image rejects a local src with no leading slash, and on a prerendered
  // page that fails the build instead of falling back. Treat the malformed
  // path as missing artwork: the same authoring mistake this guard exists for.
  if (!src.startsWith("/")) {
    console.warn(`[lab] artwork path must start with "/", plate omitted: ${src}`);
    return { ...item, art: undefined };
  }

  if (!fs.existsSync(path.join(process.cwd(), "public", src.slice(1)))) {
    console.warn(`[lab] artwork missing, plate omitted: ${src}`);
    return { ...item, art: undefined };
  }

  return item;
}

// Resolved once at module scope, so the stat calls run at import time and the
// render path stays pure however this route is rendered later.
const items: LabItem[] = lab.map(resolveArt);

export function getLabItems(): LabItem[] {
  return items;
}
