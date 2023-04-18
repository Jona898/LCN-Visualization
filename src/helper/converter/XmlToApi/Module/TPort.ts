import { assertUnreachable } from "@/helper/assertUnreachable";
import { API, XmlModel } from "@/models";

export function ConvertTPortFromXmlToApi(tPortXml: XmlModel.TPort): API.TPort {
  switch (tPortXml["@_xsi:type"]) {
    case "TPortDefault":
      return <API.TPortDefault>{
        xsiType: tPortXml["@_xsi:type"],
        ContactMode: tPortXml.ContactMode,
        MakeDetection: tPortXml.MakeDetection,
      };

    case "TPortLCNGT6_2012":
      return <API.TPortLCNGT6_2012>{
        xsiType: tPortXml["@_xsi:type"],
      };

    case "TPortLCNGT12":
      return <API.TPortLCNGT12>{
        xsiType: tPortXml["@_xsi:type"],
      };

    default:
      assertUnreachable(tPortXml["@_xsi:type"]);
      break;
  }
}
