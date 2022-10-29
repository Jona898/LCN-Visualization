import type { ElkExtendedEdge, ElkNode } from "elkjs/lib/elk-api";

const firstGraph: ElkNode & {
  edges: (ElkExtendedEdge & { path: string })[];
} = {
  id: "root",
  children: [
    {
      id: "n1",
      width: 30,
      height: 30,
      ports: [{ id: "n1_p1", layoutOptions: { "elk.port.side": "WEST" } }],
    },
    { id: "n2", width: 30, height: 30, ports: [{ id: "n2_p1" }] },
    { id: "n3", width: 30, height: 30, ports: [{ id: "n3_p1" }] },
    { id: "n4", width: 30, height: 30, ports: [{ id: "n4_p1" }] },
    { id: "n5", width: 30, height: 30, ports: [{ id: "n5_p1" }] },
    { id: "n6", width: 30, height: 30, ports: [{ id: "n6_p1" }] },
  ],
  edges: [
    { id: "e1", sources: ["n1"], targets: ["n2"], path: "" },
    { id: "e2", sources: ["n1"], targets: ["n3"], path: "" },
    { id: "e3", sources: ["n3"], targets: ["n4"], path: "" },
    { id: "e4", sources: ["n5"], targets: ["n6"], path: "" },
    { id: "e5", sources: ["n2"], targets: ["n5"], path: "" },
    { id: "e6", sources: ["n6"], targets: ["n3"], path: "" },
    { id: "e7", sources: ["n2"], targets: ["n6"], path: "" },
    { id: "e8", sources: ["n2"], targets: ["n2"], path: "" },
  ],
};

export { firstGraph };
