import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCakes } from "../redux";

const CakeComponentHooks = () => {
  const numOfCakes = useSelector((state) => {
    return state.cake.numOfCakes;
  });
  const dispatch = useDispatch();
  const [qtyOfCake, setQtyOfCake] = useState(0);
  return (
    <div className="hookCakeCon">
      {console.log(qtyOfCake)}
      <h1>Number of Cakes: {numOfCakes}</h1>
      <button onClick={() => dispatch(buyCakes())}>Buy 1 cake</button>
      <label htmlFor="qty1">Quantity</label>
      <input
        id="qty1"
        type="number"
        value={qtyOfCake}
        onChange={(e) => setQtyOfCake(e.target.value)}
      ></input>
      <button onClick={() => dispatch(buyCakes(qtyOfCake))}>Buy N cake</button>
    </div>
  );
};

export default CakeComponentHooks;
