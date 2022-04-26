import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCakes, buyIcecreams } from "../redux";

const ItemComponent = ({ numOfItems, buyItems, items }) => {
  const [qtyOfItem, setQtyOfItem] = useState(0);

  return (
    <div className="itemCon">
      {console.log(qtyOfItem)}
      <h1>
        Number of {items}s: {numOfItems}
      </h1>
      <button onClick={() => buyItems()}>Buy 1 {items}</button>
      <label htmlFor="qty3">Quantity</label>
      <input
        id="qty3"
        type="number"
        value={qtyOfItem}
        onChange={(e) => setQtyOfItem(e.target.value)}
      ></input>
      <button onClick={() => buyItems(qtyOfItem)}>Buy N {items}s</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    numOfItems: ownProps.cake
      ? state.cake.numOfCakes
      : state.icecream.numOfIcecreams,
    items: ownProps.cake ? "Cake" : "Icecream",
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    buyItems: ownProps.cake
      ? (qtyOfItem) => dispatch(buyCakes(qtyOfItem))
      : (qtyOfItem) => dispatch(buyIcecreams(qtyOfItem)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemComponent);
