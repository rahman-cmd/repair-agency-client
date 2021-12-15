import React from 'react';
import './SimplePayment.css';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from '../Home/Payment/Payment';

const stripePromise = loadStripe('pk_test_51Jw9oWKd2uEs6nhLplPPbFlgCXlSZVwWeM9vt2flkvaHHwrVGVa9TSq7DpQxArO2HebNRVc8AOFHLFzDLROnCaYa009lVir19B');

const SimplePayment = () => {
  return (
    <div className="payment_form_container rounded">
      <div className="text-center mb-4">
        <h4 className="text-primary">PAYMENT</h4>
      </div>
      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    </div>
  );
};

export default SimplePayment;