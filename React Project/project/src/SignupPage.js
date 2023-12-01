import React from 'react';
import AddUser from './components/AddUser';
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

function SignupPage(props) {

  const navigate = useNavigate();

  const userAddHandler = async function(userData) {
    Axios.post('http://localhost:8080/users', userData)
      .then(response => {
        console.log(response);
        navigate('/loggedin');
      })
      .catch(error => console.log(error));
};


  return (
    <div>
        <AddUser onAddItem={userAddHandler}/>
    </div>
  ); 
}

export default SignupPage;