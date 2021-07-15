import initialState from "../constants/initialState";
import * as types from "../constants/types";

export function advantages(state = initialState.advantages, action) {
    switch (action.type) {
        case types.advantages.GET: {
            return {...state.push(action.advantageList)};
        }
        default:
            return state;
    }
}