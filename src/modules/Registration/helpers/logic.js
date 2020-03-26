export function checkTextInputValue(event){
    if(!event.key.match(/[a-zA-Z0-9]/)){
        event.preventDefault();
    }
}
export function checkMailInputValue(event){
    if(!event.key.match(/[a-zA-Z0-9@.]/)){
        event.preventDefault();
    }
}
export function checkLogin(inputLogin, outputLogin) {
    if (inputLogin.value.trim() === "" || !inputLogin.value.split("").every(item => item.match(/[a-zA-Z0-9]/)) || inputLogin.value === '') {
        inputLogin.classList.toggle("red-border", true);
        outputLogin.classList.toggle("error-message", true);
        return false;
    }
    return inputLogin.value;
}
export function checkMail(inputMail, outputMail) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = inputMail.value;
    if (reg.test(address) === false || inputMail.value === '') {
        inputMail.classList.toggle("red-border", true);
        outputMail.classList.toggle("error-message", true);
        return false;
    }
    return inputMail.value;
}
export function checkPassword(inputPassword, inputConfirmPassword, outputPassword, outputConfirmPassword) {
    if (inputPassword.value !== inputConfirmPassword.value || inputPassword.value === '' || !inputPassword.value.split("").every(item => item.match(/[a-zA-Z0-9]/))) {
        inputPassword.classList.toggle("red-border", true);
        inputConfirmPassword.classList.toggle("red-border", true);
        outputPassword.classList.toggle("error-message", true);
        outputConfirmPassword.classList.toggle("error-message", true);
        return false;
    }
    return inputPassword.value;
}
export function clearError(inputElement, outputElement){
    inputElement.classList.toggle("red-border", false);
    outputElement.classList.toggle("error-message", false);
}
export function finishValidate(login, loginOutput, password, passwordOutput, confirmPassword, outputConfirmPassword, mail, outputMail, history) {
    const user = {};
    user.history = history;
    user.userName = checkLogin(login, loginOutput);
    user.password = checkPassword(password, confirmPassword,
        passwordOutput, outputConfirmPassword);
    user.email = checkMail(mail, outputMail);

    if (user.userName && user.password && user.email) {
        return user;
    }

    return false;
}
