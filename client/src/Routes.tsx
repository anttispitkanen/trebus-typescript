import * as React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import {
    ConnectedRouter,
    routerMiddleware,
} from 'react-router-redux'; // FIXME remove these
import { composeWithDevTools } from 'redux-devtools-extension';

import AppReducer from './reducers';

import Home from './components/Home';
import Info from './components/Info';
import NotFound from './components/NotFound';

const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(
    AppReducer,
    composeWithDevTools(
        applyMiddleware(middleware)
    )
);


const Routes = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/info" exact component={Info} />
                <Route component={NotFound} />
            </Switch>
        </ConnectedRouter>
    </Provider>
)

export default Routes;
