import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { Outlet } from 'react-router-dom'
import { CartProvider } from '../context/CartContext'

function Layout() {
  return (
    <>
     
            <Navbar />
            <div>
            <Outlet />
            </div>
            <Footer />
        
    </>
  )
}

export default Layout