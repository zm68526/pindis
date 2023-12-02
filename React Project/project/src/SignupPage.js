import React, { useState } from 'react';
import AddUser from './components/AddUser';
import { useNavigate } from "react-router-dom";
import Axios from 'axios';


function SignupPage(props) {

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const userAddHandler = async function(userData) {
    try {
      const response = await Axios.post('http://localhost:8080/users', userData);
      console.log(response);
      navigate('/loggedin');
  } catch (error) {
      if (error.response && error.response.data.error) {
          setError(error.response.data.error);
      } else {
          setError('An error occurred');
      }
  }
};


  return (
    <div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <AddUser onAddItem={userAddHandler}/>
    </div>
  ); 
}

export default SignupPage;