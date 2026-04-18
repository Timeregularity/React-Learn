import React, { useState } from 'react'
import { useCart } from '../context/ContextProvider';

function DisplyItem(data) {
  const {added}=useCart();
  return (
    <div className='w-8xl p-6 h-auto border-2 border-gray-400 rounded-2xl m-5 flex flex-row gap-3 '>
      {
      added.map((item, index) => (
      <div key={index} className="border p-3 rounded flex flex-row gap-1 text-gray-300">
        <p>{item[0]}</p>
        <p>₹{item[1]}</p>
        <p>Qty: {item[2]}</p>
      </div>
    ))
  }
    </div>
  )
}

export default DisplyItem;