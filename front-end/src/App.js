import React from 'react';
import './App.css'; 
import {BrowserRouter, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from './actions/userActions';

/** Screens */
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreens';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import UserListScreen from './screens/UserListScreen';


import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';


function App(props) {

  const userSignin = useSelector(state=> state.userSignin);
  const {userInfo} = userSignin;

  const cart = useSelector(state=> state.cart);
  const {cartItems} = cart;

  const dispatch = useDispatch();
  
  const signoutHandler = () => {
    dispatch(signout());
  };

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add('open');
  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove('open');
  }

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>
              <i className="fa fa-bars"></i>
            </button>
            <Link to="/">E-commerce</Link>
          </div>
          <div className="search">
            <form>
              <div className="row">
               <input type="text" name="q" id="q" />
               <button className="primary" type="submit">
                 <i className="fa fa-search" />
               </button>
              </div>
            </form>
          </div>
          <div className="header-links">
            <Link to="/cart">
              Cart {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                
                <ul className="dropdown-content">
                <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                <li>
                    <Link to="/orderhistory">Order History</Link>
                  </li>
                  <li>
                  <Link  to="#signout" onClick={signoutHandler} >Sign Out</Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <aside className="sidebar">
          <ul className="categories">
            <li>
          <strong>Shopping Categories</strong>
          <button className="sidebar-close-button" onClick={closeMenu}>x</button>
            </li>
              <li><a href="index.html">Rice</a></li>
              <li><a href="index.html">Soft-drink</a></li>
            </ul>
        </aside>
        <main className="main">
          <div className="contents">
          <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>
          <AdminRoute
            path="/productlist"
            component={ProductListScreen}
          ></AdminRoute>
          <AdminRoute
            path="/orderlist"
            component={OrderListScreen}
          ></AdminRoute>
          <AdminRoute
            path="/userlist"
            component={UserListScreen}
          ></AdminRoute>
          <Route
            path="/product/:id/edit"
            render={(props) => (<ProductEditScreen  {...props} /> )}
            exact={true} />
            <Route path="/orderhistory" render={(props) => (<OrderHistoryScreen  {...props} /> )} />
            <Route path='/order/:id' render={(props) => (<OrderScreen  {...props} /> )} />
            <Route path='/placeorder' render={(props) => (<PlaceOrderScreen  {...props} /> )} />
            <Route path='/payment' render={(props) => (<PaymentScreen  {...props} /> )} />
            <Route path='/shipping' render={(props) => (<ShippingScreen  {...props} /> )} />
            <Route path='/products' render={(props) => (<ProductsScreen  {...props} /> )} />
            <Route path="/register" render={(props) => (<RegisterScreen  {...props} /> )} />
            <Route path="/signin" render={(props) => (<SigninScreen  {...props} /> )} />
            <Route path="/cart/:id?" render={(props) => (<CartScreen {...props} /> )} />
            <Route path="/product/:id" exact={true} render={(props) => (<ProductScreen {...props} /> )} />
            <Route path="/" exact={true}>
              <HomeScreen />
            </Route>
          </div>
        </main>
        <footer className="footer">
          &copy; 2020 All right reserved.
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
