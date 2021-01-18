import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import '../screenStyles/ProductScreen.css';
import { detailsProducts } from '../actions/productActions';
import RatingScreen from './RatingScreen';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';

function ProductScreen(props){
    const productId = props.match.params.id;
    const [qty, setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
  const {product, loading, error} = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( detailsProducts(productId));
    return () => {
       //
    };
    // eslint-disable-next-line
  }, [dispatch, productId]);

  const handleAddToCart = () => {
      props.history.push("/cart/"+ props.match.params.id + "?qty=" + qty)
  }
    
return (
<div className="details-card">
    <div className="back"><Link to="/" >Back to result</Link></div>
    {loading? (<LoadingBox />) :
    error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="details">
    <div className="details-image">
        <img src={product.image} alt={product.name} />
    </div>
    <div className="details-info">
       <ul>
           <li><h2>{product.name}</h2></li>
           <li><RatingScreen  rating={product.rating} numReviews={product.numReviews}/></li>
           <li>Price: &#8358;{product.price}</li>
           <li>Description: <p>{product.description}</p></li>
           <li>
               Images: 
               <ul className="images">
                   <li>
                       <button type="button" className="light">
                           <img src={product.image} alt="product" className="small" />
                       </button>
                   </li>
               </ul>
           </li>
       </ul>
    </div>
    <div className="details-action">
        <ul>
            <li><div className="row"><div>Price:</div> <div>&#8358;{product.price}</div></div></li>
            <li><div className="row"><div>Status:</div> <div>{product.countInStock > 0 ? (<span className="success">In Stock</span>) 
                         : (<span className="error">Unavailable</span>)}</div></div></li>
            <li><div className="row"><div>Qty:</div> <div><select value={qty} onChange={(e) => {setQty(e.target.value)}}>
                {[...Array(product.countInStock).keys()].map(x => (
                    <option key={x + 1} value={x+1}>
                        {x+1}
                    </option>)
                )}
            </select></div>
            </div>
            </li>
            <li>
                {product.countInStock > 0 &&
                   <button className='primary block' onClick={handleAddToCart} >Add to Cart</button>
                }
            </li>
        </ul>
    </div>
   </div>
    )}
    
</div>
);
}

export default ProductScreen;