import React from 'react';
import AddUser from './components/AddUser';
import { useNavigate } from "react-router-dom";

function SignupPage(props) {

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

export default SignupPage;