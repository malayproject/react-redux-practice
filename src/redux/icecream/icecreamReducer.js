import { BUY_ICECREAMS } from "./icecreamActionTypes";

const initialState = {
  numOfIcecreams: 20,
};

const icecreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAMS:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - action.payload,
      };
    default:
      return state;
  }
};

export default icecreamReducer;
