import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/dataFromDb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const handleCart =(product)=>{
        const newCart = [...cart, product]
        setCart(newCart)        
        addToDb(product.id)
    }

    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    useEffect(()=>{
        let storageCart =[] 
        const storedCart = getStoredCart()
            for(const id in storedCart){
               const savedProduct = products.find(product => id === product.id) 
               if(savedProduct){
                const quantity = storedCart[id];
                savedProduct.quantity = quantity
                storageCart.push(savedProduct)
            }
        }
        setCart(storageCart)

    },[products])

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
            <div className="cart-container bg-red-700 self-start sticky top-0 h-96 w-60 rounded p-4">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;