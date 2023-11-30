import React from "react";
import './ItemDeleteButton.css'
import Axios from 'axios';

const ItemDeleteButton = props => {
    async function deleteItemHandler(id) {
        console.log("DELETE ID IS: " + id);
        let initialResponse = '';
        await Axios.delete(`http://localhost:8080/pins/${id}`)
        .then(response => console.log(response))
        .catch(error => (console.log(error)));
        console.log("deleted");
      } 
    return (
        <button onClick={() => deleteItemHandler(props.id)} className="Item-Delete-Button material-symbols-outlined">delete</button>
    )
}

export default ItemDeleteButton;