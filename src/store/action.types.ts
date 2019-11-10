import { State } from "./state";
import {} from "react-redux";
import { ThunkAction } from "redux-thunk";
export type SetQuestBord = <K extends Exclude<keyof State, "frame">>(
  key: K,
  value: State[K]
) => {
  type: "SET_QUEST_BORD";
  payload: {
    key: K;
    value: State[K];
  };
};

export type SetFrame = (
  frame: string
) => {
  type: "SET_CANVAS_FRAME";
  payload: { frame: string };
};
export type Action = ReturnType<SetQuestBord | SetFrame>;
