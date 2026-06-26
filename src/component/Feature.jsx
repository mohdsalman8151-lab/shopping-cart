import React from 'react'

function Feature() {
  return (
    <div>
        <section className="max-w-7xl mx-auto px-5 py-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2"><div className="text-3xl">🚚</div><p className="font-display font-bold t-text">Free Shipping</p><p className="t-muted text-sm">Orders above ₹999</p></div>
            <div className="space-y-2"><div className="text-3xl">↩️</div><p className="font-display font-bold t-text">Easy Returns</p><p className="t-muted text-sm">30-day hassle-free</p></div>
            <div className="space-y-2"><div className="text-3xl">🔒</div><p className="font-display font-bold t-text">Secure Pay</p><p className="t-muted text-sm">SSL encrypted checkout</p></div>
            <div className="space-y-2"><div className="text-3xl">💬</div><p className="font-display font-bold t-text">24/7 Support</p><p className="t-muted text-sm">Chat, email or call</p></div>
        </section>
    </div>
  )
}

export default Feature