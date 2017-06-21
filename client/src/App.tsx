import * as React from 'react';
import './App.css';

import NotFound from './components/NotFound';

class App extends React.Component<{}, null> {

    componentDidMount() {

        fetch('test')
        .then(res => {
            if (res.ok) { return res.json() } 
            else { throw new Error('res ei ok :/') }
        })
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.error(err);
        })

    }

    render() {
        return (
            <div className="App">
                {/*<Headline />*/}
                <NotFound />
            </div>
        );
    }
}

export default App;
