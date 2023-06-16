import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Movies from './components/Movies'
import { BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
            <Routes>
                <Route path='/' element={<Movies/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<Signup/>}/>
            </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
