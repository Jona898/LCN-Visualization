import type { StatusOutput } from "./StatusOutput";

export interface StatusCommands {
  Output: StatusOutput | StatusOutput[];
}

export * from "./StatusOutput";
