// import { ThunkAction } from 'redux-thunk';
import {
    FETCHING_COORDS,
    FAILED_FETCHING_COORDS,
    SUCCEED_FETCHING_COORDS,
    FETCHING_LOCATION,
    FAILED_FETCHING_LOCATION,
    SUCCEED_FETCHING_LOCATION
} from '../constants';
import { PartialMyLocation } from '../types';
import { postOptionsBuilder } from './actionUtils';

/**
 * Interfaces
 */
export interface FetchingCoords {
    type: FETCHING_COORDS;
}

export interface FailedFetchingCoords {
    type: FAILED_FETCHING_COORDS;
}

export interface SucceedFetchingCoords {
    type: SUCCEED_FETCHING_COORDS;
    newLocation: PartialMyLocation;
}

export interface FetchingLocation {
    type: FETCHING_LOCATION;
}

export interface FailedFetchingLocation {
    type: FAILED_FETCHING_LOCATION;
}

export interface SucceedFetchingLocation {
    type: SUCCEED_FETCHING_LOCATION;
    address: string;
}

/**
 * Generic type
 */
export type MyLocationAction = FetchingCoords
                                | FailedFetchingCoords
                                | SucceedFetchingCoords
                                | FetchingLocation
                                | FailedFetchingLocation
                                | SucceedFetchingLocation;

/**
 * Pure action creators
 */
export const fetchingCoords = (): FetchingCoords => ({
    type: FETCHING_COORDS
});

export const failedFetchingCoords = (): FailedFetchingCoords => ({
    type: FAILED_FETCHING_COORDS
});

export const succeedFetchingCoords = (newLocation: PartialMyLocation): SucceedFetchingCoords => ({
    type: SUCCEED_FETCHING_COORDS,
    newLocation
});

export const fetchingLocation = (): FetchingLocation => ({
    type: FETCHING_LOCATION
});

export const failedFetchingLocation = (): FailedFetchingLocation => ({
    type: FAILED_FETCHING_LOCATION
});

export const succeedFetchingLocation = (address: string): SucceedFetchingLocation => ({
    type: SUCCEED_FETCHING_LOCATION,
    address
});

/**
 * Async action creators (thunks)
 */
export const getCoordinates = (): any => (
    new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((pos: any): any => {
            if (!pos) {
                reject(Error('unable to geolocate'));
            }

            const latitude: string = pos.coords.latitude.toString();
            const longitude: string = pos.coords.longitude.toString();
            const coords: string = longitude + ',' + latitude;

            resolve({ latitude, longitude, coords });
        });
    })
);

export const getCoordinatesThunk = (): any => (
    (dispatch: any) => {
        dispatch(fetchingCoords());

        return getCoordinates()
        .then((res: any) => {
            dispatch(succeedFetchingCoords(res));
        })
        .catch((err: Error) => {
            dispatch(failedFetchingCoords());
            throw err;
        })
    }
);

export const fetchAddress = (coords: string): any => (
    fetch('/api/get-address', postOptionsBuilder(coords))
    .then(res => {
        if (res.ok) {
            return res.json();
        } else {
            throw Error('res not ok');
        }
    })
    .then(data => data[0])
    .catch((err: Error) => { throw err; })
);

export const fetchAddressThunk = (coords: string): any => (
    (dispatch: any, getState: any) => {
        dispatch(fetchingLocation());

        return fetchAddress(coords)
        .then((data: any) => {
            let address = data.name;
            if (data.details.houseNumber) {
                address += ' ' + data.details.houseNumber;
            }
            // TODO: create an action type that allows for just address as parameter to avoid calling getState() here
            dispatch(succeedFetchingLocation(address));
        })
        .catch((err: Error) => {
            console.error(err);
            throw err;
        });
    }
)

export const locateMe = (): any => (
    (dispatch: any, getState: any): any => {

        return dispatch(getCoordinatesThunk())
        .then(() => {
            const coords = getState().myLocationReducer.coords;
            dispatch(fetchAddressThunk(coords));
        })
        .catch((err: Error) => {
            console.error(err);
        });
    }
);
