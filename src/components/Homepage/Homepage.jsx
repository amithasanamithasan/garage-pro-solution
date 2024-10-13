import React from 'react';
import Banner from './Banner';
import About from './About';
import Footer from '../Shared/Footer';
import Services from './Services';

const Homepage = () => {
    return (
        <div>
     <Banner></Banner>
     <About></About>
     <Services></Services>
     <Footer></Footer>
        </div>
    );
};

export default Homepage;