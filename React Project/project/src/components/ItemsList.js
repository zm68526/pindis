import React from 'react';
import Card from './Card.js';
import Item from './Item.js';
import './ItemsList.css';
// import './User.css';

const ItemsList = function(props) {
    return (
        <Card> 
        <div className="itemsListContainer">
            {props.items.map((item) => (
              <Item
                name={item.name}
                img={item.img}
                description={item.description}
                id={1232}
               />
            ))}
        </div>
        </Card>
    );
}

export default ItemsList;