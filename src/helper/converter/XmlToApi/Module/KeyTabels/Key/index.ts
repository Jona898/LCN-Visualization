import { convertArrayGeneric } from "@/helper/converter/ConvertArrayGeneric";
import { API, XmlModel } from "@/models";
import { ConvertKeyFnctFromXmlToApi } from "./Fnct";

export function ConvertKeyTableKeyFromXmlToApi(keyXml: XmlModel.Key): API.Key {
  return {
    id: keyXml["@_id"],
    comment: keyXml["@_comment"],
    Fnct: convertArrayGeneric(keyXml.Fnct, ConvertKeyFnctFromXmlToApi),
  };
}
