import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";
import About from "./component/about/About";
import Login from "./component/user/Login"
import Join from "./component/user/Join"
import Settings from "./component/user/Settings"
import Error404 from "./component/error/Error404"
import Me from './component/about/me';

import './assets/scss/App.scss'

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Main />}/>
                <Route path='gallery' element={<Gallery />}/>
                <Route path='guestbook' element={<Guestbook />}/>
                <Route path='about' element= {<About />}>
                    <Route path='me' element={<Me />} />
                </Route>    
                <Route path='user/login' element ={<Login />} />
                <Route path='user/join' element ={<Join />} />
                <Route path='user/settings' element ={<Settings />} />
                <Route path='*' element= {<Error404 />} />
            </Routes>
        </Router>
    );
}