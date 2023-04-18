// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RelayComment {}

import { API, XmlModel } from "@/models";

export function ConvertRelayCommentFromXmlToApi(
  RelayCommentXml: XmlModel.RelayCommentList
): API.RelayComment {
  if (RelayCommentXml) {
    console.error(
      "Coupler is not Empty Implement Function 'ConvertRelayCommentFromXmlToApi'!"
    );
  }

  return {};
}
