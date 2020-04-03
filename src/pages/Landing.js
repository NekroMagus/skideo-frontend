import React from "react";
import Skideo from "../components/landing/skideo/Skideo";
import Partners from "../components/landing/partners/Partners";
import Dream from "../components/landing/dream/Dream";
import Footer from "../components/common/footer/Footer";
import Header from "../components/common/header/Header";

const Landing = () => {
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

export default Landing;