import React from 'react';
import ItemsList from './components/ItemsList'
import Hdr from './components/Hdr'

function AuthenticatedView(props) {

  // filter items so it only shows ones created with your username (props.user)
  // console.log(props.user);
  console.log(props.pins);
  let items = props.pins.filter(userData => userData.user === props.user);
  // console.log(items)

  return (
    <div>
      <Hdr isLoggedIn={true} />
      <ItemsList isLoggedIn={true} items={items} rerenderHandler = {props.rerenderHandler}/>
    </div>
  );
}

export default AuthenticatedView;