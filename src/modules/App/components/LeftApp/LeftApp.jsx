import React from "react";
import PropTypes from "prop-types";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import ChatList from "./components/ChatList/ChatList.jsx";
import UserList from "./components/UserList/UserList.jsx";
import Settings from "./components/Settings/Settings.jsx";
import settingsIcon from "../../../../../assets/settings.png";
import chatsIcon from "../../../../../assets/chats.png";
import usersIcon from "../../../../../assets/users.png";
import profilePhoto from "../../../../../assets/profilePhoto.png";
import exitIcon from "../../../../../assets/exit.png";

export default class LeftApp extends React.Component {
    constructor(props) {
        super(props);
    }

    getContent = () => {
        const { mode, setUsers, allUsers, usersFilter, 
            changeUsersFilter, activeChat, setActiveChat, changeModeSettings, settingsMode } = this.props;
        switch (mode) {
            case "chats":
                return <ChatList
                    setUsers={setUsers}
                    allUsers={allUsers}
                    usersFilter={usersFilter}
                    changeUsersFilter={changeUsersFilter}
                    activeChat={activeChat}
                    setActiveChat={setActiveChat}
                />;
            case "users":
                return <UserList />;
            case "settings":
                return <Settings changeModeSettings={changeModeSettings} settingsMode={settingsMode}/>;
        }
    };

    logout = () => {
        localStorage.removeItem('user');
        this.props.history.push("/");
    };

    render() {
        const { user, mode, changeMode } = this.props;
        const { logout } = this;
        return (
            <div className="app-block__left-app left-app">
                <div className="left-app__user-title user-title">
                    <div className="user-title__user-photo">
                        <img src={profilePhoto}
                            height="50"
                            width="50"
                        />
                    </div>
                    <div className="user-title__user-login">{user.userName}</div>
                    <div className="user-title__logout">
                        <img src={exitIcon} 
                            width="50"
                            height="50"
                            onClick={logout}
                            style={{cursor: "pointer"}}
                        />
                    </div>
                </div>
                <div className="left-app__side-bar side-bar">
                    <Sidebar mode={mode} changeMode={changeMode} />
                </div>
                <div className="left-app__data data">
                    {this.getContent()}
                </div>
            </div>
        )
    }
}