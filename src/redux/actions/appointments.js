import * as types from '../constants/types';

export function setAppointmentServiceKey(serviceKey) {
    return {
        type: types.appointment.SET_SERVICE_KEY,
        serviceKey,
    }
}

export function setAppointmentUzelKey(uzelKey) {
    return {
        type: types.appointment.SET_UZEL_KEY,
        uzelKey,
    }
}