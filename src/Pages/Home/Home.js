import React from 'react';
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
        </div>
    );
};

export default Home;