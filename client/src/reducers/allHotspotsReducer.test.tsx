import { allHotspotsReducer } from './allHotspotsReducer';
import { HotspotType } from '../types';
import { addHotspot, deleteHotspot } from '../actions';

const testHotspot: HotspotType = {
    name: 'testinimi',
    address: 'testiosoite',
    latitude: 'lat',
    longitude: 'long',
    coords: 'long,lat'
};

const origHotspotOne: HotspotType = {
    name: 'testinimi ykkönen',
    address: 'testiosoite ykkönen',
    latitude: 'lat ykkönen',
    longitude: 'long ykkönen',
    coords: 'long,lat ykkönen'
};

const origHotspotTwo: HotspotType = {
    name: 'testinimi kakkonen',
    address: 'testiosoite kakkonen',
    latitude: 'lat kakkonen',
    longitude: 'long kakkonen',
    coords: 'long,lat kakkonen'
};

const testHotspotArray: HotspotType[] = [
    origHotspotOne,
    origHotspotTwo
];

describe('allHotspots', () => {
    describe('adding hotspots', () => {
        it('adds correctly', () => {
            expect(allHotspotsReducer([], addHotspot(testHotspot)))
            .toEqual([ testHotspot ]);
        });

        it('adds correctly when there are already some hotspots', () => {
            expect(allHotspotsReducer(testHotspotArray, addHotspot(testHotspot)))
            .toEqual([
                origHotspotOne,
                origHotspotTwo,
                testHotspot
            ]);
        });
    });

    describe('deleting', () => {
        it('does nothing when deleting from empty array', () => {
            expect(allHotspotsReducer([], deleteHotspot(0)))
            .toEqual([]);
        });

        it('does nothing when trying to delete with a false index', () => {
            const testHotspotArray: HotspotType[] = [
                origHotspotOne,
                origHotspotTwo
            ];

            expect(allHotspotsReducer(testHotspotArray, deleteHotspot(999)))
            .toEqual([
                origHotspotOne,
                origHotspotTwo
            ]);
        });

        it('does nothing when trying to delete with a negative index', () => {
            const testHotspotArray: HotspotType[] = [
                origHotspotOne,
                origHotspotTwo
            ];

            expect(allHotspotsReducer(testHotspotArray, deleteHotspot(-1)))
            .toEqual([
                origHotspotOne,
                origHotspotTwo
            ]);
        });

        it('deletes correctly from beginning', () => {
            const testHotspotArray: HotspotType[] = [
                origHotspotOne,
                origHotspotTwo
            ];

            expect(allHotspotsReducer(testHotspotArray, deleteHotspot(0)))
            .toEqual([
                origHotspotTwo
            ]);
        });

        it('deletes correctly from middle', () => {
            const testHotspotArray: HotspotType[] = [
                origHotspotOne,
                origHotspotTwo,
                testHotspot
            ];

            expect(allHotspotsReducer(testHotspotArray, deleteHotspot(1)))
            .toEqual([
                origHotspotOne,
                testHotspot
            ]);
        });

        it('deletes correctly from end', () => {
            const testHotspotArray: HotspotType[] = [
                origHotspotOne,
                origHotspotTwo,
                testHotspot
            ];

            expect(allHotspotsReducer(testHotspotArray, deleteHotspot(2)))
            .toEqual([
                origHotspotOne,
                origHotspotTwo
            ]);
        });
    });
});
