import type { ModuleTypes } from "@/models/Units/ModuleTypes";

import type { ModuleBeepOn } from "./BeepOn";
import type { BinarySensorComment } from "./BinarySensorComment";
import type { IPort } from "./IPort";
import type { OutputPorts } from "./OutputPorts";
import type { Periphery } from "./Periphery";
import type { PPort } from "./PPort";
import type { RelayComment } from "./RelayComment";
import type { ModuleStatusMessages } from "./StatusMessages";
import type { KeyTable } from "./Table";
import type { TPort } from "./TPort";
import type { Variable } from "./Variable";

export interface Module {
  moduleId: number;
  xsiType: ModuleTypes | string;
  firmwareDate: string;
  serialNo: string;
  foundInBus: boolean;
  Name: string;
  Comment: string;

  Peripherys: Periphery[];

  Variables_numSupportedAnalogVariables: number;
  Variables_numSupportedThresholdRegisters: number;
  Variables: Variable[];

  BeepOn: ModuleBeepOn;
  StatusMessages: ModuleStatusMessages;
  SendInternalCommandsToBus: boolean;
  PowerFailureCausesKeyD8: boolean;
  PermitKeyLockTableA: boolean;
  TransponderEnabled: boolean;
  OutputPorts: OutputPorts;
  TPort: TPort;
  IPort: IPort;
  PPort: PPort;
  KeyTables: KeyTable[];

  RelayComments: RelayComment[];
  BinarySensorComments: BinarySensorComment[];
}

export * from "./BeepOn";
export * from "./BinarySensorComment";
export * from "./IPort";
export * from "./OutputPorts";
export * from "./Periphery";
export * from "./PPort";
export * from "./RelayComment";
export * from "./StatusMessages";
export * from "./TPort";
export * from "./Variable";
export * from "./Table";
