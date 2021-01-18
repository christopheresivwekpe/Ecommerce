import React, { useEffect } from 'react';
import Products from './products';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';


function HomeScreen(){

    const productList = useSelector(state => state.productList);
  const {products, loading, error} = productList;
  const dispatch = useDispatch();

    useEffect(() => {
        dispatch( listProducts());
        return () => {
           //
        };
        // eslint-disable-next-line
    }, [dispatch]) 
    return (
        loading? (<LoadingBox />) :
        error ? (<MessageBox variant="danger">{error}</MessageBox>) :
        <div className="products">
           {products.map((product) => (
               <Products key={product._id} item={product}/>
           ))}
        </div>
    );
}

export default HomeScreen;