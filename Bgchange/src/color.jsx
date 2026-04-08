import React,{useState} from 'react'

function Color({ setBg }) {
    return (
      <div className="flex gap-3 p-4">
        <button onClick={() => setBg("red")}>Red</button>
        <button onClick={() => setBg("green")}>Green</button>
        <button onClick={() => setBg("orange")}>Orange</button>
      </div>
    );
  }
  
  export default Color;