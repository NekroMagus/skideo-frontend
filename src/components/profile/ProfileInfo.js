import React from "react";
import Avatar from "./avatar/Avatar";
import ProfileData from "./info/ProfileData";
import css from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <main className={`container ${css.top}`}>
            <div className={"row"}>
                <div className={`col-12 col-md-4 offset-md-4 ${css.center}`}>
                    <Avatar/>
                </div>
                <div className={"col-12 col-md-4 offset-md-4"}>
                    <ProfileData/>
                </div>
            </div>
        </main>
    );
};

export default ProfileInfo;