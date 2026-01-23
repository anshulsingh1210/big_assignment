import { useState } from 'react'
import './App.css'
// import './images/'
import coin1 from './images/coin1.png'
import coin2 from './images/coin2.png'


function App() {
  const [value,setValue] = useState(0)
  const [total,setTotal] = useState(0)
  const [head,sethead] = useState(0)

  console.log(value)

  function handleFlip() {
    setTotal(total+1)
    if (Math.random() < 0.5){
      sethead(head+1)
      setValue(1)
    } else {
      setValue(2)
    }
  }

  function handleReset() {
    setTotal(0)
    setValue(0)
    sethead(0)
  }

  return (
    <>
      <div className='flex items-center justify-center h-screen'>
        <div className='border-2 border-lime-600 w-[50%] h-[50%] p-3'>
          <div className='flex flex-col items-center'>
            {value!=0 && <img src={value===1 ? coin1 : coin2} width={150} height={150} />}
            <button 
              className='mt-4 bg-blue-500 text-white p-2 rounded-md'
              onClick={handleFlip}
                >
              Flip Me!
            </button>

            <button 
              className='mt-4 bg-blue-500 text-white p-2 rounded-md'
              onClick={handleReset}
                >
              Reset
            </button>

            <p className='mt-4 bg-blue-400 text-white p-2 rounded-md'>
              {`Out of ${total} flips, there have been ${head} heads and ${total-head} tails.`}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
