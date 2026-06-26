import { useState } from 'react'
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import CartPage from './pages/CartPage'
import { CartProvider } from './context/CartContext'
import { ThemeProvider } from './context/ThemeContext'

function App() {

  return (
    <ThemeProvider>
      <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="cart" element={<CartPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
   
  )
}

export default App
