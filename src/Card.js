import React, { useContext } from "react";
import CartContext from "./Cartcontext";

function Card(props) {
  const items = useContext(CartContext);

  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img
          className="card-img-top"
          src="http://placehold.it/200x100"
          alt="..."
        />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{props.data.name}</h5>
            <h6>{props.data.description}</h6>
            RS : {props.data.price}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button
              className="text-center btn btn-outline-dark mt-auto"
              onClick={() => props.handleCart(props.data.id)}
              disabled={items.cartItems.some((obj) => obj.id === props.data.id)}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
