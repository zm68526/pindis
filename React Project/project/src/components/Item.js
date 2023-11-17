import React from 'react';
// import './User.css';

const Item = props => {
    return (    
        <li key={props.id} className="user-item">
        <img src={props.img} className="user-img" alt={props.name} width="100px" />
        <div className="user-info">
            <h2>{props.name}</h2>
        </div>
        </li>
    )
}

export default Item;
