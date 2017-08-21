import { connect } from 'react-redux';

import MyLocationContainer from './MyLocationContainer';
import { locateMe } from '../../actions/myLocationActions';

// SHOULD THE STATE BE TYPED?
const mapStateToProps = (state: any) => ({
    myLocation: state.myLocationReducer
});

export default connect(
    mapStateToProps,
    { locateMe }
)(MyLocationContainer);
