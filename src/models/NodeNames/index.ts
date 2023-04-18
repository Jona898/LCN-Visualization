export {};
// import { AssertUnreachable } from "@/helper";
// import type {
//   NodeStack,
//   NodeTypes,
//   SeperationCharNodeStackTitle_Number,
//   NodeStackItem,
// } from "./ModuleNodeNames";

// const determinatorModuleName = "-";

// export enum NodeStrings {
//   SEGMENT_START = "S",

//   MODULE_START = "M",

//   KEY_TABLE_GROUP = "KeyTable",
//   PERIPHERY = "Periphery",
//   IPORT = "Iport",
//   PPORT = "PPort",
//   TPORT = "TPort",
//   RELAY = "Relay",
//   BINERYSENSOR = "BinerySensor",
//   OUTPUT = "Output",
//   VARIABLE = "Variable",

//   GROUP_START = "G",
// }

// export function parseNodeName(nodeId: string): NodesCombined {
//   const nodeParts = nodeId.split(determinatorModuleName);
//   if (nodeParts[0].startsWith(NodeStrings.SEGMENT_START)) {
//     const segmentId = Number(
//       nodeParts[0].slice(NodeStrings.SEGMENT_START.length)
//     );
//     if (nodeParts[1].startsWith(NodeStrings.MODULE_START)) {
//       const moduleId = Number(
//         nodeParts[1].slice(NodeStrings.MODULE_START.length)
//       );
//       return parseModuleName(segmentId, moduleId, nodeParts.slice(2));
//     } else if (nodeParts[1].startsWith(NodeStrings.GROUP_START)) {
//       const groupId = Number(
//         nodeParts[1].slice(NodeStrings.GROUP_START.length)
//       );
//       return parseGroupName(segmentId, groupId, nodeParts.slice(2));
//     } else {
//       throw new Error("Node isn't a Module or Group");
//     }
//   } else {
//     throw new Error(`Node doesn't start with ${NodeStrings.SEGMENT_START}`);
//   }
// }

// function parseModuleName(
//   segmentId: number,
//   moduleId: number,
//   nodeParts: string[]
// ): NodesCombined {
//   if (!nodeParts) {
//     const retVar: BasicNode = { type: "Module", segmentId, moduleId };
//     return retVar;
//   } else if (nodeParts[0] === NodeStrings.KEY_TABLE_GROUP) {
//     if (nodeParts.length === 1) {
//       const retVar: KeyTablesNode = {
//         type: "KeyTables",
//         segmentId,
//         moduleId,
//         isKeyTable: true,
//       };
//       return retVar;
//     } else {
//       const retVar: KeyTableItemNode = {
//         type: "KeyTableABCD",
//         segmentId,
//         moduleId,
//         isKeyTable: true,
//         keyTable: <"A" | "B" | "C" | "D">nodeParts[1],
//       };
//       return retVar;
//     }
//   } else if (nodeParts[0] === NodeStrings.PERIPHERY) {
//     const retVar: PeripheryNode = {
//       type: "Periphery",
//       segmentId,
//       moduleId,
//       isPeriphery: true,
//     };
//     return retVar;
//   } else if (nodeParts[0] === NodeStrings.IPORT) {
//     const retVar: IPortNode = {
//       type: "IPort",
//       segmentId,
//       moduleId,
//       isIPort: true,
//     };
//     return retVar;
//   } else if (nodeParts[0] === NodeStrings.PPORT) {
//     const retVar: PPortNode = {
//       type: "PPort",
//       segmentId,
//       moduleId,
//       isPPort: true,
//     };
//     return retVar;
//   } else if (nodeParts[0] === NodeStrings.TPORT) {
//     const retVar: TPortNode = {
//       type: "TPort",
//       segmentId,
//       moduleId,
//       isTPort: true,
//     };
//     return retVar;
//   } else if (nodeParts[0] === NodeStrings.RELAY) {
//     const retVar: RelayNode = {
//       type: "Relay",
//       segmentId,
//       moduleId,
//       isRelay: true,
//     };
//     return retVar;
//   } else if (nodeParts[0] === NodeStrings.BINERYSENSOR) {
//     const retVar: BinerySensorNode = {
//       type: "BinerySensor",
//       segmentId,
//       moduleId,
//       isBinerySensor: true,
//     };
//     return retVar;
//   } else if (nodeParts[0] === NodeStrings.OUTPUT) {
//     const retVar: OutputNode = {
//       type: "Output",
//       segmentId,
//       moduleId,
//       isOutput: true,
//     };
//     return retVar;
//   } else if (nodeParts[0] === NodeStrings.VARIABLE) {
//     const retVar: VariableNode = {
//       type: "Variable",
//       segmentId,
//       moduleId,
//       isVariable: true,
//     };
//     return retVar;
//   } else {
//     throw new Error(`Module type ${nodeParts[0]} can't be evaluated`);
//   }
// }

// function parseGroupName(
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   segmentId: number,
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   groupId: number,
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   nodeParts: string[]
// ): NodesCombined {
//   throw new Error("Not Implemented Exception");
// }

// export function stringifyNodeName(nodeSettings: NodesCombined): string {
//   let buildedString = NodeStrings.SEGMENT_START + nodeSettings.segmentId;
//   buildedString +=
//     determinatorModuleName + NodeStrings.MODULE_START + nodeSettings.moduleId;

//   switch (nodeSettings.type) {
//     case "Module":
//       break;

//     case "KeyTables":
//     case "KeyTableABCD":
//       buildedString += determinatorModuleName + NodeStrings.KEY_TABLE_GROUP;
//       if (nodeSettings.type === "KeyTableABCD") {
//         buildedString +=
//           determinatorModuleName + (<KeyTableItemNode>nodeSettings).keyTable;
//       }
//       break;

//     case "Periphery":
//       buildedString += determinatorModuleName + NodeStrings.PERIPHERY;
//       break;

//     case "IPort":
//       buildedString += determinatorModuleName + NodeStrings.IPORT;
//       break;

//     case "PPort":
//       buildedString += determinatorModuleName + NodeStrings.PPORT;
//       break;

//     case "TPort":
//       buildedString += determinatorModuleName + NodeStrings.TPORT;
//       break;

//     case "Relay":
//       buildedString += determinatorModuleName + NodeStrings.RELAY;
//       break;

//     case "BinerySensor":
//       buildedString += determinatorModuleName + NodeStrings.BINERYSENSOR;
//       break;

//     case "Output":
//       buildedString += determinatorModuleName + NodeStrings.OUTPUT;
//       break;

//     case "Variable":
//       buildedString += determinatorModuleName + NodeStrings.VARIABLE;
//       break;

//     default:
//       AssertUnreachable(nodeSettings);
//       break;
//   }

//   return buildedString;
// }

// export * from "./ModuleNodeNames";
