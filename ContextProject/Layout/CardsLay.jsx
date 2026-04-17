import React from 'react'
import Cards from '../Component/Cards'
function CardsLay() {
  return (
    <div className='flex flex-row justify-evenly m-1.5'>
      <Cards/>
      <Cards/>
      <Cards/>
    </div>
  )
}

export default CardsLay