import actionTypes from "../../constants/actionTypes";
export const changeLocale = payload => ({ type: actionTypes.CHANGE_LOCALE, payload });
export const registrationRequest = payload => ({ type: actionTypes.REGISTRATION_REQUEST_ASYNC, payload });