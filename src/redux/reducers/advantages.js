import initialState from "../constants/initialState";
import * as types from "../constants/types";

export function advantages(state = initialState.advantages, action) {
    switch (action.type) {
        case types.advantages.GET: {
            const nextState = Object.assign({}, state);

            try {
                for (const value of Object.values(action.advantageList)) {
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