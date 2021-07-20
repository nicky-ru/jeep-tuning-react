import initialState from "../constants/initialState";
import * as types from "../constants/types";

export function appointment(state = initialState.appointment, action) {
    switch (action.type) {
        case types.appointment.SET_SERVICE: {
            const {serviceKey, uzelKey} = action;
            return {...state, serviceKey, uzelKey};
        }
        default:
            return state;
    }
}