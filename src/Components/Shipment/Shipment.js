import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { userContext } from "../../App";
import { getDatabaseCart, processOrder } from "../../utilities/databaseManager";

const Shipment = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
const onSubmit = (data) => {
  const saveCart = getDatabaseCart()
  const orderDetails = {
    ...loggedInUser, products: saveCart, shipment: data, orderTime: new Date()
  }

  fetch('http://localhost:5000/addOrder',{
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

  console.log(data)

};


  //   console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="">  
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
  );
};

export default Shipment;
