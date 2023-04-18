import { assertUnreachable } from "@/helper/assertUnreachable";
import { API, XmlModel } from "@/models";

export function ConvertPPortFromXmlToApi(pPortXml: XmlModel.PPort): API.PPort {
  switch (pPortXml["@_xsi:type"]) {
    case "PPortVirtualRelays":
      return <API.PPortVirtualRelays>{
        xsiType: pPortXml["@_xsi:type"],
        RelayStatusCommands: pPortXml.RelayStatusCommands,
      };

    case "PPortHwRelays":
      return <API.PPortHwRelays>{
        xsiType: pPortXml["@_xsi:type"],
        RelayStatusCommands: pPortXml.RelayStatusCommands,
        enabled: pPortXml["@_enabled"],
        MotorPositioning: pPortXml.MotorPositioning,
        ShutterControl: pPortXml.ShutterControl,
      };

    default:
      assertUnreachable(pPortXml["@_xsi:type"]);
      break;
  }
}
