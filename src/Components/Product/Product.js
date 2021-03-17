import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
const Product = (props) => {
  const { img, name, price, stock, seller } = props.product;
  // console.log(props);
  return (
    <div className="product">
      <div className="">
        <img src={img} alt="" />
      </div>
      <div className="">
        <h4>{name}</h4>
        <h4>seller: {seller}</h4>
        <h4>price: ${price}</h4>
        <p>
          <small>stock: {stock}</small>
        </p>
        <button
          onClick={() => props.handleAddProduct(props.product)}
          className="add-btn"
        >
          <FontAwesomeIcon icon={faShoppingCart} /> add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
