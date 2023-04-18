import type { CouplerList } from "./CouplerList";
import type { GroupList } from "./GroupList";
import type { ModuleList } from "./ModuleList";
import type { UnprogComponentList } from "./UnprogComponentList";

export interface Segment {
  "@_segmentId": number;
  CouplerList: "" | CouplerList;
  ModuleList: ModuleList;
  UnprogComponentList: "" | UnprogComponentList;
  GroupList: GroupList;
}

export * from "./CouplerList";
export * from "./GroupList";
export * from "./ModuleList";
export * from "./UnprogComponentList";
