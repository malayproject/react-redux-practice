import { BUY_ICECREAMS } from "./icecreamActionTypes";

export const buyIcecreams = (n = 1) => {
  return {
    type: BUY_ICECREAMS,
    payload: n,
  };
};
