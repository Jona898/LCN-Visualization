import type { ModuleTypes } from "@/models/Units/ModuleTypes";
import type { BinarySensorCommentList } from "./BinarySensorCommentList";
import type { PeripheryList } from "./PeripheryList";
import type { PropertyList } from "./PropertyList";
import type { RelayCommentList } from "./RelayCommentList";
import type { VariableList } from "./VariableList";

export interface Module {
  "@_moduleId": number;
  "@_xsi:type": string | ModuleTypes;
  "@_firmwareDate": string;
  "@_serialNo": string;
  "@_foundInBus": boolean;
  Name: string;
  Comment: string;
  PeripheryList: "" | PeripheryList;
  VariableList: VariableList;
  PropertyList: PropertyList;
  RelayCommentList: "" | RelayCommentList;
  BinarySensorCommentList: "" | BinarySensorCommentList;
}

export * from "./BinarySensorCommentList";
export * from "./PeripheryList";
export * from "./PropertyList";
export * from "./RelayCommentList";
export * from "./VariableList";
