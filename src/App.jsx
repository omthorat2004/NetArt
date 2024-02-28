import { useState } from 'react'
import './App.css'
import MainSection from './Components/MainSection/MainSection'
import Navbar from './Components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <MainSection/>
    </>
  )
}

export default App
