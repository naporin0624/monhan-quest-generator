import { createStore, applyMiddleware, Reducer } from "redux";
import { State } from "./state";
import thunk from "redux-thunk";
import { SetQuestBord, SetFrame, Action } from "./action.types";

const initialState: State = {
  title: "緊急クエスト",
  subtitle: "〜作業通話の行方〜",
  difficult: 8,
  requestDetail: "現在からの作業通話依頼",
  destination: "discord[General]",
  reward: "ありがとうの気持ち",
  contract: "PCの電気代と通信量",
  environment: "不安定",
  specialCondition: "特になし",
  client: "なぽりたん",
  clientNote: "作業通話欲しいんだけど誰か氏〜w",
  frame: null
};

export const setState: SetQuestBord = (key, value) => {
  return {
    type: "SET_QUEST_BORD",
    payload: { key, value }
  };
};

export const setFrame: SetFrame = frame => {
  return {
    type: "SET_CANVAS_FRAME",
    payload: { frame }
  };
};
const reducer: Reducer<State, Action> = (state = initialState, action) => {
  switch (action.type) {
    case "SET_QUEST_BORD":
      const { key, value } = action.payload;
      return {
        ...state,
        [key]: value
      };
    case "SET_CANVAS_FRAME":
      const { frame } = action.payload;
      return {
        ...state,
        frame
      };
    default:
      return state;
  }
};

export const store = createStore(reducer, applyMiddleware(thunk));
