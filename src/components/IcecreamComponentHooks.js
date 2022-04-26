import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIcecreams } from "../redux";

const IcecreamComponentHooks = () => {
  const [qtyOfIcecream, setQtyOfIcecream] = useState(0);
  const numOfIcecreams = useSelector((state) => {
    return state.icecream.numOfIcecreams;
  });
  const dispatch = useDispatch();
  return (
    <div className="hookIcecreamCon">
      {console.log(qtyOfIcecream)}
      <h1>Number of Icecreams: {numOfIcecreams}</h1>
      <button onClick={() => dispatch(buyIcecreams())}>Buy 1 cake</button>
      <label htmlFor="qty1">Quantity</label>
      <input
        id="qty1"
        type="number"
        value={qtyOfIcecream}
        onChange={(e) => setQtyOfIcecream(e.target.value)}
      ></input>
      <button onClick={() => dispatch(buyIcecreams(qtyOfIcecream))}>
        Buy N cake
      </button>
    </div>
  );
};

export default IcecreamComponentHooks;
