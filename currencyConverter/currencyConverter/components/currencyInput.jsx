import React from 'react'


function CurrencyInput({onChange}) {
    
  return (
    <div><div >
    <select className='bg-[rgba(10,60,30)] text-amber-100 rounded-md' onChange={(e) => onChange(e.target.value)}>
    <option value="">Select Currency</option>
    <option value="EUR">EUR</option>
    <option value="USD">USD</option>
    <option value="JPY">JPY</option>
    <option value="BGN">BGN</option>
    <option value="CZK">CZK</option>
    <option value="DKK">DKK</option>
    <option value="GBP">GBP</option>
    <option value="HUF">HUF</option>
    <option value="PLN">PLN</option>
    <option value="RON">RON</option>
    <option value="SEK">SEK</option>
    <option value="CHF">CHF</option>
    <option value="ISK">ISK</option>
    <option value="NOK">NOK</option>
    <option value="HRK">HRK</option>
    <option value="RUB">RUB</option>
    <option value="TRY">TRY</option>
    <option value="AUD">AUD</option>
    <option value="BRL">BRL</option>
    <option value="CAD">CAD</option>
    <option value="CNY">CNY</option>
    <option value="HKD">HKD</option>
    <option value="IDR">IDR</option>
    <option value="ILS">ILS</option>
    <option value="INR">INR</option>
    <option value="KRW">KRW</option>
    <option value="MXN">MXN</option>
    <option value="MYR">MYR</option>
    <option value="NZD">NZD</option>
    <option value="PHP">PHP</option>
    <option value="SGD">SGD</option>
    <option value="THB">THB</option>
    <option value="ZAR">ZAR</option>
    </select>
    </div></div>
  )
}

export default CurrencyInput;