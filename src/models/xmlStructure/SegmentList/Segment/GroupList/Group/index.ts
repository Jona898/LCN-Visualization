import type { MemberList } from "./MemberList";

export interface Group {
  "@_groupId": number;
  Name: string;
  MemberList: MemberList;
}

export * from "./MemberList";
