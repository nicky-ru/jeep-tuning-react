import { combineReducers } from "redux";

import {advantages} from "./advantages";
import {uzels, uzel} from "./uzels";
import {services, service, serviceSearch} from "./services";
import {brands} from "./brands";
import {appointment} from "./appointment";

const rootReducer = combineReducers({
    advantages,
    service,
    uzels,
    uzel,
    services,
    brands,
    serviceSearch,
    appointment,
});
export default rootReducer;