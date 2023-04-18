export interface Command {
  type: "hit" | "make" | "break";
  comment?: string;
  command: string;
}
