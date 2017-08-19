import { connect } from 'react-redux';

import AddHotspot from './AddHotspot';

import { HotspotType } from '../../types';
import { addHotspot } from '../../actions';

export const mapDispatchToProps = (dispatch: any) => ({
    addHotspot: (newHotspot: HotspotType) => dispatch(addHotspot(newHotspot))
});

export default connect(
    null,
    mapDispatchToProps
)(AddHotspot);
