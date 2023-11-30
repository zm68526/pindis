import React from 'react';
import './ItemEditButton.css'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ItemEditButton = props => {
    const navigate = useNavigate();
    const editItemHandler = id => {
        navigate(`/edit-item/${id}`);
      } 
    return (
        <button onClick={() => editItemHandler(props.id)} className="Item-Edit-Button">Edit</button>
    )
};

export default ItemEditButton;