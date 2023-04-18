import { API, XmlModel } from "@/models";

export function ConvertBeepOnFromXmlToApi(
  beepOnXml: XmlModel.BeepOn
): API.ModuleBeepOn {
  return {
    enabled: beepOnXml["@_enabled"],
    KeyPress: beepOnXml.KeyPress,
    Errors: beepOnXml.Errors,
  };
}
