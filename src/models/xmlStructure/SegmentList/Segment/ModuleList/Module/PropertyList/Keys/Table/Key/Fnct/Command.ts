export interface Command {
  "@_type": "hit" | "make" | "break";
  "#text": string;
  "@_comment"?: string;
}
