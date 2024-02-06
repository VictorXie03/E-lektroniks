// SharedCartPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartItem } from './cart-item';  // Import your CartItem component
import { PRODUCTS } from '../../products';  // Import your product data

const SharedCartPage = () => {
    const { sharedCartId } = useParams();
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Fetch shared cart data based on sharedCartId
        // You might fetch this from an API or some storage
        // For simplicity, let's assume you have a function to get the cart data
        const sharedCartData = getSharedCartData(sharedCartId);

        if (sharedCartData) {
            // Decode and set cart items
            setCartItems(sharedCartData);
        }
    }, [sharedCartId]);

    const getSharedCartData = (sharedCartId) => {
        // Implement logic to retrieve shared cart data
        // For simplicity, you might use local storage, API, etc.
        const storedSharedCarts = JSON.parse(localStorage.getItem('sharedCarts')) || {};
        return storedSharedCarts[sharedCartId];
    };

    return (
        <div>
            <h1>Shared Cart Items</h1>
            <div className="cart">
                {PRODUCTS.map((product) => {
                    const cartItem = cartItems.find((item) => item.id === product.id);

                    if (cartItem) {
                        return <CartItem key={product.id} data={product} quantity={cartItem.quantity} />;
                    }

                    return null;
                })}
            </div>
        </div>
    );
};

export default SharedCartPage;
