import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/header_footer/header';
import Footer from './components/header_footer/footer';
import Home from './components/home';
import SignIn from './components/signin'
import Dashboard from './components/admin/dashboard';
import AuthGuard from './HOC/auth';

import AdminPlayers from './components/admin/players'
import AddEditPlayers from './components/admin/players/addEditPlayers';

const RoutesFile=({user}) => {
  return (
    <BrowserRouter>
         <Header user={user}/>
         <Routes>
            <Route path="/admin_players/edit_player/:playerid" exact Component={AuthGuard(AddEditPlayers)}/>
            <Route path="/admin_players/add_player" exact Component={AuthGuard(AddEditPlayers)}/>
            <Route path="/admin_players" exact Component={AuthGuard(AdminPlayers)}/>
             <Route path="/dashboard" exact Component={AuthGuard(Dashboard)}/>
             <Route path="/sign_in" exact Component={props => (<SignIn{...props} user={user}/>)}/>
             <Route path="/" exact Component={Home}/>
         </Routes>
         <ToastContainer/>
         <Footer/>
    </BrowserRouter>
  );
}

export default RoutesFile;
