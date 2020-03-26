import config from "../../config/config";
import actionTypes from "../../constants/actionTypes";

const initialState = {
    user: config.defaultUserAuth,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INSERT_USER:
            return {
                ...state,
                user:  action.payload
            };
        default:
            return state;
    }
};