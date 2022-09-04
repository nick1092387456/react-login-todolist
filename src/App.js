import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from "./components/Login"
import About from "./components/About"
import './scss/style.scss'
import NotFound from './components/NotFound'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={< NotFound/>} />
        <Route path="/" element={<Login />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App