import React from 'react';
import ItemsList from './components/ItemsList'
import MyItemsHdr from './components/MyItemsHdr'

function MyPins(props) {

  // filter items so it only shows ones created with your username (props.user)
  // console.log(props.user);
  props.rerenderHandler();
  let items = props.pins.filter(userData => userData.user === props.user);
  console.log("PROPS USER: " + props.user);

  return (
    <div>
      <MyItemsHdr />
      <ItemsList showEditDelete={true} items={items} rerenderHandler = {props.rerenderHandler}/>
    </div>
  );
}

export default MyPins;