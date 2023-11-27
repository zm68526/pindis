import React, {useState} from 'react';

import Card from './Card';
import Button from './Button';
import './AddItem.css'

const AddUser = (props) => {

  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      username: enteredUsername,
      password: enteredPassword
    }

    if (!(userData.name.trim().length === 0)) {
       // props.onAddUser(userData);
      }

    setEnteredUsername('');
    setEnteredPassword('');
  }

  return (
    <Card className="input">
      <form onSubmit={submitHandler}>
        <label>Username</label>
         <input
          id="username"
          type="text"
          value = {enteredUsername}
          onChange = {usernameChangeHandler}
        />
        <label>Password</label>
         <input
          id="password"
          type="password"
          value = {enteredPassword}
          onChange = {passwordChangeHandler}
        />
        <Button type="submit">Signup</Button>
      </form>
    </Card>
  );
};

export default AddUser;
