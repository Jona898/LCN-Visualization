import type { GroupMember } from "./GroupMember";

export interface Group {
  groupId: number;
  Name: string;
  Members: GroupMember[];
}

export * from "./GroupMember";
