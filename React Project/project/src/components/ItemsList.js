import React from 'react';
import Card from './Card.js';
import Item from './Item.js';
import './ItemsList.css';

const ItemsList = function(props) {


    return (
        <Card> 
        <div className="itemsListContainer">
            {props.items.map((item) => (
              <Item
                name={item.name}
                img={item.img}
                description={item.description}
                isLoggedIn={props.isLoggedIn}
                id={item._id}
                rerenderHandler = {props.rerenderHandler}
               />
            ))}
        </div>
        </Card>
    );
}

export default ItemsList;