import { API, XmlModel } from "@/models";
import { ModuleTypes } from "@/models/Units/ModuleTypes";
import { convertArrayGeneric } from "../../ConvertArrayGeneric";
import { ConvertBeepOnFromXmlToApi } from "./BeepOn";
import { ConvertBinarySensorCommentFromXmlToApi } from "./BinarySensorComment";
import { ConvertIPortFromXmlToApi } from "./IPort";
import { ConvertKeyTableFromXmlToApi } from "./KeyTabels";
import { ConvertOutputPortsFromXmlToApi } from "./OutputPorts";
import { ConvertPeripheryFromXmlToApi } from "./Periphery";
import { ConvertPPortFromXmlToApi } from "./PPort";
import { ConvertRelayCommentFromXmlToApi } from "./RelayComment";
import { ConvertStatusMessagesFromXmlToApi } from "./StatusMessages";
import { ConvertTPortFromXmlToApi } from "./TPort";
import { ConvertVariableFromXmlToApi } from "./Variable";

export function ConvertModuleFromXmlToApi(
  moduleXml: XmlModel.Module
): API.Module {
  return {
    moduleId: moduleXml["@_moduleId"],
    xsiType: <ModuleTypes>moduleXml["@_xsi:type"],
    Name: moduleXml.Name,
    Comment: moduleXml.Comment,

    firmwareDate: moduleXml["@_firmwareDate"],
    serialNo: moduleXml["@_serialNo"],
    foundInBus: moduleXml["@_foundInBus"],

    Peripherys: moduleXml.PeripheryList
      ? convertArrayGeneric(
          moduleXml.PeripheryList.Periphery,
          ConvertPeripheryFromXmlToApi
        )
      : [],

    Variables_numSupportedAnalogVariables:
      moduleXml.VariableList["@_numSupportedAnalogVariables"],
    Variables_numSupportedThresholdRegisters:
      moduleXml.VariableList["@_numSupportedThresholdRegisters"],
    Variables: convertArrayGeneric(
      moduleXml.VariableList.Variable,
      ConvertVariableFromXmlToApi
    ),
    BeepOn: ConvertBeepOnFromXmlToApi(moduleXml.PropertyList.BeepOn),
    StatusMessages: ConvertStatusMessagesFromXmlToApi(
      moduleXml.PropertyList.StatusMessages
    ),
    SendInternalCommandsToBus: moduleXml.PropertyList.SendInternalCommandsToBus,
    PowerFailureCausesKeyD8: moduleXml.PropertyList.PowerFailureCausesKeyD8,
    PermitKeyLockTableA: moduleXml.PropertyList.PermitKeyLockTableA,
    TransponderEnabled: moduleXml.PropertyList.TransponderEnabled,
    OutputPorts: ConvertOutputPortsFromXmlToApi(
      moduleXml.PropertyList.OutputPorts
    ),
    TPort: ConvertTPortFromXmlToApi(moduleXml.PropertyList.TPort),
    IPort: ConvertIPortFromXmlToApi(moduleXml.PropertyList.IPort),
    PPort: ConvertPPortFromXmlToApi(moduleXml.PropertyList.PPort),
    KeyTables: convertArrayGeneric(
      moduleXml.PropertyList.Keys.Table,
      ConvertKeyTableFromXmlToApi
    ),

    RelayComments: [
      ConvertRelayCommentFromXmlToApi(moduleXml.RelayCommentList),
    ],
    BinarySensorComments: [
      ConvertBinarySensorCommentFromXmlToApi(moduleXml.BinarySensorCommentList),
    ],
  };
}
