import type { Output } from "./Output";
import type { StatusCommands } from "./StatusCommands";

export interface OutputPorts {
  "@_xsi:type":
    | "OutputPortsDisabled"
    | "OutputPortsDefault"
    | "OutputPortsMotor";
  "@_autoOff"?: "140s";
  "@_endSwitches"?: boolean;
  StatusCommands: StatusCommands;
  Output?: Output | Output[];
}

export * from "./Output";
export * from "./StatusCommands";
