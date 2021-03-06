import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import {BrowserRouter as Router, Route, Switch, Link}from 'react-router-dom';

import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css";

import firebase from 'firebase/app'
import "firebase/auth"

import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Pagenotfound from './pages/Pagenotfound'
import { UserContext } from './context/UserContext';
import Footer from './layout/Footer';
import Header from './layout/Header';
import firebaseConfig from './config/FirebaseConfig';

firebase.initializeApp(firebaseConfig)

const App = () => {
    const [user, setUser] = useState(null);


    return(
        <Router>
            <ToastContainer/>
            <UserContext.Provider value={{user, setUser}}>
            <Header/>    
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/signin" component={SignIn}/>
                    <Route exact path="/signup" component={SignUp}/>
                    <Route exact path="*" component={Pagenotfound}/>
                </Switch>
            <Footer/>    
            </UserContext.Provider>

        </Router>
    )
}

export default App;