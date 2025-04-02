import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

function App() {
 
  const [color,setColor] = useState("olive")

  return (
    <>
      <div className="container" style={{backgroundColor:color}}>ff</div>
      <div className='fixed flex flex-wrap text-center bottom-12'>
        <div className='d-flex align-items-center justify-content-center'>
          <button className='bg-danger' onClick={() => setColor("red")}>Red</button>
          <button className='bg-success' onClick={() => setColor("green")}>Green</button>
          <button className='bg-primary' onClick={() => setColor("blue")}>Blue</button>
          <button style={{backgroundColor:"yellow"}} onClick={() => setColor("yellow")}>Yellow</button>
          <button style={{backgroundColor:"purple"}} onClick={() => setColor("purple")}>Purple</button>
        </div>
      </div>
    </>
  )
}

export default App
