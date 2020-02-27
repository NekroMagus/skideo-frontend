import React, {Component} from "react";
import Skideo from "../components/landing/skideo/Skideo";
import Partners from "../components/landing/partners/Partners";
import Dream from "../components/landing/dream/Dream";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

class Landing extends Component {
    render() {
        return (
            <>
                <Header/>
                <main>
                    <Skideo/>
                    <Partners/>
                    <Dream/>
                </main>
                <Footer/>
            </>
        );
    }
};

export default Landing;