import { MyLocation } from '../types';
import { MyLocationAction } from '../actions/myLocationActions';
import {
    FETCHING_COORDS,
    FAILED_FETCHING_COORDS,
    SUCCEED_FETCHING_COORDS,
    FETCHING_LOCATION,
    FAILED_FETCHING_LOCATION,
    SUCCEED_FETCHING_LOCATION
} from '../constants';

// initialize with empty location
const initialState: MyLocation = {
    latitude: '',
    longitude: '',
    coords: '',
    address: '',
    status: 'NO_LOCATION'
}

export const myLocationReducer = (state: MyLocation = initialState, action: MyLocationAction): MyLocation => {
    switch (action.type) {
        case FETCHING_COORDS:
            return { ...state, status: FETCHING_COORDS };

        case FAILED_FETCHING_COORDS:
            return { ...state, status: FAILED_FETCHING_COORDS };

        case SUCCEED_FETCHING_COORDS:
            return { ...state, ...action.newLocation, status: SUCCEED_FETCHING_COORDS };

        case FETCHING_LOCATION:
            return { ...state, status: FETCHING_LOCATION };

        case FAILED_FETCHING_LOCATION:
            return { ...state, status: FAILED_FETCHING_LOCATION };

        case SUCCEED_FETCHING_LOCATION:
            return { ...state, address: action.address, status: SUCCEED_FETCHING_LOCATION };

        default:
            return state;
    }
}
