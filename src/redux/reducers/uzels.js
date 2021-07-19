import initialState from "../constants/initialState";
import * as types from "../constants/types";

export function uzels(state = initialState.uzels, action) {
    switch (action.type) {
        case types.uzels.GET_LIST: {
            const nextState = Object.assign({}, state);

            try {
                for (const value of Object.values(action.uzelList)) {
                    nextState[value.id] = value.name;
                }
            } catch (e) {
                console.log("Error while implementing uzels reducer ", e);
            }

            return nextState;

        }
        default:
            return state;
    }
}

export function uzel(state = initialState.uzel, action) {
    switch (action.type) {
        case types.uzels.GET: {
            return {...state, name: action.name};
        }
        default:
            return state;
    }
}