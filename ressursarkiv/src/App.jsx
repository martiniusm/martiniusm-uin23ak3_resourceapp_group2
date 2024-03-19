import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import Category from './Components/Category'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Category />
    </>
  )
}

export default App
