import { useState } from 'react'
import './App.css'
import Auth from './components/Auth/Auth'
import Sign from './components/card/create/Sign'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app-wrapper">
        <div className='container login'>
          <Auth />
        </div>
        <div className='container hello'>
          <Sign />
        </div>
      </div>
    </>
  )
}

export default App
