import React from 'react'
import ChildB from './ChildB'
function ChildA() {
  return (
    <div className='w-auto h-auto p-32 bg-fuchsia-200 rounded-md border-2 border-fuchsia-400'>
     <ChildB/>
    </div>
  )
}

export default ChildA