import React from 'react';
import fakeData from '../../fakeData';

const Inventory = () => {
    const handleAddProduct =() =>{
        fetch('https://pure-headland-27401.herokuapp.com/addProduct',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fakeData)
        })
    }

    return (
        <div>
            <form action="">
            <p><span>Name</span><input type="text" /></p>
            <p><span>Price</span><input type="text" /></p>
            <p><span>Quantity</span><input type="text" /></p>
            <p><span>Upload images</span><input type="file" /></p>

            <button onClick= { handleAddProduct}>addProduct</button>
            </form>

            <h2>hi i am inventory</h2>
        </div>
    );
};

export default Inventory;