import React from 'react';

const Cart = ({cart}) => {
    let totalPrice = 0;
    let shippingCharge = 0;
    let quantity = 0
    for (const product of cart){
        product.quantity = product.quantity || 1 
        totalPrice += product.price
        shippingCharge += product.shipping
        quantity = product.quantity + quantity
    }
    const tax = totalPrice * 7 / 100
    const grandTotal = totalPrice + shippingCharge + tax 
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice * quantity} </p>
            <p>Total Shipping Charge: ${shippingCharge} </p>
            <p>Tax: ${tax} </p>
            <p>Grand Total: ${grandTotal} </p>
        </div>
    );
};

export default Cart;