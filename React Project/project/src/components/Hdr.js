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

  if (props.isLoggedIn === false) {
    return (
      <div className="hdr">
        <h1>PinDis</h1>
        <div className="buttons">
          <Button onClick={authenticationToggle}>Login</Button>
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
          <Button onClick={authenticationToggle}>Log Out</Button>
          <Button onClick={addItemHandler}>Add Item</Button>
        </div>
      </div>
    )
  }
};

export default Hdr;