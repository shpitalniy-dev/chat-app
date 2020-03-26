import config from "../../config/config";
import actionTypes from "../../constants/actionTypes";

const initialState = {
    mode: config.defaultMode,
    messages: config.defaultMessages,
    allUsers: config.defaultAllUsers,
    usersFilter: config.defaultUsersFilter,
    activeChat: config.defaultActiveChat,
    settingsMode: config.defaultSettingsMode,
    emojiState: config.emojiState,
    messageFilter: config.defaultMessageFilter,
};

export const appReducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case actionTypes.CHANGE_MODE:
            newState.mode = action.payload;
            break;
        case actionTypes.SET_USERS:
            newState.allUsers = action.payload.allUsers;
            newState.messages = action.payload.messages;
            break;
        case actionTypes.CHANGE_USERS_FILTER:
            newState.usersFilter = action.payload;
            break;
        case actionTypes.SET_ACTIVE_CHAT: {
            newState.activeChat = action.payload;
            break;
        }
        case actionTypes.CHANGE_SETTINGS_MODE:
            newState.settingsMode = action.payload;
            break;
        case actionTypes.TOGGLE_IMOJI_STATE:
            newState.emojiState = !state.emojiState;
            break;
        case actionTypes.CHANGE_MESSAGE_FILTER:
            newState.messageFilter = action.payload;
            break;
    }
    return newState;
};