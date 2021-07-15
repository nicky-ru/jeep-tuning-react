import * as types from '../constants/types';

export function getAdvantages(advantageList) {
    return {
        type: types.advantages.GET,
        advantageList
    };
}