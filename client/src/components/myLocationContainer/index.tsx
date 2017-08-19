import { connect } from 'react-redux';

import MyLocationContainer from './MyLocationContainer';
import { MyLocation } from "../../types";
import { updateMyLocation } from '../../actions';

// SHOULD THE STATE BE TYPED?
const mapStateToProps = (state: any) => ({
    myLocation: state.myLocation
})

const mapDispatchToProps = (dispatch: any) => ({
    updateMyLocation: (newLocation: MyLocation) => {
        dispatch(updateMyLocation(newLocation));
    }
})

export default connect(
    mapStateToProps,mapDispatchToProps
)(MyLocationContainer);
