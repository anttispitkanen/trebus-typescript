import * as React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import { ConnectedRouter } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import AppReducer from './reducers';
import Routes from './Routes';
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
                <Route path="/" component={Routes} />
            </ConnectedRouter>
        </Provider>
    </div>
);

/*export default class App extends React.Component<any, any> {
    render() {
        return (
            <div className="App">
                <Provider store={store}>
                    <ConnectedRouter history={history}>
                        <Route path="/" component={Routes} />
                    </ConnectedRouter>
                </Provider>
            </div>
        );
    }
}*/

export default App;
