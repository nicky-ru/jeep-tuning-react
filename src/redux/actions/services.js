import * as types from '../constants/types';

export function listServices(serviceList) {
    return {
        type: types.services.LIST,
        serviceList,
    }
}