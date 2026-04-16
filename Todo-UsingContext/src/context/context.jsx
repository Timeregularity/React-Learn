// import { useState,createContext} from 'react'



// function App() {
//   const [bg, setBg] = useState("light");
//   const bgContext=createContext();

//   return (
//    <>
//    <bgContext.Provider value={[bg,setBg]} >
//     <div className='w-screen h-screen flex justify-center items-center main'>
//     <ChildA/>
//    </div>
//    </bgContext.Provider>
   
   
//    </>
//   )
// }
// export {bgContext} 
import { createContext, useContext, useState } from "react";

export const BgContext = createContext();

export const BgProvider = ({ children }) => {
  const [bg, setBg] = useState("light");

  return (
    <BgContext.Provider value={{ bg, setBg }}>
      {children}
    </BgContext.Provider>
  );
};

export const useBg = () => useContext(BgContext);