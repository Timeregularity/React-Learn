import React from 'react'
import Cards from '../Component/Cards'
function CardsLay() {
  return (
    <div className='flex flex-row justify-evenly m-1.5'>
      <Cards data={{name:"Wireless Earbuds",pic:"🎧",descr:"Noise cancelling, 24hr battery",price:"₹1,299"}}/>
      <Cards data={{  name: "Air Runner Pro",     pic: "👟", descr: "Lightweight mesh, cushioned sole",  price: "₹3499 "}}/>
      <Cards data={ { name: "Silk Scarf",         pic: "🧣", descr: "100% silk, floral print",           price: "₹1899"}}/>
    </div>
  )
}

export default CardsLay