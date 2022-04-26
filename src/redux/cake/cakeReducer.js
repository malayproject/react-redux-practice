import { BUY_CAKES } from "./cakeActionTypes";

const initialState = {
  numOfCakes: 10,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKES:
      console.log("state is , payload id ", state, action.payload);
      return {
        numOfCakes: state.numOfCakes - action.payload,
      };
    default:
      return state;
  }
};

export default cakeReducer;
