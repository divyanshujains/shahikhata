import React from 'react'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Customer from '../src/components/Customer'
import Sales from '../src/components/Sales'
import Products from '../src/components/Products'
import Navbar from './components/Navbar'

const App = () => {
  return (
   <div>
      <Navbar/>
       <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/customer' element={<Customer />} />
            <Route path='/Products' element={<Products/>} />
            <Route path='/Sales' element={<Sales />} />
        </Routes>

     

      
    </div>
  )
}

export default App
