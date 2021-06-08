import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { useState } from 'react';

const SimpleCardForm = ({handlePayment}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorPayment, setErrorPayment] = useState(null)
  const [successPayment, setSuccessPayment] = useState(null)
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
      setErrorPayment(error.message)
      setSuccessPayment(null)
    } else {
      setSuccessPayment(paymentMethod)
      setErrorPayment(null)
      handlePayment(paymentMethod)
      console.log('[PaymentMethod]', paymentMethod);
    }
  };

  return (
   <div className="">
      <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
    {
      errorPayment && <p style = {{ color:"red"}}>{errorPayment}</p>
    }
    {
      successPayment && <p style = {{ color:"green"}}>Your payment is successfully.</p>
    }
   </div>
  );
};
export default SimpleCardForm