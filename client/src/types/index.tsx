/**
 * Hotspot
 */
export interface HotspotType {
    name: string | undefined;
    address: string | undefined;
    latitude: string | undefined;
    longitude: string | undefined;
    coords: string | undefined; // coordinates as "longitude,latitude" for routing API
    // ROUTE HERE
}

/**
 * MyLocation
 */
export interface MyLocation {
    latitude: string;
    longitude: string;
    coords: string; // coordinates as "longitude,latitude" for routing API
    address: string;
    status: 'FETCHING_COORDS'
            | 'FAILED_FETCHING_COORDS'
            | 'SUCCEED_FETCHING_COORDS'
            | 'FETCHING_LOCATION'
            | 'FAILED_FETCHING_LOCATION'
            | 'SUCCEED_FETCHING_LOCATION'
            | 'NO_LOCATION';
}

export interface PartialMyLocation {
    latitude: string;
    longitude: string;
    coords: string; // coordinates as "longitude,latitude" for routing API
}

/**
 * Route
 */


/**
 * State
 */