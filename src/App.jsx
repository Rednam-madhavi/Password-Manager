import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Manager from './Components/Manager'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Manager />
    </>
  )
}

export default App
