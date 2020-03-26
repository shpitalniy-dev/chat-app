import { takeEvery, take, put, call, select, delay, takeLatest, apply } from 'redux-saga/effects';
import actionTypes from "../../constants/actionTypes";
import constants from "../../constants/constants";
import { Socket } from "./Socket";
import { toast } from "react-toastify";
import { eventChannel } from "redux-saga";
import * as helpers from "./helpers";
import * as actions from "./actions";
import * as selectors from "./selectors";

let channel = null;

export function* changeMode(action) {
    yield put({ type: actionTypes.CHANGE_MODE, payload: action.payload });
}

export function* setUsers() {
    const store = yield select();
    const response = yield call(helpers.getUsersInformation, store.common.user);
    yield put({
        type: actionTypes.SET_USERS,
        payload: {
            allUsers: response.allUsers,
            messages: response.messages,
        }
    })
}

export function* initUser() {
    if (localStorage.getItem('user')) {
        const user = JSON.parse(localStorage.getItem('user'));
        yield put({
            type: actionTypes.INIT_USER,
            payload: {
                userName: user.userName,
                token: user.token,
            }
        })
    }
}

export function* changeUsersFilter(action) {
    yield put({ type: actionTypes.CHANGE_USERS_FILTER, payload: action.payload })
}

export function* initConnection() {
    const store = yield select();
    channel = yield call(socketConnection, constants.wsPath + "?token=" + store.common.user.token);

    while (channel) {
        const eventAction = yield take(channel);
        yield put(eventAction);
    }
}

const socketConnection = wsPath => {
    new Socket(wsPath);
    return eventChannel(emitter => {
        Socket.getInstance().onopen = () => {
            console.log("CONNECTED");
        };

        Socket.getInstance().onclose = () => {
            console.log("DISCONNECTED");
            channel.close();
        };

        Socket.getInstance().onerror = () => {
            console.log("ERROR")
            channel.close();
        };

        Socket.getInstance().onmessage = response => {
            const serverData = JSON.parse(response.data);
            switch (serverData.type) {
                case actionTypes.USER_CONNECTED:
                    emitter(actions.newUserConnected(serverData.payload));
                    break;
                case actionTypes.CREATE_CHAT_MESSAGE_SUCCESS:
                    emitter(actions.newMessageReceived(serverData.payload));
                    break;
                case actionTypes.USER_DISCONNECTED:
                    emitter(actions.userDisconect(serverData.payload));
                    break;
            }
        };

        return () => {
            Socket.closeConnection();
        };
    });
};

export function* sendMessage(action) {
    if (!action || !action.payload) {
        return;
    }

    const receiver = yield select(state => state.app.activeChat);

    const message = {
        type: actionTypes.CREATE_CHAT_MESSAGE,
        payload: {
            receiver: receiver,
            content: action.payload
        }
    };
    yield apply(Socket.getInstance(), Socket.getInstance().send, [JSON.stringify(message)]);
}

export function* newUserConnected(action) {
    // yield delay(3000);
    const store = yield select();
    for (let i = 0; i < store.app.allUsers.length; i++) {
        if (action.payload.userName === store.app.allUsers[i].userName) {
            store.app.allUsers[i].online = true;
            break;
        }
    }

    yield put({
        type: actionTypes.SET_USERS,
        payload: {
            allUsers: store.app.allUsers.slice(),
            messages: store.app.messages.slice(),
        }
    })

    toast.success(`${action.payload.userName} connected`, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });
}

export function* setActiveChat(action) {
    yield put({ type: actionTypes.SET_ACTIVE_CHAT, payload: action.payload })
}

export function* newMessageReceived(action) {
    const app = yield select(state => state.app);
    const user = yield select(state => state.common.user);
    console.log(action);
    if (action.payload.receiver === action.payload.sender) {
        let exist = false;
        for (let j = 0; j < app.messages.length; j++) {
            if (app.messages[j].date === action.payload.date) {
                exist = true;
            }
        }

        if (!exist) app.messages.push(action.payload);

        for (let i = 0; i < app.allUsers.length; i++) {
            if (app.allUsers[i].userName === user.userName) {
                app.allUsers[i].lastMessage = action.payload.content;
                break
            }
        }
    } else {
        app.messages.push(action.payload);
        for (let i = 0; i < app.allUsers.length; i++) {
            if (app.allUsers[i].userName === action.payload.receiver || app.allUsers[i].userName === action.payload.sender) {
                if (app.allUsers[i].userName !== user.userName) {
                    app.allUsers[i].lastMessage = action.payload.content;
                    break;
                }
            }
        }
    }

    yield put({
        type: actionTypes.SET_USERS,
        payload: {
            allUsers: app.allUsers.slice(),
            messages: app.messages.slice(),
        }
    })
}

export function* changeMessageFilter(action) {
    yield put({ type: actionTypes.CHANGE_MESSAGE_FILTER, payload: action.payload })
}

export function* userDisconnected(action) {
    const store = yield select();
    for (let i = 0; i < store.app.allUsers.length; i++) {
        if (action.payload.userName === store.app.allUsers[i].userName) {
            store.app.allUsers[i].online = false;
            break;
        }
    }

    yield put({
        type: actionTypes.SET_USERS,
        payload: {
            allUsers: store.app.allUsers.slice(),
            messages: store.app.messages.slice(),
        }
    })

    toast.error(`${action.payload.userName} disconnected`, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        });
}