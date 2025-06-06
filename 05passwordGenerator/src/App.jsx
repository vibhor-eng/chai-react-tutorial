import { useState, useCallback, useEffect,useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //ref hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {  
    let pass = ""
    let str  = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()"

    for(let i = 1; i<= length; i++){
      let char = Math.floor(Math.random() * str.length + 1);//create random value with string
      pass += str.charAt(char)//now pick char 
      
    }

    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])
  //these are the dependencies jo change hone par pass hogi

  //callback is used for optimization
  const copyPassword = useCallback(() =>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,3)//select range only means kitne char copy karne hai
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  } ,[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8
      bg-gray-800'>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type = "text" value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passwordRef} />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPassword}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
              <input type = "range" min={6} max={100} value = {length} className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}} />
              <label htmlFor='' className='text-white'>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
              <input type = 'checkbox' defaultChecked={numberAllowed} id = "numberInput" onChange={() => {setNumberAllowed((prev) => !prev);}}/>
              <label htmlFor='numberInput' className='text-white'>Numbers</label>
              <input type = 'checkbox' defaultChecked={charAllowed} id = "charecterInput" onChange={() => {setCharAllowed((prev) => !prev);}}/>
              <label htmlFor='charecterInput' className='text-white'>Charecter</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
