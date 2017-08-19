import * as React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';
import {
    ConnectedRouter
} from 'react-router-redux';
import thunk from 'redux-thunk';

import Routes from './Routes';
import AppReducer from './reducers';
import './App.css';

const history = createHistory();
const store = createStore(
    AppReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
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
