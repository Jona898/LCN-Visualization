export type TPort = TPortDefault | TPortLCNGT12 | TPortLCNGT6_2012;

export interface TPortDefault {
  "@_xsi:type": "TPortDefault";
  MakeDetection: "long";
  ContactMode: /* "hit" | */ "make" /* | "break"*/;
}

export interface TPortLCNGT12 {
  "@_xsi:type": "TPortLCNGT12";
}

export interface TPortLCNGT6_2012 {
  "@_xsi:type": "TPortLCNGT6_2012";
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const tPorts: TPort[] = [
  { "@_xsi:type": "TPortDefault", MakeDetection: "long", ContactMode: "make" },
  { "@_xsi:type": "TPortDefault", MakeDetection: "long", ContactMode: "make" },
  { "@_xsi:type": "TPortDefault", MakeDetection: "long", ContactMode: "make" },
  { "@_xsi:type": "TPortDefault", MakeDetection: "long", ContactMode: "make" },
  { "@_xsi:type": "TPortDefault", MakeDetection: "long", ContactMode: "make" },
  { "@_xsi:type": "TPortDefault", MakeDetection: "long", ContactMode: "make" },
  { "@_xsi:type": "TPortDefault", MakeDetection: "long", ContactMode: "make" },
  { "@_xsi:type": "TPortDefault", MakeDetection: "long", ContactMode: "make" },
  { "@_xsi:type": "TPortDefault", MakeDetection: "long", ContactMode: "make" },
  { "@_xsi:type": "TPortDefault", MakeDetection: "long", ContactMode: "make" },
  { "@_xsi:type": "TPortDefault", MakeDetection: "long", ContactMode: "make" },
  { "@_xsi:type": "TPortDefault", MakeDetection: "long", ContactMode: "make" },
  { "@_xsi:type": "TPortDefault", MakeDetection: "long", ContactMode: "make" },
  { "@_xsi:type": "TPortDefault", MakeDetection: "long", ContactMode: "make" },
  { "@_xsi:type": "TPortDefault", MakeDetection: "long", ContactMode: "make" },
  { "@_xsi:type": "TPortDefault", MakeDetection: "long", ContactMode: "make" },
  { "@_xsi:type": "TPortDefault", MakeDetection: "long", ContactMode: "make" },
  { "@_xsi:type": "TPortDefault", MakeDetection: "long", ContactMode: "make" },
  { "@_xsi:type": "TPortDefault", MakeDetection: "long", ContactMode: "make" },
  { "@_xsi:type": "TPortDefault", MakeDetection: "long", ContactMode: "make" },
  { "@_xsi:type": "TPortDefault", MakeDetection: "long", ContactMode: "make" },
  { "@_xsi:type": "TPortDefault", MakeDetection: "long", ContactMode: "make" },
  { "@_xsi:type": "TPortDefault", MakeDetection: "long", ContactMode: "make" },
  { "@_xsi:type": "TPortDefault", MakeDetection: "long", ContactMode: "make" },
  { "@_xsi:type": "TPortDefault", MakeDetection: "long", ContactMode: "make" },
  { "@_xsi:type": "TPortLCNGT12" },
  { "@_xsi:type": "TPortLCNGT12" },
  { "@_xsi:type": "TPortLCNGT6_2012" },
  { "@_xsi:type": "TPortLCNGT6_2012" },
  { "@_xsi:type": "TPortLCNGT6_2012" },
  { "@_xsi:type": "TPortLCNGT6_2012" },
  { "@_xsi:type": "TPortLCNGT6_2012" },
  { "@_xsi:type": "TPortLCNGT6_2012" },
  { "@_xsi:type": "TPortLCNGT6_2012" },
  { "@_xsi:type": "TPortLCNGT6_2012" },
  { "@_xsi:type": "TPortLCNGT6_2012" },
  { "@_xsi:type": "TPortLCNGT6_2012" },
  { "@_xsi:type": "TPortLCNGT6_2012" },
];
