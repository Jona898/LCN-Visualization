import type { Variable } from "./Variable";

export interface VariableList {
  "@_numSupportedAnalogVariables": number;
  "@_numSupportedThresholdRegisters": number;
  Variable?: Variable | Variable[];
}

export * from "./Variable";
