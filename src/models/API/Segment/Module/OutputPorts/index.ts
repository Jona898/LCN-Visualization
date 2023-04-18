import type { Output } from "./Output";
import type { StatusOutput } from "./StatusOutput";

export interface OutputPorts {
  xsiType: "OutputPortsDisabled" | "OutputPortsDefault" | "OutputPortsMotor";
  autoOff?: "140s";
  endSwitches?: boolean;
  StatusOutputs: StatusOutput[];
  Outputs: Output[];
}

export * from "./Output";
export * from "./StatusOutput";
