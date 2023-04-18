import { API, XmlModel } from "@/models";

export function ConvertOutputFromXmlToApi(
  outputXml: XmlModel.Output
): API.Output {
  return {
    id: outputXml["@_id"],
    mode: outputXml["@_mode"],
    extra: outputXml["@_extra"],
    charTable: outputXml["@_charTable"],
  };
}
