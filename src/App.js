import React, { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import CartScreen from './components/CartScreen'
import CatalogScreen from './components/Catalog/CatalogScreen'
import ProductScreen from './components/Catalog/ProductScreen'
import Contact from './components/Contact'
import Footer from './components/Footer/Footer'
import HomeScreen from './components/Home/HomeScreen'
import Navbar from './components/Navbar'

const App = () => {

  const [activeProduct, setActiveProduct] = useState(
    { img: 'producto1', desc: 'Creatina Platinium 400gr - 80 servicios', precio: '45.00'}
  );
  
  return (
    <div className="container">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomeScreen setActiveProduct={setActiveProduct}/>} ></Route>
          <Route path='/catalog' element={<CatalogScreen setActiveProduct={setActiveProduct}/>} ></Route>
          <Route path='/product' element={<ProductScreen activeProduct={activeProduct}/>} ></Route>
          <Route path='/cart' element={<CartScreen />} ></Route>
          <Route path='/contact' element={<Contact />} ></Route>
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App
