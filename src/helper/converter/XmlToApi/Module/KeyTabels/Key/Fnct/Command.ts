import { API, XmlModel } from "@/models";

export function ConvertKeyFnctCommandFromXmlToApi(
  commandXml: XmlModel.Command
): API.Command {
  return {
    type: commandXml["@_type"],
    comment: commandXml["@_comment"],
    command: commandXml["#text"],
  };
}
