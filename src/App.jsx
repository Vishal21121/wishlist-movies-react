import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Card from "./components/Card"
import Movies from './components/Movies'
import { BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/movies' element={<Card/>}/>
                <Route path='/movies' element={<Movies/>}/>
            </Routes>
      </BrowserRouter> */}
      <Movies></Movies>
    </>
  )
}

export default App
