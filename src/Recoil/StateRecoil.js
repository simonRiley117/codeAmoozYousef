import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

export const searchItem = atom({
  key: "search", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
export const tourguid = atom({
  key: "guid", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
