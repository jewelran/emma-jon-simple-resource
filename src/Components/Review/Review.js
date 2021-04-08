import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData'
import "./Review.css"
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import { Link, useHistory } from 'react-router-dom';

const Review = () => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        const saveCart = getDatabaseCart()
        const productKeys = Object.keys(saveCart)
        const cartProduct = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key)
           product.quantity = saveCart[key];
            return product;
        } )

        setCart(cartProduct);
        console.log(cartProduct);
    },[])
    const removeItem = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey)
       setCart(newCart)
       removeFromDatabaseCart(productKey)
    }
    const history = useHistory()
    const handleProceedCheckout = () =>{
        history.push("/shipment")
    }
    return (
        <div className = "reviewContainer">

            <div className="">
            { 
                cart.map(pd => <ReviewItem
                    removeItem = {removeItem}
                    product = {pd}>
                    </ReviewItem>)
            
            }
            </div>
            <div className="">
                <Cart cart ={cart}>
                    <button onClick= {handleProceedCheckout} className="add-btn">proceedCheckOut</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;