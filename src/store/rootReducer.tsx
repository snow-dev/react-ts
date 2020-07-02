import {combineReducers} from "redux";
// import {systemReducer} from "./system/reducer";
// import {chatReducer} from "./chat/reducers";
// import {enthusiasmReducer} from "./enthusiasm/reducers";
import todoReducer from "./todo/reducer";

const rootReducer = combineReducers({
    // system: systemReducer,
    // chat: chatReducer,
    // enthusiasm: enthusiasmReducer,
    todo: todoReducer,

});


export type  RootState = ReturnType<typeof rootReducer>;
export default  rootReducer;