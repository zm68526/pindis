import React from 'react';
import AddUser from './components/AddUser';
import { useNavigate } from "react-router-dom";

function SignupPage(props) {

  const navigate = useNavigate();
    const itemAddHandler = function(itemData) {
        navigate('/loggedin')
        itemData.id=123;
        //props.addItemHandler(itemData);
    };

  return (
    <div>
        <AddUser onAddItem={itemAddHandler}/>
    </div>
  ); 
}

export default SignupPage;