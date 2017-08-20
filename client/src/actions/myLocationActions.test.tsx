import { SUCCEED_FETCHING_LOCATION } from '../constants';
import { MyLocation } from '../types';
import { succeedFetchingLocation } from './myLocationActions';

const testLocation: MyLocation = {
    latitude: 'lat',
    longitude: 'long',
    coords: 'long,lat',
    address: 'testiosoite'
}

describe('mylocation actions', () => {
    it('should creat an action to update location', () => {
        expect(succeedFetchingLocation(testLocation))
        .toEqual({
            type: SUCCEED_FETCHING_LOCATION,
            newLocation: testLocation
        });
    });
});
