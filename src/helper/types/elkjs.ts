import type { ElkExtendedEdge, ElkNode } from "elkjs/lib/elk-api";

export interface ElkEdgeWithPath extends ElkExtendedEdge {
  path: string;
}

export interface ElkNodeWithPath extends ElkNode {
  children?: ElkNodeWithPath[];
  edges?: ElkEdgeWithPath[];
}
