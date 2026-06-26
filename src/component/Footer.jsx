import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="bg-[#0F0F0F] text-white/60 py-14 px-5">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
                <div className="col-span-2 md:col-span-1">
                <p className="font-display text-2xl text-white font-extrabold mb-3">NOVA</p>
                <p className="text-sm leading-relaxed">Curated products for people who choose intentionally.</p>
                </div>
                <div><p className="font-display text-white font-bold mb-4">Shop</p>
                <ul className="space-y-2 text-sm"><li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li><li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li><li><a href="#" className="hover:text-white transition-colors">Sale</a></li><li><a href="#" className="hover:text-white transition-colors">Collections</a></li></ul>
                </div>
                <div><p className="font-display text-white font-bold mb-4">Help</p>
                <ul className="space-y-2 text-sm"><li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li><li><a href="#" className="hover:text-white transition-colors">Returns</a></li><li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li><li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li></ul>
                </div>
                <div><p className="font-display text-white font-bold mb-4">Follow</p>
                <ul className="space-y-2 text-sm"><li><a href="#" className="hover:text-white transition-colors">Instagram</a></li><li><a href="#" className="hover:text-white transition-colors">Twitter / X</a></li><li><a href="#" className="hover:text-white transition-colors">Pinterest</a></li><li><a href="#" className="hover:text-white transition-colors">YouTube</a></li></ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 text-xs text-white/30 flex flex-wrap gap-4 justify-between">
                <p>© 2026 NOVA. All rights reserved.</p>
                <div className="flex gap-4"><a href="#" className="hover:text-white/60">Privacy</a><a href="#" className="hover:text-white/60">Terms</a><a href="#" className="hover:text-white/60">Cookies</a></div>
            </div>
        </footer>
    </div>
  )
}

export default Footer