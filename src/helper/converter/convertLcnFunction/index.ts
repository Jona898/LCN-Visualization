import { assertUnreachable } from "@/helper/assertUnreachable";
import { Key, Fnct } from "@/models/API";
import { NodeStack } from "@/models/NodeNames";
import { parseCommand } from "./parseCommand";

export function parseLcnTableKey(lcnTableKey: Key): void {
  lcnTableKey.Fnct.forEach((func) => parseLcnFunction(func));
}

function parseLcnFunction(lcnFunction: Fnct): NodeStack[] {
  const nodeStack: NodeStack = [];

  nodeStack.push({
    partTitle: "Segment",
    partNumber: lcnFunction.destSeg,
  });

  switch (lcnFunction.destType) {
    case "module":
      nodeStack.push({
        partTitle: "Module",
        partNumber: lcnFunction.destId,
      });
      break;

    case "group":
      nodeStack.push({
        partTitle: "Group",
        partNumber: lcnFunction.destId,
      });
      break;

    default:
      console.error(`ParseLcnFunction: ${lcnFunction.destType} is nunknown`);
      assertUnreachable(lcnFunction.destType);
      break;
  }

  const allNodeStack: NodeStack[] = lcnFunction.Command.map((command) => {
    const stack: NodeStack = [...nodeStack];

    const commandStack = parseCommand(command.command);
    if (commandStack) {
      stack.concat(commandStack);
    }

    return stack;
  });

  return allNodeStack;
}
