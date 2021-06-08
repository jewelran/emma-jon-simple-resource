import React, { useEffect } from 'react';
import { useParams } from 'react-router';
// import fakeData from '../../fakeData';
import Product from '../Product/Product';
import "./ProductDetails.css"
import { useState } from 'react';
const ProductDetail = () => {
    const {productKey} = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch('https://pure-headland-27401.herokuapp.com/products/'+ productKey)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[productKey])
    // const product = fakeData.find(pd => pd.key === productKey);
    // const {name, seller, price, stock,img} = product
    // console.log(product);
    return (
        <div className= "containerDetails">
           <Product showAddToCard = {false} product = {product}></Product> 
        </div>
    );
};

export default ProductDetail;