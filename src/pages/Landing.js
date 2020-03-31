import React, {Component} from "react";
import Skideo from "../components/landing/skideo/Skideo";
import Partners from "../components/landing/partners/Partners";
import Dream from "../components/landing/dream/Dream";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ModalAuth from "../components/landing/modalAuth/ModalAuth";

class Landing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalShow: false
        };
    }

    toggleModalAuth = () => {
        this.setState({
            isModalShow: !this.state.isModalShow
        })
    };

    render() {
        return (
            <>
                <Header/>
                <main>
                    <Skideo toggleModalAuth={this.toggleModalAuth}/>
                    <ModalAuth
                        isModalShow={this.state.isModalShow}
                        toggleModalAuth={this.toggleModalAuth}/>
                    <Partners/>
                    <Dream/>
                </main>
                <Footer/>
            </>
        );
    }
}

export default Landing;