import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  // reduce
  //   const total = cart.reduce((total, prd) => total + prd.price, 0);
  //for loop
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total = total + product.price * product.quantity;
  }
  let shipping = 0;
  if (total > 35) {
    shipping = 0;
  } else if (total > 15) {
    shipping = 4.99;
  } else if (total > 0) {
    shipping = 12;
  }
  const text = total / 10;
  const grandTotal = total + shipping + Number(text);
  const formetNumbe = (num) => {
    const precision = num.toFixed(2);
    return Number(precision);
  };
  return (
    <div>
      <h5>Order summary: {props.cart.length}</h5>
      <h4>Product Price: {formetNumbe(total)}</h4>
      <p>
        <small>shipping: {shipping}</small>
      </p>
      <p>
        <small>Vat + Text : {formetNumbe(text)}</small>
      </p>
      <h5>total price: {formetNumbe(grandTotal)}</h5>
      <br/>
     {
       props.children
     }
    </div>
  );
};

export default Cart;
