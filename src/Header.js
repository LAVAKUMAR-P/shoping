import React, { useContext } from "react";
import Card from "./Card";
import CartContext from "./Cartcontext";
import Products from "./Productdata";

function Header() {
  const cartcontext = useContext(CartContext);
  let addToCart = (id) => {
    let product = Products.find((obj) => obj.id === id);
    product.count++;
    cartcontext.setCartItems([...cartcontext.cartItems, product]);
  };
  return (
    <div>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">www.Sample.in</h1>
          </div>
        </div>
      </header>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-4 justify-content-center">
            {Products.map((Product,index) => {
              return <Card key={index} data={Product} handleCart={addToCart} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
