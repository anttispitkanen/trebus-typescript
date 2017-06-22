import * as constants from '../constants';
import { Hotspot, MyLocation } from '../types';

/**
 * Adding and deleting hotspots
 */
export interface AddHotspot {
    type: constants.ADD_HOTSPOT;
    newHotspot: Hotspot;
}

export interface DeleteHotspot {
    type: constants.DELETE_HOTSPOT;
    indexToDelete: number;
}

export type HotspotAction = AddHotspot | DeleteHotspot;

export const addHotspot = (newHotspot: Hotspot): AddHotspot => ({
    type: constants.ADD_HOTSPOT,
    newHotspot
})

// DELETE HOTSPOT FROM HOTSPOT ARRAY BASED ON THE INDEX
export const deleteHotspot = (indexToDelete: number): DeleteHotspot => ({
    type: constants.DELETE_HOTSPOT,
    indexToDelete: indexToDelete
})

/**
 * Updating my location
 */
export interface UpdateMyLocation {
    type: constants.UPDATE_MY_LOCATION;
    newLocation: MyLocation;
}

export type MyLocationAction = UpdateMyLocation;

export const updateMyLocation = (newLocation: MyLocation): UpdateMyLocation => ({
    type: constants.UPDATE_MY_LOCATION,
    newLocation
})