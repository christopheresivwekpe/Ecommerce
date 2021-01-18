import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';

/** Reducers */
import { productDeleteReducer, productDetailsReducer, productUpdateReducer, productListReducer, productCreateReducer, } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import { userRegisterReducer, userSigninReducer, userDetailsReducer, userListReducer,
    userUpdateProfileReducer, } from './reducers/userReducer';
import { orderCreateReducer, orderDetailsReducer, orderPayReducer, 
    orderMineListReducer, orderListReducer, orderDeleteReducer, orderDeliverReducer, } from './reducers/orderReducers';

const cartItems = Cookie.getJSON('cartItems') || [];
const userInfo = Cookie.getJSON('userInfo') || null;
const shippingAddress = Cookie.getJSON('shippingAddress') || {},

//! expected a const
 initialState = {
    cart: { 
        cartItems, 
        shippingAddress, 
        payment:{} 
    }, 
    userSignin: {
        userInfo
    }};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    orderDelete: orderDeleteReducer,
    productUpdate: productUpdateReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    productCreate: productCreateReducer,
    productDelete: productDeleteReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderDeliver: orderDeliverReducer,
    orderMineList: orderMineListReducer,
    userDetails: userDetailsReducer,
    userList: userListReducer,
    userUpdateProfile: userUpdateProfileReducer,
    orderList: orderListReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;