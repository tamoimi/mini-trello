import { atom } from "recoil";

export const toDoState = atom({
  key: "toDo",
  default: {
    to_do: ["a", "b", "c", "d", "e", "f"],
    doing: [],
    done: [],
  },
});
