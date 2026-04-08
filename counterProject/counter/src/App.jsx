import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  

  return (
    <>
      <h2>Counter</h2>
      <p>Count is {count}</p>
      <button onClick={()=>
        {
          setCount(count+1);
        }
      }>Increase</button><br/>
      <button onClick={()=>
        {
          setCount(count-1);
        }
      }>Decrease</button>
    </>
  )
}

export default App
