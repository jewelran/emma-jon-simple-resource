import React from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SplitForm from './SplitForm';
import SimpleCardForm from './SimpleCardForm';
const stripePromise = loadStripe(
  "pk_test_51IyahEG17tgafnrHY08zI25TQFYtmX1KCXbysN20CmNChMimMuXR3a1V5OOMwGRSGaZ2bcKaHdjE02bS3Q4gO1E700sgzYnOwc"
);

const ProcessPayment = ({handlePayment}) => {
  return (
    <Elements stripe={stripePromise}>
      <h1>Please payment for me!</h1>
      <SimpleCardForm handlePayment  = {handlePayment}></SimpleCardForm>
    </Elements>
  );
};
export default ProcessPayment;
