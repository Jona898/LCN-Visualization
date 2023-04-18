import { XmlModel as xmlModel } from "@/models";
import { API } from "@/models";
import { convertArrayGeneric } from "../ConvertArrayGeneric";
import { ConvertCouplerFromXmlToApi } from "./Coupler";
import { ConvertGroupFromXmlToApi } from "./Group";
import { ConvertModuleFromXmlToApi } from "./Module";
import { ConvertUnprogComponentsFromXmlToApi } from "./UnprogComponents";

export function convertSegmentToApiModel(
  xmlStructure: xmlModel.SegmentList
): API.Segment[] {
  console.log("Start Converting Segment");

  return convertArrayGeneric(xmlStructure.Segment, (segment) => {
    return <API.Segment>{
      segmentId: segment["@_segmentId"],
      Couplers: convertArrayGeneric(
        segment.CouplerList,
        ConvertCouplerFromXmlToApi
      ),
      Modules: convertArrayGeneric(
        segment.ModuleList.Module,
        ConvertModuleFromXmlToApi
      ).sort((a, b) => a.moduleId - b.moduleId),
      Groups: convertArrayGeneric(
        segment.GroupList.Group,
        ConvertGroupFromXmlToApi
      ).sort((a, b) => a.groupId - b.groupId),
      UnprogComponents: convertArrayGeneric(
        segment.UnprogComponentList,
        ConvertUnprogComponentsFromXmlToApi
      ),
    };
  });
}
