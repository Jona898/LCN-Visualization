import type { Command } from "./Command";

export interface Fnct {
  id: number;
  destSeg: number;
  destType: "module" | "group";
  destId: number;
  comment?: string;
  Command: Command[];
}

export * from "./Command";
export * from "./CommandTypes";
