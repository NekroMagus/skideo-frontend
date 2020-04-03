import React, {Component} from 'react';
import './bootstrap.css';
import {Route, withRouter} from "react-router-dom";
import Profile from "./pages/Profile";
import Landing from "./pages/Landing";
import {connect} from "react-redux";
import {initializeApp} from "./store/reducers/appReducer";

class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(!this.props.isInit) {
            return <div>
                WAIT MOMENT
            </div>;
        }

        return (
            <>
                <Route path="/" exact render={() => <Landing/>}/>
                <Route path="/profile" exact render={() => <Profile/>}/>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    isInit: state.app.isInit
});

export default withRouter(connect(mapStateToProps, {initializeApp})(App));
