import type { Key } from "./Key";

export interface Table {
  "@_id": "A" | "B" | "C" | "D";
  Key?: Key | Key[];
}

export * from "./Key";
