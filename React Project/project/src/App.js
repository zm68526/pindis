import './App.css';
import AddItemPage from './AddItemPage.js';
import SignupPage from './SignupPage.js';
import LoginPage from './LoginPage.js';
import UnauthenticatedView from './UnauthenticatedView.js';
import AuthenticatedView from './AuthenticatedView.js';
import EditItemPage from './EditItemPage.js';
import ErrorPage from './ErrorPage.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
// import { useNavigate } from "react-router-dom"; <-- not allowed to use in App.js specifically
import Axios from 'axios';
import MyPins from './MyPins.js';

function App() {

  const DUMMY_ARRAY = [
    {
      name: 'React Logo',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png',
      description: 'React is annoying af'
    },
    {
      name: 'Go Dawgs!',
      img: 'https://m.media-amazon.com/images/I/61jTIhWhNxL.jpg',
      description: 'HBTD'
    },
    {
      name: 'Loss',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Loss.svg/1200px-Loss.svg.png',
      description: 'loss image'
    },
    {
      name: 'Beach',
      img: 'https://fastly.picsum.photos/id/162/200/200.jpg?hmac=zGko1eZn0l_BsdOerR5_Ae53SRjRigypWkxLtzfKE6A',
      description: 'nice beach, template image so I could test'
    },
    {
      name: 'Mountains',
      img: 'https://fastly.picsum.photos/id/651/200/200.jpg?hmac=p8_kpEZVVgCD0ruS4M5WHOZ2-VETfCi3aXmYAbav3NE',
      description: 'Nice mountains, template image so I could test'
    },
    {
      name: 'Dog',
      img: 'https://fastly.picsum.photos/id/1062/200/200.jpg?hmac=F_trr44XLYeth1u5FIqJIgtD4pR7WOlzKZ2xrQ3tzww',
      description: 'Funny dog'
    },
    {
      name: 'Trees',
      img: 'https://fastly.picsum.photos/id/704/200/200.jpg?hmac=kJOOLetUU-CUDBZJ8Y1l52dL4qYp9QRAKpQC8OsyOSo',
      description: 'Cool trees'
    },
    {
      name: 'Street Lamps',
      img: 'https://fastly.picsum.photos/id/220/500/500.jpg?hmac=BI2JJ-HO8Y-sPg5VypbxvFcnn_kODMPs1eFverLVdD0',
      description: 'some street lamps'
    },
    {
      name: 'City',
      img: 'https://fastly.picsum.photos/id/283/400/400.jpg?hmac=PdoBgKfrXTn2WjzwNMu62TIRIRNAAqdHODmaGp_p7eY',
      description: 'A nice city'
    }
  ];
  
  const [items,setItems] = useState();
  const [currentUser,setCurrentUser] = useState('default');
  
  const itemUpdate = async function() {
    let initialResponse = '';
    await Axios.get('http://localhost:8080/pins/')
    .then(response => initialResponse = response)
    .catch(error => (console.log(error)));
    console.log("updated");
    setItems(initialResponse.data);
  } 
  if (!items) itemUpdate();

  /*
  const itemUpdatePromise = new Promise((resolve, reject) => {
    let initialResponse = '';
    Axios.get('http://localhost:8080/pins/')
    .then(response => initialResponse = response)
    .catch(error => (console.log(error)));
    console.log("updated");
    resolve(initialResponse);
  })
  itemUpdatePromise.then(initialResponse => {
    starterItems = initialResponse.data;
    updated = 1;
  }) */

  if (!items) return null;

  const loginHandler = function(userData) {
      console.log("LOGIN HANDLER USERNAME: " + userData.username);
      setCurrentUser(userData.username);
      itemUpdate();
  };
  
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<UnauthenticatedView pins={items} rerenderHandler={itemUpdate}/>} />
          <Route path='/loggedin' element={<AuthenticatedView pins={items} rerenderHandler={itemUpdate} user={currentUser}/>} />
          <Route path='/add' element={<AddItemPage rerenderHandler={itemUpdate} user={currentUser}/>} />
          <Route path='/signup' element={<SignupPage/>} />
          <Route path='/login' element={<LoginPage loginHandler={loginHandler}/>} />
          <Route path='edit-item/:id' element={<EditItemPage rerenderHandler={itemUpdate}/>} />
          <Route path='/myPins' element={<MyPins user={currentUser} pins={items} rerenderHandler={itemUpdate} />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
