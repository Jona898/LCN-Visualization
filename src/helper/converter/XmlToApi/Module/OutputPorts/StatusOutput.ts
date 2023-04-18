import { API, XmlModel } from "@/models";

export function ConvertStatusOutputFromXmlToApi(
  statusOutputXml: XmlModel.StatusOutput
): API.StatusOutput {
  return {
    id: statusOutputXml["@_id"],
    destTable: statusOutputXml["@_destTable"],
    destKey: statusOutputXml["@_destKey"],
    status: statusOutputXml["#text"],
  };
}
