import React, { useState } from "react";
import { connect } from "react-redux";
import { buyIcecreams } from "../redux";

const IcecreamComponent = ({ numOfIcecreams, buyIcecreams }) => {
  const [qtyOfIcecream, setQtyOfIcecream] = useState(0);
  return (
    <div className="cakeCon">
      {console.log(qtyOfIcecream)}
      <h1>Number of Icecreams: {numOfIcecreams}</h1>
      <button onClick={() => buyIcecreams()}>Buy 1 Icecream</button>
      <label htmlFor="qty2">Quantity</label>
      <input
        id="qty2"
        type="number"
        value={qtyOfIcecream}
        onChange={(e) => setQtyOfIcecream(e.target.value)}
      ></input>
      <button onClick={() => buyIcecreams(qtyOfIcecream)}>
        Buy N Icecreams
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfIcecreams: state.icecream.numOfIcecreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIcecreams: (qtyOfIcecream) => dispatch(buyIcecreams(qtyOfIcecream)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IcecreamComponent);
