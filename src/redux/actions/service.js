import * as types from '../constants/types';

export function getService(service) {
    return {
        type: types.service.GET,
        service
    };
}