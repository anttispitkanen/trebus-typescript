import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { HotspotAction } from '../actions';
import { StoreState } from '../types';
import { ADD_HOTSPOT, DELETE_HOTSPOT } from '../constants';


export const allHotspots = (state: StoreState = { allHotspots: []}, action: HotspotAction) => {
    switch (action.type) {
        case ADD_HOTSPOT:
            // const newState = state;
            // newState.push(action.newHotspot)
            return 'added';
            // return newState;
            
        case DELETE_HOTSPOT:
            return 'deleted';

        default:
            return state;
    }
};

const AppReducer = combineReducers({
    allHotspots,
    router: routerReducer
});

export default AppReducer;