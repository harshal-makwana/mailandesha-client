import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setPaymentStatus } from './features/paymentSlice';
import { createCheckoutSession } from './paymentService';

const Checkout: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (cardElement === null) {
      return;
    }

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (error) {
        console.error(error,paymentMethod);
        dispatch(setPaymentStatus('failed'));
        return;
      }

      const sessionId = await createCheckoutSession(1000); // Amount in cents

      const { error: stripeError } = await stripe.redirectToCheckout({ sessionId });

      if (stripeError) {
        console.error(stripeError);
        dispatch(setPaymentStatus('failed'));
      } else {
        dispatch(setPaymentStatus('succeeded'));
        navigate('/success');
      }
    } catch (error) {
      console.error('Error:', error);
      dispatch(setPaymentStatus('failed'));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default Checkout;
