import type { Command } from "./Command";

export interface Fnct {
  "@_id": number;
  "@_destSeg": number;
  "@_destType": "module" | "group";
  "@_destId": number;
  "@_comment"?: string;
  Command: Command[];
}

export * from "./Command";
