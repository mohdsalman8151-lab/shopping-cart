import React from 'react'
import { useCart } from '../context/CartContext'

function CartItems({item}) {
    const {removeToCart, addToCart, removeItemFromCart} = useCart();
  return (
    <>
        <div className="w-16 h-16 t-surface rounded-xl flex items-center justify-center text-3xl shrink-0 border t-border">{item.emoji}</div>
        <div className="flex-1 min-w-0">
            <p className="font-display font-bold text-sm t-text truncate">{item.name}</p>
            <p className="text-xs t-muted capitalize mt-0.5">{item.category}</p>
            <div className="flex items-center gap-2 mt-2">
            <button onClick={() => removeToCart(item)} className="qty-btn w-7 h-7 t-surface border t-border rounded-full text-base font-bold t-text hover:bg-[var(--text)] hover:text-[var(--bg)] transition-colors shadow-sm">−</button>
            <span className="font-bold text-sm w-5 text-center t-text">{item.qty}</span>
            <button onClick={() => addToCart(item)}  className="qty-btn w-7 h-7 t-surface border t-border rounded-full text-base font-bold t-text hover:bg-[var(--text)] hover:text-[var(--bg)] transition-colors shadow-sm">+</button>
            </div>
        </div>
        <div className="text-right flex flex-col gap-2 justify-between items-end">
            <button onClick={() => removeItemFromCart(item.id)} className="t-muted hover:text-rust transition-colors text-xs">✕ Remove</button>
            <p className="font-display font-bold t-text">₹{(item.price*item.qty).toLocaleString()}</p>
        </div>
    </>
  )
}

export default CartItems