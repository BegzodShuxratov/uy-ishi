import React from 'react'
import Home from './pages/home/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Product from './pages/product/Product'
BrowserRouter
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/product/:id' element={<Product/>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App