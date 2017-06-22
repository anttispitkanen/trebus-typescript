import { ADD_HOTSPOT, DELETE_HOTSPOT, UPDATE_MY_LOCATION } from '../constants';
import { Hotspot, MyLocation } from '../types';
import * as actions from './index';

// const addHotspotActionExpectation = {
//     type: ADD_HOTSPOT,
//     newHotspot: {
//         test: 'hello world'
//     }
// }

const testHotspot: Hotspot = {
    name: 'testinimi',
    address: 'testiosoite',
    latitude: 'lat',
    longitude: 'long',
    coords: 'long,lat'
}

describe('hotspot actions', () => {
    it('should create an action to add a hotspot', () => {
        expect(actions.addHotspot(testHotspot))
        .toEqual({
            type: ADD_HOTSPOT,
            newHotspot: testHotspot
        });
    }),

    it('should delete', () => {
        expect(actions.deleteHotspot())
        .toEqual({ type: DELETE_HOTSPOT });
    })
})

const testLocation: MyLocation = {
    latitude: 'lat',
    longitude: 'long',
    coords: 'long,lat',
    address: 'testiosoite'
}

describe('mylocation actions', () => {
    it('should creat an action to update location', () => {
        expect(actions.updateMyLocation(testLocation))
        .toEqual({
            type: UPDATE_MY_LOCATION,
            newLocation: testLocation
        })
    })
})