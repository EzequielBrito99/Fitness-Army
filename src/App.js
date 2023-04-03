import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Contact from './components/Contact'
import Footer from './components/Footer/Footer'
import HomeScreen from './components/Home/HomeScreen'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="container">

    <HashRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomeScreen />} ></Route>
          <Route path='/contact' element={<Contact/>} ></Route>
        </Routes>
        <Footer/>
    </HashRouter>
    </div>
  )
}

export default App
