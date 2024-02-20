import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1)
  function addFunction(){
    if(count<20){setCount(count+1)}
    
    console.log(count)
  }
  function removeFunction(){
    if(count>0){setCount(count-1)}
  }
  return (
    <>
     <h1>My React Counter</h1>
     <button onClick={addFunction}>Add : {count}</button>
     <br />
     <button onClick={removeFunction}>Remove : {count}</button>
    </>
  )
}

export default App
