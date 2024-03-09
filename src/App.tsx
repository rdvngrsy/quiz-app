import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Introduce from './pages/Introduce/Introduce'
import Quiz from './pages/Quiz/Quiz'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='font-body h-screen w-full flex justify-center items-center bg-gradient-to-b from-blue-800 to-blue-400'>
        <Routes>
          <Route path='/' element={<Introduce/>}/>
          <Route path='/quiz/:questions' element={<Quiz/>}/>
        </Routes>
    </div>
  )
}

export default App
