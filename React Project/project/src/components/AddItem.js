import React, {useState} from 'react';

import Card from './Card';
import Button from './Button';
import './AddItem.css'
//import './AddUser.css';

const AddItem = (props) => {

  // only doing img and name for now since that's all that's required for this checkpoint - eventually we will add description and tags as well
  const [enteredImg, setEnteredImg] = useState('');
  const [enteredName, setEnteredName] = useState('');

  const imgChangeHandler = (event) => {
    setEnteredImg(event.target.value);
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const itemData = {
      img: enteredImg,
      name: enteredName
    }

    if (!(itemData.name.trim().length === 0)) {
      props.onAddItem(itemData);
    }

    setEnteredImg('');
    setEnteredName('');
  }

  return (
    <Card className="input">
      <form onSubmit={submitHandler}>
        <label>Link to image</label>
         <input
          id="img"
          type="text"
          value = {enteredImg}
          onChange = {imgChangeHandler}
        />
        <label>Name</label>
         <input
          id="name"
          type="text"
          value = {enteredName}
          onChange = {nameChangeHandler}
        />
        <Button type="submit">Pin Item</Button>
      </form>
    </Card>
  );
};

export default AddItem;
