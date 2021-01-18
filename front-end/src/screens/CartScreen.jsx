import React, { useEffect } from 'react';
import {Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import '../screenStyles/cartScreen.css';
import MessageBox from './MessageBox';

/** Actions */
import { addToCart } from '../actions/cartActions';
import { removeFromCart } from '../actions/cartActions';


function CartScreen(props){

  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;
  
  const productId = props.match.params.id;
  const qty = props.location.search ?Number(props.location.search.split("=")[1]):1;
  const dispatch = useDispatch();

  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  }

  useEffect(() => {
    if (productId) {
       dispatch(addToCart(productId, qty));
    }
    // eslint-disable-next-line
  }, [dispatch, productId, qty]);

  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  }
 
  return (
    <div className='cart'>
      <div className="cart-list">
        <ul className="cart-list-container">
          <li>
            <h3>Shopping Cart</h3>
          </li>
            {
              cartItems.length === 0 ? (
                <MessageBox>
                  Cart is empty. <Link to="/">Go Shopping</Link>
                </MessageBox>
              ) :
                cartItems.map(item =>
                  <li key={item.name}>
                    <div className="cart-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                      <div className="cart-name">
                        <Link to={"/product/" + item.product } >
                          {item.name}
                        </Link>
                      </div>
                      <div className="cart-qty">
                        <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}>
                          {[...Array(item.countInStock).keys()].map(x =>
                          <option key={x+1} value={x+1}>
                            {x+1}
                          </option>)}
                        </select>
                        </div>
                        <div className="cart-price">
                        &#8358;{item.price}
                        </div>
                        <button type="button"  onClick={() => removeFromCartHandler(item.product)}>
                          Delete
                        </button>
                  </li>
                )
            }
        </ul>
      </div>
      <div className="cart-action">
        <h3>
          Subtotal ( {cartItems.reduce((a, c) => a + c.qty, 0)} items )
          :
          &#8358;{cartItems.reduce((a,c) => a + c.price * c.qty, 0)}
        </h3> 
        <button onClick={checkoutHandler} className="button primary block" disabled={cartItems.length === 0}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  )}

export default CartScreen;