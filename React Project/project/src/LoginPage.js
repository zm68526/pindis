import React from 'react';
import AddUser from './components/Login';
import { useNavigate } from "react-router-dom";

function LoginPage(props) {

  const navigate = useNavigate();
    const userAddHandler = function(userData) {
        navigate('/loggedin')
        userData.id=123;
        //props.addItemHandler(itemData);
    };

  return (
    <div>
        <AddUser onAddItem={userAddHandler}/>
    </div>
  ); 
}

export default LoginPage;