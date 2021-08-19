import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useContext, useState } from "react";
import CartContext from "./Cartcontext";


function Card(props) {
  const items = useContext(CartContext);
  let star = [1, 2, 3, 4, 5];
  const [Rating, setRating] = useState(0);
  const [Hover, setHover] = useState(0);

  return (
    
    <div className="col mb-5">
      <div className="card h-100 rounded">
        <img src="http://placehold.it/200x100" alt="..." />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{props.data.name}</h5>
            <h6>{props.data.description}</h6>
            <div>
        {
        star.map((e,index) => {
          let ratingValue = e;
          return (
            <label>
              <input
                type="radio"
                name="ratings"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />
              <FontAwesomeIcon
                icon={faStar}
                key={index*2}
                color={
                  ratingValue <= (Hover || Rating) ? "gold" : "hsl(0, 0%, 90%)"
                }
                size="lg"
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(0)}
              />
            </label>
          );
        })}
      </div>
            RS : {props.data.price}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button
              className="text-center btn btn-outline-dark mt-auto cart-icon"

              onClick={() => props.handleCart(props.data.id)}
              disabled={items.cartItems.some((obj) => obj.id === props.data.id)}
            >
              <i className="bi-cart-fill me-1"></i>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
