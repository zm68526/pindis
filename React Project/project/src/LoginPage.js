import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

function LoginPage(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const loginHandler = async () => {
    try {
      const response = await Axios.post('http://localhost:8080/users/login', {
        username,
        password,
      });

      const { token, user } = response.data;

      localStorage.setItem('token', token);

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
      <h2>Login Page</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button onClick={loginHandler}>Login</button>
    </div>
  );
}

export default LoginPage;