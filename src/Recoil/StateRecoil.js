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
