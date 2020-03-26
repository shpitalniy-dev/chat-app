import { takeEvery, take, put, call, select, delay, takeLatest } from 'redux-saga/effects';
import actionTypes from "../../constants/actionTypes";
import * as workers from "./workers";

export function* watchChangeMode(){
    yield takeEvery(actionTypes.CHANGE_MODE_ASYNC, workers.changeMode);
}

export function* watchSetUsers(){
    yield takeEvery(actionTypes.SET_USERS_ASYNC, workers.setUsers);
}

export function* watchInitUser(){
    yield takeEvery(actionTypes.INIT_USER_ASYNC, workers.initUser);
}

export function* watchChangeUsersFilter(){
    yield takeEvery(actionTypes.CHANGE_USERS_FILTER_ASYNC, workers.changeUsersFilter);
}

export function* watchWSSaga() {
    yield takeEvery(actionTypes.SEND_MESSAGE, workers.sendMessage);
    yield takeEvery(actionTypes.CREATE_SOCKET_CONNECTION, workers.initConnection);
}

export function* watchNewUserConnected(){
    yield takeEvery(actionTypes.NEW_USER_CONNECTED, workers.newUserConnected)
}

export function* watchSetActiveChat(){
    yield takeEvery(actionTypes.SET_ACTIVE_CHAT_ASYNC, workers.setActiveChat)
}

export function* watchNewMessageReceived(){
    yield takeEvery(actionTypes.NEW_MESSAGE_RECEIVED, workers.newMessageReceived);
}

export function* watchChangeMessageFilter(){
    yield takeEvery(actionTypes.CHANGE_MESSAGE_FILTER_ASYNC, workers.changeMessageFilter);
}

export function* watchUserDisconnected(){
    yield takeEvery(actionTypes.USER_DISCONNECTED, workers.userDisconnected);
}