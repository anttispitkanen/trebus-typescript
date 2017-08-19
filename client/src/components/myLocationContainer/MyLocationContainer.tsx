import * as React from 'react';
import { MyLocation } from '../../types';

interface Props {
    myLocation: MyLocation;
    updateMyLocation: (m: MyLocation) => any;
}

const WAITING_FOR_LOCATION: string = 'Waiting for location...';
const FETCHING_ADDRESS: string = 'Fetching address...';
const LOCATING: string = 'Locating...';


export const MyLocationContainer = ({ myLocation, updateMyLocation }: Props) => (
    <div className="my-location">

        <i className="location-marker fa fa-map-marker" aria-hidden="true"></i>

        <ul>
            <li>Address: {renderAddress(myLocation)}</li>
            <li>Lat: {myLocation.latitude}</li>
            <li>Long: {myLocation.longitude}</li>
        </ul>

        <button
            className="button"
            title="locate me"
            onClick={() => {
                locateMe(updateMyLocation);
            }}
        >
            Locate me
        </button>
    </div>
);


// FIXME any type
const renderAddress = (myLocation: any) => {
    if (!myLocation.address) {
        return (<span style={{color: 'rgb(225, 1, 70)'}}>{WAITING_FOR_LOCATION}</span>);
    }

    if (myLocation.address === LOCATING) {
        return (<span style={{color: 'rgb(237, 0, 0)'}}>{LOCATING}</span>);
    }

    if (myLocation.address === FETCHING_ADDRESS) {
        return (<span style={{color: 'rgb(229, 160, 0)'}}>{FETCHING_ADDRESS}</span>);
    }

    return (<span style={{color: 'rgb(15, 137, 33)'}}>{myLocation.address}</span>);
}


const locateMe = (updateMyLocation: any) => { // FIXME type
    // RESET VALUES
    updateMyLocation({
        latitude: undefined,
        longitude: undefined,
        coords: undefined,
        address: LOCATING
    })

    navigator.geolocation.getCurrentPosition(pos => {
        if(!pos) {
            throw new Error('cannot locate');
        }

        const latitude: string = pos.coords.latitude.toString();
        const longitude: string = pos.coords.longitude.toString();
        const coords: string = longitude + ',' + latitude;

        updateMyLocation({
            latitude,
            longitude,
            coords,
            address: FETCHING_ADDRESS
        })

        tryFetch(latitude, longitude, coords, updateMyLocation);

    }, failure => {
        console.error(failure.message);
    })
};


// FIXME any type
const tryFetch = async (latitude: string, longitude: string, coords: string, updateMyLocation: any) => {
    const opts: object = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            coords
        })
    }

    try {
        const res = await fetch('/api/get-address', opts);
        let data;

        if (res.ok) {
            data = await res.json();
        } else {
            throw new Error('res not ok :/');
        }

        const info = data[0];
        // console.log(info);

        if (!info.city || info.city !== 'Tampere') {
            alert('Ekkönää oo Tampesterissa? :D');
        } else {
            let address = info.name;
            if (info.details && info.details.houseNumber) {
                address += ' ' + info.details.houseNumber;
            }

            const updatedLocation: MyLocation = {
                latitude,
                longitude,
                coords,
                address
            }
            // console.log(updatedLocation);

            updateMyLocation(updatedLocation);
        }

    } catch (e) {
        console.error(e);
    }
}


export default MyLocationContainer;
