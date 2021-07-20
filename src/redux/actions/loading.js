import * as types from "../constants/types";

export function startLoading() {
    return {
        type: types.app.LOADING
    }
}

export function endLoading() {
    return {
        type: types.app.LOADED
    }
}