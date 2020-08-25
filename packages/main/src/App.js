import React, {Component} from 'react';
import {Route, Switch, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {initializeApp} from "./store/reducers/appReducer";
import Footer from "./components/common/footer/Footer";
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
                <Switch>
                    <Route path="/" exact render={() => <Land/>}/>
                    <Route path={"/profile"} exact render={() => <Prof/>}/>
                    <Route path={"/profile/edit"} exact render={()=><ProfEdit/>}/>
                    <Route path={"/profile/video"} exact render={()=><ProfileVideo/>}/>
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
