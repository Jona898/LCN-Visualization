export interface BasicNode {
  type: "Module";
  segmentId: number;
  moduleId: number;
}

export interface KeyTablesNode {
  type: "KeyTables";
  segmentId: number;
  moduleId: number;
  isKeyTable: true;
}

export interface KeyTableItemNode {
  type: "KeyTableABCD";
  segmentId: number;
  moduleId: number;
  isKeyTable: true;
  keyTable: "A" | "B" | "C" | "D";
}

export interface PeripheryNode {
  type: "Periphery";
  segmentId: number;
  moduleId: number;
  isPeriphery: true;
}

export interface IPortNode {
  type: "IPort";
  segmentId: number;
  moduleId: number;
  isIPort: true;
}

export interface PPortNode {
  type: "PPort";
  segmentId: number;
  moduleId: number;
  isPPort: true;
}

export interface TPortNode {
  type: "TPort";
  segmentId: number;
  moduleId: number;
  isTPort: true;
}

export interface RelayNode {
  type: "Relay";
  segmentId: number;
  moduleId: number;
  isRelay: true;
}

export interface BinerySensorNode {
  type: "BinerySensor";
  segmentId: number;
  moduleId: number;
  isBinerySensor: true;
}

export interface OutputNode {
  type: "Output";
  segmentId: number;
  moduleId: number;
  isOutput: true;
}

export interface VariableNode {
  type: "Variable";
  segmentId: number;
  moduleId: number;
  isVariable: true;
}

export type NodesCombined =
  | BasicNode
  | KeyTablesNode
  | KeyTableItemNode
  | PeripheryNode
  | IPortNode
  | PPortNode
  | TPortNode
  | RelayNode
  | BinerySensorNode
  | OutputNode
  | VariableNode;
