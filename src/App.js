import React from 'react';
import Header from "./components/header/Header";
import Partners from "./components/landing/partners/Partners";
import Skideo from "./components/landing/skideo/Skideo";
import Footer from "./components/footer/Footer";
import './bootstrap.css';
import Dream from "./components/landing/dream/Dream";

function App() {
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

export default App;
