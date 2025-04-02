import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {username:HTMLFieldSetElement,age:21}

  let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4-rounded'>Tailwind test</h1>
      <Card channel="chaiaurcode" myArr = {myObj} newArr = {newArr}/>
      <Card channel = "Vibhor tyagi"/>
    </>
  )
}

export default App
