import "./App.css";
import Navbar from "./Navbar";
import Header from "./Header";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { CartProvider } from "./Cartcontext";
import Cart from "./CartItem";
import Footer from "./Footer";



function App() {
  
  
  return (
    <div>
    <Router>
       <Switch>
         <CartProvider>
          <Navbar key="1"/>
          <Route key="2" path="/" component={Header} exact={true}/>
          <Route key="3" path="/" component={Footer} exact={true}/>
          <Route key="4" path="/cart" component={Cart} exact={true}/>
         </CartProvider>
      </Switch>
    </Router>
    </div>
   
  );
  
}

export default App;
