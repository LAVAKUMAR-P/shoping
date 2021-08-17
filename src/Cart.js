import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "./Cartcontext";

function Cart() {
  let totel = 0;

  const items = useContext(CartContext);
  items.cartItems.map((a) => {
    return (totel = parseInt(a.price) * a.count + totel);
  });
  let increase = (id) => {
    let productIndex = items.cartItems.findIndex((obj) => obj.id === id);
    items.cartItems[productIndex].count++;
    items.setCartItems([...items.cartItems]);
  };
  let decrese = (id) => {
    let productIndex = items.cartItems.findIndex((obj) => obj.id === id);
    items.cartItems[productIndex].count--;
    items.setCartItems([...items.cartItems]);
  };
  let remove = (id) => {
    let confirm = window.confirm("Are want to remove product from cart?");
    if (confirm) {
      let productIndex = items.cartItems.findIndex((obj) => obj.id === id);
      items.cartItems.splice(productIndex, 1);
      items.setCartItems([...items.cartItems]);
    }
  };

  return (
    <div className="text-center">
      {items.cartItems.map((el) => {
        return (
          <>
            <li class="list-group-item d-inline-flex p-5 bd-highlight">
              <img
                className="card-img-top"
                src="http://placehold.it/200x100"
                alt="..."
              />
              <div class="ms-2 me-auto">
                <div class="fw-bold fs-3">{el.name}</div>
                <span className="fs-4">{el.price}</span>
              </div>
              <div>
                <span>
                  <button
                    className=" btn btn-primary margin "
                    onClick={() => increase(el.id)}
                  >
                    +
                  </button>
                  <span class="badge bg-primary rounded-pill">{el.count}</span>
                  <button
                    className="btn btn-primary margin"
                    onClick={() => decrese(el.id)}
                    disabled={el.count < 2}
                  >
                    -
                  </button>
                </span>
              </div>

              <div>
                <button
                  className="btn btn-danger margin"
                  onClick={() => remove(el.id)}
                >
                  REMOVE
                </button>
              </div>
            </li>
          </>
        );
      })}

      <h6>Rs. {totel}</h6>
      <Link className="btn btn-outline-dark" to="/">
        HOME
      </Link>
    </div>
  );
}

export default Cart;
