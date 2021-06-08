
import React, { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { userContext } from "../../App";
import { getDatabaseCart, processOrder } from "../../utilities/databaseManager";
import ProcessPayment from "../ProcessPayment/ProcessPayment";
import "./Shipment.css"
const Shipment = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [ shippingData, setShippingData] = useState(null)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const  handlePaymentSuccess = paymentId => {
    const saveCart = getDatabaseCart()
    const orderDetails = {
      ...loggedInUser, paymentId, products: saveCart, orderTime: new Date().toDateString("dd/MM/yyyy"), shipment: shippingData
    }
  
    fetch('https://pure-headland-27401.herokuapp.com/addOrder',{
      method:"POST",
      headers:{ 
          'Content-Type' : 'application/json'
      },
      body: JSON.stringify(orderDetails)
    })
    .then(res => res.json())
    .then(data => {
      if (data) {
        // clear shipment ......   
        processOrder();
        alert('your order is success')
      }
    })
  
  }
const onSubmit = (data) => {
  setShippingData(data)

};


  //   console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="shipmentContainer">  
   <div style = {{display: shippingData ? "none" : "block"}}  className="col-md-6 shipmentForm">
   <form
      style={{ textAlign: "center", padding: "30px" }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        defaultValue={loggedInUser.name}
        {...register("name", { required: true })}
        placeholder="Your name"
      />
      <br />

      {errors.name && <span>This name is required</span>}
      <br />
      <input
        defaultValue={loggedInUser.email}
        {...register("email", { required: true })}
        placeholder="Your email"
      />
      <br />

      {errors.email && <span>This email is required</span>}
      <br />
      <input
        {...register("number", { required: true })}
        placeholder="Your number"
      />
      <br />

      {errors.number && <span>This phone number is required</span>}
      <br />
      <input
        {...register("address", { required: true })}
        placeholder="Your address"
      />
      <br />

      {errors.address && <span>This address is required</span>}
      <br />

      <input type="submit" />

    </form>
   </div>
   <div style = {{display: shippingData ? "block" : "none"}} className="col-md-6 paymentContainer">
     <ProcessPayment handlePayment = {handlePaymentSuccess}></ProcessPayment>
   </div>
    </div>
  );
};

export default Shipment;
