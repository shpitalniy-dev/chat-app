export function getEmail (allUsers, user) {
    if(allUsers.length === 0) return "";
    let res = allUsers.filter(elem => elem.userName === user.userName);
    return res[0].email ? res[0].email : "";
}
export function checkMailInputValue(event){
    if(!event.key.match(/[a-zA-Z0-9@.]/)){
        event.preventDefault();
    }
}
export function checkMail(inputMail) {
    console.log(inputMail);
    clearError(inputMail);
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = inputMail.value;
    if (reg.test(address) === false || inputMail.value === '') {
        inputMail.classList.toggle("red-border", true);
        return false;
    }
    return inputMail.value;
}
function clearError(inputElement){
    inputElement.classList.toggle("red-border", false);
}