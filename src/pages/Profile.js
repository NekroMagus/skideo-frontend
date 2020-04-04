import React, {Component} from "react";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import Avatar from "../components/profile/avatar/Avatar";
import ProfileData from "../components/profile/info/ProfileData";

class Profile extends Component {
    render() {
        return (
            <main>
                <div className={`alignCenter`}>
                    <Avatar/>
                </div>
                <div>
                    <ProfileData/>
                </div>
            </main>
        );
    }
}


export default compose(withAuthRedirect)(Profile);