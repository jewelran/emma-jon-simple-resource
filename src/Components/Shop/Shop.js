import React, { useState } from "react";
import fakeData from "../../fakeData";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const first20 = fakeData.slice(0, 20);
  const [products, setProduct] = useState(first20);
  const [cart, setCart] = useState([])
  // console.log(products);
  const handleAddProduct = (product)=>{
      console.log("you call me", product)
      const newCart = [...cart, product]
      setCart(newCart)
  }
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((pd) => (
          <Product
          handleAddProduct = {handleAddProduct}
           product = {pd} className="product-container">

           </Product>
        ))}
        
      </div>
      <div className="cart-container">
      <Cart cart = {cart}></Cart>
        
      </div>
    </div>
    
  );
};

export default Shop;
