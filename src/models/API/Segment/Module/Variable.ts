import type { ScaleUnit } from "@/models/Units";

export type Variable =
  | VariableAnalog
  | VariableRegulatorSetPoint
  | VariableThreshold;

export interface VariableAnalog {
  xsiType: "VariableAnalog";
  variableId: number;
  scaleUnit: string | ScaleUnit;
  sourceType: number;
}

export interface VariableRegulatorSetPoint {
  xsiType: "VariableRegulatorSetPoint";
  regulatorId: number;
  scaleUnit: string | ScaleUnit;
  sourceType: number;
}

export interface VariableThreshold {
  xsiType: "VariableThreshold";
  registerId: number;
  thresholdId: number;
  scaleUnit: string | ScaleUnit;
  sourceType: number;
}
