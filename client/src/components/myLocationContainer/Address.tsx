import * as React from 'react';
import { MyLocation } from '../../types';
import {
    NO_LOCATION,
    FETCHING_COORDS,
    SUCCEED_FETCHING_COORDS,
    FETCHING_LOCATION,
    SUCCEED_FETCHING_LOCATION
} from '../../constants';

interface Props {
    myLocation: MyLocation;
}

const WAITING_FOR_LOCATION: string = 'Waiting for location...';
const FETCHING_ADDRESS: string = 'Fetching address...';
const LOCATING: string = 'Locating...';

export const Address = ({ myLocation }: Props) => {
    if (myLocation.status === NO_LOCATION) {
        return <span style={{color: 'rgb(225, 1, 70)'}}>{WAITING_FOR_LOCATION}</span>;
    }

    if (myLocation.status === FETCHING_COORDS) {
        return <span style={{color: 'rgb(237, 0, 0)'}}>{LOCATING}</span>;
    }

    if (myLocation.status === SUCCEED_FETCHING_COORDS || myLocation.status === FETCHING_LOCATION) {
        return <span style={{color: 'rgb(229, 160, 0)'}}>{FETCHING_ADDRESS}</span>;
    }

    if (myLocation.address.length > 0 && myLocation.status === SUCCEED_FETCHING_LOCATION) {
        return <span style={{color: 'rgb(15, 137, 33)'}}>{myLocation.address}</span>;
    }

    return <span>Something went wrong.</span>;
}

export default Address;
