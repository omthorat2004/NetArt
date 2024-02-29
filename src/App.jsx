import { useState } from 'react'
import './App.css'
import Footer from './Components/Footer/Footer'
import Items from './Components/Items/Items'
import MainSection from './Components/MainSection/MainSection'
import Navbar from './Components/Navbar/Navbar'
import Product from './Components/Products/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <MainSection/>
      <Items/>
      <Product/>
      <Footer/>
    </>
  )
}

export default App
