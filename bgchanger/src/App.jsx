import { useState } from 'react'
import './App.css'

function App() {
  // const [color, setColor] = useState('green')
const [count,setCount]=useState(0)
  return (
    <>
    <p>Count is { count}</p>
    <button onClick={()=>setCount(count+1)} className='mx-5'>+</button>
    <button onClick={()=>setCount(count-1)} className='mx-5' >-</button>
      {/* <button  
      onClick={()=>setColor('red')}
      >Red</button>
      <button onClick={()=>setColor('yellow')} className='mx-3'>yellow</button>
      <button onClick={()=>setColor('black')} className='mx-3'>black</button>
      <button onClick={()=>setColor('pink')} className='mx-3'>pink</button>
      <button onClick={()=>setColor('orange')} className='mx-3'>orange</button>
      <div className='w-full h-screen' style={{backgroundColor:color}}></div> */}
    </>
  )
}

export default App
