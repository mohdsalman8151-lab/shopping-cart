import React from 'react'

function Promo() {
  return (
    <div>
        <section className="bg-rust text-white py-14 px-5">
            <div className="max-w-4xl mx-auto text-center space-y-4">
                <p className="text-sm tracking-widest uppercase font-display opacity-70">Limited Time</p>
                <h2 className="font-display text-4xl md:text-5xl font-extrabold">Extra 20% off sitewide.<br/>Use <span className="underline underline-offset-4">NOVA20</span></h2>
                <p className="text-white/60 text-sm">Valid through Sunday · No minimum order</p>
                <button onClick={() => {}}
                className="mt-4 bg-white text-rust px-8 py-3 rounded-full font-display font-bold text-sm hover:opacity-90 transition-opacity">Copy Code</button>
            </div>
        </section>
    </div>
  )
}

export default Promo