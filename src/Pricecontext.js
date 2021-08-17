import React, { useState } from "react";

let PriceContext = React.createContext();

export default PriceContext;

//provide data to children

export const TotelProvider =({children}) =>{
  const [totel, setTotel] = useState([])
  return <PriceContext.Provider value={{totel, setTotel}}>
            {children}
        </PriceContext.Provider>

}