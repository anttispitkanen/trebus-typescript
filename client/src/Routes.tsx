import * as React from 'react';
import { 
    BrowserRouter as Router, 
    Route,
    Switch
} from 'react-router-dom';

import Home from './components/Home';
import Info from './components/Info';
import NotFound from './components/NotFound';

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/info" exact component={Info} />
            <Route component={NotFound} />
        </Switch>
    </Router>
)

export default Routes;
