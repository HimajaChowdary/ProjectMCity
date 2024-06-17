import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/header_footer/header';
import Footer from './components/header_footer/footer';
import Home from './components/home';
import SignIn from './components/signin'
import Dashboard from './components/admin/dashboard';
import TheTeam from './components/theTeam';
import AuthGuard from './HOC/auth';


import AdminPlayers from './components/admin/players'
import AdminMatches from './components/admin/matches';
import AddEditPlayers from './components/admin/players/addEditPlayers';
import AddEditMatch from './components/admin/matches/addEditMatch';
import TheMatches from './components/theMatches';

const RoutesFile=({user}) => {
  return (
    <BrowserRouter>
         <Header user={user}/>
         <Routes>
            <Route path="/admin_matches/edit_match/:matchid" exact Component={AuthGuard(AddEditMatch)}/>
            <Route path="/admin_matches/add_match" exact Component={AuthGuard(AddEditMatch)}/>
             <Route path="/admin_matches" exact Component={AuthGuard(AdminMatches)}/>
            <Route path="/admin_players/edit_player/:playerid" exact Component={AuthGuard(AddEditPlayers)}/>
            <Route path="/admin_players/add_player" exact Component={AuthGuard(AddEditPlayers)}/>
            <Route path="/admin_players" exact Component={AuthGuard(AdminPlayers)}/>
             <Route path="/dashboard" exact Component={AuthGuard(Dashboard)}/>
             <Route path="/the_team"  Component={TheTeam}/>
             <Route path="/sign_in" exact Component={props => (<SignIn{...props} user={user}/>)}/>
             <Route path="/" exact Component={Home}/>
             <Route path="/the_matches"  Component={TheMatches}/>
         </Routes>
         <ToastContainer/>
         <Footer/>
    </BrowserRouter>
  );
}

export default RoutesFile;
