import * as actionTypes from '../actionTypes';

export const increaseCounter = index => (dispatch) => {
  dispatch({
    type: actionTypes.INCREASE,
    selected: index,
  });
};

export const decreaseCounter = index => (dispatch) => {
  dispatch({
    type: actionTypes.DECREASE,
    selected: index,
  });
};

export const addCounter = () => (dispatch) => {
  dispatch({
    type: actionTypes.ADD_COUNTER,
  });
};

export const removeCounter = () => (dispatch) => {
  dispatch({
    type: actionTypes.REMOVE_COUNTER,
  });
};
