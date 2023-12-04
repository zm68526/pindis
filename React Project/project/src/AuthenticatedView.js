import React from 'react';
import ItemsList from './components/ItemsList'
import Hdr from './components/Hdr'

function AuthenticatedView(props) {

  return (
    <div>
      <Hdr user={props.user} isLoggedIn={true} />
      <ItemsList showEditDelete={false} items={props.pins} rerenderHandler = {props.rerenderHandler}/>
    </div>
  );
}

export default AuthenticatedView;