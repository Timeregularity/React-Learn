import { useState } from 'react'
import NavBar from '../Component/NavBar'
import CardsLay from '../Layout/CardsLay'
import DisplyItem from '../Component/DisplyItem'


function App() {
  const [count, setCount] = useState(0)

  return (
<>
<div className='h-screen w-screen bg-zinc-800'>
  <NavBar/>
  <CardsLay/>
  <DisplyItem/>
</div>

</>
  )
}

export default App
