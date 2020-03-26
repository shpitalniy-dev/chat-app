import { all, fork } from 'redux-saga/effects';
import * as watchers from "./watchers";
import * as appWatchers from './App/watchers';

const sagas = [
    appWatchers.watchChangeMode,
    appWatchers.watchSetUsers,
    appWatchers.watchInitUser,
    appWatchers.watchChangeUsersFilter,
    appWatchers.watchWSSaga,
    appWatchers.watchNewUserConnected,
    appWatchers.watchSetActiveChat,
    appWatchers.watchNewMessageReceived,
    appWatchers.watchChangeMessageFilter,
    appWatchers.watchUserDisconnected,
    watchers.watchLoginRequest,
    watchers.watchRegistrationRequest,
    watchers.watchUpdateProfile,
    watchers.watchUpdateImage,
];

export default function* rootSaga() {
    yield all(sagas.map(fork));
}