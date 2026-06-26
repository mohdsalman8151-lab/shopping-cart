import React, { useState,useEffect } from 'react'
import Hero from '../component/Hero'
import Filter from '../component/Filter'
import ProductSection from '../component/ProductSection'
import Promo from '../component/Promo'
import Feature from '../component/Feature'
import Layout from './Layout'
import { useSearchParams } from 'react-router-dom'

function Home() {
    const products = [
        {id:1, name:'Runner X Pro',       category:'footwear',    emoji:'👟', price:2999, oldPrice:3999, badge:'Sale', rating:4.8, reviews:124},
        {id:2, name:'Canvas Low',         category:'footwear',    emoji:'👠', price:1899, oldPrice:null,  badge:'New',  rating:4.5, reviews:87},
        {id:3, name:'Trail Grip Boot',    category:'footwear',    emoji:'🥾', price:3499, oldPrice:4299, badge:'Sale', rating:4.7, reviews:203},
        {id:4, name:'Urban Slide',        category:'footwear',    emoji:'🩴', price:999,  oldPrice:null,  badge:null,   rating:4.2, reviews:55},
        {id:5, name:'Daypack 22L',        category:'bags',        emoji:'🎒', price:2499, oldPrice:2999, badge:'Sale', rating:4.9, reviews:312},
        {id:6, name:'Mini Crossbody',     category:'bags',        emoji:'👜', price:1599, oldPrice:null,  badge:'New',  rating:4.6, reviews:91},
        {id:7, name:'Tote Canvas',        category:'bags',        emoji:'🛍️', price:1199, oldPrice:null,  badge:null,   rating:4.3, reviews:68},
        {id:8, name:'Laptop Sleeve 15"',  category:'bags',        emoji:'💼', price:799,  oldPrice:1099, badge:'Sale', rating:4.4, reviews:145},
        {id:9, name:'Oversized Tee',      category:'apparel',     emoji:'👕', price:899,  oldPrice:null,  badge:'New',  rating:4.7, reviews:234},
        {id:10,name:'Cargo Jogger',       category:'apparel',     emoji:'👖', price:1799, oldPrice:2299, badge:'Sale', rating:4.5, reviews:178},
        {id:11,name:'Hooded Sweat',       category:'apparel',     emoji:'🧥', price:2299, oldPrice:null,  badge:null,   rating:4.8, reviews:309},
        {id:12,name:'Linen Shirt',        category:'apparel',     emoji:'👔', price:1499, oldPrice:1899, badge:'Sale', rating:4.4, reviews:102},
        {id:13,name:'Minimal Watch',      category:'accessories', emoji:'⌚', price:4999, oldPrice:5999, badge:'Sale', rating:4.9, reviews:421},
        {id:14,name:'Leather Wallet',     category:'accessories', emoji:'👛', price:1299, oldPrice:null,  badge:'New',  rating:4.6, reviews:167},
        {id:15,name:'Knit Beanie',        category:'accessories', emoji:'🧢', price:599,  oldPrice:799,  badge:'Sale', rating:4.3, reviews:89},
        {id:16,name:'Sunglasses classNameic', category:'accessories', emoji:'🕶️', price:1799, oldPrice:null,  badge:null,   rating:4.7, reviews:213},
    ];
    const [productData, setProductData] = useState(products);
    const [category, setCategory] = useState('all');
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
    let filtered = products;

    // Filter by category
    if (category !== 'all') {
        filtered = filtered.filter(
        (item) => item.category === category
        );
    }

    // Filter by search text
    if (searchText) {
        filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
        );
    }

    setProductData(filtered);
    }, [category, searchText]);

    const filterProducts = (selectedCategory) => {
    setCategory(selectedCategory);
    };

    const searchProducts = (text) => {
    setSearchText(text);
    };
  return (
    <>
        <Hero />
        <Filter  filterProducts={filterProducts} onSearch={searchProducts}/>
        <ProductSection products={productData} />
        <Promo />
        <Feature />
    </>
  )
}

export default Home