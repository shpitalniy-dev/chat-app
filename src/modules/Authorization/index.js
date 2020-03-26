import Authorization from "./Authorization.jsx";
import * as actions from "./actions";
import * as selectors from "./selectors";
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    dictionary: selectors.getDictionary(state),
    user: selectors.getUser(state),
});

const mapDispatchToProps = dispatch => ({
    loginRequest: payload => dispatch(actions.loginRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Authorization);