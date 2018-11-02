import {
  INCREASE,
  DECREASE,
  ADD_COUNTER,
  REMOVE_COUNTER,
  ADD_TOTAL,
  REMOVE_TOTAL,
} from '../actionTypes';

import { counter as counterInitialState } from '../initialState';

const counterReducer = (state = counterInitialState, action) => {
  const { items } = state;
  const { total } = state.total;
  const { selected } = action;
  let newItems;
  let newTotal;

  switch (action.type) {
    case INCREASE:
      newItems = [
        ...items.slice(0, selected),
        items[selected] + 1,
        ...items.slice(selected + 1),
      ],
      newTotal = total + 1;

      return {
        ...state,
        selected,
        total: newTotal,
        items: newItems,
      };
    case DECREASE:
      newItems = [
        ...items.slice(0, selected),
        items[selected] - 1,
        ...items.slice(selected + 1),
      ],
      newTotal = total - 1;

      return {
        ...state,
        selected,
        total: newTotal,
        items: newItems,
      };
    case ADD_COUNTER:
      newItems = [
        ...items,
        0, // this is a new item
      ];

      return {
        ...state,
        items: newItems,
      };
    case REMOVE_COUNTER:
      // remove the last item
      newItems = [
        ...items.slice(0, items.length - 1),
      ];

      return {
        ...state,
        items: newItems,
      };
      case ADD_TOTAL:
        total1 = state.total + 1

      return {
        ...state, 
        total: total1,       
      };
      case REMOVE_TOTAL:
        state.total - 1   

      return {
        ...state,
        
      };
    default:
      return state;
  }
};

export default counterReducer;
