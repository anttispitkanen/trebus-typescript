import * as React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';
import {
    ConnectedRouter,
    routerMiddleware,
} from 'react-router-redux';

import Routes from './Routes';
import AppReducer from './reducers';
import './App.css';

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(
    AppReducer,
    composeWithDevTools(
        applyMiddleware(middleware)
    )
);

const App = () => (
    <div className="App">
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Routes />
            </ConnectedRouter>
        </Provider>
    </div>
);

export default App;
