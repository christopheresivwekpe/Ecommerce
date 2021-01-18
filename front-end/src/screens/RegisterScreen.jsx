import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import '../screenStyles/signinScreen.css';
import { register } from '../actions/userActions';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';

function RegisterScreen (props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const userRegister = useSelector(state => state.userRegister);
    const {loading, userInfo, error} = userRegister;
    const dispatch = useDispatch();

    const redirect = props.location.search?props.location.search.split("=")[1]:'/';

    useEffect(() => {
        if(userInfo){
            props.history.push(redirect)
        }
        return () => {
            //
        }
      // eslint-disable-next-line
    }, [props.history, redirect, userInfo])


    const submitHandler = (e) => {
       e.preventDefault();
       if (password !== repassword) {
        alert('Password and confirm password are not match');
      } else {
       dispatch(register(name, email, password));
      }
    }

    return (
        <div className="form">
            <form onSubmit={submitHandler}>
               <ul className="form-container">
                   <li>
                       <h2>Create Account</h2>
                   </li>
                   <li>
                   {loading && <LoadingBox></LoadingBox>}
                   {error && <MessageBox variant="danger">{error}</MessageBox>}
                   </li>
                 <li>
                     <label className="label" htmlFor="name">
                         Name
                     </label>
                     <input id="name" type="text" placeholder="Enter name"
                      required name="name" onChange={(e) => setName(e.target.value)} />
                 </li>
                 <li>
                     <label className="label" htmlFor="email">
                         Email
                     </label>
                     <input id="email" type="email" placeholder="Enter email"
                      required name="email" onChange={(e) => setEmail(e.target.value)} />
                 </li>
                 <li>
                     <label className="label" htmlFor="password">
                         Password
                     </label>
                     <input id="password" type="password" placeholder="Enter password"
                      required name="password" onChange={(e) => setPassword(e.target.value)} />
                 </li>
                 <li>
                     <label className="label" htmlFor="rePassword">
                         Confirm Password
                     </label>
                     <input id="rePassword" type="password" placeholder="Enter confirm password"
                      required name="rePassword" onChange={(e) => setRepassword(e.target.value)} />
                 </li>
                 <li>
                     <button type="submit" className="primary" >Register</button>
                 </li>
                 <li>
                     <div>Already have an account? {' '}
                     <Link to={redirect === "/" ? "signin": "signin?redirect=" + redirect} className="secondary" > Sign In</Link>
                     </div>
                 </li>
               </ul>
            </form>
        </div>
    );

}

export default RegisterScreen;