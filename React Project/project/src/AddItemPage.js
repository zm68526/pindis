import React from 'react';
import AddItem from './components/AddItem'
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

function AddItemPage(props) {
  const navigate = useNavigate();
    const itemAddHandler = async function(itemData) {
        Axios.post('http://localhost:8080/pins', itemData)
        .then(response => console.log(response))
        .catch(error => console.log(error));
        navigate('/loggedin')
    };

  return (
    <div>
        <AddItem onAddItem={itemAddHandler} />
    </div>
  );
}

export default AddItemPage;
