import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "./Cartcontext";

function Cart() {
  let totel = 0;

  const items = useContext(CartContext);
  items.cartItems.map((a) => {
    return (totel = parseInt(a.price) * a.count + totel);
  });
  let handleIncrease = (id) => {
    let productIndex = items.cartItems.findIndex((obj) => obj.id === id);
    items.cartItems[productIndex].count++;
    items.setCartItems([...items.cartItems]);
  };
  let handleDecrese = (id) => {
    let productIndex = items.cartItems.findIndex((obj) => obj.id === id);
    items.cartItems[productIndex].count--;
    items.setCartItems([...items.cartItems]);
  };
  let handleRemove = (id) => {
    let productIndex = items.cartItems.findIndex((obj) => obj.id === id);
    let product = items.cartItems[productIndex];
    let confirm = window.confirm(
      `Are want to remove ${product.name} from cart?`
    );
    if (confirm) {
      let productIndex = items.cartItems.findIndex((obj) => obj.id === id);
      items.cartItems.splice(productIndex, 1);
      items.setCartItems([...items.cartItems]);
    }
  };

  return (
    <div className="text-center">
      <Link className="btn btn-outline-dark margin" to="/">
        HOME
      </Link>
      {items.cartItems.length === 0 ? (
        <h2>Your Cart is Empty</h2>
      ) : (
        <h2>
          Total : Rs{" "}
          {items.cartItems
            .map((e) => e.count * e.price)
            .reduce((a, b) => a + b)}
        </h2>
      )}
      <div className="cart-List">
        {
        items.cartItems.map((el) => {
          return (
            <>
              <div className="cart-card">
                <div>
                  <h1>{el.name}</h1>
                </div>
                <div>
                  <h4>
                    PRICE : {el.price}*{el.count} = Rs {el.price * el.count}
                  </h4>
                </div>
                <div>
                  <span>
                    <button
                      className="btn btn-primary margin"
                      onClick={() => handleDecrese(el.id)}
                      disabled={el.count < 2}
                    >
                      -
                    </button>
                  </span>
                  <span className="badge bg-primary rounded-pill">
                    Quentity: {el.count}
                  </span>
                  <span>
                    <button
                      className=" btn btn-primary margin "
                      onClick={() => handleIncrease(el.id)}
                    >
                      +
                    </button>
                  </span>
                </div>
                <div>
                  <button
                    className="btn btn-danger margin"
                    onClick={() => handleRemove(el.id)}
                  >
                    REMOVE
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
