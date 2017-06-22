import * as constants from '../constants';

export interface AddHotspot {
    type: constants.ADD_HOTSPOT;
    newHotspot: object;
}

export interface DeleteHotspot {
    type: constants.DELETE_HOTSPOT;
}

export type HotspotAction = AddHotspot | DeleteHotspot;

export const addHotspot = (newHotspot: object): AddHotspot => ({
    type: constants.ADD_HOTSPOT,
    newHotspot
})

export const deleteHotspot = (): DeleteHotspot => ({
    type: constants.DELETE_HOTSPOT
})