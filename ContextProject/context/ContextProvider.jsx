import React, { useContext, useState } from 'react'
import { createContext } from "react";
const ProContext=createContext();

function ContextProvider({children}) {
     const [items,setItems]=useState(0);
     const [singleItems,setSingleItems]=useState(1);
     const [added,setAdded]=useState([]);

  return (
   
    <ProContext.Provider value={{items,setItems,added,setAdded,singleItems,setSingleItems}} >
     {children}
    </ProContext.Provider>
  )
}
export const useCart=()=>{
    return useContext(ProContext);
}
export default ContextProvider
