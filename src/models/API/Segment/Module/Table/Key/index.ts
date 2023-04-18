import type { Fnct } from "./Fnct";

export interface Key {
  id: number;
  comment?: string;
  Fnct: Fnct[];
}

export * from "./Fnct";
