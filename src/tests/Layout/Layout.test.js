// import { takeEvery } from 'redux-saga/effects';
// import * as watchers from "../../sagas/watchers";
// import * as workers from "../../sagas/workers";
// import * as helpers from "../../sagas/helpers";
//
// describe(`Layout logic test`, () => {
//     describe(`ageUp`, () => {
//         it(`age: 10`, () => {
//             const actual = 10;
//             const expected = 11;
//             const result = helpers.ageUp(actual);
//             assert.equal(expected, result);
//         })
//     })
//
//     describe(`ageDown`, () => {
//         it(`age: 10`, () => {
//             const actual = 10;
//             const expected = 9;
//             const result = helpers.ageDown(actual);
//             assert.equal(expected, result);
//         })
//     })
// })
//
// describe(`UI test`, () => {
//     it(`create input`, () => {
//         const input = document.createElement('input');
//         input.value = 10;
//         const expected = 11;
//         const result = helpers.ageUp(+input.value);
//         assert.equal(expected, result);
//     })
// })
//
// describe('watchAgeUp: ', () => {
//     const generator = watchers.watchAgeUp();
//
//     it('watchAgeUp takeEvery AGE_UP', () => {
//         const actual = generator.next();
//         assert.deepEqual(
//             actual.value,
//             takeEvery("AGE_UP", workers.ageUp)
//         )
//     })
//
//     it('watchAgeUp done equals to true', () => {
//         const actual = generator.next();
//         assert.isTrue(actual.done)
//     })
// })
//
// describe('watchAgeDown: ', () => {
//     const generator = watchers.watchAgeDown();
//
//     it('watchAgeDown takeEvery AGE_UP', () => {
//         const actual = generator.next();
//         assert.deepEqual(
//             actual.value,
//             takeEvery("AGE_DOWN", workers.ageDown)
//         )
//     })
//
//     it('watchAgeDown done equals to true', () => {
//         const actual = generator.next();
//         assert.isTrue(actual.done)
//     })
// })