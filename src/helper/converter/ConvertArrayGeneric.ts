import { isArray } from "..";

export function convertArrayGeneric<F, T>(
  from: undefined | "" | F | F[],
  func: (param: F) => T
): T[] {
  // console.log("ConvertArray: ", from, func);

  if (from) {
    if (isArray(from)) {
      return (from as F[]).map((val) => func(val));
    } else {
      return [func(from as F)];
    }
  } else {
    return [];
  }
}
