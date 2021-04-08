import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fakeData from "../../fakeData";
import { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart } from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const first20 = fakeData.slice(0, 20);
  const [products, setProduct] = useState(first20);
  // for add state....
  const [cart, setCart] = useState([]);
  // console.log(products);

useEffect(() => {
  const saveCart = getDatabaseCart();
  const productKey = Object.keys(saveCart);
  const previousKey = productKey.map(existingKey => {
    const product = fakeData.find(pd => pd.key === existingKey);
    product.quantity = saveCart[existingKey]
    return product;
  })
  setCart(previousKey);
} , [])


  // function for add state
  const handleAddProduct = (product) => {
    // console.log("you call me", product)
    const toBeAddedKey = product.key;
    const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
    let count = 1
    let newCart;
    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter(pd => pd.key !== toBeAddedKey);
      newCart = [...others, sameProduct];

    }
    else{
      product.quantity = 1;
      newCart = [...cart, product]
    }

    setCart(newCart);

    addToDatabaseCart(product.key, count)
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((pd) => (
          <Product
            handleAddProduct={handleAddProduct}
            showAddToCard = {true}
            product={pd} key = {pd.key}
            className="product-container"
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
            <Link to = "review"><button className="add-btn">Review</button></Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
