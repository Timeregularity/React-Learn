import React from 'react'
import { useCart } from '../context/ContextProvider'

function Cards({ data }) {
  const { items, setItems, added, setAdded } = useCart();

  const handleItems = () => { setItems(items + 1) }

  const addItems = (data) => {
    setAdded(prev => {
      const existing = prev.find(item => item[0] === data.name);
      if (existing) {
        return prev.map(item =>
          item[0] === data.name ? [item[0], item[1], item[2] + 1] : item
        );
      }
      return [...prev, [data.name, data.price, 1]];
    });
  };

  const handleChange = (data) => {
    handleItems();
    addItems(data);
    handleSingleItems();
  }
  return (
    <div className='bg-zinc-800 border-2 border-gray-500 w-auto h-auto flex flex-col items-center justify-center gap-10 text-white p-10 rounded-xl'>
      <div className='scale-200'>{data.pic}</div>
      <div className='text-white'>{data.name}</div>
      <div className='text-gray-500'>{data.descr}</div>
      <div className='text-green-400'>{data.price}</div>
      <div><button className='w-xs h-auto p-3 border-2 border-gray-400 rounded-lg' onClick={() => handleChange(data)}>Add</button></div>
    </div>
  )
}

export default Cards 