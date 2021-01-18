import "../screenStyles/products.css";
import { Link } from 'react-router-dom';
import RatingScreen from './RatingScreen';

function Products(props) {
    return (
      <div className="Product">
          <div className="product-card">
        <Link className="image" to={"/product/" + props.item._id}>
          <img src={props.item.image} alt={props.item.name} className="product-image" />
        </Link>
        <div className="card-body">
        <Link to={"/product/" + props.item._id}><h2 className="product-name">{props.item.name}</h2></Link>
        <RatingScreen rating={props.item.rating} numReviews={props.item.numReviews} />
        <div className="row">
        <div className="product-price">&#8358;{props.item.price}</div>
        <button type="button"  className="primary">To cart</button>
        </div>
        </div>
      </div>
      </div>
    );
  }
  
  export default Products;