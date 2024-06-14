import { useState } from 'react'


function App() {
  const [counter, setCounter] = useState(0);

  const Increment = () => {
    setCounter((prevCounter) => prevCounter +  1)
  }

  const Decrement = () => {

    setCounter(prevCounter => prevCounter - 1);
  }

  const  Reset = () => {
    setCounter(0);
  }


  return (
    <>
     <h1>Counter Application</h1>
     <div>
        <p style={{textAlign: "center"}}>Counter - {counter}</p>
        <button onClick={Increment} className='btn1'>Increase</button>&nbsp;
        <button onClick={Reset} className='btn2'>Reset</button>&nbsp;
        <button onClick={Decrement} className='btn3'>Decrease</button>
     </div>
    </>
  )
}

export default App
