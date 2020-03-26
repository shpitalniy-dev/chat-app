import { combineReducers } from "redux";
import { commonReducer } from "./reducers/commonReducer";
import { translatesReducer } from "./reducers/translateReducer";
import { appReducer } from "./reducers/appReducer";

export default combineReducers({
    common: commonReducer,
    translates: translatesReducer,
    app: appReducer
})
