import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../screenStyles/signinScreen.css';
import { savePayment } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';


function PaymentScreen (props) {

    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;

    if (!shippingAddress.address) {
      props.history.push('/shipping');
    }

    const [paymentMethod, setPaymentMethod] = useState('payPal');

    const dispatch = useDispatch();

    const submitHandler = (e) => {
       e.preventDefault();
       dispatch(savePayment(paymentMethod));
       props.history.push('/placeorder')
    }

    return (
        <div>
            <CheckoutSteps step1 step2 step3 />
            <div className="form">
            <form onSubmit={submitHandler}>
               <ul className="form-container">
                   <li>
                       <h2>Payment</h2>
                   </li>
                 <li>
                     <div>
                     <input id="paypal" type="radio" name="paymentMethod" value="payPal"
                     required checked onChange={(e) => setPaymentMethod(e.target.value)} />
                     {" "}
                     <label htmlFor="paypal">
                         payPal
                     </label>
                     </div>
                 </li>
                 <li>
                     <div>
                     <input id="stripe" type="radio" name="paymentMethod" value="Stripe"
                     required onChange={(e) => setPaymentMethod(e.target.value)} />
                     {" "}
                     <label htmlFor="stripe">
                         Stripe
                     </label>
                     </div>
                 </li>
                 <li>
                     <button type="submit" className="primary" >Continue</button>
                 </li>
               </ul>
            </form>
        </div>
        </div>
        
    );

}

export default PaymentScreen;