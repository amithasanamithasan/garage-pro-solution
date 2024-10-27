import React from 'react';
import Banner from './Banner';
import About from './About';
import Footer from '../Shared/Footer';
import Services from './Services';

import PopulerProducts from '../Shared/PopulerProducts';
import TeamSection from '../Shared/TeamSection';
import CoreFeatures from '../Shared/CoreFeatures';
import Testimonial from '../Shared/Testimonial';
const Homepage = () => {
    return (
        <div>
     <Banner></Banner>
     <About></About>
     <Services></Services>
     <PopulerProducts></PopulerProducts>
     <TeamSection></TeamSection>
     <CoreFeatures></CoreFeatures>
     <Testimonial></Testimonial>
     <Footer></Footer>
        </div>
    );
};

export default Homepage;