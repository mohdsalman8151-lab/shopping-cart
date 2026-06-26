import React from 'react'

const Hero = () => {
  return (
    <div>
        <section className="bg-[#0F0F0F] text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 py-20 md:py-28 flex flex-col md:flex-row items-center gap-10">
                <div className="flex-1 space-y-6">
                <span className="inline-block text-xs tracking-widest uppercase text-rust font-display font-semibold">New Season Drop</span>
                <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-none">Designed<br/>for the<br/><em className="not-italic text-rust">Bold.</em></h1>
                <p className="text-white/50 text-base max-w-sm leading-relaxed">Curated essentials that balance form, function, and a restless desire to stand apart.</p>
                <div className="flex gap-3 flex-wrap">
                    <a href="#products" className="bg-rust text-white px-7 py-3 rounded-full font-display font-semibold text-sm hover:opacity-90 transition-opacity">Shop Now</a>
                    <a href="#" className="border border-white/20 text-white px-7 py-3 rounded-full font-display font-semibold text-sm hover:bg-white/10 transition-colors">View Lookbook</a>
                </div>
                </div>
                <div className="flex-1 flex justify-center gap-4">
                <div className="w-44 h-64 bg-white/8 rounded-2xl flex items-center justify-center text-6xl shadow-2xl -rotate-3">👟</div>
                <div className="w-44 h-64 bg-rust/25 rounded-2xl flex items-center justify-center text-6xl shadow-2xl mt-8 rotate-3">🎒</div>
                </div>
            </div>
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-5 py-5 flex gap-8 overflow-x-auto text-sm text-white/40">
                <div><span className="font-display font-bold text-white text-xl">12k+</span> Happy Customers</div>
                <div className="h-8 w-px bg-white/10"></div>
                <div><span className="font-display font-bold text-white text-xl">500+</span> Products</div>
                <div className="h-8 w-px bg-white/10"></div>
                <div><span className="font-display font-bold text-white text-xl">4.9★</span> Avg Rating</div>
                <div className="h-8 w-px bg-white/10"></div>
                <div><span className="font-display font-bold text-white text-xl">Free</span> Shipping ₹999+</div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero