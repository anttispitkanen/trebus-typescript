import { connect } from 'react-redux';

import {
    // deleteHotspot,
    // moveHotspotUp,
    // moveHotspotDown
} from '../actions';

import Hotspot from '../components/Hotspot';

const mapStateToProps = (state: any, ownProps: any) => ({
    ...ownProps
})

const mapDispatchToProps = (dispatch: any) => ({
    deleteHotspot: (index: number) => {
        // dispatch(deleteHotspot(index));
        console.log('delete ' + index);
    },
    moveHotspotUp: (index: number) => {
        // dispatch(moveHotspotUp(index));
        console.log('moveUp ' + index);
    },
    moveHotspotDown: (index: number) => {
        // dispatch(moveHotspotDown(index));
        console.log('moveDown ' + index);
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Hotspot);