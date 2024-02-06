import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import ShareButton from './ShareButton';
import { v4 as uuidv4 } from 'uuid';


import "./cart.css";
export const Cart = () => {
  const { cartItems, getTotalCartAmount, } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  const [isCartShared, setCartShared] = useState(false);
  const [shareableLink, setShareableLink] = useState('');
  const generateShareableLink = () => {
    // Using uuid to generate a unique identifier
    return `https://your-ecommerce-site.com/shared-cart/${uuidv4()}`;
  };

  const handleShareClick = () => {
    // Generate a unique link or identifier for the shared cart
    const generatedLink = generateShareableLink(); // Implement this function

    // Update state
    setCartShared(true);
    setShareableLink(generatedLink);
  };


  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
          <div>
            {/* Render your cart items here */}

            {isCartShared ? (
              <div>
                <p>Your cart is shared! Share this link:</p>
                <p>{shareableLink}</p>
              </div>
            ) : (
              <ShareButton onClick={handleShareClick} />
            )}
          </div>
        </div>

      ) : (
        <h1> Your Shopping Cart is Empty</h1>

      )}
    </div>
  );
};
