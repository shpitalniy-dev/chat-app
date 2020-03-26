import * as constants from "../../constants/constants";

export async function loginRequest(payload) {
    return await fetch(`${constants.default.serverUrl}auth`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        return data ;
    })
    .catch(error => console.log(error));
}
export async function registrationRequest(payload) {
    return  await fetch(`${constants.default.serverUrl}reg`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( payload)
    }).then((response) => {
        return response.json();
    })
        .then((data) => {
            return data ;
        })
        .catch(error => console.log(error));
}
export async function updateProfileRequest(payload) {
    return await fetch(`${constants.default.serverUrl}users`, {
        method: 'PUT',
        headers: {
            'Authorization': payload.token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email:payload.email,
            password:payload.password,
            userName:payload.userName,
        })
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data ;
        })
        .catch(error => console.log(error));
}
export async function updateImageRequest(payload, token) {
    console.log(payload)
    return await fetch(`${constants.default.serverUrl}users/avatar`, {
        method: 'POST',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email:payload.email,
            password:payload.password,
            userName:payload.userName,
        })
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data ;
        })
        .catch(error => console.log(error));
}