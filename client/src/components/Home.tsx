import * as React from 'react';

import Header from './Header';
import Footer from './Footer';
import MyLocationContainer from '../containers/MyLocationContainer';
import Hotspots from '../containers/Hotspots';

// renders:
// <Header />
// <MyLocation />
// <Hotspots />
// <Footer />
const Home = () => (
    <div>
        <Header />
        <MyLocationContainer />
        <Hotspots />
        <Footer />
    </div>
);

export default Home;

/*const Hotspots = () => (
    <div>
        <h2>Hotspots</h2>
    </div>
);*/