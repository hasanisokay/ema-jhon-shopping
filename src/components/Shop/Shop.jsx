import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    console.log(products)
    return (
        <div className='shop-container grid grid-cols-4'>
            <div className="mt-8 w-full gap-4 col-span-3 products-container grid grid-cols-3 mx-4">
                {
                    products.map(product=> <Product
                    product={product}
                    key={product.id}
                    ></Product>)
                }
            </div>
            <div className="cart-container"><h4>Order Summary</h4></div>
        </div>
    );
};

export default Shop;