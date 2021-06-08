import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  addToDatabaseCart,
  getDatabaseCart,
  removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  // const first20 = fakeData.slice(0, 20);
  const [products, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  console.log(search);
  // for add state....
  const [cart, setCart] = useState([]);
  // console.log(products);
  useEffect(() => {
    fetch(`https://pure-headland-27401.herokuapp.com/products?search=${search}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  },[search]);

  useEffect(() => {
    const saveCart = getDatabaseCart();
    const productKeys = Object.keys(saveCart);
    fetch('https://pure-headland-27401.herokuapp.com/productByKeys',{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productKeys)
        })
        .then(res => res.json())
        .then(data => setCart(data))
    
  }, []);

  // function for add state
  const handleAddProduct = (product) => {
    // console.log("you call me", product)
    const toBeAddedKey = product.key;
    const sameProduct = cart.find((pd) => pd.key === toBeAddedKey);
    let count = 1;
    let newCart;
    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter((pd) => pd.key !== toBeAddedKey);
      newCart = [...others, sameProduct];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }

    setCart(newCart);

    addToDatabaseCart(product.key, count);
  };
  const handleSearch = e => {
    setSearch(e.target.value)
  }
  return (
    <div className="shop-container">
      <div className="products-container">
        <input type="text" onBlur= {handleSearch} name="" id="" />
        {products.map((pd) => (
          <Product
            handleAddProduct={handleAddProduct}
            showAddToCard={true}
            product={pd}
            key={pd.key}
            className="product-container"
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to="review">
            <button className="add-btn">Review</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
