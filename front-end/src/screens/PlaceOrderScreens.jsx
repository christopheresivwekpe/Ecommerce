import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link } from 'react-router-dom';
import '../screenStyles/placeOrderScreen.css';

import { createOrder } from '../actions/orderActions';
import CheckoutSteps from '../components/CheckoutSteps';

import { ORDER_CREATE_RESET } from '../constants/orderConstants';
import LoadingBox from './LoadingBox';
import MessageBox from '../screens/MessageBox';


function PlaceOrderScreen(props){

  const cart = useSelector(state => state.cart);

  if (!cart.paymentMethod) {
    props.history.push('/payment');
  }

  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, error, order } = orderCreate;
  const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12

  cart.itemsPrice = toPrice(cart.cartItems.reduce((a, c) => a + c.price * c.qty, 0));
  cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
  cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

  const dispatch = useDispatch();

  const placeOrderHandler = () => {
    dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
  }

  useEffect(() => {
    if (success) {
      props.history.push(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch, order, props.history, success]);
 
  return (
      <div>
          <CheckoutSteps step1 step2 step3 step4 />
          <div className='placeorder'>
      <div className="placeorder-info">
          <ul>
            <li className='card-info'>
              <h2>
                  Shipping
              </h2>
              <div>
                  <div><strong>Name:</strong> {cart.shippingAddress.fullName}</div>
                  <div><strong>Address: </strong> {cart.shippingAddress.address},
                  {cart.shippingAddress.city}, {cart.shippingAddress.postalCode}
                  ,{cart.shippingAddress.country}</div>
                </div>
                </li>
              <li className='card-info'>
              <h2>Payment</h2>
                <div>
                  <strong>Method:</strong> {cart.paymentMethod}
                </div>
              </li>
              <li className='card-info'>
            <h2>Order Items</h2>
          <ul className="order-items">
            {
                cart.cartItems.map(item =>
                  <li key={item.product}>
                    <div className="row">
                    <div >
                      <img className="small" src={item.image} alt={item.name} />
                    </div>
                    <div>
                        <Link to={"/product/" + item.product } >
                          {item.name}
                        </Link>
                    </div>
                    <div>
                        {item.qty} x &#8358;{item.price} = &#8358;{item.qty * item.price}
                      </div>
                    </div>
                  </li>
                )
            }
            
        </ul>
              </li>
          </ul>
        
      </div>
      <div className="placeorder-action">
        <div className='placeorder-action-div'>
          <ul>
              <li>
                  <h2>Order Summary</h2>
              </li>
              <li>
                <div className="row">
                  <div>Items</div>
                  <div>&#8358;{cart.itemsPrice.toFixed(2)}</div>
                  </div>
              </li>
              <li>
              <div className="row">
                  <div>Shipping</div>
                  <div>&#8358;{cart.shippingPrice.toFixed(2)}</div>
                  </div>
              </li>
              <li>
              <div className="row">
                  <div>Tax</div>
                  <div>&#8358;{cart.taxPrice.toFixed(2)}</div>
                  </div>
              </li>
              <li>
              <div className="row">
                <div>
                  <strong>Order Total</strong>
                </div>
                <div>
                  <strong>&#8358;{cart.totalPrice.toFixed(2)}</strong>
                </div>
                </div>
              </li>
              <li>
                <button onClick={placeOrderHandler} className="primary block"
                disabled={cart.cartItems.length === 0}>
                Place Order
                </button>
              </li><br/>
              {loading && <LoadingBox></LoadingBox>}
              {error && <MessageBox variant="danger">{error}</MessageBox>}
          </ul>
          </div>
      </div>
    </div>
      </div>
  )
}

export default PlaceOrderScreen;