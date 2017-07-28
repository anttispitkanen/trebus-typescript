import { connect } from 'react-redux';

import AddHotspot from '../components/AddHotspot';

import { Hotspot } from '../types';
import { addHotspot } from '../actions';

export const mapDispatchToProps = (dispatch: any) => ({
    addHotspot: (newHotspot: Hotspot) => dispatch(addHotspot(newHotspot))
});

export default connect(null, mapDispatchToProps)(AddHotspot);