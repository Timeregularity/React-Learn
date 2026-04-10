import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-[url(/dollar-wallpaper.jpg)] w-screen h-screen">
        <div >
         <label><input type="text"></input></label>
        </div>
      </div>

    </>
  )
}

export default App
