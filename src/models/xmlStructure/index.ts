import type { Header } from "./Header";
import type { SegmentList } from "./SegmentList";

export interface Project {
  "@_xmlns:xsi": string;
  "@_xsi:noNamespaceSchemaLocation": string;
  Header: Header;
  SegmentList: SegmentList;
}

export interface xmlStructure {
  Project: Project;
}

export * from "./Header";
export * from "./SegmentList";
