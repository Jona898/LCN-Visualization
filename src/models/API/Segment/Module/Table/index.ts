import type { Key } from "./Key";

export interface KeyTable {
  id: "A" | "B" | "C" | "D";
  Keys: Key[];
}

export * from "./Key";
