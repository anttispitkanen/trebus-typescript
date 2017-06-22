import { allHotspots, myLocation } from './index';
import { Hotspot, MyLocation } from '../types';
import { addHotspot, deleteHotspot, updateMyLocation} from '../actions';

const testHotspot: Hotspot = {
    name: 'testinimi',
    address: 'testiosoite',
    latitude: 'lat',
    longitude: 'long',
    coords: 'long,lat'
}

const origHotspotOne: Hotspot = {
    name: 'testinimi ykkönen',
    address: 'testiosoite ykkönen',
    latitude: 'lat ykkönen',
    longitude: 'long ykkönen',
    coords: 'long,lat ykkönen'
}

const origHotspotTwo: Hotspot = {
    name: 'testinimi kakkonen',
    address: 'testiosoite kakkonen',
    latitude: 'lat kakkonen',
    longitude: 'long kakkonen',
    coords: 'long,lat kakkonen'
}

const testHotspotArray: Hotspot[] = [
    origHotspotOne,
    origHotspotTwo
]

describe('allHotspots', () => {
    describe('adding hotspots', () => {
        it('adds correctly', () => {
            expect(allHotspots(undefined, addHotspot(testHotspot)))
            .toEqual([ testHotspot ]);
        })

        it('adds correctly when there are already some hotspots', () => {
            expect(allHotspots(testHotspotArray, addHotspot(testHotspot)))
            .toEqual([
                origHotspotOne,
                origHotspotTwo,
                testHotspot
            ])
        })
    })
    
    describe('deleting', () => {
        it('does nothing when deleting from empty array', () => {
            expect(allHotspots(undefined, deleteHotspot(0)))
            .toEqual([]);
        })

        it('does nothing when trying to delete with a false index', () => {
            const testHotspotArray: Hotspot[] = [
                origHotspotOne,
                origHotspotTwo
            ]
            expect(allHotspots(testHotspotArray, deleteHotspot(999)))
            .toEqual([
                origHotspotOne,
                origHotspotTwo
            ])
        })
        
        it('does nothing when trying to delete with a negative index', () => {
            const testHotspotArray: Hotspot[] = [
                origHotspotOne,
                origHotspotTwo
            ]
            expect(allHotspots(testHotspotArray, deleteHotspot(-1)))
            .toEqual([
                origHotspotOne,
                origHotspotTwo
            ])
        })

        it('deletes correctly from beginning', () => {
            const testHotspotArray: Hotspot[] = [
                origHotspotOne,
                origHotspotTwo
            ]
            expect(allHotspots(testHotspotArray, deleteHotspot(0)))
            .toEqual([
                origHotspotTwo
            ]);
        })

        it('deletes correctly from middle', () => {
            const testHotspotArray: Hotspot[] = [
                origHotspotOne,
                origHotspotTwo,
                testHotspot
            ]
            expect(allHotspots(testHotspotArray, deleteHotspot(1)))
            .toEqual([
                origHotspotOne,
                testHotspot
            ])
        })

        it('deletes correctly from end', () => {
            const testHotspotArray: Hotspot[] = [
                origHotspotOne,
                origHotspotTwo,
                testHotspot
            ]
            expect(allHotspots(testHotspotArray, deleteHotspot(2)))
            .toEqual([
                origHotspotOne,
                origHotspotTwo
            ])
        })
    })
})

const testLocation: MyLocation = {
    latitude: 'test lat',
    longitude: 'test long',
    coords: 'test long,lat',
    address: 'test address'
} 

const testLocation2: MyLocation = {
    latitude: 'test lat 2',
    longitude: 'test long 2',
    coords: 'test long,lat 2',
    address: 'test address 2'
} 

describe('myLocation', () => {
    it('updates location with empty initial state', () => {
        expect(myLocation(undefined, updateMyLocation(testLocation)))
        .toEqual(testLocation);
    })

    it('updates location when there is an old location already', () => {
        expect(myLocation(testLocation, updateMyLocation(testLocation2)))
        .toEqual(testLocation2);
    })
})