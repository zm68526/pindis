import React from 'react';
import ItemsList from './components/ItemsList'
import Hdr from './components/Hdr'

function AuthenticatedView(props) {

  return (
    <div>
      <Hdr isLoggedIn={true}/>
      <ItemsList isLoggedIn={true} items={props.pins} />
    </div>
  );
}

export default AuthenticatedView;