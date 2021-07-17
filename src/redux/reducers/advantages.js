import initialState from "../constants/initialState";
import * as types from "../constants/types";

export function advantages(state = initialState.advantages, action) {
    switch (action.type) {
        case types.advantages.GET: {
            const nextState = Object.assign({}, state);

            for (const value of Object.values(action.advantageList)) {
                nextState[value.id] = value.name;
            }
            return nextState;

        }
        default:
            return state;
    }
}