import { atom } from "recoil";

export const isTurn = atom({
  key: "Turn",
  default: "player1",
});

export const pickCell = atom({
  key: "pick",
  default: [0, 1, 2, 3, 4, 5, 6, 7, 8],
});
