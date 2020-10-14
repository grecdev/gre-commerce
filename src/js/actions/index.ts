import { SET_LINE_POS_X, SET_LINE_WIDTH } from '@actionTypes';

export const setLineWidth = (width: number) => ({
  type: SET_LINE_WIDTH,
  payload: width
});

export const setLinePosX = (posX: number) => ({
  type: SET_LINE_POS_X,
  payload: posX
});
