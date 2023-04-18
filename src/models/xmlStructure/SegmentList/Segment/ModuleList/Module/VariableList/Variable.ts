import type { ScaleUnit } from "@/models/Units";

export type Variable =
  | VariableAnalog
  | VariableRegulatorSetPoint
  | VariableThreshold;

export interface VariableAnalog {
  "@_xsi:type": "VariableAnalog";
  "@_variableId": number;
  "@_scaleUnit": string | ScaleUnit;
  "@_sourceType": number;
}

export interface VariableRegulatorSetPoint {
  "@_xsi:type": "VariableRegulatorSetPoint";
  "@_regulatorId": number;
  "@_scaleUnit": string | ScaleUnit;
  "@_sourceType": number;
}

export interface VariableThreshold {
  "@_xsi:type": "VariableThreshold";
  "@_registerId": number;
  "@_thresholdId": number;
  "@_scaleUnit": string | ScaleUnit;
  "@_sourceType": number;
}
