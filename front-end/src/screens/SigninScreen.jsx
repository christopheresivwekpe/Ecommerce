import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import '../screenStyles/signinScreen.css';
import { signin } from '../actions/userActions';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';


function SigninScreen (props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordShown, setIsPasswordShown] = useState(false);

    const userSignin = useSelector(state => state.userSignin);
    const {loading, userInfo, error} = userSignin;
    const dispatch = useDispatch();
    const redirect = props.location.search?props.location.search.split("=")[1]:'/';

    useEffect(() => {
        if(userInfo){
            props.history.push(redirect);
        }
        return () => {
            //
        }
        // eslint-disable-next-line
    }, [props.history, redirect, userInfo]);

    const submitHandler = (e) => {
       e.preventDefault();
       dispatch(signin(email, password))
    }

    return (
        <div className="form">
            <form  onSubmit={submitHandler}>
               <ul className="form-container">
                   <li>
                       <h2>Sign In</h2>
                   </li>
                   <li>
                   {loading && <LoadingBox></LoadingBox>}
                   {error && <MessageBox variant="danger">{error}</MessageBox>}
                   </li>
                 <li>
                     <label className="label" htmlFor="email">
                         Email
                     </label>
                     <input id="email" type="email" required placeholder="Enter email" name="email" onChange={(e) => setEmail(e.target.value)} />
                 </li>
                 <li className="pass">
                     <label className="label" htmlFor="password">
                         Password
                     </label>
                     <input id="password" placeholder="Enter password" required
                     type={isPasswordShown ? "text" : "password"} 
                     name="password" onChange={(e) => setPassword(e.target.value)} />
                     
                     <i className={isPasswordShown? "fa fa-eye-slash password-icon":"fa fa-eye password-icon"} 
                     onClick={() => setIsPasswordShown(!isPasswordShown)} />
                 </li>
                 <li>
                     <button  type="submit" className="primary" >Signin</button>
                 </li>
                 <li>
                     <div>New customer?{' '}
                     <Link  to={redirect === "/" ? "register": "register?redirect=" + redirect} 
                     className="secondary" >Create your account</Link>    
                     </div>               
                 </li>
               </ul>
            </form>
        </div>
    );

}

export default SigninScreen;