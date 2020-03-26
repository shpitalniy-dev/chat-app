export function checkTextInputValue(event){
    if(!event.key.match(/[a-zA-Z0-9]/)){
        event.preventDefault();
    }
}