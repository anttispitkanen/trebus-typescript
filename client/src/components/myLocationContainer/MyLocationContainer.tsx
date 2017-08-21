import * as React from 'react';
import { MyLocation } from '../../types';
import Address from './Address';

interface Props {
    myLocation: MyLocation;
    locateMe: () => any;
}

export const MyLocationContainer = ({ myLocation, locateMe }: Props) => (
    <div className="my-location">

        <i className="location-marker fa fa-map-marker" aria-hidden="true"></i>

        <ul>
            <li>Address: <Address myLocation={myLocation} /></li>
            <li>Lat: {myLocation.latitude}</li>
            <li>Long: {myLocation.longitude}</li>
        </ul>

        <button
            className="button"
            title="locate me"
            onClick={locateMe}
        >
            Locate me
        </button>
    </div>
);

export default MyLocationContainer;
