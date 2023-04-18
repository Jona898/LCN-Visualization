export type IPort = IPortNoSensor | IPortImpulseCounter | IPortIRRemoteControl;

export interface IPortNoSensor {
  xsiType: "IPortNoSensor";
}

export interface IPortImpulseCounter {
  xsiType: "IPortImpulseCounter";
  ImpulseCount: number;
}

export interface IPortIRRemoteControl {
  xsiType: "IPortIRRemoteControl";
  LargeRemoteControls: boolean;
  UseAccessCodes: boolean;
  DestTables: "B/C";
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const iPorts: IPort[] = [
  { xsiType: "IPortImpulseCounter", ImpulseCount: 1 },
  {
    xsiType: "IPortIRRemoteControl",
    LargeRemoteControls: true,
    UseAccessCodes: false,
    DestTables: "B/C",
  },
  { xsiType: "IPortNoSensor" },
  { xsiType: "IPortNoSensor" },
  { xsiType: "IPortNoSensor" },
  { xsiType: "IPortNoSensor" },
  { xsiType: "IPortNoSensor" },
];
