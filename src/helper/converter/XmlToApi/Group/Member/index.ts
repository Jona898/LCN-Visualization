import { API, XmlModel } from "@/models";

export function ConvertMemberFromXmlToApi(
  memberXml: XmlModel.Member
): API.GroupMember {
  return {
    moduleId: memberXml["@_moduleId"],
  };
}
