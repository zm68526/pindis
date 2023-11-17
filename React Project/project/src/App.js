import './App.css';
import AddItemPage from './AddItemPage.js';
import UnauthenticatedView from './UnauthenticatedView.js';
import AuthenticatedView from './AuthenticatedView.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const DUMMY_ARRAY = [
    {
      name: 'React Logo',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png',
    },
    {
      name: 'Go Dawgs!',
      img: 'https://m.media-amazon.com/images/I/61jTIhWhNxL.jpg',
    },
    {
      name: 'Loss',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Loss.svg/1200px-Loss.svg.png',
    },
  ];
  const [items,setItems] = useState(DUMMY_ARRAY);
  const addItemHandler = item => {
    setItems((prevItems) => {
      return [item, ...prevItems];
    });
  }

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<UnauthenticatedView pins={items} />} />
          <Route path='/loggedin' element={<AuthenticatedView pins={items} />} />
          <Route path='/add' element={<AddItemPage addItemHandler={addItemHandler}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
