import { connect } from 'react-redux';
import Hotspots from '../components/Hotspots';

// FIX TYPE
const mapStateToProps = (state: any) => ({
    myLocation: state.myLocation,
    allHotspots: state.allHotspots
});

export default connect(mapStateToProps)(Hotspots);