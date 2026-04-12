import React from 'react'
import CurrencyInput from './currencyInput';

function InputDiv({ onChange, num, setNum, isReadOnly = false, label }) {
  return (
    <div className='flex flex-row gap-5 text-emerald-900 w-full h-auto bg-amber-100 p-7 rounded-md'>
      
      <div>
        <label>{label}</label><br/>

        <input
          className='border-none outline-none focus:outline-none focus:ring-0'
          type="text"
          value={num}
          onChange={(e) => setNum && setNum(e.target.value)}
          readOnly={isReadOnly}
        />
      </div>

      <div>
        <label>Currency Type</label><br/>

        <CurrencyInput onChange={onChange} />
      </div>

    </div>
  )
}

export default InputDiv;