import { combineReducers } from "redux";

import {advantages} from "./advantages";
import {service} from "./service";
import {uzels} from "./uzel";
import {services} from "./services";
import {brands} from "./brands";

const rootReducer = combineReducers({
    advantages,
    service,
    uzels,
    services,
    brands,
});
export default rootReducer;