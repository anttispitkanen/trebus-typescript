import { connect } from 'react-redux';
import Hotspots from './Hotspots';

// FIX TYPE
const mapStateToProps = (state: any) => ({
    myLocation: state.myLocation,
    allHotspots: state.allHotspots
});

export default connect(mapStateToProps)(Hotspots);