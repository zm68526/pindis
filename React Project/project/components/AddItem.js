import React, {useState} from 'react';

import Card from './Card';
import Button from './Button';
// import './AddUser.css';

const AddItem = (props) => {

  const [enteredId, setEnteredId] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [enteredImg, setEnteredImg] = useState('');
  const [enteredMajor, setEnteredMajor] = useState('');

  const idChangeHandler = (event) => {
    setEnteredId(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const imgChangeHandler = (event) => {
    setEnteredImg(event.target.value);
  };

  const majorChangeHandler = (event) => {
    setEnteredMajor(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      id: enteredId,
      age: enteredAge,
      img: enteredImg,
      major: enteredMajor
    }

    if (!(userData.id.trim().length === 0)) {
      props.onAddUser(userData);
    }

    setEnteredId('');
    setEnteredAge('');
    setEnteredImg('');
    setEnteredMajor('');
  }

  return (
    <Card className="input">
      <form onSubmit={submitHandler}>
        <label>Username</label>
        <input
          id="username"
          type="text"
          value = {enteredId}
          onChange = {idChangeHandler}
        />
        <label>Age (Years)</label>
        <input
          id="age"
          type="number"
          value = {enteredAge}
          onChange = {ageChangeHandler}
        />
        <label>Link to image</label>
         <input
          id="img"
          type="text"
          value = {enteredImg}
          onChange = {imgChangeHandler}
        />
        <label>Major</label>
         <input
          id="major"
          type="text"
          value = {enteredMajor}
          onChange = {majorChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddItem;
