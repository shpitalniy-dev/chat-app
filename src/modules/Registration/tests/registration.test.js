import * as validation from "../helpers/logic";
import { dom } from '../../../../testConfig/dom'
let container;
describe("testing validation func", ()=> {
    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
    });
    afterEach(() => {
        container.remove();
        container = null;
    });
    describe("testing checkLogin", () => {
        it("should return false because value is special characters ", async () => {
            const input2 = dom.window.document.createElement("input");
            container.append(input2);
            global.input2 = input2;
            const output = dom.window.document.createElement("output");
            container.append(output);
            global.output = output;
            input2.value = '///';
            assert.equal(validation.checkLogin(input2, output), false);
        });
        it("should return string Bob because it valid", async () => {
            const input2 = dom.window.document.createElement("input");
            container.append(input2);
            global.input2 = input2;
            const output = dom.window.document.createElement("output");
            container.append(output);
            global.output = output;
            input2.value = "Bob";
            assert.equal(validation.checkLogin(input2, output), "Bob");
        });
    });

describe("testing checkEmail", () => {
    it("should return false because value is incorrect", async () => {
        const input2 = dom.window.document.createElement("input");
        container.append(input2);
        global.input2 = input2;
        const output = dom.window.document.createElement("output");
        container.append(output);
        global.output = output;
        input2.value = 'sorobey@mail,ru';
        assert.equal(validation.checkMail(input2, output), false);
    });
    it("should return string sorobey@mail.ru because it valid", async () => {
        const input2 = dom.window.document.createElement("input");
        container.append(input2);
        global.input2 = input2;
        const output = dom.window.document.createElement("output");
        container.append(output);
        global.output = output;
        input2.value = "sorobey@mail.ru";
        assert.equal(validation.checkMail(input2, output), "sorobey@mail.ru");
        });
    });

    describe("testing checkPassword", () => {
        it("should return false because value is incorrect", async () => {
            const input2 = dom.window.document.createElement("input");
            container.append(input2);
            global.input2 = input2;
            const inputConfirmPass = dom.window.document.createElement("input");
            container.append(inputConfirmPass);
            global.inputConfirmPass = inputConfirmPass;
            const output = dom.window.document.createElement("output");
            container.append(output);
            const output2 = dom.window.document.createElement("output");
            container.append(output2);
            global.output2 = output2;
            input2.value = '///';
            assert.equal(validation.checkPassword(input2, inputConfirmPass, output, output2), false);
        });
        it("should return false because Passwords do not match", async () => {
            const input2 = dom.window.document.createElement("input");
            container.append(input2);
            global.input2 = input2;
            const inputConfirmPass = dom.window.document.createElement("input");
            container.append(inputConfirmPass);
            global.inputConfirmPass = inputConfirmPass;
            const output = dom.window.document.createElement("output");
            container.append(output);
            global.output = output;
            const output2 = dom.window.document.createElement("output");
            container.append(output2);
            global.output2 = output2;
            inputConfirmPass.value = 'fff';
            input2.value = 'ddd';
            assert.equal(validation.checkPassword(input2, inputConfirmPass, output, output2), false);
        });
        it("should return string sorobey@mail.ru because it valid", async () => {
            const input2 = dom.window.document.createElement("input");
            container.append(input2);
            global.input2 = input2;
            const inputConfirmPass = dom.window.document.createElement("input");
            container.append(inputConfirmPass);
            global.inputConfirmPass = inputConfirmPass;
            const output = dom.window.document.createElement("output");
            container.append(output);
            global.output = output;
            const output2 = dom.window.document.createElement("output");
            container.append(output2);
            global.output2 = output2;
            inputConfirmPass.value = 'ddddd';
            input2.value = "ddddd";
            assert.equal(validation.checkPassword(input2, inputConfirmPass, output, output2), "ddddd");
        });
    });
});
//     describe("testing checkPhoneNumber", ()=> {
//         it("should return false because value is not valid ", async () => {
// // global.tmp = tmp;
//             const input2 = dom.window.document.createElement("input");
//             container.append(input2);
//             global.input2 = input2;
//             const input = dom.window.document.createElement("input");
//             container.append(input);
//             global.input = input;
//             input2.value = 111;
//             assert.equal(app.checkPhoneNumber(input2, input), false);
//         });
//         it("should return number 999999999 because it valid", async () => {
// // global.tmp = tmp;
//             const input2 = dom.window.document.createElement("input");
//             container.append(input2);
//             global.input2 = input2;
//             const input = dom.window.document.createElement("input");
//             container.append(input);
//             global.input = input;
//             input2.value = 999999999;
//             assert.equal(app.checkPhoneNumber(input2, input), 999999999);
//         });
//     });
//     describe("testing checkMail", ()=> {
//         it("should return false because value is not valid ", async () => {
//             const input2 = dom.window.document.createElement("input");
//             container.append(input2);
//             global.input2 = input2;
//             const input = dom.window.document.createElement("input");
//             container.append(input);
//             global.input = input;
//             input2.value = 111;
//             assert.equal(app.checkMail(input2, input), false);
//         });
//         it("should return sdsds@gmail.com because it valid", async () => {
//             const input2 = dom.window.document.createElement("input");
//             container.append(input2);
//             global.input2 = input2;
//             const input = dom.window.document.createElement("input");
//             container.append(input);
//             global.input = input;
//             input2.value = "sdsds@gmail.com";
//             assert.equal(app.checkMail(input2, input), "sdsds@gmail.com");
//         });
//     });
// });