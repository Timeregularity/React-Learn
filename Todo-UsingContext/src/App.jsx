// import { useState,createContext} from 'react'
// import ChildA from './component/ChildA'


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
// export  default App
import { BgProvider, useBg } from "./context/context";
import ChildA from "./component/ChildA";

function AppContent() {
  const { bg } = useBg();

  return (
    <div
      className={`w-screen h-screen flex justify-center items-center transition-colors duration-300 ${
        bg === "dark" ? "bg-zinc-900" : "bg-slate-100"
      }`}
    >
      <ChildA />
    </div>
  );
}

function App() {
  return (
    <BgProvider>
      <AppContent />
    </BgProvider>
  );
}

export default App;
