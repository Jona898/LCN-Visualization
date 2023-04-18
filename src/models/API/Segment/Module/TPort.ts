export type TPort = TPortDefault | TPortLCNGT12 | TPortLCNGT6_2012;

export interface TPortDefault {
  xsiType: "TPortDefault";
  MakeDetection: "long";
  ContactMode: /* "hit" | */ "make" /* | "break"*/;
}

export interface TPortLCNGT12 {
  xsiType: "TPortLCNGT12";
}

export interface TPortLCNGT6_2012 {
  xsiType: "TPortLCNGT6_2012";
}
