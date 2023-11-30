import React from 'react';
import './Item.css';
import ItemEditButton from './ItemEditButton';
import ItemDeleteButton from './ItemDeleteButton';

const Item = props => {
    if (props.isLoggedIn) {
        return (
            <div className="itemContainer" key={props._id}>
            <h2>{props.name}</h2>
            <img src={props.img} className="item-img" alt={props.name} width="100px" />
            <h6 className='item-description'>{props.description}</h6>
            <ItemEditButton id={props.id} />
            <ItemDeleteButton id={props.id} />
        </div>
        )
    } else {
        return (
            <div className="itemContainer" key={props._id}>
            <h2>{props.name}</h2>
            <img src={props.img} className="item-img" alt={props.name} width="100px" />
            <h6 className='item-description'>{props.description}</h6>
        </div>
        )
    }
}

export default Item;
