import * as actionTypes from '../actionTypes';

export const increaseCounter = index => (dispatch, getState, total) => {
  dispatch({
    type: actionTypes.INCREASE,
    selected: index,
  });
};

export const decreaseCounter = index => (dispatch, getState) => {
  dispatch({
    type: actionTypes.DECREASE,
    selected: index,
  });
};

export const addCounter = () => (dispatch, getState) => {
  dispatch({
    type: actionTypes.ADD_COUNTER,
  });
};

export const removeCounter = () => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_COUNTER,
  });
};

export const removeTotal = () => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_TOTAL,
  });
};

export const addTotal = () => (dispatch, getState) => {
  dispatch({
    type: actionTypes.ADD_TOTAL,
  });
};

