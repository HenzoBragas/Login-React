import { useState } from 'react'
import './App.css'
import Login from './components/Login/Login'
import Sign from './components/Sing/Sign'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app-wrapper">
        <div className='container login'>
          <Login />
        </div>
        <div className='container hello'>
          <Sign />
        </div>
      </div>
    </>
  )
}

export default App
