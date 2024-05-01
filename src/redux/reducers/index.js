import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import crudReducer from './crudReducer'

const  rootReducer =combineReducers({
    cartReducer,
    crudReducer,

})


export default rootReducer;
