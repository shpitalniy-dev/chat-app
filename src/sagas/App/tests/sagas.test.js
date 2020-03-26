import { takeEvery } from 'redux-saga/effects';
import * as watchers from "../watchers";
import * as workers from "../workers";

describe('watchChangeMode: ', () => {
    const generator = watchers.watchChangeMode();

    it('watchChangeMode takeEvery CHANGE_MODE_ASYNC', () => {
        const actual = generator.next();
        assert.deepEqual(
            actual.value,
            takeEvery("CHANGE_MODE_ASYNC", workers.changeMode)
        )
    });

    it('watchChangeMode done equals to true', () => {
        const actual = generator.next();
        assert.isTrue(actual.done)
    })
});

describe('watchSetUsers: ', () => {
    const generator = watchers.watchSetUsers();

    it('watchSetUsers takeEvery SET_USERS_ASYNC', () => {
        const actual = generator.next();
        assert.deepEqual(
            actual.value,
            takeEvery("SET_USERS_ASYNC", workers.setUsers)
        )
    });

    it('watchSetUsers done equals to true', () => {
        const actual = generator.next();
        assert.isTrue(actual.done)
    })
});

describe('watchInitUser: ', () => {
    const generator = watchers.watchInitUser();

    it('watchInitUser takeEvery INIT_USER_ASYNC', () => {
        const actual = generator.next();
        assert.deepEqual(
            actual.value,
            takeEvery("INIT_USER_ASYNC", workers.initUser)
        )
    });

    it('watchInitUser done equals to true', () => {
        const actual = generator.next();
        assert.isTrue(actual.done)
    })
});

describe('watchChangeUsersFilter: ', () => {
    const generator = watchers.watchChangeUsersFilter();

    it('watchChangeUsersFilter takeEvery CHANGE_USERS_FILTER_ASYNC', () => {
        const actual = generator.next();
        assert.deepEqual(
            actual.value,
            takeEvery("CHANGE_USERS_FILTER_ASYNC", workers.changeUsersFilter)
        )
    });

    it('watchChangeUsersFilter done equals to true', () => {
        const actual = generator.next();
        assert.isTrue(actual.done)
    })
});

describe('watchWSSaga: ', () => {
    const generator = watchers.watchWSSaga();

    it('watchWSSaga takeEvery SEND_MESSAGE', () => {
        const actual = generator.next();
        assert.deepEqual(
            actual.value,
            takeEvery("SEND_MESSAGE", workers.sendMessage)
        )
    });
    it('watchWSSaga takeEvery CREATE_SOCKET_CONNECTION', () => {
        const actual = generator.next();
        assert.deepEqual(
            actual.value,
            takeEvery("CREATE_SOCKET_CONNECTION", workers.initConnection)
        )
    });

    it('watchWSSaga done equals to true', () => {
        const actual = generator.next();
        assert.isTrue(actual.done)
    })
});

describe('watchNewUserConnected: ', () => {
    const generator = watchers.watchNewUserConnected();

    it('watchNewUserConnected takeEvery NEW_USER_CONNECTED', () => {
        const actual = generator.next();
        assert.deepEqual(
            actual.value,
            takeEvery("NEW_USER_CONNECTED", workers.newUserConnected)
        )
    });

    it('watchNewUserConnected done equals to true', () => {
        const actual = generator.next();
        assert.isTrue(actual.done)
    })
});

describe('watchSetActiveChat: ', () => {
    const generator = watchers.watchSetActiveChat();

    it('watchSetActiveChat takeEvery SET_ACTIVE_CHAT_ASYNC', () => {
        const actual = generator.next();
        assert.deepEqual(
            actual.value,
            takeEvery("SET_ACTIVE_CHAT_ASYNC", workers.setActiveChat)
        )
    });

    it('watchSetActiveChat done equals to true', () => {
        const actual = generator.next();
        assert.isTrue(actual.done)
    })
});

describe('watchNewMessageReceived: ', () => {
    const generator = watchers.watchNewMessageReceived();

    it('watchNewMessageReceived takeEvery NEW_MESSAGE_RECEIVED', () => {
        const actual = generator.next();
        assert.deepEqual(
            actual.value,
            takeEvery("NEW_MESSAGE_RECEIVED", workers.newMessageReceived)
        )
    });

    it('watchNewMessageReceived done equals to true', () => {
        const actual = generator.next();
        assert.isTrue(actual.done)
    })
});

describe('watchChangeMessageFilter: ', () => {
    const generator = watchers.watchChangeMessageFilter();

    it('watchChangeMessageFilter takeEvery CHANGE_MESSAGE_FILTER_ASYNC', () => {
        const actual = generator.next();
        assert.deepEqual(
            actual.value,
            takeEvery("CHANGE_MESSAGE_FILTER_ASYNC", workers.changeMessageFilter)
        )
    });

    it('watchChangeMessageFilter done equals to true', () => {
        const actual = generator.next();
        assert.isTrue(actual.done)
    })
});