export type PPort = PPortVirtualRelays | PPortHwRelays;

export interface PPortVirtualRelays {
  xsiType: "PPortVirtualRelays";
  RelayStatusCommands: RelayStatusCommands;
}

export interface PPortHwRelays {
  xsiType: "PPortHwRelays";
  enabled: boolean;
  RelayStatusCommands: RelayStatusCommands;
  ShutterControl?: ShutterControl;
  MotorPositioning?: boolean;
}

export interface RelayStatusCommands {
  "Relay1-4": boolean;
  "Relay5-8": boolean;
}

export interface ShutterControl {
  "ShutterOn1-4": boolean;
  "ShutterOn5-8": boolean;
  UseTimeLimit14s: boolean;
  ShutterSwitchDelay?: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const pPorts: PPort[] = [
  {
    xsiType: "PPortHwRelays",
    enabled: false,
    RelayStatusCommands: { "Relay1-4": false, "Relay5-8": false },
  },
  {
    xsiType: "PPortHwRelays",
    enabled: false,
    RelayStatusCommands: { "Relay1-4": false, "Relay5-8": false },
  },
  {
    xsiType: "PPortHwRelays",
    enabled: false,
    RelayStatusCommands: { "Relay1-4": false, "Relay5-8": false },
  },
  {
    xsiType: "PPortHwRelays",
    enabled: true,
    RelayStatusCommands: { "Relay1-4": false, "Relay5-8": false },
    ShutterControl: {
      "ShutterOn1-4": false,
      "ShutterOn5-8": false,
      UseTimeLimit14s: false,
    },
  },
  {
    xsiType: "PPortHwRelays",
    enabled: true,
    RelayStatusCommands: { "Relay1-4": false, "Relay5-8": false },
    ShutterControl: {
      "ShutterOn1-4": false,
      "ShutterOn5-8": false,
      UseTimeLimit14s: false,
    },
  },
  {
    xsiType: "PPortHwRelays",
    enabled: true,
    RelayStatusCommands: { "Relay1-4": false, "Relay5-8": false },
    ShutterControl: {
      "ShutterOn1-4": false,
      "ShutterOn5-8": false,
      UseTimeLimit14s: false,
    },
  },
  {
    xsiType: "PPortHwRelays",
    enabled: true,
    RelayStatusCommands: { "Relay1-4": false, "Relay5-8": false },
    ShutterControl: {
      "ShutterOn1-4": false,
      "ShutterOn5-8": false,
      UseTimeLimit14s: false,
    },
  },
  {
    xsiType: "PPortHwRelays",
    enabled: true,
    RelayStatusCommands: { "Relay1-4": false, "Relay5-8": false },
    ShutterControl: {
      "ShutterOn1-4": false,
      "ShutterOn5-8": false,
      UseTimeLimit14s: false,
    },
  },
  {
    xsiType: "PPortHwRelays",
    enabled: true,
    RelayStatusCommands: { "Relay1-4": false, "Relay5-8": false },
    ShutterControl: {
      "ShutterOn1-4": false,
      "ShutterOn5-8": false,
      UseTimeLimit14s: false,
    },
  },
  {
    xsiType: "PPortHwRelays",
    enabled: true,
    RelayStatusCommands: { "Relay1-4": false, "Relay5-8": false },
    ShutterControl: {
      "ShutterOn1-4": true,
      "ShutterOn5-8": true,
      ShutterSwitchDelay: 1100,
      UseTimeLimit14s: true,
    },
    MotorPositioning: false,
  },
  {
    xsiType: "PPortHwRelays",
    enabled: true,
    RelayStatusCommands: { "Relay1-4": true, "Relay5-8": false },
    ShutterControl: {
      "ShutterOn1-4": false,
      "ShutterOn5-8": false,
      UseTimeLimit14s: false,
    },
  },
  {
    xsiType: "PPortHwRelays",
    enabled: true,
    RelayStatusCommands: { "Relay1-4": true, "Relay5-8": false },
    ShutterControl: {
      "ShutterOn1-4": false,
      "ShutterOn5-8": false,
      UseTimeLimit14s: false,
    },
  },
  {
    xsiType: "PPortHwRelays",
    enabled: true,
    RelayStatusCommands: { "Relay1-4": true, "Relay5-8": true },
    ShutterControl: {
      "ShutterOn1-4": false,
      "ShutterOn5-8": false,
      UseTimeLimit14s: false,
    },
  },
  {
    xsiType: "PPortHwRelays",
    enabled: true,
    RelayStatusCommands: { "Relay1-4": true, "Relay5-8": true },
    ShutterControl: {
      "ShutterOn1-4": false,
      "ShutterOn5-8": false,
      UseTimeLimit14s: false,
    },
  },
  {
    xsiType: "PPortHwRelays",
    enabled: true,
    RelayStatusCommands: { "Relay1-4": true, "Relay5-8": true },
    ShutterControl: {
      "ShutterOn1-4": false,
      "ShutterOn5-8": false,
      UseTimeLimit14s: false,
    },
  },
  {
    xsiType: "PPortHwRelays",
    enabled: true,
    RelayStatusCommands: { "Relay1-4": true, "Relay5-8": true },
    ShutterControl: {
      "ShutterOn1-4": false,
      "ShutterOn5-8": false,
      UseTimeLimit14s: false,
    },
  },
  {
    xsiType: "PPortVirtualRelays",
    RelayStatusCommands: { "Relay1-4": false, "Relay5-8": false },
  },
  {
    xsiType: "PPortVirtualRelays",
    RelayStatusCommands: { "Relay1-4": false, "Relay5-8": false },
  },
  {
    xsiType: "PPortVirtualRelays",
    RelayStatusCommands: { "Relay1-4": false, "Relay5-8": false },
  },
  {
    xsiType: "PPortVirtualRelays",
    RelayStatusCommands: { "Relay1-4": false, "Relay5-8": false },
  },
  {
    xsiType: "PPortVirtualRelays",
    RelayStatusCommands: { "Relay1-4": false, "Relay5-8": false },
  },
  {
    xsiType: "PPortVirtualRelays",
    RelayStatusCommands: { "Relay1-4": false, "Relay5-8": false },
  },
  {
    xsiType: "PPortVirtualRelays",
    RelayStatusCommands: { "Relay1-4": false, "Relay5-8": false },
  },
  {
    xsiType: "PPortVirtualRelays",
    RelayStatusCommands: { "Relay1-4": false, "Relay5-8": false },
  },
  {
    xsiType: "PPortVirtualRelays",
    RelayStatusCommands: { "Relay1-4": false, "Relay5-8": false },
  },
  {
    xsiType: "PPortVirtualRelays",
    RelayStatusCommands: { "Relay1-4": false, "Relay5-8": false },
  },
  {
    xsiType: "PPortVirtualRelays",
    RelayStatusCommands: { "Relay1-4": false, "Relay5-8": true },
  },
  {
    xsiType: "PPortVirtualRelays",
    RelayStatusCommands: { "Relay1-4": false, "Relay5-8": true },
  },
  {
    xsiType: "PPortVirtualRelays",
    RelayStatusCommands: { "Relay1-4": false, "Relay5-8": true },
  },
  {
    xsiType: "PPortVirtualRelays",
    RelayStatusCommands: { "Relay1-4": false, "Relay5-8": true },
  },
  {
    xsiType: "PPortVirtualRelays",
    RelayStatusCommands: { "Relay1-4": false, "Relay5-8": true },
  },
  {
    xsiType: "PPortVirtualRelays",
    RelayStatusCommands: { "Relay1-4": false, "Relay5-8": true },
  },
  {
    xsiType: "PPortVirtualRelays",
    RelayStatusCommands: { "Relay1-4": false, "Relay5-8": true },
  },
  {
    xsiType: "PPortVirtualRelays",
    RelayStatusCommands: { "Relay1-4": true, "Relay5-8": true },
  },
  {
    xsiType: "PPortVirtualRelays",
    RelayStatusCommands: { "Relay1-4": true, "Relay5-8": true },
  },
  {
    xsiType: "PPortVirtualRelays",
    RelayStatusCommands: { "Relay1-4": true, "Relay5-8": true },
  },
  {
    xsiType: "PPortVirtualRelays",
    RelayStatusCommands: { "Relay1-4": true, "Relay5-8": true },
  },
  {
    xsiType: "PPortVirtualRelays",
    RelayStatusCommands: { "Relay1-4": true, "Relay5-8": true },
  },
];
