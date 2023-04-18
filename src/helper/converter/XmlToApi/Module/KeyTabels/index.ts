import { convertArrayGeneric } from "@/helper/converter/ConvertArrayGeneric";
import { API, XmlModel } from "@/models";
import { ConvertKeyTableKeyFromXmlToApi } from "./Key";

export function ConvertKeyTableFromXmlToApi(
  keyTableXml: XmlModel.Table
): API.KeyTable {
  return {
    id: keyTableXml["@_id"],
    Keys: convertArrayGeneric(keyTableXml.Key, ConvertKeyTableKeyFromXmlToApi),
  };
}
