import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Shop.css"
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    console.log(cart)
    const handleCart =(product)=>{
        const newCart = [...cart, product]
        setCart(newCart)
    }

    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return (
        <div className='mt-8 shop-container flex'>
            <div className="basis-5/6 w-full gap-4 products-container col-span-3 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mx-4">
                {
                    products.map(product=> <Product
                    product={product}
                    key={product.id}
                    handleCart={handleCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container bg-primary self-start sticky top-0 h-96 w-60 rounded p-4">
                <h4>Order Summary</h4>
                <p>Selected Items: {cart.length}</p>
                
            </div>
        </div>
    );
};

export default Shop;