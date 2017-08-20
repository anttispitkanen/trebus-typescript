
import { connect } from 'react-redux';

import MyLocationContainer from '../components/MyLocationContainer';
import {
    // getCoordinates,
    // fetchAddress
    locateMe
} from '../actions/myLocationActions';

// SHOULD THE STATE BE TYPED?
const mapStateToProps = (state: any) => ({
    myLocation: state.myLocationReducer
});

// const actions: any = {
//     getCoordinates,
//     fetchAddress
// }

export default connect(
    mapStateToProps,
    // actions
    { locateMe }
)(MyLocationContainer);
