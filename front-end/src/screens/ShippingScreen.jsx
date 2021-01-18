import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../screenStyles/signinScreen.css';
import { saveShipping } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

function ShippingScreen (props) {

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;

    if (!userInfo) {
      props.history.push('/signin');
    }
  
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');

    const dispatch = useDispatch();

    const submitHandler = (e) => {
       e.preventDefault();
       dispatch(saveShipping({fullName, address, city, postalCode, country}));
       props.history.push('/payment')
    }

    shippingAddress.fullName = fullName
    shippingAddress.address = address
    shippingAddress.city = city
    shippingAddress.postalCode = postalCode
    shippingAddress.country = country
    
    return (
        <div>
            <CheckoutSteps step1 step2 />
            <div className="form">
            <form onSubmit={submitHandler}>
               <ul className="form-container">
                   <li>
                       <h2>Shipping Address</h2>
                   </li>
                   <li>
                     <label className="label" htmlFor="fullName">
                         Full Name
                     </label>
                     <input id="fullName" type="text" name="fullName" placeholder="Enter full name"
                      value={fullName} required onChange={(e) => setFullName(e.target.value)} />
                 </li>
                 <li>
                     <label className="label" htmlFor="address">
                         Address
                     </label>
                     <input id="address" type="text" name="address" placeholder="Enter address"
                      value={address} required onChange={(e) => setAddress(e.target.value)} />
                 </li>
                 <li>
                     <label className="label" htmlFor="city">
                         City
                     </label>
                     <input id="city" type="text" name="city" placeholder="Enter city"
                      value={city} required onChange={(e) => setCity(e.target.value)} />
                 </li>
                 <li>
                     <label className="label" htmlFor="postalCode">
                         Postal Code
                     </label>
                     <input id="postalCode" type="text" name="postalCode" placeholder="Enter postal code"
                      value={postalCode} required onChange={(e) => setPostalCode(e.target.value)} />
                 </li>
                 <li>
                     <label className="label" htmlFor="country">
                         Country
                     </label>
                     <input id="country" type="text" name="country" placeholder="Enter country"
                       value={country} required onChange={(e) => setCountry(e.target.value)} />
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

export default ShippingScreen;