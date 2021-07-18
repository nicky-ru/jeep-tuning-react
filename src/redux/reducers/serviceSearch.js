import initialState from "../constants/initialState";
import * as types from "../constants/types";

export function serviceSearch(state = initialState.serviceSearch, action) {
    switch (action.type) {
        case types.serviceSearch.SET: {
            return {...state, keyWord: action.keyWord};
        }
        default:
            return state;
    }
}