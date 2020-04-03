import React, {Component} from "react";
import Header from "../components/common/header/Header";
import Footer from "../components/common/footer/Footer";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import ProfileInfo from "../components/profile/ProfileInfo";

class Profile extends Component {
    render() {
        return (
            <>
                <Header/>
                <ProfileInfo/>
                <Footer/>
            </>
        );
    }
}


export default compose(withAuthRedirect)(Profile);