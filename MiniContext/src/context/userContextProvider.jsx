import React from "react";
import userContext from "./userContext";
const userContextProvider=({children})=>
 {  
const [user,setuser]=React.useState(null);
    return(
        <>
        <userContext.Provider value={{user,setuser}}>
        {children}
        </userContext.Provider>
        </>
    )
 }
