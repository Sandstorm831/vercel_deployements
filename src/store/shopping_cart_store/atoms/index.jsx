import { atom} from "recoil";

export const loadingState = atom({
  key: "loadingState",
  default: false,
});

export const productArray = atom({
  key: "productArray",
  default: [],
});