import React from 'react';
import Banner from './Banner';
import Community from './Community';
import Discover from './Discover';
import Measure from './Measure';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Discover/>
            <Community/>
            <Measure/>
        </div>
    );
};

export default Home;