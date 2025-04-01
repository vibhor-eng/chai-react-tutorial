import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  const [counter, setCounter] = useState(15)//update ui setcounter is a method setCOunter name kch b ho skta hai

  // let counter = 5;

  const addvalue = () => {
   
    if(counter < 20){
      setCounter(counter + 1)
    }
    
  }
  const removeValue = () =>{
    if(counter >= 1){
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addvalue}>Add Value {counter}</button>
      <br></br>
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
