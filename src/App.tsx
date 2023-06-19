import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/gallery'/>
    </Routes>
  )
}

export default App
