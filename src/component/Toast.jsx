import React from 'react'

function Toast() {
  return (
    <div>
        <div id="toast" className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] hidden pointer-events-none">
            <div className="toast-anim bg-[#0F0F0F] text-white px-5 py-3 rounded-full text-sm font-medium flex items-center gap-2 shadow-xl">
                <span>✓</span><span id="toastMsg">Added to cart</span>
            </div>
        </div>
    </div>
  )
}

export default Toast