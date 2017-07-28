import * as React from 'react';

import Hotspot from '../containers/Hotspot';
import AddHotspot from '../containers/AddHotspot';

const hotspotArray = [1, null, undefined, Infinity, NaN];

interface Props {
    myLocation: any // FIX TYPE
}

const Hotspots = ({ myLocation }: Props) => (
    <div className="hotspots">

        {hotspotArray.map((hotspot, i) => {
            return (
                <Hotspot
                    key={i}
                    index={i}
                />
            )
        })}

        {hotspotArray.length < 8  && <AddHotspot />}
    </div>
)

export default Hotspots;

// name={address.name}
// coords={address.coords}
// startCoords={this.props.coords}
// key={address.coords}
// countHotspots={this.countHotspots.bind(this)}
// moveUp={this.moveUp.bind(this)}
// moveDown={this.moveDown.bind(this)}