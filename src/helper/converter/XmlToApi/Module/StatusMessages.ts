import { API, XmlModel } from "@/models";

export function ConvertStatusMessagesFromXmlToApi(
  statusMessagesXml: XmlModel.StatusMessages
): API.ModuleStatusMessages {
  return {
    enabled: statusMessagesXml["@_enabled"],
    NotificationMode: statusMessagesXml.NotificationMode,
    NotificationDelay: statusMessagesXml.NotificationDelay,
  };
}
