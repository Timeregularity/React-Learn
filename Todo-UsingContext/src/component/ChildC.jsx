// import React from 'react'
// import { useContext } from 'react'
// import { bgContext } from '../App';
// function ChildC() {
//     const background=useContext(bgContext);
   
//   return (
//     <div className='w-lg h-auto p-14 bg-yellow-200 rounded-md border-2 border-yellow-400 flex justify-center '>
//      <button onClick={()=>{bg==="light"?background[1]("dark"):background[1]("light")}} className='bg-zinc-700 rounded-md text-orange-400 w-18 h-12 cursor-pointer'>Dark</button>
//     </div>
//   )
// }

// export default ChildC
import { useBg } from "../context/context";

function ChildC() {
  const { bg, setBg } = useBg();
  const isDark = bg === "dark";

  return (
    <div className="w-lg h-auto p-14 bg-yellow-200 rounded-md border-2 border-yellow-400 flex justify-center">
      <button
        onClick={() => setBg(isDark ? "light" : "dark")}
        className="bg-zinc-700 rounded-md text-orange-400 w-18 h-12 cursor-pointer"
      >
        {isDark ? "Light" : "Dark"}
      </button>
    </div>
  );
}

export default ChildC;
