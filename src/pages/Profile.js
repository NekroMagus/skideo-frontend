import React, {Component} from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Dream from "../components/landing/dream/Dream";

class Profile extends Component {
render() {
    return (
      <>
          <Header/>
          <Dream/>
          <Dream/>
          <Footer/>
      </>
    );
}
}

export default Profile;