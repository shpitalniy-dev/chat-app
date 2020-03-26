import App from "./App.jsx";
import * as actions from "./actions";
import * as selectors from "./selectors";
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    user: selectors.getUser(state),
    locale: selectors.getLocale(state),
    dictionary: selectors.getDictionary(state),
    allUsers: selectors.getAllUsers(state),
    messages: selectors.getMessages(state),
    mode: selectors.getMode(state),
    usersFilter: selectors.getUsersFilter(state),
    activeChat: selectors.getActiveChat(state),
    settingsMode: selectors.settingsMode(state),
    emojiState: selectors.emojiState(state),
    messageFilter: selectors.getMessageFilter(state),
});

const mapDispatchToProps = dispatch => ({
    changeMode: payload => dispatch(actions.changeMode(payload)),
    setUsers: () => dispatch(actions.setUsers()),
    initUser: () => dispatch(actions.initUser()),
    changeUsersFilter: payload => dispatch(actions.changeUsersFilter(payload)),
    updateProfile: payload => dispatch(actions.updateProfile(payload)),
    updateImage: payload => dispatch(actions.updateImage(payload)),
    createSocketConnection: () => dispatch(actions.createSocketConnection()),
    setActiveChat: payload => dispatch(actions.setActiveChat(payload)),
    sendMessage: payload => dispatch(actions.sendMessage(payload)),
    changeModeSettings: payload => dispatch(actions.changeModeSettings(payload)),
    toggleImojiState: () => dispatch(actions.toggleImojiState()),
    changeMessageFilter: payload => dispatch(actions.changeMessageFilter(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);