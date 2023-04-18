import type { Fnct } from "./Fnct";

export interface Key {
  "@_id": number;
  "@_comment"?: string;
  Fnct: Fnct | Fnct[];
}

export * from "./Fnct";
