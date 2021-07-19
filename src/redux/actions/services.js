import * as types from '../constants/types';
import Amplify, {API, graphqlOperation} from 'aws-amplify';
import {getService as getServiceAws, listServices as listServicesAws} from "../../graphql/queries";
import awsExports from "../../aws-exports";
Amplify.configure(awsExports);

export function getServiceById(serviceId) {
    return dispatch => {
        return API.graphql(graphqlOperation(getServiceAws, {id: serviceId}))
            .then(serviceData => serviceData.data.getService)
            .then(service => {
                dispatch({
                    type: types.services.GET,
                    service
                })
            })
            .catch(e => console.log("Error while do action getService: ", e));
    };
}

export function listServices() {
    return dispatch => {
        return API.graphql(graphqlOperation(listServicesAws))
            .then(servicesData => servicesData.data.listServices.items)
            .then(serviceList => {
                dispatch({
                    type: types.services.LIST,
                    serviceList,
                })
            })
            .catch(e => console.log("Error while do action listServices"));
    }
}

export function setServiceSearch(keyWord) {
    return {
        type: types.serviceSearch.SET,
        keyWord
    };
}