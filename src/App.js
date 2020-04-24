import React, {Component} from 'react';
import {Route, Switch, withRouter} from "react-router-dom";
import Profile from "./pages/Profile";
import Landing from "./pages/Landing";
import {connect} from "react-redux";
import {initializeApp} from "./store/reducers/appReducer";
import ProfileEdit from "./pages/ProfileEdit";
import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import css from './App.module.css';
import Prof from "./pages/Prof";
import ProfEdit from "./pages/ProfEdit";
import Land from "./pages/Land";
import ProfileVideo from "./pages/ProfileVideo";

class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.isInit) {
            return <div>
                WAIT MOMENT
            </div>;
        }

        return (
            <>
                {/*<Header/>*/}

                <Switch>
                    <Route path="/" exact render={() => <Land/>}/>
                    {/*<Route path="/profile" exact render={() => <Profile/>}/>*/}
                    {/*<Route path={"/profile/edit"} exact render={() => <ProfileEdit/>}/>*/}
                    <Route path={"/profile"} exact render={() => <Prof/>}/>
                    <Route path={"/profile/edit"} exact render={()=><ProfEdit/>}/>
                    <Route path={"/profile/video"} exact render={()=><ProfileVideo/>}/>
                    {/*<Route path='*' render={() => <div>404 NOT FOUND</div>}/>*/}
                </Switch>

                <Footer/>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    isInit: state.app.isInit
});

export default withRouter(connect(mapStateToProps, {initializeApp})(App));
