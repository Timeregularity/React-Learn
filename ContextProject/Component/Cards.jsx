import React from 'react'

function Cards() {
  return (
    <div className='bg-zinc-800 border-2 border-gray-500 w-auto h-auto flex flex-col items-center justify-center gap-10 text-white p-10 rounded-xl'>
     <div>A</div>
     <div>A</div>
     <div>A</div>
     <div><button className='w-xs h-auto p-3 border-2 border-gray-400 rounded-lg'>Add</button></div>
    </div>
  )
}

export default Cards