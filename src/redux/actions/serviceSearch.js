import * as types from '../constants/types';

export function setServiceSearch(keyWord) {
    return {
        type: types.serviceSearch.SET,
        keyWord
    };
}