import React from "react";
import PropTypes from "prop-types";
import LeftApp from "./components/LeftApp/LeftApp.jsx";
import RightApp from "./components/RightApp/RightApp.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./styles/styles.less";

export default class App extends React.Component {
    static propTypes = {
        user: PropTypes.object.isRequired,
        locale: PropTypes.string.isRequired,
        dictionary: PropTypes.object.isRequired,
        allUsers: PropTypes.array.isRequired,
        messages: PropTypes.array.isRequired,
        mode: PropTypes.string.isRequired,
        changeMode: PropTypes.func.isRequired,
        setUsers: PropTypes.func.isRequired,
        initUser: PropTypes.func.isRequired,
        usersFilter: PropTypes.string.isRequired,
        changeUsersFilter: PropTypes.func.isRequired,
        createSocketConnection: PropTypes.func.isRequired,
        activeChat: PropTypes.string.isRequired,
        setActiveChat: PropTypes.func.isRequired,
        sendMessage: PropTypes.func.isRequired,
        messageFilter: PropTypes.string.isRequired,
        changeMessageFilter: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.props.initUser();
    }

    componentDidMount() {
        this.props.createSocketConnection();
    }

    render() {
        const { settingsMode, user, history, allUsers, chats, mode, changeMode, setUsers, usersFilter,
            changeUsersFilter, updateProfile, updateImage, changeModeSettings, toggleImojiState, emojiState,
            activeChat, setActiveChat, messages, sendMessage, messageFilter, changeMessageFilter } = this.props;
        return (
            <div className="app-block">
                <ToastContainer />
                <LeftApp
                    user={user}
                    history={history}
                    allUsers={allUsers}
                    chats={chats}
                    mode={mode}
                    changeMode={changeMode}
                    setUsers={setUsers}
                    usersFilter={usersFilter}
                    changeUsersFilter={changeUsersFilter}
                    activeChat={activeChat}
                    setActiveChat={setActiveChat}
                    changeModeSettings={changeModeSettings}
                    settingsMode={settingsMode}
                />
                {activeChat === "" && mode === "chats" ? null :
                    <RightApp mode={mode}
                        allUsers={allUsers}
                        user={user}
                        updateProfile={updateProfile}
                        updateImage={updateImage}
                        activeChat={activeChat}
                        messages={messages}
                        sendMessage={sendMessage}
                        settingsMode={settingsMode}
                        toggleImojiState={toggleImojiState}
                        emojiState={emojiState}
                        messageFilter={messageFilter}
                        changeMessageFilter={changeMessageFilter}
                    />}
            </div>
        )
    }
}