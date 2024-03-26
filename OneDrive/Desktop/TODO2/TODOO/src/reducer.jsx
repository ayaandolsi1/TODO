import { ADD_ITEM, UPDATE_ITEM, DELETE_ITEM } from './action';

const initialState = {
  list: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        list: [...state.list, action.payload]
      };
    case UPDATE_ITEM:
      const newList = [...state.list];
      newList[action.payload.index] = action.payload.item;
      return {
        ...state,
        list: newList
      };
    case DELETE_ITEM:
      return {
        ...state,
        list: state.list.filter((item, index) => index !== action.payload)
      };
    default:
      return state;
  }
};

export default reducer;
