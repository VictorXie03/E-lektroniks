import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import { useNavigate } from "react-router-dom";

import "./checkout.css";

export const Checkout = () => {
    const { cartItems, getTotalCartAmount, clearCart, checkout } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        address: "",
        city: "",
        zip: "",
        country: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Implement your checkout logic here, such as submitting the form data to a server.
        // Once the checkout is complete, clear the cart and navigate to the home page.
        clearCart();
        navigate("/");
    };

    const isFormFilled = () => {
        return (
            formValues.name &&
            formValues.email &&
            formValues.address &&
            formValues.city &&
            formValues.zip &&
            formValues.country
        );
    };

    return (
        <div className="checkout">
            <h1>Checkout</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formValues.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formValues.address}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={formValues.city}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="zip">Zip Code</label>
                    <input
                        type="text"
                        id="zip"
                        name="zip"
                        value={formValues.zip}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input
                        type="text"
                        id="country"
                        name="country"
                        value={formValues.country}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <p>Total Amount: ${totalAmount}</p>
                </div>
                <button onClick={() => {
                    checkout();
                }} disabled={!isFormFilled()} type="submit">Place Order</button>
            </form>
        </div>
    );
};
