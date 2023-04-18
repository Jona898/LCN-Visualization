import { convertArrayGeneric } from "@/helper/converter/ConvertArrayGeneric";
import { API, XmlModel } from "@/models";
import { ConvertKeyFnctCommandFromXmlToApi } from "./Command";

export function ConvertKeyFnctFromXmlToApi(fnctXml: XmlModel.Fnct): API.Fnct {
  return {
    id: fnctXml["@_id"],
    destSeg: fnctXml["@_destSeg"],
    destType: fnctXml["@_destType"],
    destId: fnctXml["@_destId"],
    comment: fnctXml["@_comment"],
    Command: convertArrayGeneric(
      fnctXml.Command,
      ConvertKeyFnctCommandFromXmlToApi
    ),
  };
}
