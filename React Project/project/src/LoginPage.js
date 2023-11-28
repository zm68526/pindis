import React from 'react';
import AddUser from './components/Login';
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

function LoginPage(props) {

  const navigate = useNavigate();
    const userAddHandler = function(userData) {
        navigate('/loggedin')
    };

  return (
    <div>
        <AddUser onAddItem={userAddHandler}/>
    </div>
  ); 
}

export default LoginPage;