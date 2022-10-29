import type { ElkExtendedEdge, ElkNode } from "elkjs/lib/elk-api";

// URL_SOURCE:
//   https://rtsys.informatik.uni-kiel.de//elklive/elk-models/realworld/ptolemy/flattened/ci_router_Router.json
const ci_router_Router: ElkNode & {
  edges: (ElkExtendedEdge & { path: string })[];
} = {
  id: "G1",
  layoutOptions: {
    // "elk.padding": "[top=60.0,left=60.0,bottom=60.0,right=60.0]",
    // "elk.margins": "[top=60.0,left=60.0,bottom=60.0,right=60.0]",
    // // "nodeLabels.placement": "[H_CENTER, V_TOP, INSIDE]",
    // "nodeLabels.placement": "[H_RIGHT, V_TOP, INSIDE]",
    // // "considerModelOrder.components": "FORCE_MODEL_ORDER",
    // "elk.algorithm": "layered",
    // "elk.direction": "DOWN",
    // "elk.randomSeed": 117,
    // "elk.spacing.nodeNode": 10,
    // "elk.layered.spacing.nodeNodeBetweenLayers": 120,
    // "elk.spacing.edgeEdge": 7,
    // "elk.spacing.edgeNode": 10,
    // "elk.spacing.edgeEdgeBetweenLayers": 7,
    // "elk.portAlignment.default": "CENTER",
    // "elk.spacing.componentComponent": 120,
    // "elk.layered.layering.strategy": "COFFMAN_GRAHAM",
    // "elk.layered.layering.coffmanGraham.layerBound": 4,
    // "elk.layered.cycleBreaking.strategy": "DEPTH_FIRST",
    // "elk.layered.crossingMinimization.strategy": "LAYER_SWEEP",
    // "elk.layered.nodePlacement.strategy": "BRANDES_KOEPF",
    // "elk.layered.nodePlacement.favorStraightEdges": true,
    // "elk.layered.nodePlacement.bk.edgeStraightening": "IMPROVE_STRAIGHTNESS",
    // "elk.layered.considerModelOrder.strategy": "NODES_AND_EDGES",
    // edgeRouting: "ORTHOGONAL",
    // "elk.hierarchyHandling": "INCLUDE_CHILDREN",
    // "elk.nodeSize.constraints": "[NODE_LABELS]",
  },
  children: [
    {
      id: "N1",
      layoutOptions: {},
      labels: [
        {
          layoutOptions: {},
          text: "DataReceived",
          id: "L1",
          width: 80.0,
          height: 15.0,
        },
      ],
      ports: [
        {
          id: "P1",
          layoutOptions: {
            "port.side": "EAST",
            "port.index": "0",
          },
          width: 8.0,
          height: 8.0,
        },
        {
          id: "P2",
          layoutOptions: {
            "port.side": "WEST",
            "port.index": "-1",
          },
          width: 8.0,
          height: 8.0,
        },
        {
          id: "P3",
          layoutOptions: {
            "port.side": "WEST",
            "port.index": "-2",
          },
          width: 8.0,
          height: 8.0,
        },
      ],
      // width: 61.0,
      // height: 41.0,
    },
    {
      id: "N2",
      labels: [
        {
          text: "MonitorValue - q1 length",
          id: "L2",
          width: 141.0,
          height: 15.0,
        },
      ],
      ports: [
        {
          id: "P4",
          layoutOptions: {
            "port.side": "WEST",
            "port.index": "0",
          },
          width: 8.0,
          height: 8.0,
        },
      ],
      layoutOptions: {},
      // width: 60.0,
      // height: 40.0,
    },
    {
      id: "N3",
      labels: [
        {
          text: "MonitorValue - q2 length",
          id: "L3",
          width: 141.0,
          height: 15.0,
        },
      ],
      ports: [
        {
          id: "P5",
          layoutOptions: {
            "port.side": "WEST",
            "port.index": "0",
          },
          width: 8.0,
          height: 8.0,
        },
      ],
      layoutOptions: {},
      // width: 60.0,
      // height: 40.0,
    },
    {
      id: "N4",
      labels: [
        {
          text: "dropped",
          id: "L4",
          width: 47.0,
          height: 15.0,
        },
      ],
      ports: [
        {
          id: "P6",
          layoutOptions: {
            "port.side": "WEST",
            "port.index": "0",
          },
          width: 8.0,
          height: 8.0,
        },
      ],
      layoutOptions: {},
      // width: 41.0,
      // height: 31.0,
    },
    {
      id: "N5",
      labels: [
        {
          text: "Distributor",
          id: "L5",
          width: 60.0,
          height: 15.0,
        },
      ],
      ports: [
        {
          id: "P7",
          layoutOptions: {
            "port.side": "WEST",
            "port.index": "0",
          },
          width: 8.0,
          height: 8.0,
        },
        {
          id: "P8",
          layoutOptions: {
            "port.side": "WEST",
            "port.index": "-1",
          },
          width: 8.0,
          height: 8.0,
        },
        {
          id: "P9",
          layoutOptions: {
            "port.side": "WEST",
            "port.index": "-2",
          },
          width: 8.0,
          height: 8.0,
        },
        {
          id: "P10",
          layoutOptions: {
            "port.side": "EAST",
            "port.index": "3",
          },
          width: 8.0,
          height: 8.0,
        },
        {
          id: "P11",
          layoutOptions: {
            "port.side": "EAST",
            "port.index": "4",
          },
          width: 8.0,
          height: 8.0,
        },
        {
          id: "P12",
          layoutOptions: {
            "port.side": "EAST",
            "port.index": "5",
          },
          width: 8.0,
          height: 8.0,
        },
      ],
      layoutOptions: {
        "elk.hierarchyHandling": "INCLUDE_CHILDREN",
      },
      children: [
        {
          id: "NTestChild",
          labels: [
            {
              text: "TestChild",
              id: "LTestChild",
              width: 60.0,
              height: 15.0,
            },
          ],
          ports: [],
          layoutOptions: {},
          children: [],
          width: 80.0,
          height: 60.0,
        },
      ],
      // width: 61.0,
      // height: 41.0,
    },
    {
      id: "N6",
      labels: [
        {
          text: "Queue1",
          id: "L6",
          width: 46.0,
          height: 15.0,
        },
      ],
      ports: [
        {
          id: "P13",
          layoutOptions: {
            "port.side": "WEST",
            "port.index": "0",
          },
          width: 8.0,
          height: 8.0,
        },
        {
          id: "P14",
          layoutOptions: {
            "port.side": "EAST",
            "port.index": "1",
          },
          width: 8.0,
          height: 8.0,
        },
        {
          id: "P15",
          layoutOptions: {
            "port.side": "NORTH",
            "port.index": "2",
          },
          width: 8.0,
          height: 8.0,
        },
      ],
      layoutOptions: {},
      // width: 61.0,
      // height: 41.0,
    },
    {
      id: "N7",
      labels: [
        {
          text: "Queue2",
          id: "L7",
          width: 46.0,
          height: 15.0,
        },
      ],
      ports: [
        {
          id: "P16",
          layoutOptions: {
            "port.side": "WEST",
            "port.index": "0",
          },
          width: 8.0,
          height: 8.0,
        },
        {
          id: "P17",
          layoutOptions: {
            "port.side": "EAST",
            "port.index": "1",
          },
          width: 8.0,
          height: 8.0,
        },
        {
          id: "P18",
          layoutOptions: {
            "port.side": "EAST",
            "port.index": "2",
          },
          width: 8.0,
          height: 8.0,
        },
      ],
      layoutOptions: {},
      // width: 61.0,
      // height: 41.0,
    },
    {
      id: "N8",
      labels: [
        {
          text: "Counter",
          id: "L8",
          width: 46.0,
          height: 15.0,
        },
      ],
      ports: [
        {
          id: "P19",
          layoutOptions: {
            "port.side": "WEST",
            "port.index": "0",
          },
          width: 8.0,
          height: 8.0,
        },
        {
          id: "P20",
          layoutOptions: {
            "port.side": "WEST",
            "port.index": "-1",
          },
          width: 8.0,
          height: 8.0,
        },
        {
          id: "P21",
          layoutOptions: {
            "port.side": "EAST",
            "port.index": "2",
          },
          width: 8.0,
          height: 8.0,
        },
      ],
      layoutOptions: {},
      // width: 61.0,
      // height: 41.0,
    },
    {
      id: "N9",
      labels: [
        {
          text: "RecordAssembler",
          id: "L9",
          width: 104.0,
          height: 15.0,
        },
      ],
      ports: [
        {
          id: "P22",
          layoutOptions: {
            "port.side": "EAST",
            "port.index": "0",
          },
          width: 8.0,
          height: 8.0,
        },
        {
          id: "P23",
          layoutOptions: {
            "port.side": "WEST",
            "port.index": "-1",
          },
          width: 8.0,
          height: 8.0,
        },
        {
          id: "P24",
          layoutOptions: {
            "port.side": "WEST",
            "port.index": "-2",
          },
          width: 8.0,
          height: 8.0,
        },
      ],
      layoutOptions: {},
      width: 40.0,
      height: 41.0,
    },
    {
      id: "N10",
      labels: [
        {
          text: "Display",
          id: "L10",
          width: 43.0,
          height: 15.0,
        },
      ],
      ports: [
        {
          id: "P25",
          layoutOptions: {
            "port.side": "WEST",
            "port.index": "0",
          },
          width: 8.0,
          height: 8.0,
        },
      ],
      layoutOptions: {},
      // width: 41.0,
      // height: 31.0,
    },
    {
      id: "N11",
      labels: [
        {
          text: "Counter",
          id: "L11",
          width: 46.0,
          height: 15.0,
        },
      ],
      ports: [
        {
          id: "P26",
          layoutOptions: {
            "port.side": "WEST",
            "port.index": "0",
          },
          width: 8.0,
          height: 8.0,
        },
        {
          id: "P27",
          layoutOptions: {
            "port.side": "WEST",
            "port.index": "-1",
          },
          width: 8.0,
          height: 8.0,
        },
        {
          id: "P28",
          layoutOptions: {
            "port.side": "EAST",
            "port.index": "2",
          },
          width: 8.0,
          height: 8.0,
        },
      ],
      layoutOptions: {},
      // width: 61.0,
      // height: 41.0,
    },
    {
      id: "N12",
      labels: [
        {
          text: "RecordAssembler",
          id: "L12",
          width: 104.0,
          height: 15.0,
        },
      ],
      ports: [
        {
          id: "P29",
          layoutOptions: {
            "port.side": "EAST",
            "port.index": "0",
          },
          width: 8.0,
          height: 8.0,
        },
        {
          id: "P30",
          layoutOptions: {
            "port.side": "WEST",
            "port.index": "-1",
          },
          width: 8.0,
          height: 8.0,
        },
        {
          id: "P31",
          layoutOptions: {
            "port.side": "WEST",
            "port.index": "-2",
          },
          width: 8.0,
          height: 8.0,
        },
      ],
      layoutOptions: {},
      // width: 40.0,
      // height: 41.0,
    },
    {
      id: "N13",
      labels: [
        {
          text: "Display",
          id: "L13",
          width: 43.0,
          height: 15.0,
        },
      ],
      ports: [
        {
          id: "P32",
          layoutOptions: {
            "port.side": "WEST",
            "port.index": "0",
          },
          width: 8.0,
          height: 8.0,
        },
      ],
      layoutOptions: {},
      // width: 41.0,
      // height: 31.0,
    },
    {
      id: "N14",
      labels: [
        {
          text: "Sleep",
          id: "L14",
          width: 34.0,
          height: 15.0,
        },
      ],
      ports: [
        {
          id: "P33",
          layoutOptions: {
            "port.side": "WEST",
            "port.index": "0",
          },
          width: 8.0,
          height: 8.0,
        },
        {
          id: "P34",
          layoutOptions: {
            "port.side": "EAST",
            "port.index": "1",
          },
          width: 8.0,
          height: 8.0,
        },
        {
          id: "P35",
          layoutOptions: {
            "port.side": "SOUTH",
            "port.index": "-2",
          },
          width: 8.0,
          height: 8.0,
        },
      ],
      layoutOptions: {},
      // width: 61.0,
      // height: 41.0,
    },
    {
      id: "N15",
      labels: [
        {
          text: "Sleep",
          id: "L15",
          width: 34.0,
          height: 15.0,
        },
      ],
      ports: [
        {
          id: "P36",
          layoutOptions: {
            "port.side": "WEST",
            "port.index": "0",
          },
          width: 8.0,
          height: 8.0,
        },
        {
          id: "P37",
          layoutOptions: {
            "port.side": "EAST",
            "port.index": "1",
          },
          width: 8.0,
          height: 8.0,
        },
        {
          id: "P38",
          layoutOptions: {
            "port.side": "SOUTH",
            "port.index": "-2",
          },
          width: 8.0,
          height: 8.0,
        },
      ],
      layoutOptions: {},
      // width: 61.0,
      // height: 41.0,
    },
  ],
  edges: [
    {
      id: "E1",
      sources: ["P1"],
      targets: ["P8"],
      path: "",
    },
    {
      id: "E2",
      sources: ["P11"],
      targets: ["P6"],
      path: "",
    },
    {
      id: "E3",
      sources: ["P12"],
      targets: ["P16"],
      path: "",
    },
    {
      id: "E4",
      sources: ["P10"],
      targets: ["P13"],
      path: "",
    },
    {
      id: "E5",
      sources: ["P15"],
      targets: ["P4"],
      path: "",
    },
    {
      id: "E6",
      sources: ["P15"],
      targets: ["P7"],
      path: "",
    },
    {
      id: "E7",
      sources: ["P14"],
      targets: ["P33"],
      path: "",
    },
    {
      id: "E8",
      sources: ["P18"],
      targets: ["P5"],
      path: "",
    },
    {
      id: "E9",
      sources: ["P18"],
      targets: ["P9"],
      path: "",
    },
    {
      id: "E10",
      sources: ["P17"],
      targets: ["P36"],
      path: "",
    },
    {
      id: "E11",
      sources: ["P21"],
      targets: ["P24"],
      path: "",
    },
    {
      id: "E12",
      sources: ["P22"],
      targets: ["P25"],
      path: "",
    },
    {
      id: "E13",
      sources: ["P28"],
      targets: ["P31"],
      path: "",
    },
    {
      id: "E14",
      sources: ["P29"],
      targets: ["P32"],
      path: "",
    },
    {
      id: "E15",
      sources: ["P34"],
      targets: ["P19"],
      path: "",
    },
    {
      id: "E16",
      sources: ["P34"],
      targets: ["P23"],
      path: "",
    },
    {
      id: "E17",
      sources: ["P37"],
      targets: ["P26"],
      path: "",
    },
    {
      id: "E18",
      sources: ["P37"],
      targets: ["P30"],
      path: "",
    },
  ],
};

export { ci_router_Router };
