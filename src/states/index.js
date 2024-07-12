import { atom } from "recoil";

export const currentPageState = atom({
  key: "currentPageState",
  default: 1,
});

export const locationsState = atom({
  key: "locationsState",
  default: JSON.parse(localStorage.getItem("locations")) || {},
});
