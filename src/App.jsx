import React from 'react'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Customer from '../src/components/Customer'
import Sales from '../src/components/Sales'
import Products from './components/Products'
import Navbar from './components/Navbar'
import Customerrecipt from './components/customer/Customerrecipt'

const App = () => {
  return (
   <div>
      <Navbar/>
       <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/customer' element={<Customer />} />
            <Route path='/products' element={<Products/>} />
            <Route path='/Sales' element={<Sales />} /> 
            <Route path='/recipt/:id' element={<Customerrecipt />} />
            
            
        </Routes>

     

      
    </div>
  )
}

export default App
