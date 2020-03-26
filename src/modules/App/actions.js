import actionTypes from "../../constants/actionTypes";

export const changeMode = payload => ({ type: actionTypes.CHANGE_MODE_ASYNC, payload });
export const setUsers = () => ({ type: actionTypes.SET_USERS_ASYNC });
export const initUser = () => ({ type: actionTypes.INIT_USER_ASYNC });
export const changeUsersFilter = payload => ({ type: actionTypes.CHANGE_USERS_FILTER_ASYNC, payload });
export const updateProfile = payload => ({ type: actionTypes.UPDATE_PROFILE_ASYNC, payload });
export const updateImage = payload => ({ type: actionTypes.UPDATE_IMAGE_ASYNC, payload });
export const createSocketConnection = () => ({ type: actionTypes.CREATE_SOCKET_CONNECTION });
export const setActiveChat = payload => ({ type: actionTypes.SET_ACTIVE_CHAT_ASYNC, payload });
export const sendMessage = payload => ({ type: actionTypes.SEND_MESSAGE, payload });
export const changeModeSettings = payload => ({ type: actionTypes.CHANGE_SETTINGS_MODE, payload });
export const toggleImojiState = () => ({ type: actionTypes.TOGGLE_IMOJI_STATE });
export const changeMessageFilter = payload => ({ type: actionTypes.CHANGE_MESSAGE_FILTER_ASYNC, payload });
