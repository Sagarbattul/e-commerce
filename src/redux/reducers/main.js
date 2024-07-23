import {combineReducers} from "redux";
import { cartreducer } from "./reducer";

// multiple ruducers 
const rootred = combineReducers({
    cartreducer
});


export default rootred

