import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { myLocationReducer } from './myLocationReducer';
import { allHotspotsReducer } from './allHotspotsReducer';

const AppReducer = combineReducers({
    allHotspotsReducer,
    myLocationReducer,
    router: routerReducer
});

export default AppReducer;
