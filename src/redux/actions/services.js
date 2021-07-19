import * as types from '../constants/types';
import Amplify, {API, graphqlOperation} from 'aws-amplify';
import {listServices as listServicesAws} from "../../graphql/queries";
import awsExports from "../../aws-exports";
Amplify.configure(awsExports);

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
    // return {
    //     type: types.services.LIST,
    //     serviceList,
    // }
}

// const fetchServices = async () => {
//     try {
//         const servicesData = await API.graphql(graphqlOperation(listServices));
//         const services = servicesData.data.listServices.items;
//         dispatch(listServicesFromStore(services));
//     } catch (e) {
//         console.log("Error while getting services: ", e);
//     }
// }