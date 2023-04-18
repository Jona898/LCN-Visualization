export interface Output {
  id: number;
  mode: "switch 1%" | "dimmer";
  extra: "disabled" | "0-10V";
  charTable: "linear" | "halogen";
}
