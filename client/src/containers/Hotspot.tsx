import { connect } from 'react-redux';

import {
    deleteHotspot,
    moveHotspotUp,
    moveHotspotDown
} from '../actions';

import Hotspot from '../components/Hotspot';

// const mapStateToP

const mapDispatchToProps = (dispatch: any) => ({
    deleteHotspot: (index: number) => {
        dispatch(deleteHotspot(index));
    },
    moveHotspotUp: (index: number) => {
        dispatch(moveHotspotUp(index));
    },
    moveHotspotDown: (index: number) => {
        dispatch(moveHotspotDown(index));
    }
})

export default connect(null, mapDispatchToProps)(Hotspot);