import { combineReducers } from "redux";

import {advantages} from "./advantages";
import {service} from "./service";
import {uzels} from "./uzel";
import {services} from "./services";
import {brands} from "./brands";
import {serviceSearch} from "./serviceSearch";
import {appointment} from "./appointment";

const rootReducer = combineReducers({
    advantages,
    service,
    uzels,
    services,
    brands,
    serviceSearch,
    appointment,
});
export default rootReducer;