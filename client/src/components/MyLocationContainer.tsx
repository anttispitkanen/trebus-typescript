import * as React from 'react';
import { MyLocation } from '../types';

interface Props {
    myLocation: MyLocation;
    updateMyLocation: (m: MyLocation) => any;
}

const newLocation: MyLocation = {
    latitude: undefined,
    longitude: undefined,
    coords: undefined,
    address: undefined
}

export const MyLocationContainer = ({ myLocation, updateMyLocation }: Props) => {

    const locateMe = () => {

        // RESET VALUES
        newLocation.latitude = undefined;
        newLocation.longitude = undefined;
        newLocation.coords = undefined;
        newLocation.address = undefined;

        navigator.geolocation.getCurrentPosition(pos => {
            if(!pos) {
                alert('cannot locate');
            }

            console.log(pos);
            const latitude: string = pos.coords.latitude.toString();
            const longitude: string = pos.coords.longitude.toString();
            const coords: string = longitude + ',' + latitude;

            newLocation.latitude = latitude;
            newLocation.longitude = longitude;
            newLocation.coords = coords;
            newLocation.address = 'Fetching address...';

            updateMyLocation(newLocation);

            tryFetch(newLocation.latitude, newLocation.longitude);

        }, failure => {
            console.error(failure.message);
        })
    };

    const tryFetch = async (latitude: string, longitude: string) => {

        const opts: object = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                latitude,
                longitude
            })
        }
        
        try {
            const res = await fetch('/get-address', opts);
            let data;

            if (res.ok) { 
                data = await res.json() 
            } else { 
                throw new Error('res not ok :/') 
            }

            const info = data[0];
            console.log(info);

            if (!info.city || info.city !== 'Tampere') {
                alert('Ekkönää oo Tampesterissa? :D');
            } else {
                let address = info.name;
                if (info.details && info.details.houseNumber) {
                    address += ' ' + info.details.houseNumber;
                }
                
                const updatedLocation: MyLocation = {
                    ...newLocation,
                    address: address
                }
                console.log(updatedLocation);
                
                updateMyLocation(updatedLocation);
            }

        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className="my-location">

            <i className="location-marker fa fa-map-marker" aria-hidden="true"></i>

            <ul>
                <li>Address: {myLocation.address}</li>
                <li>Lat: {myLocation.latitude}</li>
                <li>Long: {myLocation.longitude}</li>
            </ul>

            <button 
                className="button"
                title="locate me"
                onClick={() => {
                    console.log('click');
                    locateMe();
                }}
            >
                Locate me
            </button>
            
            
        </div>
    );
}

export default MyLocationContainer;