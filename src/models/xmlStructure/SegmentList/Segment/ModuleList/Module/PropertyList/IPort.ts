export type IPort = IPortNoSensor | IPortImpulseCounter | IPortIRRemoteControl;

export interface IPortNoSensor {
  "@_xsi:type": "IPortNoSensor";
}

export interface IPortImpulseCounter {
  "@_xsi:type": "IPortImpulseCounter";
  ImpulseCount: number;
}

export interface IPortIRRemoteControl {
  "@_xsi:type": "IPortIRRemoteControl";
  LargeRemoteControls: boolean;
  UseAccessCodes: boolean;
  DestTables: "B/C";
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const iPorts: IPort[] = [
  { "@_xsi:type": "IPortImpulseCounter", ImpulseCount: 1 },
  {
    "@_xsi:type": "IPortIRRemoteControl",
    LargeRemoteControls: true,
    UseAccessCodes: false,
    DestTables: "B/C",
  },
  { "@_xsi:type": "IPortNoSensor" },
  { "@_xsi:type": "IPortNoSensor" },
  { "@_xsi:type": "IPortNoSensor" },
  { "@_xsi:type": "IPortNoSensor" },
  { "@_xsi:type": "IPortNoSensor" },
];
