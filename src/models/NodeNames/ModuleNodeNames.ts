export type NodeTypes =
  // Segment
  | "Segment"
  // Module & Group
  | "Module"
  | "Group"
  // Module Attatchments
  | "KeyTables"
  | "KeyA"
  | "KeyB"
  | "KeyC"
  | "KeyD"
  | "Periphery"
  | "IPort"
  | "PPort"
  | "TPort"
  | "Relay"
  | "BinerySensor"
  | "Output"
  | "Variable";

export type SeperationCharNodeStackTitle_Number = "#";

export interface NodeStackItem {
  partTitle: NodeTypes;
  partNumber?: number;
}

export type NodeStack = NodeStackItem[];
