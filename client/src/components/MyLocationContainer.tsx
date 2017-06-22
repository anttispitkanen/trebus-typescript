import * as React from 'react';
import { MyLocation } from '../types';

interface Props {
    myLocation: MyLocation;
    updateMyLocation: (m: MyLocation) => any;
}

// const mockLocation: MyLocation = {
//     latitude: 'test',
//     longitude: 'test',
//     coords: 'test',
//     address: 'ihan himassa vaan :D'
// };

export const MyLocationContainer = ({ myLocation, updateMyLocation }: Props) => {

    const locateMe = () => {
        
        const newLocation: MyLocation = {
            latitude: undefined,
            longitude: undefined,
            coords: undefined,
            address: undefined
        }

        navigator.geolocation.getCurrentPosition(pos => {
            if(!pos) {
                alert('cannot locate');
            }

            newLocation.latitude = pos.coords.latitude.toString();
            newLocation.longitude = pos.coords.longitude.toString();
            newLocation.address = 'Kotikolo :D';

            updateMyLocation(newLocation);


        }, failure => {
            console.error(failure.message);
        })

        
    };

    return (
        <div className="my-location">

            <button 
                className="button"
                title="locate me"
                onClick={() => locateMe() }
            >
                Locate me
            </button>

            <h2>
                My Location over here! I'm at {myLocation.address}
            </h2>
            
            <ul>
                <li>Address: {myLocation.address}</li>
                <li>Lat: {myLocation.latitude}</li>
                <li>Long: {myLocation.longitude}</li>
            </ul>
        </div>
    );
}

export default MyLocationContainer;