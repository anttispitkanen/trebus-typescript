import { myLocationReducer } from './myLocationReducer';
import { MyLocation } from '../types';
import { succeedFetchingLocation } from '../actions/myLocationActions';

const testLocation: MyLocation = {
    latitude: 'test lat',
    longitude: 'test long',
    coords: 'test long,lat',
    address: 'test address',
    status: 'SUCCEED_FETCHING_LOCATION'
};

const testLocation2: MyLocation = {
    latitude: 'test lat 2',
    longitude: 'test long 2',
    coords: 'test long,lat 2',
    address: 'test address 2',
    status: 'SUCCEED_FETCHING_LOCATION'
};

describe('myLocationReducer', () => {
    it('updates location with empty initial state', () => {
        expect(myLocationReducer(undefined, succeedFetchingLocation(testLocation)))
        .toEqual(testLocation);
    });

    it('updates location when there is an old location already', () => {
        expect(myLocationReducer(testLocation, succeedFetchingLocation(testLocation2)))
        .toEqual(testLocation2);
    });
});
