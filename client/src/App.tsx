import * as React from 'react';

import './App.css';

import Routes from './Routes';
// import NotFound from './components/NotFound';


// this is the element that wraps with redux

class App extends React.Component<{}, null> {

    render() {
        return (
            <div className="App">
                {/*<Headline />*/}
                <Routes />
            </div>
        );
    }
}

export default App;
