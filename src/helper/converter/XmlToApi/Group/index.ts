import { API, XmlModel } from "@/models";
import { convertArrayGeneric } from "../../ConvertArrayGeneric";
import { ConvertMemberFromXmlToApi as ConvertGroupMemberFromXmlToApi } from "./Member";

export function ConvertGroupFromXmlToApi(groupXml: XmlModel.Group): API.Group {
  return {
    groupId: groupXml["@_groupId"],
    Name: groupXml.Name,
    Members: convertArrayGeneric(
      groupXml.MemberList.Member,
      ConvertGroupMemberFromXmlToApi
    ),
  };
}
