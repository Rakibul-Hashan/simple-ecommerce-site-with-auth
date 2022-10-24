import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getStoredCart } from '../utilities/fakeDb';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useProducts();
    // importing from the local storage which means out of the code. That's why need to use side effect
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)

    }, [products]);
    const handleAddToCart = (selectedProduct) => {

        // creating a new array and setting to the: cart
        // do not do this: cart.push(product);
        let newCart = [];

        console.log(`selectedProduct quantity:  ${selectedProduct.quantity}`)
        // showing on the cart UI
        const exists = cart.find(product => selectedProduct.id === product.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];

        } else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            // you can also use: selectedProduct.quantity = exists.quantity + 1; 
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]

        }

        setCart(newCart);

        // adding to localstorage 
        addToDb(selectedProduct.id);

    }


    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}

                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}

                >
                    <Link to={`/orders`}>
                        <button>Review Item</button>
                    </Link>

                </Cart>
            </div>
        </div>
    );
};

export default Shop;