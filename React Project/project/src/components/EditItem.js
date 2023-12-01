import React, {useState} from 'react';

import Card from './Card';
import Button from './Button';
// import './EditItem.css'

const EditItem = (props) => {

  const [enteredImg, setEnteredImg] = useState(props.currImg);
  const [enteredName, setEnteredName] = useState(props.currName);
  const [enteredDescription, setEnteredDescription] = useState(props.currDescription);

  const imgChangeHandler = (event) => {
    setEnteredImg(event.target.value);
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const itemData = {
      img: enteredImg,
      name: enteredName,
      description: enteredDescription
    }

    if (!(itemData.name.trim().length === 0)) {
      props.onEditItem(itemData);
      //send info to database
    }

    setEnteredImg('');
    setEnteredName('');
    setEnteredDescription('');
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
        <label>Info</label>
         <input
          id="description"
          type="text"
          value = {enteredDescription}
          onChange = {descriptionChangeHandler}
        />
        <Button type="submit">Apply</Button>
      </form>
    </Card>
  );
};

export default EditItem;
