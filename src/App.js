import React,{useState} from 'react';
import './App.css';
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css" ;

// React router
import{BrowserRouter ,Route,Switch,Link } from 'react-router-dom' ;

// React Toastify
import {ToastContainer} from 'react-toastify' ;
import "react-toastify/dist/ReactToastify.min.css" ;

// firebase
import firebase from 'firebase/app';
import "firebase/auth";

//components
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import {UserContext}  from "./context/UserContext";
import Footer from './pages/Footer';
import Header from './pages/Navbar';

import firebaseConfig from './Config/firebaseConfig';
//firebase init
firebase.initializeApp(firebaseConfig);


const App = () => {
    const [user,setUser]=useState(null);
    return (
        <BrowserRouter>
        <UserContext.Provider value={{user,setUser}} >
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/signin' component={Signin} />
                <Route exact path='/signup' component={Signup} />
                <Route path='*' component={PageNotFound} />
            </Switch>
            <Footer />
        </UserContext.Provider>
        </BrowserRouter>
    );
}
 
export default App;
