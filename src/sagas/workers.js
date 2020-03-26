import { takeEvery, put, call, select, delay, takeLatest } from 'redux-saga/effects';
import actionTypes from "../constants/actionTypes";
import * as api from "./requests/api"

export function* insertUser(payload) {
    yield put({ type: actionTypes.INSERT_USER, payload });
}

export function* loginRequest(action){
    if(action.payload.userName === "" || action.payload.password === ""){
        yield insertUser({
            errorMessage:"Write correct values"
        })
    } else {
        let res = yield call(api.loginRequest, action.payload);
        yield res.status === "OK" ?
            yield test(action.payload.userName, action.payload.password, res.data.token, action.payload.history)
            :
            yield insertUser({
                errorMessage: res.data.message
            })
    }
}

function* test(userName, password, token, history) {
    const user = {
        userName: userName,
        token: token,
        password: password
    };
    yield insertUser(user);
    yield localStorage.setItem('user', JSON.stringify(user));
    yield history.push("/app");
}

export function* registrationRequest(action){
    if (!action.payload){
        return;
    }
    let res = yield call(api.registrationRequest, action.payload);
    yield res.status === "OK" ?
        yield test(action.payload.userName, action.payload.password, res.data.token, action.payload.history)
        :
        yield insertUser({
            errorMessageRegistration:res.data.message
        });
}

export function* updateProfile(action){
    let res = yield call(api.updateProfileRequest, action.payload);
    const store = yield select();

    yield res.status === "OK" ?
        yield insertUser({
            userName: action.payload.userName,
            password: action.payload.password,
            email: action.payload.email,
            token: store.common.user.token
        })
        :
        yield insertUser({
            errorMessage:res.data.message
        });
}

export function* updateImage(action){
    const store = yield select();
    let res = yield call(api.updateImageRequest, action.payload, store.common.user.token);
    alert(res.data);
}