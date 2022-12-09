import React from 'react';
import Banner from './Banner';
import Community from './Community';
import Discover from './Discover';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Discover/>
            <Community/>
        </div>
    );
};

export default Home;