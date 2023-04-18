import { assertUnreachable } from "@/helper/assertUnreachable";
import { API, XmlModel } from "@/models";

export function ConvertVariableFromXmlToApi(
  VariableXml: XmlModel.Variable
): API.Variable {
  switch (VariableXml["@_xsi:type"]) {
    case "VariableAnalog":
      return <API.VariableAnalog>{
        xsiType: VariableXml["@_xsi:type"],
        scaleUnit: VariableXml["@_scaleUnit"],
        sourceType: VariableXml["@_sourceType"],
        variableId: VariableXml["@_variableId"],
      };

    case "VariableRegulatorSetPoint":
      return <API.VariableRegulatorSetPoint>{
        xsiType: VariableXml["@_xsi:type"],
        scaleUnit: VariableXml["@_scaleUnit"],
        sourceType: VariableXml["@_sourceType"],
        regulatorId: VariableXml["@_regulatorId"],
      };

    case "VariableThreshold":
      return <API.VariableThreshold>{
        xsiType: VariableXml["@_xsi:type"],
        scaleUnit: VariableXml["@_scaleUnit"],
        sourceType: VariableXml["@_sourceType"],
        registerId: VariableXml["@_registerId"],
        thresholdId: VariableXml["@_thresholdId"],
      };

    default:
      assertUnreachable(VariableXml["@_xsi:type"]);
  }
}
