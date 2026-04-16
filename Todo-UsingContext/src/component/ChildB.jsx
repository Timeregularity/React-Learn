import React from 'react'
import ChildC from './ChildC'
function ChildB() {
  return (
    <div className='w-auto h-auto p-24 bg-blue-200 rounded-md border-2 border-blue-400'>
     <ChildC/>
    </div>
  )
}

export default ChildB