import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import * as _ from 'lodash';

import { HotspotAction, MyLocationAction } from '../actions';
import { HotspotType, MyLocation } from '../types';
import {
    ADD_HOTSPOT,
    DELETE_HOTSPOT,
    MOVE_HOTSPOT_UP,
    MOVE_HOTSPOT_DOWN,
    UPDATE_MY_LOCATION
} from '../constants';

import { mockHotspots } from '../mockHotspots';

const initialState: HotspotType[] = mockHotspots;

export const allHotspots = (state: HotspotType[] = initialState, action: HotspotAction): HotspotType[] => {

    let newState;
    let i;
    let hotspotToMove;

    switch (action.type) {
        case ADD_HOTSPOT:
            newState = _.cloneDeep(state);
            newState.push(action.newHotspot)
            return newState;

        case DELETE_HOTSPOT:
            newState = _.cloneDeep(state);
            if (newState.length > 0 && action.indexToDelete >= 0 && action.indexToDelete < state.length) {
                newState.splice(action.indexToDelete, 1);
            }
            return newState;

        case MOVE_HOTSPOT_UP:
            i = action.indexToMove;
            newState = _.cloneDeep(state);
            hotspotToMove = newState.splice(i, 1)[0];
            newState.splice(i - 1, 0, hotspotToMove);
            return newState;

        case MOVE_HOTSPOT_DOWN:
            i = action.indexToMove;
            if (i >= state.length) return state;
            newState = _.cloneDeep(state);
            hotspotToMove = newState.splice(i, 1)[0];
            newState.splice(i + 1, 0, hotspotToMove);
            return newState;

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