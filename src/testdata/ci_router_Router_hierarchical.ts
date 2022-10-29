import type { ElkNode } from "elkjs/lib/elk-api";

// URL_SOURCE:
//   https://rtsys.informatik.uni-kiel.de/elklive/models.html?link=realworld%2Fptolemy%2Fhierarchical%2Fci_router_Router.json

const ci_router_Router_hierarchical: ElkNode =
  // & { edges: (ElkExtendedEdge & { path: string })[] }
  {
    id: "G1",
    children: [
      {
        id: "N1",
        labels: [
          {
            text: "channel1",
            id: "L1",
            width: 53.0,
            height: 15.0,
          },
        ],
        ports: [
          {
            id: "P1",
            layoutOptions: {
              "port.side": "WEST",
              "port.index": "0",
            },
            width: 8.0,
            height: 8.0,
          },
        ],
        children: [
          {
            id: "N2",
            labels: [
              {
                text: "Counter",
                id: "L2",
                width: 46.0,
                height: 15.0,
              },
            ],
            ports: [
              {
                id: "P2",
                layoutOptions: {
                  "port.side": "WEST",
                  "port.index": "0",
                },
                width: 8.0,
                height: 8.0,
              },
              {
                id: "P3",
                layoutOptions: {
                  "port.side": "WEST",
                  "port.index": "-1",
                },
                width: 8.0,
                height: 8.0,
              },
              {
                id: "P4",
                layoutOptions: {
                  "port.side": "EAST",
                  "port.index": "2",
                },
                width: 8.0,
                height: 8.0,
              },
            ],
            width: 61.0,
            height: 41.0,
          },
          {
            id: "N3",
            labels: [
              {
                text: "RecordAssembler",
                id: "L3",
                width: 104.0,
                height: 15.0,
              },
            ],
            ports: [
              {
                id: "P5",
                layoutOptions: {
                  "port.side": "EAST",
                  "port.index": "0",
                },
                width: 8.0,
                height: 8.0,
              },
              {
                id: "P6",
                layoutOptions: {
                  "port.side": "WEST",
                  "port.index": "-1",
                },
                width: 8.0,
                height: 8.0,
              },
              {
                id: "P7",
                layoutOptions: {
                  "port.side": "WEST",
                  "port.index": "-2",
                },
                width: 8.0,
                height: 8.0,
              },
            ],
            width: 10.0,
            height: 41.0,
          },
          {
            id: "N4",
            labels: [
              {
                text: "Display",
                id: "L4",
                width: 43.0,
                height: 15.0,
              },
            ],
            ports: [
              {
                id: "P8",
                layoutOptions: {
                  "port.side": "WEST",
                  "port.index": "0",
                },
                width: 8.0,
                height: 8.0,
              },
            ],
            width: 41.0,
            height: 31.0,
          },
        ],
        edges: [
          {
            id: "E13",
            sources: ["P1"],
            targets: ["P2"],
            // path: "",
          },
          {
            id: "E14",
            sources: ["P1"],
            targets: ["P6"],
            // path: "",
          },
          {
            id: "E15",
            sources: ["P4"],
            targets: ["P7"],
            // path: "",
          },
          {
            id: "E16",
            sources: ["P5"],
            targets: ["P8"],
            // path: "",
          },
        ],
      },
      {
        id: "N5",
        labels: [
          {
            text: "channel2",
            id: "L5",
            width: 53.0,
            height: 15.0,
          },
        ],
        ports: [
          {
            id: "P9",
            layoutOptions: {
              "port.side": "WEST",
              "port.index": "0",
            },
            width: 8.0,
            height: 8.0,
          },
        ],
        children: [
          {
            id: "N6",
            labels: [
              {
                text: "Counter",
                id: "L6",
                width: 46.0,
                height: 15.0,
              },
            ],
            ports: [
              {
                id: "P10",
                layoutOptions: {
                  "port.side": "WEST",
                  "port.index": "0",
                },
                width: 8.0,
                height: 8.0,
              },
              {
                id: "P11",
                layoutOptions: {
                  "port.side": "WEST",
                  "port.index": "-1",
                },
                width: 8.0,
                height: 8.0,
              },
              {
                id: "P12",
                layoutOptions: {
                  "port.side": "EAST",
                  "port.index": "2",
                },
                width: 8.0,
                height: 8.0,
              },
            ],
            width: 61.0,
            height: 41.0,
          },
          {
            id: "N7",
            labels: [
              {
                text: "RecordAssembler",
                id: "L7",
                width: 104.0,
                height: 15.0,
              },
            ],
            ports: [
              {
                id: "P13",
                layoutOptions: {
                  "port.side": "EAST",
                  "port.index": "0",
                },
                width: 8.0,
                height: 8.0,
              },
              {
                id: "P14",
                layoutOptions: {
                  "port.side": "WEST",
                  "port.index": "-1",
                },
                width: 8.0,
                height: 8.0,
              },
              {
                id: "P15",
                layoutOptions: {
                  "port.side": "WEST",
                  "port.index": "-2",
                },
                width: 8.0,
                height: 8.0,
              },
            ],
            width: 10.0,
            height: 41.0,
          },
          {
            id: "N8",
            labels: [
              {
                text: "Display",
                id: "L8",
                width: 43.0,
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
            ],
            width: 41.0,
            height: 31.0,
          },
        ],
        edges: [
          {
            id: "E17",
            sources: ["P9"],
            targets: ["P10"],
            // path: "",
          },
          {
            id: "E18",
            sources: ["P9"],
            targets: ["P14"],
            // path: "",
          },
          {
            id: "E19",
            sources: ["P12"],
            targets: ["P15"],
            // path: "",
          },
          {
            id: "E20",
            sources: ["P13"],
            targets: ["P16"],
            // path: "",
          },
        ],
      },
      {
        id: "N9",
        labels: [
          {
            text: "DataReceived",
            id: "L9",
            width: 80.0,
            height: 15.0,
          },
        ],
        ports: [
          {
            id: "P17",
            layoutOptions: {
              "port.side": "EAST",
              "port.index": "0",
            },
            width: 8.0,
            height: 8.0,
          },
          {
            id: "P18",
            layoutOptions: {
              "port.side": "WEST",
              "port.index": "-1",
            },
            width: 8.0,
            height: 8.0,
          },
          {
            id: "P19",
            layoutOptions: {
              "port.side": "WEST",
              "port.index": "-2",
            },
            width: 8.0,
            height: 8.0,
          },
        ],
        width: 61.0,
        height: 41.0,
      },
      {
        id: "N10",
        labels: [
          {
            text: "MonitorValue - q1 length",
            id: "L10",
            width: 141.0,
            height: 15.0,
          },
        ],
        ports: [
          {
            id: "P20",
            layoutOptions: {
              "port.side": "WEST",
              "port.index": "0",
            },
            width: 8.0,
            height: 8.0,
          },
        ],
        width: 60.0,
        height: 40.0,
      },
      {
        id: "N11",
        labels: [
          {
            text: "MonitorValue - q2 length",
            id: "L11",
            width: 141.0,
            height: 15.0,
          },
        ],
        ports: [
          {
            id: "P21",
            layoutOptions: {
              "port.side": "WEST",
              "port.index": "0",
            },
            width: 8.0,
            height: 8.0,
          },
        ],
        width: 60.0,
        height: 40.0,
      },
      {
        id: "N12",
        labels: [
          {
            text: "dropped",
            id: "L12",
            width: 47.0,
            height: 15.0,
          },
        ],
        ports: [
          {
            id: "P22",
            layoutOptions: {
              "port.side": "WEST",
              "port.index": "0",
            },
            width: 8.0,
            height: 8.0,
          },
        ],
        width: 41.0,
        height: 31.0,
      },
      {
        id: "N13",
        labels: [
          {
            text: "Distributor",
            id: "L13",
            width: 60.0,
            height: 15.0,
          },
        ],
        ports: [
          {
            id: "P23",
            layoutOptions: {
              "port.side": "WEST",
              "port.index": "0",
            },
            width: 8.0,
            height: 8.0,
          },
          {
            id: "P24",
            layoutOptions: {
              "port.side": "WEST",
              "port.index": "-1",
            },
            width: 8.0,
            height: 8.0,
          },
          {
            id: "P25",
            layoutOptions: {
              "port.side": "WEST",
              "port.index": "-2",
            },
            width: 8.0,
            height: 8.0,
          },
          {
            id: "P26",
            layoutOptions: {
              "port.side": "EAST",
              "port.index": "3",
            },
            width: 8.0,
            height: 8.0,
          },
          {
            id: "P27",
            layoutOptions: {
              "port.side": "EAST",
              "port.index": "4",
            },
            width: 8.0,
            height: 8.0,
          },
          {
            id: "P28",
            layoutOptions: {
              "port.side": "EAST",
              "port.index": "5",
            },
            width: 8.0,
            height: 8.0,
          },
        ],
        width: 61.0,
        height: 41.0,
      },
      {
        id: "N14",
        labels: [
          {
            text: "Interface - fast",
            id: "L14",
            width: 82.0,
            height: 15.0,
          },
        ],
        ports: [
          {
            id: "P29",
            layoutOptions: {
              "port.side": "WEST",
              "port.index": "0",
            },
            width: 8.0,
            height: 8.0,
          },
          {
            id: "P30",
            layoutOptions: {
              "port.side": "EAST",
              "port.index": "1",
            },
            width: 8.0,
            height: 8.0,
          },
        ],
        children: [
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
                id: "P31",
                layoutOptions: {
                  "port.side": "WEST",
                  "port.index": "0",
                },
                width: 8.0,
                height: 8.0,
              },
              {
                id: "P32",
                layoutOptions: {
                  "port.side": "EAST",
                  "port.index": "1",
                },
                width: 8.0,
                height: 8.0,
              },
              {
                id: "P33",
                layoutOptions: {
                  "port.side": "SOUTH",
                  "port.index": "-2",
                },
                width: 8.0,
                height: 8.0,
              },
            ],
            width: 61.0,
            height: 41.0,
          },
        ],
        edges: [
          {
            id: "E21",
            sources: ["P29"],
            targets: ["P31"],
            // path: "",
          },
          {
            id: "E22",
            sources: ["P32"],
            targets: ["P30"],
            // path: "",
          },
        ],
      },
      {
        id: "N16",
        labels: [
          {
            text: "Interface - slow",
            id: "L16",
            width: 88.0,
            height: 15.0,
          },
        ],
        ports: [
          {
            id: "P34",
            layoutOptions: {
              "port.side": "WEST",
              "port.index": "0",
            },
            width: 8.0,
            height: 8.0,
          },
          {
            id: "P35",
            layoutOptions: {
              "port.side": "EAST",
              "port.index": "1",
            },
            width: 8.0,
            height: 8.0,
          },
        ],
        children: [
          {
            id: "N17",
            labels: [
              {
                text: "Sleep",
                id: "L17",
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
            width: 61.0,
            height: 41.0,
          },
        ],
        edges: [
          {
            id: "E23",
            sources: ["P34"],
            targets: ["P36"],
            // path: "",
          },
          {
            id: "E24",
            sources: ["P37"],
            targets: ["P35"],
            // path: "",
          },
        ],
      },
      {
        id: "N18",
        labels: [
          {
            text: "Queue1",
            id: "L18",
            width: 460.0,
            height: 15.0,
          },
        ],
        ports: [
          {
            id: "P39",
            layoutOptions: {
              "port.side": "WEST",
              "port.index": "0",
            },
            width: 8.0,
            height: 8.0,
          },
          {
            id: "P40",
            layoutOptions: {
              "port.side": "EAST",
              "port.index": "1",
            },
            width: 8.0,
            height: 8.0,
          },
          {
            id: "P41",
            layoutOptions: {
              "port.side": "EAST",
              "port.index": "2",
            },
            width: 8.0,
            height: 8.0,
          },
        ],
        width: 61.0,
        height: 41.0,
      },
      {
        id: "N19",
        labels: [
          {
            text: "Queue2",
            id: "L19",
            width: 46.0,
            height: 15.0,
          },
        ],
        ports: [
          {
            id: "P42",
            layoutOptions: {
              "port.side": "WEST",
              "port.index": "0",
            },
            width: 8.0,
            height: 8.0,
          },
          {
            id: "P43",
            layoutOptions: {
              "port.side": "EAST",
              "port.index": "1",
            },
            width: 8.0,
            height: 8.0,
          },
          {
            id: "P44",
            layoutOptions: {
              "port.side": "EAST",
              "port.index": "2",
            },
            width: 8.0,
            height: 8.0,
          },
        ],
        width: 61.0,
        height: 41.0,
      },
    ],
    edges: [
      {
        id: "E1",
        sources: ["P17"],
        targets: ["P24"],
        // path: "",
      },
      {
        id: "E2",
        sources: ["P27"],
        targets: ["P22"],
        // path: "",
      },
      {
        id: "E3",
        sources: ["P28"],
        targets: ["P42"],
        // path: "",
      },
      {
        id: "E4",
        sources: ["P26"],
        targets: ["P39"],
        // path: "",
      },
      {
        id: "E5",
        sources: ["P30"],
        targets: ["P1"],
        // path: "",
      },
      {
        id: "E6",
        sources: ["P35"],
        targets: ["P9"],
        // path: "",
      },
      {
        id: "E7",
        sources: ["P40"],
        targets: ["P29"],
        // path: "",
      },
      {
        id: "E8",
        sources: ["P41"],
        targets: ["P20"],
        // path: "",
      },
      {
        id: "E9",
        sources: ["P41"],
        targets: ["P23"],
        // path: "",
      },
      {
        id: "E10",
        sources: ["P44"],
        targets: ["P21"],
        // path: "",
      },
      {
        id: "E11",
        sources: ["P44"],
        targets: ["P25"],
        // path: "",
      },
      {
        id: "E12",
        sources: ["P43"],
        targets: ["P34"],
        // path: "",
      },
    ],
  };
export { ci_router_Router_hierarchical };
