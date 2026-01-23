import './App.css'

import Left from './components/Left'
import Center from './components/Center'
import Right from './components/Right'


function App() {
  
  return (
    <>
      <div className='flex border-2 border-green-600 h-screen'>
        <Left />
        <Center />
        <Right />
      </div>
        
    </>
  )
}

export default App
