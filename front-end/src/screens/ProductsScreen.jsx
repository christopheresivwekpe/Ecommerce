import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts, createProduct, deleteProduct } from '../actions/productActions';
import '../screenStyles/productsScreen.css';

function ProductsScreen (props) {

    const [modalVisible, setModalVisible] = useState(false);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
  //const [details, setDetails] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [countInStock, setCountInStock] = useState('');
    const [description, setDescription] = useState('');

    const productList = useSelector(state => state.productList);
    const {loading, products, error} = productList;

    const productSave = useSelector(state => state.productSave);
    const {loading: loadingSave, success: successSave, error: errorSave} = productSave;

    const productDelete = useSelector(state => state.productDelete);
    const {loading: loadingDelete, success: successDelete, error: errorDelete} = productDelete;
    const dispatch = useDispatch();

    useEffect(() => {
        if(successSave){
            setModalVisible(false)
        }
        dispatch(listProducts())
        return () => {
            //
        }
        // eslint-disable-next-line
    }, [successSave, successDelete])

    const openModal = (product) => {
        setModalVisible(true);
      setId(product._id);
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
      setImage(product.image);
      setCategory(product.category);
      setCountInStock(product.countInStock);
    }

    const submitHandler = (e) => {
       e.preventDefault();
       dispatch(createProduct({_id: id, name, price, image, category, countInStock, description}))
    }

    const deleteHandler = (product) => {
        dispatch(deleteProduct(product._id));
    }
    return (

        <div className="content content-margined">
          <div className="product-header">
              <h3>Products</h3>
              <button className="primary" onClick={() => openModal({})}>Create Product</button>
          </div>
          {modalVisible &&
          <div className="form">
            <form onSubmit={submitHandler}>
               <ul className="form-container">
                   <li>
                       <h2>Create Product</h2>
                   </li>
                   <li>
                       {loadingSave && <div>Loading...</div>}
                       {errorSave && <div>{errorSave}</div>}
                   </li>
                 <li>
                     <label htmlFor="name">
                         Name
                     </label>
                     <input id="name" type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
                 </li>
                 <li>
                     <label htmlFor="price">
                         Price
                     </label>
                     <input id="price" type="text" value={price} name="price" onChange={(e) => setPrice(e.target.value)} />
                 </li>
                 <li>
                     <label htmlFor="image">
                         Image
                     </label>
                     <input id="image" type="text" value={image} name="image" onChange={(e) => setImage(e.target.value)} />
                 </li>
                 <li>
                     <label htmlFor="countInStock">
                       Count In Stock
                     </label>
                     <input id="countInStock" type="text" value={countInStock} name="countInStock" onChange={(e) => setCountInStock(e.target.value)} />
                 </li>
                 <li>
                     <label htmlFor="category">
                         Category
                     </label>
                     <input id="category" type="text" value={category} name="category" onChange={(e) => setCategory(e.target.value)} />
                 </li>
                 <li>
                     <label htmlFor="description">
                         Desciption
                     </label>
                     <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                 </li>
                 <li>
                     <button type="submit" className="primary" >{id ? "Update":"Create"}</button>
                 </li>
                 <li>
                     <button type="button" onClick={() => setModalVisible(false)} className="secondary" >Back</button>
                 </li>
                
               </ul>
            </form>
        </div>
       }
          <div className="product-list">
              <table className='table'>
                  <thead>
                      <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Price</th>
                          <th>Category</th>
                          <th>Action</th>
                      </tr>
                  </thead>
                  <tbody>
                      {products && products.map(product => (
                          <tr key={product._id}>
                          <td>{product._id}</td>
                          <td>{product.name}</td>
                          <td>{product.price}</td>
                          <td>{product.category}</td>
                          <td>
                              <button className="secondary" onClick={() => openModal(product)}>Edit</button>
                              {'  '}
                              <button className="secondary" onClick={() => deleteHandler(product)}>Delete</button>
                          </td>
                      </tr>
                      ))}
                  </tbody>
              </table>
          </div>
        </div>
        

        
    );

}

export default ProductsScreen;