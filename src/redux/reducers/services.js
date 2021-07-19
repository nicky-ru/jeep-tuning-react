import initialState from "../constants/initialState";
import * as types from "../constants/types";

export function services(state = initialState.services, action) {
    switch (action.type) {
        case types.services.LIST: {
            const nextState = Object.assign({}, state);

            try {
                for (const value of Object.values(action.serviceList)) {
                    nextState[value.id] = {name: value.name, description: value.description, price: value.price, uzelID: value.uzelID};
                }
            } catch (e) {
                console.log("Error while implementing services reducer ", e);
            }

            return nextState;
        }
        default:
            return state;
    }
}

export function service(state = initialState.service, action) {
    switch (action.type) {
        case types.services.GET: {
            return {...state, name: action.service.name, description: action.service.description,
                price: action.service.price, uzelID: action.service.uzelID}

        }
        default:
            return state;
    }
}

export function serviceSearch(state = initialState.serviceSearch, action) {
    switch (action.type) {
        case types.serviceSearch.SET: {
            return {...state, keyWord: action.keyWord};
        }
        default:
            return state;
    }
}