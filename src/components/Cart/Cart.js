import React from 'react';

const Cart = (props) => {
    // console.log('cart', cart)
    const { cart, removeFromCart} = props;

    let total = 0;
    let shippingCost = 0;
    let totalQuantity = 0;
    for (const product of cart) {
        const { price, shipping, quantity } = product;
        totalQuantity = totalQuantity + quantity;
        total = total + price * quantity;
        shippingCost = shippingCost + shipping;
        
    }
    const taxString = (total * 0.1).toFixed();
    const tax = parseInt(taxString);


    let grandTotal = shippingCost + total + tax;
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Selected Items: {totalQuantity}</p>
            <p>Total Price: ${total} </p>
            <p>Total Shipping Price: ${shippingCost} </p>
            <p>Tax: ${taxString}</p>
            <h5>Grand Total: ${grandTotal} </h5>
            {props.children}
            <div className="cart-buttons-wrapper">
                <button className="clear-cart" onClick={() => removeFromCart(cart)}>
                    <p>Clear Cart</p>
                </button>
            </div>
        </div>
    );
};

export default Cart;