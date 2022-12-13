import React from 'react'
import { useState } from 'react'

function Inc() {
   
  const [counter,setCounter] = useState(0);

  function add(){
    setCounter(counter + 3)
    console.log(counter);
  }

  function sub(){
    if(counter<=0) {return}
    else( setCounter(counter - 1))
    console.log(counter);
  }
  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={add}>inc</button>
        <button onClick={sub}>dec</button>
        
    </div>
  )
}
  


export default Inc