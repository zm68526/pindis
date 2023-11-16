import React from 'react';
import Button from './Button.js'

// import './Hdr.css';

const Hdr = (props) => {
  const setIsLoggedIn = function() {
    props.loginHandler();
  }

  return (
    <div className="hdr">
     <Button onClick={setIsLoggedIn}>Login</Button>
     <Button onClick={setIsLoggedIn}>Sign Up</Button>
    </div>
  );
};

export default Hdr;