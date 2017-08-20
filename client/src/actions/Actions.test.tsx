import {
    ADD_HOTSPOT,
    DELETE_HOTSPOT,
    MOVE_HOTSPOT_UP,
    MOVE_HOTSPOT_DOWN
} from '../constants';
import { HotspotType } from '../types';
import * as actions from './index';

const testHotspot: HotspotType = {
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
    });

    it('should delete', () => {
        expect(actions.deleteHotspot(42))
        .toEqual({
            type: DELETE_HOTSPOT,
            indexToDelete: 42
        });
    });

    it('should create action to move up', () => {
        expect(actions.moveHotspotUp(42))
        .toEqual({
            type: MOVE_HOTSPOT_UP,
            indexToMove: 42
        });
    });

    it('should create an action to move down', () => {
        expect(actions.moveHotspotDown(42))
        .toEqual({
            type: MOVE_HOTSPOT_DOWN,
            indexToMove: 42
        });
    });
});
