import config from "../../config/config";
import actionTypes from "../../constants/actionTypes";

const initialState = {
    user: config.defaultUser,
}

export const commonReducer = (state = initialState, action) => {
    const newState = { ...state };
    switch(action.type){
        case actionTypes.INSERT_USER:
            if(action.payload.userName){
                newState.user = {
                    userName: action.payload.userName,
                    token: action.payload.token,

                    email: action.payload.email ? action.payload.email : state.user.email,
                    photo: state.user.photo,
                    errorMessage: "",
                    password:action.payload.password
                }
            }else{
                newState.user = {
                    userName: "",
                    token: "",
                    password: state.user.password,
                    email: action.payload.email ? action.payload.email : state.user.email,
                    photo: state.user.photo,
                    errorMessage: action.payload.errorMessage,
                    errorMessageRegistration: action.payload.errorMessageRegistration,

                }
            }
            break;
        case actionTypes.INIT_USER: 
            newState.user = {
                userName: action.payload.userName,
                token: action.payload.token,
                password: state.user.password,
                email: action.payload.email ? action.payload.email : state.user.email,
                photo: state.user.photo,
                errorMessage: "",
            }
            break;
    }
    return newState;
}
