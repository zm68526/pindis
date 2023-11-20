import React from 'react';
import AddItem from './components/AddItem'
import { useNavigate } from "react-router-dom";

function AddItemPage(props) {
  const navigate = useNavigate();
    const itemAddHandler = function(itemData) {
        navigate('/loggedin')
        itemData.id=123;
        props.addItemHandler(itemData);
    };

  return (
    <div>
        <AddItem onAddItem={itemAddHandler} />
    </div>
  );
}

export default AddItemPage;
