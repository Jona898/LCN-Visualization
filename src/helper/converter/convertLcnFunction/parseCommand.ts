import { KeyTableCommandTypeStart } from "@/models/API";
import { NodeStack } from "@/models/NodeNames";

export function parseCommand(command: string): NodeStack | null {
  const commandStack: NodeStack = [];

  if (
    command.startsWith(KeyTableCommandTypeStart.Unprogrammiert) ||
    command.startsWith(KeyTableCommandTypeStart.Leerkommando)
  ) {
    return null;
  } else if (command.startsWith(KeyTableCommandTypeStart.Relais)) {
    commandStack.push({
      partTitle: "Relay",
    });
  } else if (command.startsWith(KeyTableCommandTypeStart.Ausg)) {
    commandStack.push({
      partTitle: "Output",
    });
  }

  return commandStack;
}
