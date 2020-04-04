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
          <Header/>

          <Switch>
            <Route path="/" exact render={() => <Landing/>}/>
            <div className={`container ${css.top} center`}>
              <Route path="/profile" exact render={() => <Profile/>}/>
              <Route path={"/profile/edit"} exact render={() => <ProfileEdit/>}/>
              {/*<Route path='*' render={() => <div>404 NOT FOUND</div>}/>*/}
            </div>
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
