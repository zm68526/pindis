import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import LoginUser from './components/LoginUser';
import './LoginPage.css';

function LoginPage(props) {

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const loginHandler = async (userData) => {

    try {
      const response = await Axios.post('http://localhost:8080/users/login', userData);

      const { token, user } = response.data;

      localStorage.setItem('token', token);
      props.loginHandler(userData);
      navigate('/loggedin');

    } catch (error) {
      console.log("ERROR");
      if (error.response && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError('An error occurred');
      }
    }
  };

  const signUpRoute = () => {
    navigate('/signup');
  };

  return (
    <div>
    {error && <p style={{ color: 'red' }}>{error}</p>}
    <LoginUser loginHandler={loginHandler} />
    <a id='signUpRoute' onClick={signUpRoute}><p>Dont have an account? Sign up!</p></a>
    </div>
  );
}

export default LoginPage;