import React from 'react';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import './bootstrap.css';
import {Route} from "react-router-dom";
import Profile from "./pages/Profile";
import Landing from "./pages/Landing";

function App() {
    return (
        <>
            <Route path="/" exact render={props => <Landing/>}/>
            <Route path="/profile" exact render={props => <Profile/>}/>
        </>
    );
}

export default App;
