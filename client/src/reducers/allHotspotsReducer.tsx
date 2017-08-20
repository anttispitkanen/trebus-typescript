import * as _ from 'lodash';

import { HotspotAction } from '../actions';
import { HotspotType } from '../types';
import {
    ADD_HOTSPOT,
    DELETE_HOTSPOT,
    MOVE_HOTSPOT_UP,
    MOVE_HOTSPOT_DOWN
} from '../constants';

import { mockHotspots } from '../mockHotspots';

const initialState: HotspotType[] = mockHotspots;

export const allHotspotsReducer = (state: HotspotType[] = initialState, action: HotspotAction): HotspotType[] => {

    let newState;
    let i;
    let hotspotToMove;

    switch (action.type) {
        case ADD_HOTSPOT:
            return [...state, action.newHotspot];

        case DELETE_HOTSPOT:
            newState = _.cloneDeep(state);
            if (newState.length > 0 && action.indexToDelete >= 0 && action.indexToDelete < state.length) {
                newState.splice(action.indexToDelete, 1);
            }
            return newState;

        case MOVE_HOTSPOT_UP:
            i = action.indexToMove;
            newState = _.cloneDeep(state);
            hotspotToMove = newState.splice(i, 1)[0];
            newState.splice(i - 1, 0, hotspotToMove);
            return newState;

        case MOVE_HOTSPOT_DOWN:
            i = action.indexToMove;
            if (i >= state.length) return state;
            newState = _.cloneDeep(state);
            hotspotToMove = newState.splice(i, 1)[0];
            newState.splice(i + 1, 0, hotspotToMove);
            return newState;

        default:
            return state;
    }
};
