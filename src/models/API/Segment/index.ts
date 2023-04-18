import type { Coupler } from "./Coupler";
import type { Group } from "./Group";
import type { Module } from "./Module";
import type { UnprogComponent } from "./UnprogComponent";

export interface Segment {
  segmentId: number;
  Couplers: Coupler[];
  Modules: Module[];
  UnprogComponents: UnprogComponent[];
  Groups: Group[];
}

export * from "./Coupler";
export * from "./Group";
export * from "./Module";
export * from "./UnprogComponent";
