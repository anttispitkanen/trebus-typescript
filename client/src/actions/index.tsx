import * as constants from '../constants';
import { HotspotType } from '../types';

/**
 * Adding hotspots
 */
export interface AddHotspot {
    type: constants.ADD_HOTSPOT;
    newHotspot: HotspotType;
}

export const addHotspot = (newHotspot: HotspotType): AddHotspot => ({
    type: constants.ADD_HOTSPOT,
    newHotspot
});

/**
 * Deleting hotspots
 */
export interface DeleteHotspot {
    type: constants.DELETE_HOTSPOT;
    indexToDelete: number;
}

// DELETE HOTSPOT FROM HOTSPOT ARRAY BASED ON THE INDEX
export const deleteHotspot = (indexToDelete: number): DeleteHotspot => ({
    type: constants.DELETE_HOTSPOT,
    indexToDelete: indexToDelete
});

/**
 * Moving hotspots up
 */
export interface MoveHotspotUp {
    type: constants.MOVE_HOTSPOT_UP;
    indexToMove: number;
}

export const moveHotspotUp = (indexToMove: number): MoveHotspotUp => ({
    type: constants.MOVE_HOTSPOT_UP,
    indexToMove: indexToMove
});

/**
 * Moving hotspots down
 */
export interface MoveHotspotDown {
    type: constants.MOVE_HOTSPOT_DOWN;
    indexToMove: number;
}

export const moveHotspotDown = (indexToMove: number): MoveHotspotDown => ({
    type: constants.MOVE_HOTSPOT_DOWN,
    indexToMove: indexToMove
});

/**
 * Export HotspotAction types
 */
export type HotspotAction = AddHotspot
                            | DeleteHotspot
                            | MoveHotspotUp
                            | MoveHotspotDown;
