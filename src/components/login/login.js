import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import { Link } from "react-router-dom";
import {isLogged} from '../../Redux/User/userActions'
import "./login.css";
const LoginComponent = () => {
  const dispatch = useDispatch()
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onchangehandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(user);
     dispatch(isLogged(user))
  };
  return (
    <div>
        
      <form className="signin-container">
    <div className = "loginTag">
    <p >LOGIN</p>
    </div>
      
        <div className="ipcontainer">          
          <input
            className="inputlogin"
            type="email"
            name="email"
            value={user.email}
            placeholder="email"
            onChange={onchangehandler}
          ></input>
        </div>
        <div className="ipcontainer">
          <input
            className="inputlogin"
            type="password"
            name="password"
            value={user.password}
            placeholder="password"
            onChange={onchangehandler}
          ></input>
        </div>

        <button className="submitbtm" onClick={onSubmitHandler}>
          Continue
        </button>
        <div className = "signUpTag">
            <small style = {{color: '#767373'}}>
                New?
            </small>
            <Link to = "/signup" style = {{color:'#002651', fontWeight:'501', marginLeft:'3px'}}>
                Sign Up</Link>
        </div>
      </form>
    </div>
  );
};
export default LoginComponent;
