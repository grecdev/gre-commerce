import { SET_LINE_POS_X, SET_LINE_WIDTH } from '@actionTypes';

export interface IInitialState {
  width: number;
  posX: number;
}

interface IAction {
  type: string;
  payload: number;
}

const initialState: IInitialState = {
  width: 0,
  posX: 0
};

export default (state = initialState, action: IAction) => {
  const { type, payload } = action;

  switch (type) {
    case SET_LINE_WIDTH:
      return {
        ...state,
        width: payload
      };

    case SET_LINE_POS_X:
      return {
        ...state,
        posX: payload
      };

    default:
      return state;
  }
};
