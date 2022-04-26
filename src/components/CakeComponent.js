import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCakes } from "../redux";

const CakeComponent = ({ numOfCakes, buyCakes }) => {
  const [qtyOfCake, setQtyOfCake] = useState(0);
  return (
    <div className="cakeCon">
      {console.log(qtyOfCake)}
      <h1>Number of Cakes: {numOfCakes}</h1>
      <button onClick={() => buyCakes()}>Buy 1 Cake</button>
      <label htmlFor="qty">Quantity</label>
      <input
        id="qty"
        type="number"
        value={qtyOfCake}
        onChange={(e) => setQtyOfCake(e.target.value)}
      ></input>
      <button onClick={() => buyCakes(qtyOfCake)}>Buy N Cakes</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCakes: (qtyOfCake) => dispatch(buyCakes(qtyOfCake)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeComponent);
