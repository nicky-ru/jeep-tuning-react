import * as types from '../constants/types';

export function getUzelList(uzelList) {
    return {
        type: types.uzel.GET_LIST,
        uzelList
    };
}