import React from 'react';
import Card from './Card.js';
import Item from './Item.js';
// import './UsersList.css';
// import './User.css';

const UsersList = function(props) {
    return (
        <Card className="users"> 
            <ul>
                {props.items.map((user) => (
                  <Item
                    id={user.id}
                    img={user.img}
                    age={user.age}
                    major={user.major}
                   />
                ))}
            </ul>
        </Card>
    );
}

export default UsersList;