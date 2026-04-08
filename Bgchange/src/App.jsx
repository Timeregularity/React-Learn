import { useState } from 'react'
import './App.css'
import Color from './color'

function App() {
  const [bg, setBg] = useState("white");

  return (
    <div style={{ backgroundColor: bg, height: "100vh" }}>
      <Color setBg={setBg} />
    </div>
  )
}

export default App;