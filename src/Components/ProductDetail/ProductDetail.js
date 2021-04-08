import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import "./ProductDetails.css"
const ProductDetail = () => {
    const {productKey} = useParams()
    const product = fakeData.find(pd => pd.key === productKey);
    // const {name, seller, price, stock,img} = product
    // console.log(product);
    return (
        <div className= "containerDetails">
           <Product showAddToCard = {false} product = {product}></Product>
        </div>
    );
};

export default ProductDetail;