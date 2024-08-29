import React, { useState } from 'react';

import user_icon from '../Assets/person.png'

import { Link } from 'react-router-dom';
import Footer from './components/footer/footer';
import Translator from './components/translate/translation';
import AboutUs from './components/about/about';

const Home = () => {
    return(
        <>
        <Translator/>
        <AboutUs/>
        <Footer/>
        </>
    )
}

export default Home;
