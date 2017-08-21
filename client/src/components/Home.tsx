import * as React from 'react';

import Header from './Header';
import Footer from './Footer';
import MyLocationContainer from './myLocationContainer';
import Hotspots from '../containers/Hotspots';

const Home = () => (
    <div>
        <Header />
        <MyLocationContainer />
        <Hotspots />
        <Footer />
    </div>
);

export default Home;
