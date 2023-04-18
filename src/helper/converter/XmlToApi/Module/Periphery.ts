import { API, XmlModel } from "@/models";

export function ConvertPeripheryFromXmlToApi(
  peripheryXml: XmlModel.Periphery
): API.Periphery {
  return {
    xsiType: peripheryXml["@_xsi:type"],
    name: peripheryXml["@_name"],
  };
}
