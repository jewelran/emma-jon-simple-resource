import React from 'react';
import "./ReviewItem.css"
const ReviewItem = (props) => {
    const {name,quantity,stock,price,img,star,url,key} = props.product
    console.log(props);
    // const removeItem = props.removeItem;

    return (
        <div className = "reviewItemContainer">
           <div className="">
               <img src={img} alt=""/>
           </div>
           <div className="">
           <h4>{name}</h4>
           <h5>stock: {stock}</h5>
            <h5>quantity: {quantity}</h5>
            <h5>Price: {price}</h5>
            <h5>star:  {star}</h5>
            <a href={url} target= "blank"><p> go to amazon </p></a>
            <button onClick = {() => props.removeItem(key)} className = "cartRemove">Remove item</button>
           </div>
            
        </div>
    );
};

export default ReviewItem;