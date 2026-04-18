import React from 'react'
import { useCart } from '../context/ContextProvider'
function NavBar() {
 const {items}=useCart();
  return (
    <div className='w-full h-auto bg-teal-900 p-5 text-teal-300 flex flex-row justify-between'>
        <div >ShopZone</div>
        <div className='relative w-fit'>
         <div><i className="fa-solid fa-cart-shopping"></i></div>   
         <div className='absolute -top-2 -right-2 bg-orange-600 rounded-full w-4 h-4 flex items-center justify-center text-[10px] text-white'>{items}</div>
        </div>
    </div>
  )
}

export default NavBar