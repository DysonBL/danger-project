import { ActionType } from "./ActionType";

const initialState = {
  api: [],
};

const ReducerComponent = (
  state = initialState,
  action: { type: string; data: String | Number }
) => {
  switch (action.type) {

    case ActionType.GET_API:
      console.log(action,"hslakhfk");

      return { ...state, api: action.data };
    default:
      return state;
  }
};

export default ReducerComponent;
