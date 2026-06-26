import React from 'react'
import { useCart } from '../context/CartContext'

function ProductCard({p}) {
    const {cart, addToCart, removeToCart} = useCart();
   const cartItem = cart.find(item => item.id === p.id);
  return (
    <>
        <div className="card-hover t-surface rounded-2xl overflow-hidden border t-border flex flex-col">
            <div className="relative t-surface2 h-48 flex items-center justify-center text-6xl select-none">
                
                {p.badge &&   <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-0.5 rounded-full bg-rust text-white ${p.badge==='Sale'?'bg-rust text-white':'bg-[var(--text)] text-[var(--bg)]'} `} > {p.badge} </span>}
                <span>{p.emoji}</span>
                <button onClick={() => {}} className="wish-btn absolute top-3 right-3 w-8 h-8 t-surface rounded-full flex items-center justify-center shadow t-muted hover:text-rust transition-colors text-base">♡</button>
            </div>
            <div className="p-4 flex flex-col flex-1 gap-2">
                <p className="text-xs t-muted capitalize">{p.category}</p>
                <h3 className="font-display font-bold text-base leading-tight t-text">{p.name}</h3>
                <div className="flex items-center gap-1 text-xs text-amber-500">
                    <span>{'★'.repeat(Math.floor(p.rating))}  {p.rating % 1 >= 0.5 ? '½' : ''}</span><span className="t-muted">{p.reviews}</span>
                </div>
                <div className="flex items-center gap-2 mt-auto">
                    <span className="font-display font-extrabold text-lg t-text">₹{p.price.toLocaleString()}</span>
                    {p.oldPrice && ( <span className="line-through text-xs t-muted">₹ ${p.oldPrice.toLocaleString()}</span> )}
                </div>
                {cartItem?.qty > 0 ? (
                <div className="flex items-center gap-2 mt-1">
                    <button onClick={() => removeToCart(p)} className="qty-btn w-8 h-8 t-surface2 rounded-full text-lg font-bold t-text hover:bg-[var(--text)] hover:text-[var(--bg)] transition-colors">−</button>
                    <span className="font-bold w-6 text-center t-text">{cartItem?.qty}</span>
                    <button onClick={() => addToCart(p)}  className="qty-btn w-8 h-8 t-surface2 rounded-full text-lg font-bold t-text hover:bg-[var(--text)] hover:text-[var(--bg)] transition-colors">+</button>
                    <span className="text-xs t-muted">in cart</span>
                </div>
                ):( 
                    <button onClick={() => addToCart(p)} className="mt-1 w-full bg-[var(--text)] text-[var(--bg)] py-2.5 rounded-full text-sm font-display font-bold hover:opacity-80 transition-opacity">Add to Cart</button>
                )} 

            </div>
        </div>
       
    </>
  )
}

export default ProductCard