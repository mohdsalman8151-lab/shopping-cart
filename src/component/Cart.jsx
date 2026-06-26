import React from 'react'
import { useCart } from '../context/CartContext'
import CartItems from './CartItems';
import CartSummary from './CartSummary';

function Cart() {
    const {cart} = useCart();
    
    if(cart.length === 0 ){
        return (
             <div id="cartEmpty" className="text-center py-10 space-y-3">
                    <div className="text-5xl">🛍️</div>
                <p className="font-display text-lg font-bold t-text">Your cart is empty</p>
                <p className="t-muted text-sm">Add items below to get started.</p>
            </div>
        )
    }
  return (
    <>
        <div id="cartSection" className="t-bg border-b t-border open">
            <div className="max-w-7xl mx-auto px-5 py-8">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="font-display text-2xl font-bold t-text">Your Cart <span id="drawerCount" className="text-sm font-normal t-muted"></span></h2>
                </div>
                <div id="cartBody" className=" grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div id="cartItems"   className="lg:col-span-2 space-y-3">
                        { cart.map((item,index) => (
                             <div key={index} className="flex gap-4 t-surface2 rounded-xl p-4 items-center">
                                <CartItems item={item} />
                            </div>
                        ))}
                    </div>
                    <CartSummary />
                </div>
            </div>
        </div>
    </>
  )
}

export default Cart