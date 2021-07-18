import initialState from "../constants/initialState";
import * as types from "../constants/types";

export function appointment(state = initialState.appointment, action) {
    switch (action.type) {
        case types.appointment.SET_SERVICE_KEY: {
            return {...state, serviceKey: action.serviceKey};
        }
        case types.appointment.SET_UZEL_KEY: {
            return {...state, uzelKey: action.uzelKey};
        }
        default:
            return state;
    }
}