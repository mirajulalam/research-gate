import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Community from './Community';
import Discover from './Discover';
import Measure from './Measure';
import Research from './Research';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Discover/>
            <Community/>
            <Measure/>
            <Research/>
            <Footer/>
        </div>
    );
};

export default Home;