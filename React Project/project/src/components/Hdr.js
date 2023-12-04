import React from 'react';
import Button from './Button.js'
import { useNavigate } from "react-router-dom";

import './Hdr.css';

const Hdr = (props) => {
  const navigate = useNavigate();

  const authenticationToggle = function() {
    if (props.isLoggedIn === false) navigate("/loggedin")
    else navigate("/")
  }
  const addItemHandler = function() {
    navigate("/add");
  }
  const signupToggle = function() {
    navigate("/signup");
  }
  const loginToggle = function() {
    navigate("/login");
  }

  const myItemsHandler = () => {
    navigate('/myPins');
  }

  if (props.isLoggedIn === false) {
    return (
      <div className="hdr">
        <h1>PinDis</h1>
        <div className="buttons">
          <Button onClick={loginToggle}>Login</Button>
          <Button onClick={signupToggle}>Sign Up</Button>
        </div>
      </div>
    );
  }
  else {
    return (
      <div className="hdr">
        <h1>PinDis</h1>
        <div className="buttons" >
          <h2 id='welcome'>Welcome {props.user}!</h2>
          <Button onClick={authenticationToggle}>Log Out</Button>
          <Button onClick={myItemsHandler}>My Pins</Button>
          <Button onClick={addItemHandler}>New PinDis</Button>
        </div>
      </div>
    )
  }
};

export default Hdr;