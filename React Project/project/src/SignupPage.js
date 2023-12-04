import React, { useState } from 'react';
import AddUser from './components/AddUser';
import { useNavigate } from "react-router-dom";
import Axios from 'axios';
import './components/AddItem.css'
import './SignUpPage.css';




function SignupPage(props) {

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const userAddHandler = async function(userData) {
    try {
      const response = await Axios.post('http://localhost:8080/users/signup', userData);
      props.setUsernameAfterAdding(userData);
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

const loginRoute = () => {
  navigate('/login');
}


  return (
    <div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <AddUser onAddItem={userAddHandler}/>
        <a id='loginRoute' onClick={loginRoute}><p>Already have an account? Login here!</p></a>
    </div>
  ); 
}

export default SignupPage;