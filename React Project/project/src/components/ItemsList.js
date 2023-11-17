import React from 'react';
import Card from './Card.js';
import Item from './Item.js';
// import './UsersList.css';
// import './User.css';

const ItemsList = function(props) {
    return (
        <Card className="users"> 
            <ul>
                {props.items.map((user) => (
                  <Item
                    name={user.name}
                    img={user.img}
                    id={1232}
                   />
                ))}
            </ul>
        </Card>
    );
}

export default ItemsList;