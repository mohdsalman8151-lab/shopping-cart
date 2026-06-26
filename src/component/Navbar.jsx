import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useTheme } from '../context/ThemeContext';

function Navbar() {
    const {cart} = useCart();
    const {toggleTheme} = useTheme();
    const navigate = useNavigate()
    const gotoCart = () => {
        navigate('/cart')
    }
  return (
    <div>
        <header className="t-nav sticky top-0 z-40 backdrop-blur border-b t-border">
            <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between gap-4 ">
                <a onClick={()=> navigate('/')} className="font-display text-2xl font-extrabold tracking-tight t-text cursor-pointer">NOVA</a>
                
                <div className="flex items-center gap-4">
                <button onClick={() => toggleTheme()} title="Toggle theme" className="flex items-center gap-2 text-xs t-muted cursor-pointer">
                    <span id="themeIcon">🌙</span>
                    <div className="relative toggle-track">
                    <div className="absolute toggle-knob bg-white shadow"></div>
                    </div>
                </button>
                <button className="hidden sm:flex t-muted hover:text-[var(--text)] transition-colors cursor-pointer" title="Wishlist">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.682l1.318-1.364a4.5 4.5 0 016.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"/>
                    </svg>
                </button>
                <button onClick={gotoCart} className=" cursor-pointer relative flex items-center gap-2 bg-[var(--text)] text-[var(--bg)] px-4 py-2 rounded-full text-sm font-semibold hover:opacity-80 transition-opacity">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0"/>
                    </svg>
                    Cart
                    {cart.length > 0 && <span id="cartCount" className="bg-rust text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold badge-pulse ">{cart.length}</span>}
                </button>
                </div>
            </div>
            <div className="md:hidden px-5 pb-3">
                <input id="searchInputMob" type="text" placeholder="Search products…"
                className="w-full t-surface2 t-border border rounded-full px-4 py-2 text-sm focus:outline-none placeholder:text-[var(--muted)] t-text"
                onInput={() => {}}/>
            </div>
        </header>
    </div>
  )
}

export default Navbar