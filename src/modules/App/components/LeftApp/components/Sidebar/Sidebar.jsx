import React from "react";
import PropTypes from "prop-types";
import settingsIcon from "../../../../../../../assets/settings.png";
import chatsIcon from "../../../../../../../assets/chats.png";
import usersIcon from "../../../../../../../assets/users.png";

const Sidebar = props => {
    const { mode, changeMode } = props;
    return (
        <React.Fragment>
            <div className="sibe-bar__chat-list"
                onClick={() => changeMode("chats")}
                style={mode === "chats" ? { cursor: "pointer", background: "white" } : {cursor: "pointer"}}
            >
                <img src={chatsIcon}
                    width="30"
                    height="30"
                />
            </div>
            <div className="sibe-bar__user-list"
                onClick={() => changeMode("users")}
                style={mode === "users" ? { cursor: "pointer", background: "white" } : {cursor: "pointer"}}
            >
                <img src={usersIcon}
                    width="30"
                    height="30"
                />
            </div>
            <div className="sibe-bar__settings"
                onClick={() => changeMode("settings")}
                style={mode === "settings" ? { cursor: "pointer", background: "white" } : {cursor: "pointer"}}
            >
                <img src={settingsIcon}
                    width="30"
                    height="30"
                />
            </div>
        </React.Fragment>
    )
}

export default Sidebar;