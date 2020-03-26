import constants from "../../constants/constants";

export async function getUsersInformation(user){
    const response = {};
    await getAllUsers(user.token).then(result => response.allUsers = result);
    await getOnlineUsers(user.token).then(result => response.onlineUsers = result);
    await getUsersDialog(user.token).then(result => response.messages = result);

    for(let i = 0; i < response.allUsers.length; i++){
        response.allUsers[i].online = false;
        response.allUsers[i].lastMessage = "";
        for(let j = 0; j < response.onlineUsers.length; j++){
            if(response.allUsers[i].userName === response.onlineUsers[j]){
                response.allUsers[i].online = true;
                break;
            }
        }

        for(let y = response.messages.length - 1; y >= 0; y--){
            if(response.allUsers[i].userName !== user.userName){
                if(response.allUsers[i].userName === response.messages[y].sender || response.allUsers[i].userName === response.messages[y].receiver){
                    response.allUsers[i].lastMessage = response.messages[y].content;
                    break;
                }
            }else{
                if(user.userName === response.messages[y].sender && user.userName === response.messages[y].receiver){
                    response.allUsers[i].lastMessage = response.messages[y].content;
                    break;
                }
            }
        }
    }

    return response;
}

async function getAllUsers(token){
    let response;
    await fetch(constants.serverUrl + "users", {
        method: 'GET',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.json())
    .then(result => result.status === "OK" ? response = result.data.users : response = [])
    .catch(error => console.log(error))
    return response;
}

async function getOnlineUsers(token){
    let response;
    await fetch(constants.serverUrl + "chat/online", {
        method: 'GET',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.json())
    .then(result => result.status === "OK" ? response = result.data : response = [])
    .catch(error => console.log(error));
    return response;
}

async function getUsersDialog(token){
    let response;
    await fetch(constants.serverUrl + "chat/messages", {
        method: 'GET',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.json())
    .then(result => result.status === "OK" ? response = result.data : response = [])
    .catch(error => console.log(error));
    return response;
}