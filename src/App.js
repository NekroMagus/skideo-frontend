import React from 'react';
import Header from "./components/header/Header";
import Partners from "./components/partners/Partners";
import Skideo from "./components/skideo/Skideo";
import Footer from "./components/footer/Footer";
import './bootstrap.css';

function App() {
  return (
    <>
      <Header/>
      <Skideo/>
      <Partners/>
      <Footer/>
    </>
  );
}

export default App;
