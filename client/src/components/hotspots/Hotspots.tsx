import * as React from 'react';

import Hotspot from '../hotspot';
import AddHotspot from '../addHotspot';

import { HotspotType } from '../../types';

interface Props {
    myLocation: any; // FIX TYPE
    allHotspots: HotspotType[];
}

// FIXME: try to find another way to pass state.
// Now a change in hotspots or location triggers a re-render for all hotspots.
const Hotspots = ({ myLocation, allHotspots = [] }: Props) => (
    <div className="hotspots">

        {allHotspots.map((hotspot, i) => {
            return (
                <Hotspot
                    {...hotspot}
                    key={i}
                    index={i}
                />
            )
        })}

        {allHotspots.length < 8  && <AddHotspot />}
    </div>
);

export default Hotspots;

// name={address.name}
// coords={address.coords}
// startCoords={this.props.coords}
// key={address.coords}
// countHotspots={this.countHotspots.bind(this)}
// moveUp={this.moveUp.bind(this)}
// moveDown={this.moveDown.bind(this)}