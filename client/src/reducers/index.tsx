import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import * as _ from 'lodash';

import { HotspotAction, MyLocationAction } from '../actions';
import { Hotspot, MyLocation } from '../types';
import { ADD_HOTSPOT, DELETE_HOTSPOT, UPDATE_MY_LOCATION } from '../constants';

export const allHotspots = (state: Hotspot[] = [], action: HotspotAction): Hotspot[] => {
    
    switch (action.type) {
        case ADD_HOTSPOT:
            const stateAdded = _.cloneDeep(state);
            stateAdded.push(action.newHotspot)
            return stateAdded;

        case DELETE_HOTSPOT:
            const stateDeleted = _.cloneDeep(state);
            if (stateDeleted.length > 0 && action.indexToDelete >= 0 && action.indexToDelete < state.length) {
                stateDeleted.splice(action.indexToDelete, 1);
            }
            return stateDeleted;

        default:
            return state;
    }
};

// initialize with empty location
const initialLocation: MyLocation = {
    latitude: undefined,
    longitude: undefined,
    coords: undefined,
    address: undefined
}

export const myLocation = (state: MyLocation = initialLocation, action: MyLocationAction): MyLocation => {
    switch (action.type) {
        case UPDATE_MY_LOCATION:
            return action.newLocation;

        default:
            return state;
    }
} 

const AppReducer = combineReducers({
    allHotspots,
    myLocation,
    router: routerReducer
});

export default AppReducer;