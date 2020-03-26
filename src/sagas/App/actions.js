import actionTypes from "../../constants/actionTypes";

export const newUserConnected = payload => ({ type: actionTypes.NEW_USER_CONNECTED, payload });
export const newMessageReceived = payload => ({ type: actionTypes.NEW_MESSAGE_RECEIVED, payload });
export const userDisconect = payload => ({ type: actionTypes.USER_DISCONNECTED, payload });