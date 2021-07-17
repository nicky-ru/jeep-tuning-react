import initialState from "../constants/initialState";
import * as types from "../constants/types";

export function services(state = initialState.services, action) {
    switch (action.type) {
        case types.services.LIST: {
            const nextState = Object.assign({}, state);

            for (const value of Object.values(action.serviceList)) {
                nextState[value.id] = {name: value.name, description: value.description, price: value.price, uzelID: value.uzelID};
            }
            return nextState;
        }
        default:
            return state;
    }
}