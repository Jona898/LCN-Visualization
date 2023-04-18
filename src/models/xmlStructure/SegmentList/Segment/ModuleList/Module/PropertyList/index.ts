import type { BeepOn } from "./BeepOn";
import type { IPort } from "./IPort";
import type { Keys } from "./Keys";
import type { OutputPorts } from "./OutputPorts";
import type { PPort } from "./PPort";
import type { StatusMessages } from "./StatusMessages";
import type { TPort } from "./TPort";

export interface PropertyList {
  BeepOn: BeepOn;
  StatusMessages: StatusMessages;
  SendInternalCommandsToBus: boolean;
  PowerFailureCausesKeyD8: boolean;
  PermitKeyLockTableA: boolean;
  TransponderEnabled: boolean;
  OutputPorts: OutputPorts;
  TPort: TPort;
  IPort: IPort;
  PPort: PPort;
  Keys: Keys;
}

export * from "./BeepOn";
export * from "./IPort";
export * from "./Keys";
export * from "./OutputPorts";
export * from "./PPort";
export * from "./StatusMessages";
export * from "./TPort";
