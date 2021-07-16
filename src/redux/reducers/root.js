import { combineReducers } from "redux";

import {advantages} from "./advantages";
import {service} from "./service";
import {uzels} from "./uzel";

const rootReducer = combineReducers({
    advantages,
    service,
    uzels
});
export default rootReducer;