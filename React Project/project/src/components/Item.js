import React from 'react';
import './Item.css';

const Item = props => {
    return (
        <div className="itemContainer" key={props._id}>
            <h2>{props.name}</h2>
            <img src={props.img} className="item-img" alt={props.name} width="100px" />
            <h6 className='item-description'>{props.description}</h6>
        </div>
  
    )
}

export default Item;
