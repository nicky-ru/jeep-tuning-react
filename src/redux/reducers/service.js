import initialState from "../constants/initialState";
import * as types from "../constants/types";

export function service(state = initialState.service, action) {
    switch (action.type) {
        case types.service.GET: {
            return {...state, name: action.service.name, description: action.service.description,
                price: action.service.price, uzelID: action.service.uzelID}

        }
        default:
            return state;
    }
}