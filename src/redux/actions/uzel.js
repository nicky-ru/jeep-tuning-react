import * as types from '../constants/types';

export function getUzelList(uzelList) {
    return {
        type: types.uzels.GET_LIST,
        uzelList
    };
}