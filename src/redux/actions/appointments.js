import * as types from '../constants/types';

export function setAppointmentService(serviceKey) {
    return (dispatch, getState) => {
        const { services } = getState();
        const uzelKey = services[serviceKey].uzelID;
        dispatch({
            type: types.appointment.SET_SERVICE,
            serviceKey,
            uzelKey
        });
    }
}