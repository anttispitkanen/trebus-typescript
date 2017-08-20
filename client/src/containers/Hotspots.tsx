import { connect } from 'react-redux';
import Hotspots from '../components/Hotspots';

// FIX TYPE
const mapStateToProps = (state: any) => ({
    myLocation: state.myLocationReducer,
    allHotspots: state.allHotspotsReducer
});

export default connect(mapStateToProps)(Hotspots);
