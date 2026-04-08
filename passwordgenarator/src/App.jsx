import { useCallback, useState, useEffect ,useRef} from 'react'
function App() {
  let [password, setPassword] = useState("");
  let [numAllowed, setnumAllowed] = useState(false);
  let [charAllowed, setcharAllowed] = useState(false);
  let [length, setLength] = useState(8);


  let passwordGenarator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let num = "0123456789";
    let char = ";!@#$%^&*(){}[];:,.?-_+=|\/<>";
    if (numAllowed) str += num;
    if (charAllowed) str += char;
    for (let i = 1; i <= length; i++) {
      let ch = Math.floor(Math.random() * str.length);
      pass += str.charAt(ch);
    }
    setPassword(pass);
  }, [numAllowed, charAllowed, length]);
  useEffect(() => { passwordGenarator() }, [numAllowed, charAllowed, length, passwordGenarator]);

  
  let copyPassword=useCallback(()=>
  {
  window.navigator.clipboard.writeText(password);
  },[password]);
  return (
    <>
      <div className='w-full h-screen bg-zinc-950 flex justify-center pt-56 ' >

        <div className=" w-auto h-min bg-gray-800 p-3 flex flex-col justify-center items-center gap-2 rounded-md text-amber-50">
          <h1>PassWord Genarator</h1>
          <div className="flex items-center bg-amber-50 rounded-md w-md h-9 overflow-hidden">
            <input className="flex-1 bg-transparent outline-none px-2 text-orange-500" type="text" value={password}  />
            <button className="bg-blue-700 text-white px-3 h-full cursor-pointer hover:bg-blue-300 " onClick={copyPassword}>Copy</button>
          </div>
          <div className='flex flex-row gap-2 text-orange-500'>
            <div>
              <input type="range" min={8} max={100} value={length} className='cursor-pointer mr-1.5' name='len' onChange={(e) => setLength(e.target.value)}></input>
              <label  >Length:{length}</label>
            </div>
            <div>
              <input type="checkbox" defaultChecked={numAllowed} id="numInput" onChange={() => {
                setnumAllowed(prev => !prev);
              }} />
              <label  >Number</label>
            </div>
            <div>
              <input type="checkbox" defaultChecked={charAllowed} id="charInput" onChange={() => {
                setcharAllowed(prev => !prev);
              }} />
              <label  >Special Char</label>
            </div>



          </div>
        </div>
      </div>

    </>
  )
}

export default App
