import React, { useContext } from 'react'
import Card from './Card';
import CartContext from './Cartcontext';

function Header() {
    const cartcontext = useContext(CartContext);



  let Products=[
    {
      id:1,
      name:"Product 1",
      description : "loren",
      price : 40,
      count :0,
    },
    {
      id:2,
      name:"Product 2",
      description : "loren",
      price : 60,
      count :0,
    },
    {
      id:3,
      name:"Product 3",
      description : "loren",
      price : 100,
      count :0,
    }
  ]




  let addToCart = (id) => {
    let product = Products.find(obj => obj.id === id);
    product.count++;
    cartcontext.setCartItems([...cartcontext.cartItems,product]);
}
    return (
        <div>
        <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
                <h1 className="display-4 fw-bolder">Shop in style</h1>
                <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
            </div>
        </div>
    </header>  
    <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {
              Products.map((Product) =>{
               return <Card data={Product} handleCart={addToCart} />
              })
            }
            </div>
          </div>
      </section>
      </div>
    )
}

export default Header
