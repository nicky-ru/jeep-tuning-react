import initialState from "../constants/initialState";
import * as types from "../constants/types";

export function uzels(state = initialState.uzels, action) {
    switch (action.type) {
        case types.uzel.GET_LIST: {
            const nextState = Object.assign({}, state);
            for (const [key, value] of Object.entries(action.uzelList)) {
                nextState[value.id] = value.name;
            }
            return nextState;

        }
        default:
            return state;
    }
}