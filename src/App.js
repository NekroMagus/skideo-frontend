import React from 'react';
import './bootstrap.css';
import {Route} from "react-router-dom";
import Profile from "./pages/Profile";
import Landing from "./pages/Landing";

function App() {
    return (
        <>
            <Route path="/" exact render={() => <Landing/>}/>
            <Route path="/profile" exact render={() => <Profile/>}/>
        </>
    );
}

export default App;
