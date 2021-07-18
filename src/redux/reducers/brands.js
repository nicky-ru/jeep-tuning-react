import initialState from "../constants/initialState";
import * as types from "../constants/types";

export function brands(state = initialState.brands, action) {
    switch (action.type) {
        case types.brands.LIST: {
            const nextState = Object.assign({}, state);

            try {
                for (const value of Object.values(action.brandList)) {
                    nextState[value.id] = {name: value.name, imgUrl: value.image};
                }
            } catch (e) {
                console.log("Error while implementing brands reducer", e);
            }

            return nextState;

        }
        default:
            return state;
    }
}