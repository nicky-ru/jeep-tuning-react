import { combineReducers } from "redux";

import {advantages} from "./advantages";
import {service} from "./service";
import {uzels} from "./uzel";
import {services} from "./services";

const rootReducer = combineReducers({
    advantages,
    service,
    uzels,
    services,
});
export default rootReducer;