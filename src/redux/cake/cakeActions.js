import { BUY_CAKES } from "./cakeActionTypes";

export const buyCakes = (n = 1) => {
  return {
    type: BUY_CAKES,
    payload: n,
  };
};
