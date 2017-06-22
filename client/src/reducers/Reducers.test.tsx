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
    

    // it('deletes correctly', () => {
    //     expect(allHotspots(undefined, deleteTest)).toEqual('deleted');
    // })

    // it('returns empty array when no arguments are given', () => {
    //     expect(allHotspots(undefined, {}))
    //     .toEqual([]);
    // })
})

// describe('myLocation', () => {
//     it('updates location', () => {
//         expect(myLocation(undefined, null))
//         .toEqual()
//     })
// })