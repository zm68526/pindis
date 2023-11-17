import React from 'react';
import ItemsList from './components/ItemsList'
import Hdr from './components/Hdr'

function UnauthenticatedView(props) {

  return (
    <div>
      <Hdr isLoggedIn={false}/>
      <ItemsList items={props.pins} />
    </div>
  );
}

export default UnauthenticatedView;