import initialState from "../constants/initialState";
import * as types from "../constants/types";

export function advantages(state = initialState.advantages, action) {
    switch (action.type) {
        case types.advantages.LIST: {
            const nextState = Object.assign({}, state);

            try {
                for (const value of Object.values(action.advantagesList)) {
                    nextState[value.id] = value.name;
                }
            } catch (e) {
                console.log("Error while implement advantage reducer ", e);
            }
            return nextState;

        }
        default:
            return state;
    }
}