import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import HomeScreen from './components/Home/HomeScreen'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="container">

    <HashRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomeScreen />} ></Route>
        </Routes>
    </HashRouter>
    </div>
  )
}

export default App
