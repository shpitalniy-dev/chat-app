import Registration from "./Registration.jsx";
import * as actions from "./actions";
import * as selectors from "./selectors";
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    dictionary: selectors.getDictionary(state),
    user: selectors.getUser(state),
});

const mapDispatchToProps = dispatch => ({
    CHANGE_LOCALE: payload => dispatch(actions.changeLocale(payload)),
    registrationRequest: payload => dispatch(actions.registrationRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);