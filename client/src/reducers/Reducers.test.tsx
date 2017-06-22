import { allHotspots } from './index';
import { ADD_HOTSPOT, DELETE_HOTSPOT } from '../constants';

const addTest = {
    type: ADD_HOTSPOT,
    newHotspot: {}
}

const deleteTest = {
    type: DELETE_HOTSPOT
}

describe('allHotspots', () => {
    // it('returns empty', () => {
    //     expect(allHotspots([], {})).toEqual(['no hotspots yet']);
    // }),

    it('adds correctly', () => {
        expect(allHotspots(undefined, addTest)).toEqual('added');
    }),

    it('deletes correctly', () => {
        expect(allHotspots(undefined, deleteTest)).toEqual('deleted');
    })

})