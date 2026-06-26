import React from 'react'
import ProductList from './ProductList'

function ProductSection({products}) {

  return (
    <div>
        <main id="products" className="max-w-7xl mx-auto px-5 pb-20">
            <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-3xl font-bold t-text">Products <span id="resultCount" className="text-base font-normal t-muted ml-1">({products.length})</span></h2>
                <select className="t-surface2 t-border border rounded-lg px-3 py-2 text-sm focus:outline-none t-text">
                <option>Sort: Featured</option>
                <option>Price: Low → High</option>
                <option>Price: High → Low</option>
                <option>Newest</option>
                </select>
            </div>
            <ProductList products={products} />
            
        </main>
    </div>
  )
}

export default ProductSection