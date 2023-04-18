import { API, XmlModel } from "@/models";
import { convertArrayGeneric } from "@/helper/converter/ConvertArrayGeneric";
import { ConvertOutputFromXmlToApi } from "./Output";
import { ConvertStatusOutputFromXmlToApi } from "./StatusOutput";

export function ConvertOutputPortsFromXmlToApi(
  outputPortsXml: XmlModel.OutputPorts
): API.OutputPorts {
  return {
    xsiType: outputPortsXml["@_xsi:type"],
    autoOff: outputPortsXml["@_autoOff"],
    endSwitches: outputPortsXml["@_endSwitches"],
    Outputs: convertArrayGeneric(
      outputPortsXml.Output,
      ConvertOutputFromXmlToApi
    ),
    StatusOutputs: convertArrayGeneric(
      outputPortsXml.StatusCommands.Output,
      ConvertStatusOutputFromXmlToApi
    ),
  };
}
