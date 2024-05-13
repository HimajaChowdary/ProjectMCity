import React from 'react';
import ReactDOM from 'react-dom/client';
import {firebase} from './firebase';
import RoutesFile from './routes';

import './resources/css/app.css'

const App= (props) =>{
  return(
    <RoutesFile {...props}/>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));



firebase.auth().onAuthStateChanged((user)=>{
  root.render(
    <App user={user}/>
    );
})
