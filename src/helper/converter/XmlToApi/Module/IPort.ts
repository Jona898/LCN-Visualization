import { assertUnreachable } from "@/helper/assertUnreachable";
import { API, XmlModel } from "@/models";

export function ConvertIPortFromXmlToApi(iPortXml: XmlModel.IPort): API.IPort {
  switch (iPortXml["@_xsi:type"]) {
    case "IPortNoSensor":
      return <API.IPortNoSensor>{
        xsiType: iPortXml["@_xsi:type"],
      };

    case "IPortImpulseCounter":
      return <API.IPortImpulseCounter>{
        xsiType: iPortXml["@_xsi:type"],
        ImpulseCount: iPortXml.ImpulseCount,
      };

    case "IPortIRRemoteControl":
      return <API.IPortIRRemoteControl>{
        xsiType: iPortXml["@_xsi:type"],
        DestTables: iPortXml.DestTables,
        LargeRemoteControls: iPortXml.LargeRemoteControls,
        UseAccessCodes: iPortXml.UseAccessCodes,
      };

    default:
      assertUnreachable(iPortXml["@_xsi:type"]);
      break;
  }
}
