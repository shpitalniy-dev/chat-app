import { takeEvery, put, call, select, delay, takeLatest } from 'redux-saga/effects';
import actionTypes from "../constants/actionTypes";
import * as workers from "./workers";

export function* watchLoginRequest() {
    yield takeEvery(actionTypes.LOGIN_REQUEST_ASYNC, workers.loginRequest);
}

export function* watchRegistrationRequest() {
    yield takeEvery(actionTypes.REGISTRATION_REQUEST_ASYNC, workers.registrationRequest);
}

export function* watchUpdateProfile() {
    yield takeLatest(actionTypes.UPDATE_PROFILE_ASYNC, workers.updateProfile);
}

export function* watchUpdateImage() {
    yield takeLatest(actionTypes.UPDATE_IMAGE_ASYNC, workers.updateImage);
}