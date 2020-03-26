import { takeEvery, takeLatest } from 'redux-saga/effects';
import * as watchers from "../watchers";
import * as workers from "../workers";

describe('watchLoginRequest: ', () => {
    const generator = watchers.watchLoginRequest();

    it('watchLoginRequest takeEvery LOGIN_REQUEST_ASYNC', () => {
        const actual = generator.next();
        assert.deepEqual(
            actual.value,
            takeEvery("LOGIN_REQUEST_ASYNC", workers.loginRequest)
        )
    });

    it('watchLoginRequest done equals to true', () => {
        const actual = generator.next();
        assert.isTrue(actual.done)
    })
});

describe('watchRegistrationRequest: ', () => {
    const generator = watchers.watchRegistrationRequest();

    it('watchRegistrationRequest takeEvery REGISTRATION_REQUEST_ASYNC', () => {
        const actual = generator.next();
        assert.deepEqual(
            actual.value,
            takeEvery("REGISTRATION_REQUEST_ASYNC", workers.registrationRequest)
        )
    });

    it('watchRegistrationRequest done equals to true', () => {
        const actual = generator.next();
        assert.isTrue(actual.done)
    })
});

describe('watchUpdateProfile: ', () => {
    const generator = watchers.watchUpdateProfile();

    it('watchUpdateProfile takeLatest UPDATE_PROFILE_ASYNC', () => {
        const actual = generator.next();
        assert.deepEqual(
            actual.value,
            takeLatest("UPDATE_PROFILE_ASYNC", workers.updateProfile)
        )
    });

    it('watchUpdateProfile done equals to true', () => {
        const actual = generator.next();
        assert.isTrue(actual.done)
    })
});

describe('watchUpdateImage: ', () => {
    const generator = watchers.watchUpdateImage();

    it('watchUpdateImage takeLatest UPDATE_IMAGE_ASYNC', () => {
        const actual = generator.next();
        assert.deepEqual(
            actual.value,
            takeLatest("UPDATE_IMAGE_ASYNC", workers.updateImage)
        )
    });

    it('watchUpdateImage done equals to true', () => {
        const actual = generator.next();
        assert.isTrue(actual.done)
    })
});