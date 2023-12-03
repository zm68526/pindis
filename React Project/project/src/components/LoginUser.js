import React, { useState } from 'react';
import Button from './Button';
import Card from './Card';

function LoginUser(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const loginHandler = async (event) => {
    event.preventDefault();
    const userData = {
      username: username,
      password: password
    };
    props.loginHandler(userData);
  };

  return (
    <Card className="input">
      <form onSubmit={loginHandler}>
        <h1>Login to PinDis</h1>
        <label>Username</label>
         <input
          id="username"
          type="text"
          value = {username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
         <input
          id="password"
          type="password"
          value = {password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>
      </form>
    </Card>
  );
}

export default LoginUser;