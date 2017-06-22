import * as React from 'react';

import Header from './Header';
import Footer from './Footer';

// renders:
// <Header />
// <MyLocation />
// <Hotspots />
// <Footer />
const Home = () => (
    <div>
        <Header />
        <MyLocation />
        <Hotspots />
        <Footer />
    </div>
);

export default Home;

const MyLocation = () => (
    <div>
        <h2>MyLocation</h2>
    </div>
);

const Hotspots = () => (
    <div>
        <h2>Hotspots</h2>
    </div>
);