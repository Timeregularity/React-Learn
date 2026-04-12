import { useState } from 'react'
import InputDiv from "../components/InputDiv"
import useCurrencyInfo from "../hooks/useCurrencyInfo";
function App() {
  const [baseCurrency, setBaseCurrency] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
 
  const data = useCurrencyInfo(baseCurrency, targetCurrency);

  


  return (
    <div className="bg-[url(/dollar-wallpaper.jpg)] w-screen h-screen flex items-center justify-center ">
      <div>
        <div className=" bg-[rgba(10,60,30,0.7)] rounded-md p-5">
          <h2 className="text-green-100 ">Currency Converter</h2>

          <div className='flex flex-col gap-4'>

          <InputDiv
            label="From"
            num={amount}
            setNum={setAmount}
            onChange={setBaseCurrency}
          />
           <InputDiv
            label="To"
            num={convertedAmount}
            isReadOnly={true}
             onChange={setTargetCurrency}
            />

              
            </div><br/>
            <div className='flex justify-center'>
              
            <button className='w-auto h-auto p-3  text-amber-100 bg-[rgba(10,60,30,0.7)] rounded-md border-amber-100 border-2 hover:bg-amber-100 hover:text-[rgba(10,60,30,0.7)] '
  disabled={!baseCurrency || !targetCurrency || amount === "" || !data}
  onClick={() =>
    setConvertedAmount((data?.data?.[targetCurrency] || 0) * amount)
  }
>
  Exchange
</button>
            </div>
            
          </div>

        </div>
      </div>
    
  )
}

export default App