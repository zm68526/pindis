import React from 'react';
import Button from './Button.js'
import { useNavigate } from "react-router-dom";

// import './MyItemsHdr.css';

const MyItemsHdr = () => {
  const navigate = useNavigate();


  const feedHandler = () => {
    navigate("/LoggedIn");
  }


    return (
      <div className="hdr">
        <h1>PinDis</h1>
        <div className="buttons">
          <Button onClick={feedHandler}>Feed</Button>
        </div>
      </div>
    );

};

export default MyItemsHdr;