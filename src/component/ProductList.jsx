import React from 'react'
import ProductCard from './ProductCard';

function ProductList({products}) {
    if(products.length ===0){
        return <p id="emptyMsg" className=" text-center t-muted py-20 text-lg">No products found. Try a different search.</p>
    }
  return (
    <>
        <div id="productGrid" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {products.map((product) => (
                <div key={product.id}>
                    <ProductCard  p={product} />
                </div>
            ))}
        </div>
    </>
  )
}

export default ProductList