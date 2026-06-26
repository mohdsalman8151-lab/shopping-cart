import React from 'react'
import { useCart } from '../context/CartContext';

function CartSummary() {
    const {cart, clearCart} = useCart();
    const sub      = cart.reduce((s,i)=>s+i.price*i.qty,0);
    const shipping = sub>=999 ? 0 : 99;
    const tax      = Math.round(sub*0.18);
  return (
    <>
        <div className="t-surface rounded-2xl border t-border p-5 h-fit space-y-4">
            <h3 className="font-display font-bold text-lg t-text">Order Summary</h3>
            <div className="space-y-2 text-sm t-muted">
                <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span id="subtotal" className="t-text">₹{(sub).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                    <span>Shipping</span>
                    <span id="shippingCost" className="text-green-500 font-semibold">{shipping===0 ?'Free': shipping}</span>
                </div>
                <div className="flex justify-between">
                    <span>Tax (18%)</span>
                    <span id="taxAmt" className="t-text">₹{(tax).toLocaleString()}</span>
                </div>
            </div>
            <div className="border-t t-border pt-3 flex justify-between font-display font-bold text-lg t-text">
                <span>Total</span><span id="cartTotal">₹{(sub+shipping+tax).toLocaleString()}</span>
            </div>
            <div className="space-y-2 pt-1">
                <input type="text" placeholder="Promo code" className="w-full t-surface2 t-border border rounded-lg px-3 py-2 text-sm focus:outline-none t-text placeholder:text-[var(--muted)]"/>
                <button onClick={() => {}} className="w-full bg-rust text-white py-3 rounded-full font-display font-bold text-sm hover:opacity-90 transition-opacity">Checkout →</button>
                <button onClick={() => clearCart()} className="w-full t-muted text-xs hover:text-rust transition-colors py-1">Clear Cart</button>
            </div>
        </div>
    </>
  )
}

export default CartSummary