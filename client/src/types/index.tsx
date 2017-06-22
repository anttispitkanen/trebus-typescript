// export interface StoreState {
//     allHotspots: Hotspot[];
//     myLocation: MyLocation;
// }

export interface Hotspot {
    name: string | undefined;
    address: string | undefined;
    latitude: string | undefined;
    longitude: string | undefined;
    coords: string | undefined; // coordinates as "longitude,latitude" for routing API
}

export interface MyLocation {
    latitude: string | undefined;
    longitude: string | undefined;
    coords: string | undefined; // coordinates as "longitude,latitude" for routing API
    address: string | undefined;
}